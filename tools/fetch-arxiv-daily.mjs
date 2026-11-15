import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { assertSummary, createSummarizer, enrichPapers } from './lib/arxiv-summary.mjs';

const root = process.cwd();
const configPath = path.join(root, 'config', 'arxiv-daily.json');
const config = JSON.parse(await fs.readFile(configPath, 'utf8'));

function argValue(name) {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function clean(value = '') {
  return value.replace(/\s+/g, ' ').trim();
}

function decodeXml(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&amp;/g, '&');
}

function stripTags(value = '') {
  return clean(decodeXml(value).replace(/<[^>]+>/g, ' '));
}

function element(block, name) {
  const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? stripTags(match[1]) : '';
}

function attributes(value = '') {
  const result = {};
  for (const match of value.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)) {
    result[match[1]] = decodeXml(match[2]);
  }
  return result;
}

function links(block) {
  const result = {};
  for (const match of block.matchAll(/<link\b([^>]*)\/?>/gi)) {
    const attrs = attributes(match[1]);
    if (!attrs.href) continue;
    if (attrs.title === 'pdf' || attrs.type === 'application/pdf') result.pdf = attrs.href;
    if (attrs.rel === 'alternate' || !attrs.rel) result.abs ??= attrs.href;
  }
  return result;
}

function parseEntry(block) {
  const linkSet = links(block);
  const rawId = element(block, 'id');
  const idMatch = rawId.match(/arxiv\.org\/(?:abs|pdf)\/(.+?)(?:\.pdf)?$/i);
  const id = (idMatch?.[1] || rawId).replace(/v\d+$/, '');
  const authors = [...block.matchAll(/<author>[\s\S]*?<name>([\s\S]*?)<\/name>[\s\S]*?<\/author>/gi)]
    .map((match) => stripTags(match[1]));
  const categories = [
    ...[...block.matchAll(/<(?:arxiv:)?primary_category\b([^>]*)\/?\s*>/gi)].map((match) => attributes(match[1]).term),
    ...[...block.matchAll(/<category\b([^>]*)\/?\s*>/gi)].map((match) => attributes(match[1]).term)
  ].filter(Boolean);
  const announceType = element(block, 'arxiv:announce_type') || element(block, 'announce_type');
  const title = element(block, 'title');
  const summary = element(block, 'summary');
  const published = element(block, 'published');
  return {
    id,
    title,
    summary,
    authors,
    categories: [...new Set(categories)],
    announceType,
    published,
    absUrl: linkSet.abs || `https://arxiv.org/abs/${id}`,
    pdfUrl: linkSet.pdf || `https://arxiv.org/pdf/${id}`
  };
}

function parseFeed(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].map((match) => parseEntry(match[1]));
}

function dateInTimezone(value, timezone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(value).reduce((result, part) => {
    if (part.type !== 'literal') result[part.type] = part.value;
    return result;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function yesterday(timezone) {
  return dateInTimezone(new Date(Date.now() - 24 * 60 * 60 * 1000), timezone);
}

function timezoneOffsetMinutes(value, timezone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(value).reduce((result, part) => {
    if (part.type !== 'literal') result[part.type] = part.value;
    return result;
  }, {});
  const asUtc = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second));
  return Math.round((asUtc - value.getTime()) / 60_000);
}

function localMidnightToUtc(date, timezone) {
  const localWallClock = new Date(`${date}T00:00:00.000Z`);
  const offset = timezoneOffsetMinutes(localWallClock, timezone);
  return new Date(localWallClock.getTime() - offset * 60_000);
}

function addDays(date, days) {
  const value = new Date(`${date}T12:00:00.000Z`);
  value.setUTCDate(value.getUTCDate() + days);
  return value.toISOString().slice(0, 10);
}

function monthRange(month, timezone) {
  const [year, monthNumber] = month.split('-').map(Number);
  const nextMonth = new Date(Date.UTC(year, monthNumber, 1)).toISOString().slice(0, 10);
  return {
    kind: 'month',
    label: month,
    startDate: `${month}-01`,
    endDateExclusive: nextMonth,
    timezone
  };
}

function arxivTimestamp(value) {
  return value.toISOString().replace(/\D/g, '').slice(0, 12);
}

function normalize(value) {
  return clean(value).toLocaleLowerCase('en-US');
}

async function fetchText(url) {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30_000);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: { 'user-agent': 'ZioBlog arXiv daily digest/1.0' }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 3000));
    } finally {
      clearTimeout(timeout);
    }
  }
  throw lastError;
}

async function retrievePapers(range) {
  const categories = config.categories ?? [];
  if (!categories.length) throw new Error('config.categories must contain at least one arXiv category');
  const papers = [];
  const errors = [];
  for (const category of categories) {
    const url = `${String(config.feedBase).replace(/\/$/, '')}/${encodeURIComponent(category)}`;
    try {
      papers.push(...parseFeed(await fetchText(url)));
    } catch (error) {
      errors.push(`${category}: ${error.message}`);
    }
  }
  if (!papers.length && errors.length === categories.length) {
    throw new Error(`All arXiv feeds failed: ${errors.join('; ')}`);
  }
  if (errors.length) console.warn(`Some arXiv feeds failed: ${errors.join('; ')}`);
  const timezone = range.timezone || config.timezone || 'Asia/Shanghai';
  const hasTargetDate = papers.some((paper) => {
    if (!paper.published) return false;
    const localDate = dateInTimezone(new Date(paper.published), timezone);
    return localDate >= range.startDate && localDate < range.endDateExclusive;
  });
  if (range.kind === 'month' || !hasTargetDate) {
    const startUtc = localMidnightToUtc(range.startDate, timezone);
    const endUtc = new Date(localMidnightToUtc(range.endDateExclusive, timezone).getTime() - 60_000);
    try {
      const apiPapers = [];
      const pageSize = 1000;
      const queryTerms = range.kind === 'month'
        ? categories.map((category) => `cat:${category}`)
        : [`(${categories.map((category) => `cat:${category}`).join(' OR ')})`];
      for (const queryTerm of queryTerms) {
        const query = `${queryTerm} AND submittedDate:[${arxivTimestamp(startUtc)} TO ${arxivTimestamp(endUtc)}]`;
        let start = 0;
        let total = Infinity;
        do {
          const params = new URLSearchParams({
            search_query: query,
            start: String(start),
            max_results: String(pageSize),
            sortBy: 'submittedDate',
            sortOrder: 'descending'
          });
          const xml = await fetchText(`https://export.arxiv.org/api/query?${params}`);
          const page = parseFeed(xml);
          apiPapers.push(...page);
          const totalMatch = xml.match(/<opensearch:totalResults>(\d+)<\/opensearch:totalResults>/i);
          total = totalMatch ? Number(totalMatch[1]) : start + page.length;
          start += page.length;
          if (!page.length || start >= total) break;
          await new Promise((resolve) => setTimeout(resolve, 3000));
        } while (start < total);
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
      papers.push(...apiPapers);
      console.log(`Used arXiv API ${range.kind === 'month' ? 'backfill' : 'fallback'} for ${range.startDate}${range.kind === 'month' ? ` to ${range.endDateExclusive}` : ''}; received ${apiPapers.length} entries.`);
    } catch (error) {
      console.warn(`arXiv API ${range.kind === 'month' ? 'backfill' : 'fallback'} failed for ${range.startDate}: ${error.message}`);
    }
  }
  return papers;
}

function scorePaper(paper) {
  const haystack = normalize(`${paper.title} ${paper.summary} ${paper.categories.join(' ')}`);
  const keywords = (config.keywords ?? []).map(normalize).filter(Boolean);
  const excluded = (config.excludeKeywords ?? []).map(normalize).filter(Boolean);
  if (excluded.some((keyword) => haystack.includes(keyword))) return null;
  const matchedKeywords = keywords.filter((keyword) => haystack.includes(keyword));
  const matchedGroups = (config.interestGroups ?? []).flatMap((group) => {
    const clauses = group.allOf ?? [];
    const matchedTerms = clauses.map((clause) => {
      const alternatives = (Array.isArray(clause) ? clause : [clause]).map(normalize).filter(Boolean);
      return alternatives.find((term) => haystack.includes(term));
    });
    return matchedTerms.length && matchedTerms.every(Boolean)
      ? [{ name: group.name || '未命名兴趣组', terms: matchedTerms }]
      : [];
  });
  if ((keywords.length || config.interestGroups?.length) && !matchedKeywords.length && !matchedGroups.length) return null;
  return {
    ...paper,
    score: matchedKeywords.length + matchedGroups.length * 3,
    matchedKeywords,
    matchedGroups
  };
}

function markdownText(value) {
  return clean(value).replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' ');
}

function markdownHeading(value) {
  return markdownText(value).replace(/^#+/g, '\\#').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function buildPost(period, papers) {
  const isMonthly = period.kind === 'month';
  const title = isMonthly ? `arXiv 月度论文汇总（${period.label}）` : `arXiv 每日论文速递（${period.startDate}）`;
  const endDate = isMonthly ? addDays(period.endDateExclusive, -1) : period.startDate;
  const description = isMonthly ? `按配置的兴趣方向筛选 ${period.label} 月 arXiv 论文，并生成中文速读。` : '按配置的 arXiv 分类与关键词筛选的每日论文摘要。';
  const lines = [
    '---',
    `title: ${yamlQuote(title)}`,
    `date: ${isMonthly ? period.endDateExclusive : period.startDate} 09:00:00`,
    'categories:',
    '  - 论文速递',
    'tags:',
    '  - arXiv',
    `description: ${yamlQuote(description)}`,
    '---',
    '',
    `> 本文由 GitHub Actions 自动生成，收录 ${isMonthly ? `${period.startDate} 至 ${endDate}` : `${period.startDate}`} 发布的 arXiv 论文。论文内容及版权归原作者与 arXiv 所有。`,
    '',
    `共筛选出 **${papers.length}** 篇论文。`,
    ''
  ];
  papers.forEach((paper, index) => {
    const published = paper.published ? new Date(paper.published).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC') : '未知';
    const authors = paper.authors.length ? paper.authors.join('、') : '作者信息未提供';
    const categories = paper.categories.length ? paper.categories.join(', ') : '未标注';
    const quickRead = assertSummary(paper.llmSummary, paper);
    lines.push(`## ${index + 1}. ${markdownHeading(quickRead.titleZh)}`);
    lines.push('');
    lines.push(`- **英文标题**：${markdownText(paper.title)}`);
    lines.push(`- **作者**：${markdownText(authors)}`);
    lines.push(`- **分类**：${categories}`);
    lines.push(`- **发布时间**：${published}`);
    lines.push(`- **链接**：[原文摘要](${paper.absUrl}) · [PDF](${paper.pdfUrl})`);
    if (paper.matchedKeywords?.length) lines.push(`- **匹配关键词**：${paper.matchedKeywords.join('、')}`);
    if (paper.matchedGroups?.length) lines.push(`- **匹配方向**：${paper.matchedGroups.map((group) => group.name).join('、')}`);
    lines.push('');
    lines.push('### 快速理解');
    lines.push('');
    lines.push(`- **研究背景**：${quickRead.background}`);
    lines.push(`- **核心创新**：${quickRead.innovation}`);
    lines.push(`- **方法概览**：${quickRead.method}`);
    lines.push(`- **结果与结论**：${quickRead.result}`);
    lines.push(`- **一句话 takeaway**：${quickRead.takeaway}`);
    lines.push('');
    lines.push(`**中文摘要**：${quickRead.abstractZh}`);
    lines.push('');
  });
  return `${lines.join('\n')}\n`;
}

export { parseFeed, fetchText, buildPost };

async function main() {
  const timezone = config.timezone || 'Asia/Shanghai';
  const requestedMonth = argValue('--month') || process.env.ARXIV_DAILY_MONTH || '';
  const requestedDate = argValue('--date') || process.env.ARXIV_DAILY_DATE || yesterday(timezone);
  let period;
  if (requestedMonth) {
    if (!/^\d{4}-\d{2}$/.test(requestedMonth)) throw new Error(`Invalid month: ${requestedMonth}`);
    period = monthRange(requestedMonth, timezone);
  } else {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(requestedDate)) throw new Error(`Invalid date: ${requestedDate}`);
    period = { kind: 'day', label: requestedDate, startDate: requestedDate, endDateExclusive: addDays(requestedDate, 1), timezone };
  }
  const maxPapers = Number(argValue('--max') || process.env.ARXIV_DAILY_MAX || (period.kind === 'month' ? config.monthlyMaxPapers : config.maxPapers) || 12);
  const llmMaxPapers = Number(argValue('--llm-max') || process.env.ARXIV_DAILY_LLM_MAX || config.llmMaxPapers || maxPapers);
  const force = process.argv.includes('--force') || process.env.ARXIV_DAILY_FORCE === 'true';
  const rawPapers = await retrievePapers(period);
  const seen = new Set();
  const papers = rawPapers
    .filter((paper) => {
      const key = paper.id || paper.absUrl;
      if (seen.has(key)) return false;
      seen.add(key);
      if (!paper.published) return false;
      const localDate = dateInTimezone(new Date(paper.published), timezone);
      if (localDate < period.startDate || localDate >= period.endDateExclusive) return false;
      if (!config.includeCrossList && paper.announceType && paper.announceType !== 'new') return false;
      return true;
    })
    .map(scorePaper)
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || new Date(right.published) - new Date(left.published) || left.title.localeCompare(right.title))
    .slice(0, maxPapers);

  if (!papers.length) {
    console.log(`No matching arXiv papers found for ${period.label}.`);
    process.exit(0);
  }

  const outputName = period.kind === 'month' ? `arxiv-monthly-${period.label}.md` : `arxiv-daily-${period.startDate}.md`;
  const outputPath = path.join(root, 'source', '_posts', outputName);
  try {
    await fs.access(outputPath);
    if (!force) {
      console.log(`Post already exists: ${path.relative(root, outputPath)}`);
      process.exit(0);
    }
    console.log(`Force regenerating: ${path.relative(root, outputPath)}`);
  } catch {
    // The daily post does not exist yet.
  }

  const enrichedPapers = await enrichPapers(papers, createSummarizer(config), { limit: llmMaxPapers });
  const content = buildPost(period, enrichedPapers);
  if (process.argv.includes('--dry-run')) {
    console.log(content);
  } else {
    await fs.writeFile(outputPath, content, 'utf8');
    console.log(`Wrote ${path.relative(root, outputPath)} with ${papers.length} papers.`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}

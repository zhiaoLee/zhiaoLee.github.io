import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

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

async function retrievePapers(targetDate) {
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
  const timezone = config.timezone || 'Asia/Shanghai';
  const hasTargetDate = papers.some((paper) => paper.published && dateInTimezone(new Date(paper.published), timezone) === targetDate);
  if (!hasTargetDate) {
    const startUtc = localMidnightToUtc(targetDate, timezone);
    const endUtc = new Date(localMidnightToUtc(addDays(targetDate, 1), timezone).getTime() - 60_000);
    const query = `(${categories.map((category) => `cat:${category}`).join(' OR ')}) AND submittedDate:[${arxivTimestamp(startUtc)} TO ${arxivTimestamp(endUtc)}]`;
    const params = new URLSearchParams({
      search_query: query,
      start: '0',
      max_results: '1000',
      sortBy: 'submittedDate',
      sortOrder: 'descending'
    });
    try {
      const apiPapers = parseFeed(await fetchText(`https://export.arxiv.org/api/query?${params}`));
      papers.push(...apiPapers);
      console.log(`Used arXiv API fallback for ${targetDate}; received ${apiPapers.length} entries.`);
    } catch (error) {
      console.warn(`arXiv API fallback failed for ${targetDate}: ${error.message}`);
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

function parseJsonObject(value) {
  const text = String(value || '').replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  try {
    return JSON.parse(text);
  } catch {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(text.slice(start, end + 1));
      } catch {
        return null;
      }
    }
    return null;
  }
}

function summaryFields(value) {
  if (!value || typeof value !== 'object') return null;
  const fields = {
    background: clean(value.background),
    innovation: clean(value.innovation),
    method: clean(value.method),
    result: clean(value.result),
    takeaway: clean(value.takeaway)
  };
  return Object.values(fields).some(Boolean) ? fields : null;
}

async function summarizeWithKimi(paper) {
  const llm = config.llm || {};
  const token = (process.env.KIMI_API_KEY || '').replace(/^Bearer\s+/i, '').trim();
  if (llm.enabled === false || !token) return null;
  const response = await fetch(process.env.KIMI_API_URL || llm.apiUrl, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: process.env.KIMI_MODEL || llm.model,
      temperature: 1,
      max_tokens: Number(process.env.KIMI_MAX_TOKENS || llm.maxTokens || 900),
      messages: [
        {
          role: 'system',
          content: '你是学术论文速读助手。请用简体中文输出严格 JSON，不要 Markdown 代码块。字段必须是 background、innovation、method、result、takeaway；每个字段用 1-3 句清晰说明。如果摘要没有给出实验结果，请明确写“摘要未提供明确实验结果”，不要编造。'
        },
        {
          role: 'user',
          content: JSON.stringify({
            title: paper.title,
            authors: paper.authors,
            categories: paper.categories,
            abstract: paper.summary
          })
        }
      ]
    })
  });
  if (!response.ok) {
    let detail = '';
    try {
      const error = await response.json();
      detail = error?.error?.message || error?.message || '';
    } catch {
      // Keep the status-only error when the provider does not return JSON.
    }
    throw new Error(`Kimi HTTP ${response.status}${detail ? `: ${clean(detail).slice(0, 240)}` : ''}`);
  }
  const payload = await response.json();
  return summaryFields(parseJsonObject(payload.choices?.[0]?.message?.content));
}

async function enrichPapers(papers) {
  const token = (process.env.KIMI_API_KEY || '').trim();
  if (config.llm?.enabled === false || !token) {
    if (config.llm?.enabled !== false) console.warn('Kimi summary skipped: KIMI_API_KEY is not configured.');
    return papers;
  }
  const enriched = [];
  for (const paper of papers) {
    try {
      const summary = await summarizeWithKimi(paper);
      enriched.push({ ...paper, llmSummary: summary });
    } catch (error) {
      console.warn(`Kimi summary failed for ${paper.id}: ${error.message}`);
      enriched.push({ ...paper, llmSummary: null });
    }
  }
  return enriched;
}

function buildPost(date, papers) {
  const title = `arXiv 每日论文速递（${date}）`;
  const lines = [
    '---',
    `title: ${yamlQuote(title)}`,
    `date: ${date} 09:00:00`,
    'categories:',
    '  - 论文速递',
    'tags:',
    '  - arXiv',
    'description: "按配置的 arXiv 分类与关键词筛选的每日论文摘要。"',
    '---',
    '',
    `> 本文由 GitHub Actions 自动生成，收录 ${date} 发布的 arXiv 论文。论文内容及版权归原作者与 arXiv 所有。`,
    '',
    `共筛选出 **${papers.length}** 篇论文。`,
    ''
  ];
  papers.forEach((paper, index) => {
    const published = paper.published ? new Date(paper.published).toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, ' UTC') : '未知';
    const authors = paper.authors.length ? paper.authors.join('、') : '作者信息未提供';
    const categories = paper.categories.length ? paper.categories.join(', ') : '未标注';
    lines.push(`## ${index + 1}. ${markdownHeading(paper.title)}`);
    lines.push('');
    lines.push(`- **作者**：${markdownText(authors)}`);
    lines.push(`- **分类**：${categories}`);
    lines.push(`- **发布时间**：${published}`);
    lines.push(`- **链接**：[摘要](${paper.absUrl}) · [PDF](${paper.pdfUrl})`);
    if (paper.matchedKeywords?.length) lines.push(`- **匹配关键词**：${paper.matchedKeywords.join('、')}`);
    if (paper.matchedGroups?.length) lines.push(`- **匹配方向**：${paper.matchedGroups.map((group) => group.name).join('、')}`);
    lines.push('');
    if (paper.llmSummary) {
      lines.push('### 快速理解');
      lines.push('');
      lines.push(`- **研究背景**：${paper.llmSummary.background || '摘要未说明。'}`);
      lines.push(`- **核心创新**：${paper.llmSummary.innovation || '摘要未说明。'}`);
      lines.push(`- **方法概览**：${paper.llmSummary.method || '摘要未说明。'}`);
      lines.push(`- **结果与结论**：${paper.llmSummary.result || '摘要未提供明确实验结果。'}`);
      lines.push(`- **一句话 takeaway**：${paper.llmSummary.takeaway || '建议阅读全文。'}`);
      lines.push('');
    }
    lines.push(`**摘要**：${markdownText(paper.summary) || '暂无摘要。'}`);
    lines.push('');
  });
  return `${lines.join('\n')}\n`;
}

const date = argValue('--date') || process.env.ARXIV_DAILY_DATE || yesterday(config.timezone || 'Asia/Shanghai');
if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`Invalid date: ${date}`);
const maxPapers = Number(argValue('--max') || process.env.ARXIV_DAILY_MAX || config.maxPapers || 12);
const force = process.argv.includes('--force') || process.env.ARXIV_DAILY_FORCE === 'true';
const rawPapers = await retrievePapers(date);
const seen = new Set();
const papers = rawPapers
  .filter((paper) => {
    const key = paper.id || paper.absUrl;
    if (seen.has(key)) return false;
    seen.add(key);
    if (!paper.published || dateInTimezone(new Date(paper.published), config.timezone || 'Asia/Shanghai') !== date) return false;
    if (!config.includeCrossList && paper.announceType && paper.announceType !== 'new') return false;
    return true;
  })
  .map(scorePaper)
  .filter(Boolean)
  .sort((left, right) => right.score - left.score || new Date(right.published) - new Date(left.published) || left.title.localeCompare(right.title))
  .slice(0, maxPapers);

if (!papers.length) {
  console.log(`No matching arXiv papers found for ${date}.`);
  process.exit(0);
}

const outputPath = path.join(root, 'source', '_posts', `arxiv-daily-${date}.md`);
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

const enrichedPapers = await enrichPapers(papers);
const content = buildPost(date, enrichedPapers);
if (process.argv.includes('--dry-run')) {
  console.log(content);
} else {
  await fs.writeFile(outputPath, content, 'utf8');
  console.log(`Wrote ${path.relative(root, outputPath)} with ${papers.length} papers.`);
}

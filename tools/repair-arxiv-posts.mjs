import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFeed, fetchText } from './fetch-arxiv-daily.mjs';
import { parsePost, replaceBrief, auditPosts } from './lib/arxiv-posts.mjs';
import { createSummarizer, enrichPapers } from './lib/arxiv-summary.mjs';

export async function repairPosts(posts, { getMetadata, summarize, log = console }) {
  const parsed = posts.map((post) => ({ ...post, parsed: parsePost(post.content) }));
  const invalid = parsed.flatMap((post) => post.parsed.sections.filter((section) => section.issues.length));
  if (!invalid.length) return posts;
  for (const section of invalid) {
    if (!section.paper.id) throw new Error(`Cannot repair section ${section.index}: arXiv ID missing`);
  }
  const ids = [...new Set(invalid.map((section) => section.paper.id))];
  const metadata = await getMetadata(ids);
  const papers = ids.map((id) => {
    const section = invalid.find((item) => item.paper.id === id);
    const original = metadata.get(id);
    if (!original?.summary) throw new Error(`Original arXiv metadata missing for ${id}; existing posts will be preserved.`);
    return { ...original, id, title: section.paper.title };
  });
  const enriched = await enrichPapers(papers, summarize, { log });
  const briefs = new Map(enriched.map((paper) => [paper.id, paper.llmSummary]));
  const repaired = parsed.map((post) => ({
    name: post.name,
    content: post.parsed.header + post.parsed.sections.map((section) => section.issues.length
      ? replaceBrief(section, briefs.get(section.paper.id)) : section.text).join('')
  }));
  const issues = auditPosts(repaired);
  if (issues.length) throw new Error(`Repaired posts still contain ${issues.length} incomplete briefs; refusing to write.`);
  return repaired;
}

async function getArxivMetadata(ids) {
  const result = new Map();
  for (let start = 0; start < ids.length; start += 10) {
    if (start) await new Promise((resolve) => setTimeout(resolve, 3000));
    const params = new URLSearchParams({ id_list: ids.slice(start, start + 10).join(','), max_results: '10' });
    for (const paper of parseFeed(await fetchText(`https://export.arxiv.org/api/query?${params}`))) {
      result.set(paper.id, paper);
    }
    console.log(`Original arXiv abstracts retrieved: ${result.size}/${ids.length}`);
  }
  return result;
}

async function main() {
  const directory = path.join(process.cwd(), 'source', '_posts');
  const names = (await fs.readdir(directory)).filter((name) => /^arxiv-(daily|monthly)-.*\.md$/.test(name)).sort();
  const posts = await Promise.all(names.map(async (name) => ({ name, content: await fs.readFile(path.join(directory, name), 'utf8') })));
  const issues = auditPosts(posts);
  const paperCount = posts.reduce((count, post) => count + parsePost(post.content).sections.length, 0);
  console.log(`Audited ${posts.length} posts / ${paperCount} papers; incomplete Chinese briefs: ${issues.length}.`);
  for (const issue of issues) console.log(`${issue.name} ${issue.id}: ${issue.issues.join('; ')}`);
  if (process.argv.includes('--check')) {
    if (issues.length) process.exitCode = 1;
    return;
  }
  if (!issues.length) return;
  const config = JSON.parse(await fs.readFile(path.join(process.cwd(), 'config', 'arxiv-daily.json'), 'utf8'));
  const repaired = await repairPosts(posts, { getMetadata: getArxivMetadata, summarize: createSummarizer(config) });
  // All papers must pass before any existing article is modified.
  for (const post of repaired) {
    if (post.content === posts.find((old) => old.name === post.name).content) continue;
    await fs.writeFile(path.join(directory, post.name), post.content, 'utf8');
    console.log(`Repaired ${post.name}`);
  }
  console.log(`All ${paperCount} papers have validated Chinese titles, abstracts and quick reads.`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

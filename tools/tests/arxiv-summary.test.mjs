import test from 'node:test';
import assert from 'node:assert/strict';
import { summaryFields, summaryIssues, createSummarizer, enrichPapers, summarizeWithProvider } from '../lib/arxiv-summary.mjs';
import { parsePost, auditPosts } from '../lib/arxiv-posts.mjs';
import { buildPost } from '../fetch-arxiv-daily.mjs';
import { repairPosts } from '../repair-arxiv-posts.mjs';

const paper = { id: '2611.11470', title: 'GOPR-CAD: CAD Generation', summary: 'CAD generation needs reliable geometric planning and verification.' };
const brief = {
  title_zh: 'GOPR-CAD：基于操作图的渐进式推理与计算机辅助设计生成',
  abstract_zh: '从文本描述生成可编辑的计算机辅助设计模型需要可靠的几何规划与验证。本文研究如何将建模操作组织为图结构，以支持逐步生成、检验和修正几何模型，并讨论该方法在复杂建模任务中的适用范围。',
  background: '从文本描述生成可编辑模型需要可靠的几何规划与验证。',
  innovation: '将建模操作组织为图结构，以显式表示操作之间的依赖。',
  method: '逐步生成并验证几何操作，利用操作之间的依赖修正模型。',
  result: '摘要未提供明确实验结果。',
  takeaway: '通过操作之间的显式依赖提高计算机辅助设计生成的可检查性。'
};
const normalized = summaryFields(brief);
const config = { llm: { apiUrl: 'https://kimi.invalid', model: 'kimi', maxTokens: 8192,
  fallback: { apiUrl: 'https://silicon.invalid', model: 'qwen', maxTokens: 4096 } } };
const env = { KIMI_API_KEY: 'test-kimi', SILICONFLOW_API_KEY: 'test-silicon' };
const quiet = { info() {}, warn() {} };
const jsonResponse = (value = brief, finish_reason = 'stop') => ({ ok: true,
  json: async () => ({ choices: [{ finish_reason, message: { content: JSON.stringify(value) } }] }) });
const options = (fetchImpl) => ({ env, fetchImpl, cacheDir: false, wait: async () => {}, log: quiet });

test('rejects placeholder, English-only, incomplete, and non-string summaries', () => {
  assert.equal(summaryIssues(normalized, paper).length, 0);
  for (const change of [
    { titleZh: '该研究论文' }, { titleZh: 'GOPR-CAD: CAD Generation' },
    { abstractZh: '该论文围绕目标问题展开研究，具体背景、方法和实验结果请参考原文。' },
    { abstractZh: paper.summary }, { innovation: '' }, { background: { text: '研究背景' } }
  ]) assert.ok(summaryIssues({ ...normalized, ...change }, paper).length);
  assert.ok(summaryIssues(summaryFields({ title_zh: brief.title_zh }), paper).length);
});

test('truncated or partial Kimi output retries then switches to validated SiliconFlow output', async () => {
  for (const primaryResponse of [jsonResponse(brief, 'length'), jsonResponse({ title_zh: brief.title_zh })]) {
    const requests = [];
    const summarize = createSummarizer(config, options(async (url, request) => {
      requests.push({ url, body: JSON.parse(request.body) });
      return url.includes('kimi') ? primaryResponse : jsonResponse();
    }));
    assert.deepEqual(await summarize(paper), normalized);
    assert.equal(requests.length, 3);
    assert.equal(requests[1].body.max_tokens, 16384);
    assert.equal(requests[2].body.enable_thinking, false);
  }
});

test('authentication failure switches immediately and disables broken provider for subsequent papers', async () => {
  let primaryCalls = 0;
  const summarize = createSummarizer(config, options(async (url) => {
    if (url.includes('kimi')) { primaryCalls++; return { ok: false, status: 401 }; }
    return jsonResponse();
  }));
  await summarize(paper);
  await summarize({ ...paper, id: 'second' });
  assert.equal(primaryCalls, 1);
});

test('all providers failing, missing keys, or inadequate limits never produce a fallback card', async () => {
  const summarize = createSummarizer(config, options(async () => jsonResponse({})));
  await assert.rejects(summarize(paper), /no placeholder/);
  await assert.rejects(createSummarizer(config, { ...options(), env: {} })(paper), /No LLM API key/);
  let called = false;
  await assert.rejects(enrichPapers([paper], async () => { called = true; }, { limit: 0, log: quiet }), /must cover all/);
  assert.equal(called, false);
});

test('provider requests have an abort deadline', async () => {
  await assert.rejects(summarizeWithProvider(paper, { apiUrl: 'https://test.invalid', timeoutMs: 10, maxTokens: 4096 }, {
    fetchImpl: async (_, { signal }) => {
      assert.ok(signal instanceof AbortSignal);
      throw new Error('simulated timeout');
    }
  }), /timeout/);
});

const brokenSection = `## 1. 该研究论文\n\n- **英文标题**：${paper.title}\n- **发布时间**：2026-11-08 16:07:56 UTC\n- **链接**：[原文摘要](https://arxiv.org/abs/${paper.id}v1) · [PDF](https://arxiv.org/pdf/${paper.id}v1)\n\n### 快速理解\n\n**中文摘要**：该论文围绕目标问题展开研究，具体背景、方法和实验结果请参考原文。\n\n`;
const legacySection = `## 1. ${paper.title}\n\n- **链接**：[摘要](https://arxiv.org/abs/${paper.id}v1)\n\n### 快速理解\n\n**摘要**：${paper.summary}\n\n`;

test('repairs both placeholder cards and legacy English cards, preserving date, links, and ordering', async () => {
  for (const section of [brokenSection, legacySection]) {
    const posts = [{ name: 'arxiv-daily-test.md', content: '---\ndate: 2026-11-09 09:00:00\n---\n\n' + section }];
    const fixed = await repairPosts(posts, {
      getMetadata: async () => new Map([[paper.id, paper]]), summarize: async () => normalized, log: quiet
    });
    assert.equal(auditPosts(fixed).length, 0);
    assert.ok(fixed[0].content.startsWith('---\ndate: 2026-11-09 09:00:00\n---'));
    assert.ok(fixed[0].content.includes(`- **英文标题**：${paper.title}`));
    assert.ok(fixed[0].content.includes(`/abs/${paper.id}v1)`));
    assert.equal(parsePost(fixed[0].content).sections.length, 1);
  }
});

test('repair preserves valid sections byte for byte and leaves all originals untouched if generation fails', async () => {
  const fixed = await repairPosts([{ name: 'test.md', content: brokenSection }], {
    getMetadata: async () => new Map([[paper.id, paper]]), summarize: async () => normalized, log: quiet
  });
  const posts = [{ name: 'test.md', content: fixed[0].content + brokenSection.replace('## 1.', '## 2.') }];
  const result = await repairPosts(posts, {
    getMetadata: async () => new Map([[paper.id, paper]]), summarize: async () => normalized, log: quiet
  });
  assert.ok(result[0].content.startsWith(fixed[0].content));
  const before = JSON.stringify(posts);
  await assert.rejects(repairPosts(posts, {
    getMetadata: async () => new Map([[paper.id, paper]]), summarize: async () => { throw new Error('unavailable'); }, log: quiet
  }), /Refusing to write digest/);
  assert.equal(JSON.stringify(posts), before);
});

test('new digests reject incomplete content and render validated Chinese fields', () => {
  const period = { kind: 'day', label: '2026-11-09', startDate: '2026-11-09' };
  const entry = { ...paper, authors: [], categories: [], absUrl: 'https://arxiv.org/abs/' + paper.id, pdfUrl: 'https://arxiv.org/pdf/' + paper.id };
  assert.throws(() => buildPost(period, [entry]), /Invalid Chinese brief/);
  const content = buildPost(period, [{ ...entry, llmSummary: normalized }]);
  assert.equal(auditPosts([{ name: 'new.md', content }]).length, 0);
  assert.ok(content.includes('**中文摘要**：' + normalized.abstractZh));
});

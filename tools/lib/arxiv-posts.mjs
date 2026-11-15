import { summaryFields, summaryIssues, assertSummary } from './arxiv-summary.mjs';

const field = (text, label) => text.match(new RegExp(`^[-*]? ?\\*\\*${label}\\*\\*[：:]\\s*(.*)$`, 'm'))?.[1]?.trim() || '';

export function parsePost(content) {
  const matches = [...content.matchAll(/^## (\d+)\. (.+)$/gm)];
  return {
    header: matches.length ? content.slice(0, matches[0].index) : content,
    sections: matches.map((match, index) => {
      const text = content.slice(match.index, matches[index + 1]?.index ?? content.length);
      const absUrl = text.match(/\]\((https?:\/\/arxiv\.org\/abs\/[^)]+)\)/)?.[1] || '';
      const id = absUrl.split('/abs/')[1]?.replace(/v\d+$/, '') || '';
      const englishTitle = field(text, '英文标题');
      const llmSummary = summaryFields({
        titleZh: match[2], abstractZh: field(text, '中文摘要'),
        background: field(text, '研究背景'), innovation: field(text, '核心创新'),
        method: field(text, '方法概览'), result: field(text, '结果与结论'), takeaway: field(text, '一句话 takeaway')
      });
      const paper = {
        id, absUrl, title: englishTitle || match[2], summary: field(text, '摘要'), llmSummary
      };
      return { index: Number(match[1]), text, paper, issues: summaryIssues(llmSummary, paper) };
    })
  };
}

export function replaceBrief(section, summary) {
  assertSummary(summary, section.paper);
  const heading = summary.titleZh.replace(/[\r\n]/g, ' ').replace(/\[/g, '\\[').replace(/\]/g, '\\]');
  let metadata = section.text.split(/^### 快速理解\s*$/m)[0];
  metadata = metadata.replace(/^## \d+\. .*$/m, () => `## ${section.index}. ${heading}`);
  if (!field(metadata, '英文标题')) {
    metadata = metadata.replace(/^(## .*\r?\n)/, (line) => `${line}\n- **英文标题**：${section.paper.title}\n`);
  }
  return `${metadata.trimEnd()}\n\n### 快速理解\n\n` +
    `- **研究背景**：${summary.background}\n` +
    `- **核心创新**：${summary.innovation}\n` +
    `- **方法概览**：${summary.method}\n` +
    `- **结果与结论**：${summary.result}\n` +
    `- **一句话 takeaway**：${summary.takeaway}\n\n` +
    `**中文摘要**：${summary.abstractZh}\n\n`;
}

export function auditPosts(posts) {
  return posts.flatMap(({ name, content }) => parsePost(content).sections.flatMap((section) =>
    section.issues.length ? [{ name, id: section.paper.id, issues: section.issues }] : []));
}

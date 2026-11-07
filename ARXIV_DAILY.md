# arXiv 每日论文速递

该功能由 `.github/workflows/arxiv-daily.yml` 定时运行，默认每天北京时间 09:30 执行。脚本读取 arXiv Atom feed，筛选前一天在配置分类中发布的论文，生成 `source/_posts/arxiv-daily-YYYY-MM-DD.md`，提交到 `main`，然后在同一工作流中构建并部署 GitHub Pages。

兴趣规则位于 [`config/arxiv-daily.json`](config/arxiv-daily.json)：

- `categories`：arXiv 分类，例如 `cs.AI`、`cs.LG`、`cs.CV`、`cs.CL`；
- `interestGroups`：组合兴趣组。每个 `allOf` 子数组表示一个“至少命中一个词”的条件，数组之间是 AND，不同兴趣组之间是 OR；
- `keywords`：标题、摘要或分类中至少命中一个才收录；为空表示收录分类中的全部论文；
- `excludeKeywords`：命中任一词就排除；
- `maxPapers`：每日最多收录数量；
- `includeCrossList`：是否包含 cross-list 论文。

当前默认兴趣组是“LLM + 知识图谱”“LLM + CAD”“LLM + Agent”，默认分类覆盖 AI、语言、机器学习、视觉、计算机图形学和机器人学。具体研究方向变化后，可以直接编辑 `config/arxiv-daily.json`。

本实现使用分类和组合兴趣组进行轻量筛选，不需要 Zotero 或额外 API Key。`zotero-arxiv-daily` 的 Zotero 相似度排序和 PDF 全文提取可以作为后续增强；当前的 LLM 摘要层已经独立接入 Kimi。

当前已经接入可选的 Kimi 摘要层。为了生成“研究背景、核心创新、方法概览、结果与结论、一句话 takeaway”，请在 GitHub 仓库的 Settings → Secrets and variables → Actions → Secrets 中新增 `KIMI_API_KEY`，值为你的 Kimi Bearer Token（可带或不带 `Bearer ` 前缀）。K2.8 Preview 在 Coding API 中对应的 Model ID 是 `kimi-for-coding`，接口默认使用你提供的 `https://api.kimi.com/coding/v1/chat/completions`；如需调整，可设置仓库变量 `KIMI_API_URL` 和 `KIMI_MODEL`。不要把 Key 写入 `config/arxiv-daily.json` 或提交到 Git。

本地测试：

```bash
npm run arxiv:daily -- --date 2026-11-06 --max 3 --dry-run
```

GitHub Actions 页面可以手动触发工作流，并填写 `date` 重跑指定日期。

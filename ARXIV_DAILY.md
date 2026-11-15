# arXiv 每日论文速递

该功能由 `.github/workflows/arxiv-daily.yml` 定时运行，默认每天北京时间 09:30 执行。脚本读取 arXiv Atom feed，筛选前一天在配置分类中发布的论文，生成 `source/_posts/arxiv-daily-YYYY-MM-DD.md`，提交到 `main`，然后在同一工作流中构建并部署 GitHub Pages。

兴趣规则位于 [`config/arxiv-daily.json`](config/arxiv-daily.json)：

- `categories`：arXiv 分类，当前覆盖 AI、语言、机器学习、视觉、图形学、机器人和人机交互；
- `interestGroups`：组合兴趣组。每个 `allOf` 子数组表示一个“至少命中一个词”的条件，数组之间是 AND，不同兴趣组之间是 OR；
- `keywords`：标题、摘要或分类中至少命中一个才收录；为空表示收录分类中的全部论文；
- `excludeKeywords`：命中任一词就排除；
- `maxPapers`：每日最多收录数量；
- `includeCrossList`：是否包含 cross-list 论文。

当前默认兴趣组是“LLM + 知识图谱”“LLM + CAD”“LLM + Agent”，默认分类覆盖 AI、语言、机器学习、视觉、计算机图形学和机器人学。具体研究方向变化后，可以直接编辑 `config/arxiv-daily.json`。

当前还额外覆盖“AI + CAD”“LLM + BREP”“AI + BREP”“LLM + CAD 二维图纸”“LLM + CAD 三维模型”和“LLM 技术报告”，每日上限提高到 20 篇。每个兴趣组要求同时命中技术词和领域词，减少只有单一关键词造成的误收录。

本实现使用分类和组合兴趣组进行轻量筛选，不需要 Zotero 或额外 API Key。`zotero-arxiv-daily` 的 Zotero 相似度排序和 PDF 全文提取可以作为后续增强；当前的 LLM 摘要层已经独立接入 Kimi。

当前接入了两级摘要模型。主模型使用 `KIMI_API_KEY`；如果 Kimi 调用失败、返回截断 JSON 或缺少有效中文字段，会重试并自动切换到 `SILICONFLOW_API_KEY`，默认模型为 `Qwen/Qwen3.5-27B`，接口为 `https://api.siliconflow.cn/v1/chat/completions`。每个模型最多尝试两次，单次请求超时为 180 秒；Kimi 输出预算为 8192 tokens，截断重试时增加预算；Qwen 关闭思考模式，专注翻译与速读。两个模型都失败时任务失败，不会再用通用占位卡片冒充翻译。请在 GitHub 仓库的 Settings → Secrets and variables → Actions → Secrets 中配置这两个 Secret，不要把 Key 写入配置文件或提交到 Git。接口和模型也可以通过仓库 Variables 覆盖。

本地测试：

```bash
npm run arxiv:daily -- --date 2026-11-06 --max 3 --dry-run
```

GitHub Actions 页面可以手动触发工作流：填写 `date` 重跑指定日期，或填写 `month`（例如 `2026-10`）生成上一自然月的月度汇总文章 `source/_posts/arxiv-monthly-YYYY-MM.md`。月度汇总最多收录 60 篇，所有入选论文必须通过中文标题、完整中文摘要和五项快速理解校验。`llm_max_papers` 必须不小于入选论文数，否则明确失败。只有校验和站点构建均成功后，才会提交文章并发布。

手动验证已存在日期时，可将 `force` 设为 `true` 覆盖当天文章；定时运行默认保持幂等，不会重复覆盖已有文章。

修复已发布的旧卡片：手动触发时勾选 `repair_existing`，会扫描所有每日和月度文章，仅补全缺失中文内容或包含占位文案的条目，保留原文章日期、论文顺序、链接与有效条目。原始摘要按 arXiv ID 获取，全部修复内容通过校验后才写入。已验证的模型结果缓存在 `.cache/arxiv-summaries`，Actions 会保存缓存，重跑时可复用成功结果。

```bash
npm run arxiv:audit   # 逐篇校验已有文章；发现占位、英文或缺失字段时非零退出
npm run arxiv:repair  # 使用环境变量中的 API Key 补全有问题的条目
npm run test:arxiv    # 验证截断、缺字段、模型切换与修复保护
```

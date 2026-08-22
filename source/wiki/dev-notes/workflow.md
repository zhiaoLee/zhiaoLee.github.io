---
layout: wiki
title: 发布流程
wiki: dev-notes
---

本站从写作到上线的完整流程。

## 本地写作

```bash
# 新建文章（使用 scaffolds/post.md 模板）
npx hexo new "文章标题"

# 本地预览，支持热更新
npx hexo s
```

## 提交与发布

```bash
git add .
git commit -m "post: 文章标题"
git push
```

推送后由托管平台的 CI 自动执行 `hexo generate` 并部署静态产物，无需手工上传。

## 约定

1. 文章文件名使用英文短横线命名，例如 `build-blog-with-hexo-stellar.md`；
2. front-matter 必填 `title`、`date`、`categories`；
3. 生活类文章在 front-matter 中加 `type: story` 使用图文布局；
4. 知识库页面需在 front-matter 中声明 `wiki: 项目id`。

---
title: 用 Hexo + Stellar 从零搭建一个技术博客
date: 2026-08-22
categories:
  - 技术研究
tags:
  - Hexo
  - Stellar
  - 博客搭建
description: 记录本站的搭建过程：为什么选择静态博客、技术栈选型、目录结构以及基于 git 的发布工作流。
---

欢迎来到我的博客。这篇文章记录本站从 0 到 1 的搭建过程，既是教程，也是一次复盘。

## 为什么选择静态博客

动态博客（WordPress 一类）需要服务器和数据库，而静态博客的思路完全不同：

1. 用 Markdown 写文章，专注于内容本身；
2. 构建工具把 Markdown 编译成纯静态的 HTML / CSS / JS；
3. 产物随便丢到任何静态托管服务上就能访问。

{% note 静态博客最大的优势是：**内容是纯文本，可以完整地用 git 管理版本**，配合 CI 还能实现推送即发布。 %}

## 技术栈

| 组件 | 选型 | 作用 |
| --- | --- | --- |
| 生成器 | Hexo | Markdown → 静态页面 |
| 主题 | Stellar | 博客 + 知识库一体化布局 |
| 版本管理 | git | 内容版本化、备份 |
| 部署 | 静态托管 | 自动构建与发布 |

## 快速开始

初始化项目并安装主题：

```bash
npx hexo init .
npm install hexo-theme-stellar --save
```

修改站点根目录 `_config.yml`：

```yaml
title: Zio
language: zh-CN
timezone: Asia/Shanghai
theme: stellar
```

本地预览：

```bash
npx hexo s
```

打开浏览器访问 `http://localhost:4000` 即可。

## 目录结构

```
.
├── _config.yml          # 站点配置
├── _config.stellar.yml  # 主题覆盖配置（只写要改的部分）
├── source/
│   ├── _posts/          # 博客文章（Markdown）
│   ├── _data/           # wiki 知识库定义
│   ├── wiki/            # 知识库页面
│   └── about/           # 关于页
└── scaffolds/           # 新建文章的模板
```

新建一篇文章只需要：

```bash
npx hexo new "文章标题"
```

## 发布工作流

日常写作的闭环非常短：

1. `npx hexo new "标题"` 创建草稿；
2. 本地 `npx hexo s` 边写边预览；
3. `git add . && git commit && git push`；
4. 托管平台自动构建，几分钟后文章上线。

后续会把这个流程接入 GitHub Actions，实现推送即发布。

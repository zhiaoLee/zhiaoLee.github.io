---
layout: wiki
title: Git 速查表
wiki: dev-notes
---

日常使用频率最高的 Git 命令。

## 基础流程

| 场景 | 命令 |
| --- | --- |
| 查看状态 | `git status` |
| 查看改动 | `git diff` |
| 暂存全部 | `git add -A` |
| 提交 | `git commit -m "type: message"` |
| 推送 | `git push` |

## 分支

```bash
# 创建并切换分支
git switch -c feature/xxx

# 合并后删除分支
git switch main && git branch -d feature/xxx
```

## 撤销

```bash
# 撤销工作区的修改（未暂存）
git restore <file>

# 取消暂存
git restore --staged <file>

# 修改上一次提交的信息
git commit --amend
```

## 查看历史

```bash
# 单行简洁日志
git log --oneline -n 20

# 查看某个文件的修改历史
git log --follow -p <file>
```

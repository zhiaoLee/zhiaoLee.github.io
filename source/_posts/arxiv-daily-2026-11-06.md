---
title: "arXiv 每日论文速递（2026-11-06）"
date: 2026-11-06 09:00:00
categories:
  - 论文速递
tags:
  - arXiv
description: "按配置的 arXiv 分类与关键词筛选的每日论文摘要。"
---

> 本文由 GitHub Actions 自动生成，收录 2026-11-06 发布的 arXiv 论文。论文内容及版权归原作者与 arXiv 所有。

共筛选出 **2** 篇论文。

## 1. SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization

- **作者**：Qile Jiang、George Em Karniadakis
- **分类**：cs.AI, cs.NE
- **发布时间**：2026-11-05 18:59:29 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.08483v1) · [PDF](https://arxiv.org/pdf/2611.08483v1)
- **匹配方向**：LLM + Agent

### 快速理解

- **研究背景**：LLM 引导的进化式搜索通过迭代改进和组合高分方法来解决数学与计算问题，但速度缓慢，因为每轮 LLM 都需要生成冗长的文本思维链，且为维持种群多样性必须重复大量生成。
- **核心创新**：SwarmEvolve 提出了一种潜空间智能体群框架：每轮数百个低成本智能体以群（swarm）形式协作，在不解码为文本的情况下进行潜空间推理，并通过传递 KV 缓存来共享信息；新颖性过滤器直接基于智能体隐状态向量的距离保留最具差异性的想法，而想法的交叉通过摘要智能体接收全部群成员合并的 KV 缓存自然实现。
- **方法概览**：每个智能体群从不同角度研究问题，智能体在潜空间推理并通过 KV 缓存通信，利用隐状态距离筛选新颖想法，再由摘要智能体聚合各群信息完成潜空间交叉，从而在数学发现与科学计算的 21 个问题上进行程序搜索。
- **结果与结论**：SwarmEvolve 取得最高平均分，达到其他最先进框架 60 分钟才能达到的最佳分数仅需中位数 3 到 8 分钟；在若干问题上，使用 Qwen3 8B 的 SwarmEvolve 甚至改进了 AlphaEvolve 此前用前沿大模型首次发现的解。
- **一句话 takeaway**：研究表明，在潜空间通信的智能体群为科学问题的程序搜索提供了一种快速且低成本的新途径。

**摘要**：LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combining high-scoring methods. However, the process is often slow because the LLM generates a long textual chain of thought for each round and must repeat this generation many times to maintain population diversity. We present SwarmEvolve, a framework in which hundreds of low-cost agents per round work in swarms, reason in latent space without decoding to text, and share information by passing KV caches. Each swarm studies the problem from a different angle. A novelty filter keeps the most distinct agent ideas by directly measuring the distances between the agents' hidden state vectors. Crossover of ideas happens naturally in latent space, as a summarizer agent receives the combined KV caches of all swarm members. On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best scores that other state-of-the-art frameworks reach in 60 minutes. On several problems, SwarmEvolve with Qwen3 8B improves on the solutions that AlphaEvolve first found with frontier LLMs. Our work shows that agent swarms that communicate in latent space offer a fast, low-cost approach to program search for scientific problems.

## 2. The Power of Meta Access in the Software of the Future --- Demonstrated on LLM Chat UIs and Chat AI

- **作者**：Julian Kunkel、Ali Doosthosseini
- **分类**：cs.AI
- **发布时间**：2026-11-05 18:22:24 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.08428v1) · [PDF](https://arxiv.org/pdf/2611.08428v1)
- **匹配方向**：LLM + Agent

### 快速理解

- **研究背景**：聊天界面仍是大语言模型任务的主要入口，但模型只能看到当前对话，看不到其周围的工作区状态；与此同时，通用智能体框架本质是运行时，因其能修改自身设置，元访问（meta access）具有自反性，需要独立的控制面边界。
- **核心创新**：作者提出“元访问”概念，即赋予助手结构化、带权限的界面自身视图，并设计了分级阶梯：功能辅导、元数据/设置/偏好访问、基于摘要与消息的检索、需确认的变更、完全编排，从而把聊天客户端从多屏操作变为统一入口。
- **方法概览**：作者通过Meta Chat原型落地该思路：利用摘要、设置和相关消息构建有界上下文，将引用关联到对话、主题和人物角色，支持可确认、可撤销的修改，提供可浏览的教程库，并推荐用户发起的人物角色对话；同时探讨隐私、提示注入、信任等风险及无障碍扩展。
- **结果与结论**：摘要未提供明确实验结果，该文为概念性探索与原型设计，主要贡献在于提出元访问框架、分级模型和Meta Chat原型实现。
- **一句话 takeaway**：元访问将聊天从单一对话的窗口转变为整个工作区的控制层，在不牺牲用户控制的前提下扩展了聊天界面的智能体能力；未来嵌入IDE、仪表盘、办公套件和操作系统的AI界面，应通过类似调试器的接口开放其现有的元模型，暴露结构化、带权限的状态与能力模型。

**摘要**：Chat remains the default surface for many large language model (LLM) tasks, even as agentic tools such as OpenCode excel at coding and automation. Yet the model sees the current dialogue but not the workspace around it. We explore meta access---giving the assistant a structured, permissioned view of the interface itself and propose a ladder of levels: feature tutoring; metadata, settings, and preference access; retrieval over summaries and messages, confirmed mutation, and full orchestration. Meta access can turn a chat client from many screens into one entry point for finding, navigating, organising, and operating it, while raising risks around grounding, privacy, prompt injection, and trust. General-purpose agentic harnesses are runtimes; because they can change their own settings, meta access becomes reflexive and needs a separate control-plane boundary. We ground this in the Meta Chat prototype of the Chat AI client. It builds bounded context from, e.g., summaries, settings, and relevant messages; links references to conversations, topics, and personas; supports confirmed, reversible changes; offers a browsable tutorial library; and recommends personas as user-started conversations. By exposing application state in structured form, meta access can extend screen readers from widget descriptions to semantic workspace operations. Meta access thus turns chat from a window onto one conversation into a control layer for the whole workspace, extending chat toward agentic capability without surrendering user control. As assistants become embedded in IDEs, dashboards, office suites, and operating systems, AI-era interfaces should expose a structured, permissioned model of their state and capabilities, ideally by opening their existing metamodels through a debugger-like interface.


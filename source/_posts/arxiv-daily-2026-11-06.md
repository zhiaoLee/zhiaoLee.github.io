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

**摘要**：LLM-guided evolutionary search uses AI agents to improve programs for mathematical and computational problems by iteratively refining solutions and combining high-scoring methods. However, the process is often slow because the LLM generates a long textual chain of thought for each round and must repeat this generation many times to maintain population diversity. We present SwarmEvolve, a framework in which hundreds of low-cost agents per round work in swarms, reason in latent space without decoding to text, and share information by passing KV caches. Each swarm studies the problem from a different angle. A novelty filter keeps the most distinct agent ideas by directly measuring the distances between the agents' hidden state vectors. Crossover of ideas happens naturally in latent space, as a summarizer agent receives the combined KV caches of all swarm members. On 21 problems in mathematical discovery and scientific computing, SwarmEvolve gets the highest average score and needs a median of only 3 to 8 minutes to reach the best scores that other state-of-the-art frameworks reach in 60 minutes. On several problems, SwarmEvolve with Qwen3 8B improves on the solutions that AlphaEvolve first found with frontier LLMs. Our work shows that agent swarms that communicate in latent space offer a fast, low-cost approach to program search for scientific problems.

## 2. The Power of Meta Access in the Software of the Future --- Demonstrated on LLM Chat UIs and Chat AI

- **作者**：Julian Kunkel、Ali Doosthosseini
- **分类**：cs.AI
- **发布时间**：2026-11-05 18:22:24 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.08428v1) · [PDF](https://arxiv.org/pdf/2611.08428v1)
- **匹配方向**：LLM + Agent

**摘要**：Chat remains the default surface for many large language model (LLM) tasks, even as agentic tools such as OpenCode excel at coding and automation. Yet the model sees the current dialogue but not the workspace around it. We explore meta access---giving the assistant a structured, permissioned view of the interface itself and propose a ladder of levels: feature tutoring; metadata, settings, and preference access; retrieval over summaries and messages, confirmed mutation, and full orchestration. Meta access can turn a chat client from many screens into one entry point for finding, navigating, organising, and operating it, while raising risks around grounding, privacy, prompt injection, and trust. General-purpose agentic harnesses are runtimes; because they can change their own settings, meta access becomes reflexive and needs a separate control-plane boundary. We ground this in the Meta Chat prototype of the Chat AI client. It builds bounded context from, e.g., summaries, settings, and relevant messages; links references to conversations, topics, and personas; supports confirmed, reversible changes; offers a browsable tutorial library; and recommends personas as user-started conversations. By exposing application state in structured form, meta access can extend screen readers from widget descriptions to semantic workspace operations. Meta access thus turns chat from a window onto one conversation into a control layer for the whole workspace, extending chat toward agentic capability without surrendering user control. As assistants become embedded in IDEs, dashboards, office suites, and operating systems, AI-era interfaces should expose a structured, permissioned model of their state and capabilities, ideally by opening their existing metamodels through a debugger-like interface.


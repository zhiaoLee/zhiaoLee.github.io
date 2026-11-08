---
title: "arXiv 月度论文汇总（2026-10）"
date: 2026-11-01 09:00:00
categories:
  - 论文速递
tags:
  - arXiv
description: "按配置的兴趣方向筛选 2026-10 月 arXiv 论文，并生成中文速读。"
---

> 本文由 GitHub Actions 自动生成，收录 2026-10-01 至 2026-10-31 发布的 arXiv 论文。论文内容及版权归原作者与 arXiv 所有。

共筛选出 **60** 篇论文。

## 1. Constraint Dependency Graph Retrieval for Compliance Detection on Long SKILL Documents

- **作者**：Shuaitao Zhao、Feng Ni、Lichao Ma、Yuchen Wei、Shuaike Li、Jiaye Lin、Fei Han、Yang Wei、Lu Pan
- **分类**：cs.AI
- **发布时间**：2026-10-31 15:31:27 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.01042v1) · [PDF](https://arxiv.org/pdf/2611.01042v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：LLM agent 需要依据企业标准作业程序等长篇幅 SKILL 文档执行业务操作，但小型审计模型的上下文预算不足以处理这些高度交叉引用的规则。相似度检索容易引入无关规则、遗漏强制前置条件，且两阶段审计策略无法为检索阶段提供可训练信号。
- **核心创新**：SkillCDG 将 SKILL 文档重构为约束依赖图，将规则检索从相似度匹配转变为受上下文预算约束的依赖闭包选择。图中的原子规则锚定源文本跨度，强制前置关系构成唯一边类型，同一图还支撑后续联合优化。
- **方法概览**：该方法利用策略生成的检索关键词激活种子规则，并在上下文预算内取依赖闭包，形成紧凑且条件完整的规则上下文。检索阶段采用结合输出格式有效性与下游裁决正确性的可验证奖励进行组相对策略优化，同时通过选择性在线蒸馏将教师监督集中在高熵推理 token 上。
- **结果与结论**：实验覆盖三个企业数据集和两个公开基准，结果显示 SkillCDG 相比完整文档基线和检索基线均提升了准确率与 F1。摘要未提供具体指标数值。
- **一句话 takeaway**：将文档规则显式组织为依赖闭包，能够在有限上下文中兼顾规则完整性与相关性，并为检索阶段引入由最终审计结果驱动的可训练反馈。该方法表明，结构化约束传播与检索—推理联合优化是改进长文档合规检测的有效方向。

**摘要**：Large Language Model (LLM) agents carry out business operations under enterprise documents we refer to as SKILL documents, which take the form of standard operating procedures (SOPs) that state the conditions to verify and the actions to take before an operation proceeds. Long, densely cross-referenced SKILL documents exceed the context budget of small deployed auditors. Similarity-based retrieval then brings in irrelevant rules while omitting mandatory prerequisites, and the two-stage audit policy provides no trainable signal for the retrieval stage. We present SkillCDG, a compliance detection framework that reformulates each SKILL document as a constraint dependency graph, shifting rule retrieval from similarity-based matching to closure-based selection under the deployment's context budget. Each atomic rule is anchored to its source text span as a graph node, and mandatory prerequisite relations form the sole edge type. Policy-generated retrieval keywords activate seed rules, whose dependency closure yields a compact and conditionally complete rule context within that budget. The same graph also supports a joint optimization scheme. The retrieval stage is trained with group-relative policy optimization using a verifiable reward that combines output-format validity with downstream verdict correctness, with closure non-emptiness serving as a validity gate, while selective on-policy distillation concentrates teacher supervision on high-entropy reasoning tokens, with verdict and termination tokens always included, to improve verdict accuracy. Experiments on three enterprise datasets and two public benchmarks show that SkillCDG improves accuracy and F1 over the full-document and retrieval-based baselines.

## 2. GURU: A Hierarchical Neuro-Symbolic Multi-Agent System for Verification-Aware Automation of Mission-Critical Digital Engineering and Operations

- **作者**：Allan Grosvenor、Anton Zemlyansky、Abdul Wahab、Kyrylo Bohachov、Aras Dogan、Ryland Adams、Dwyer Deighan
- **分类**：cs.AI, cs.CE, cs.MA, eess.SY
- **发布时间**：2026-10-31 14:41:00 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.01001v1) · [PDF](https://arxiv.org/pdf/2611.01001v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：An AI can find a safe action faster than any human, but it must never decide what counts as safe. We present GURU, a hierarchical neuro-symbolic multi-agent system for mission-critical digital engineering and operations, built on one partition of authority: learned models propose, rank, and accelerate; a symbolic rules engine checks every consequential action against hard limits before it executes; and validated physics confirms and decides. GURU runs a workflow as a closed control loop, with Navigation, Action, and Planning agents sharing one Common Internal Language and one training factory. Nuclear, aviation, and national-security guidance now requires this pattern; a harnessed language model keeps the model at the center, GURU puts a validated reference there. In computational fluid dynamics, the workflow raised the converged-simulation rate on unseen aircraft geometries from under 1 percent to 74 percent over 100 single-attempt cases, ran 54 live cases to Mach 6 on three facilities, and an ablation put the symbolic layer at 13 points of boundary-layer capture. Knowledge-graph retrieval and role adapters raised ParaView control success from 55 to 75 percent. In space domain awareness, where a language model cannot be trusted to decide, a frozen self-supervised world model under validated propagation scored highest of five methods at conjunction risk, including fully fine-tuned language models, with several-times-lower seed variance: the trustworthy design gives up nothing in accuracy, and the recipe transferred to reactor anomaly detection. A radar-to-avoidance debris pipeline was demonstrated in stages on a 2026 reentry; the hierarchy coordinates simulated teams of 200 aircraft. Training scaled near-linearly past 1,000 Aurora nodes and ran at 8,000. The approach extends to a control-grade microreactor digital twin with validated physics, not a learned model, as the safety basis.

## 3. ImplicitHop: Evaluating knowledge integration across context and memory

- **作者**：Alexander Detkov、Dashiel Karish、Matthew Oleynikov、Matt Thomson
- **分类**：cs.AI
- **发布时间**：2026-10-30 02:44:51 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.41169v1) · [PDF](https://arxiv.org/pdf/2610.41169v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：整合新信息并推演其全局后果是大语言模型学习、理解与推理的核心能力。无论是训练中还是上下文中的信息，模型都需要将局部事实传播为长程推论。
- **核心创新**：作者提出两个互补的自然语言基准：一个是覆盖多种图拓扑结构和整合任务的形式化图基准，另一个是基于真实知识图谱的知识组合基准，用于按推理深度大规模评估演绎推理。
- **方法概览**：研究在无前导推理链（implicit）的条件下，对比开源模型从上下文信息中整合知识与从预训练权重中整合知识的表现，并将推理准确率作为组合长度的函数进行分析。
- **结果与结论**：随着组合长度增加，无论知识来自预训练权重还是上下文，模型准确率都急剧下降；但上下文中的信息在推理表现上显著优于权重中编码的信息。
- **一句话 takeaway**：研究结果量化了当前模型在深层推理上的根本局限，对基于提示的agent行为控制和持续学习策略有直接影响，也为开发支持更深推理的训练、提示与信息整合方法奠定基础。

**摘要**：The ability to integrate new information and deduce its consequences is central to learning, understanding, and reasoning in large language models (LLMs). Whether information arrives during training or in-context, models must not only store local facts, but propagate their long-range implications globally. To explore information integration in LLMs, we introduce two complementary natural language benchmarks for large-scale evaluation of deductive reasoning as a function of inference depth. The first is a formal graph benchmark enabling controlled evaluation over a wide range of graph topologies and integration tasks; the second is a knowledge composition benchmark grounded in real-world knowledge graphs. We use these benchmarks to compare knowledge integration from information encoded in context versus information encoded in model weights during pretraining, evaluating a set of open models implicitly, without chain of thought. We find that accuracy decays sharply with increased composition length for both pretrained and in-context knowledge. Information presented in-context, however, substantially outperforms deduction over information encoded in weights. These results quantify a fundamental limitation of current models with direct implications for prompt-based control of agent behavior and for continual learning strategies, and they provide a foundation for developing training, prompting, and integration methods that support deeper reasoning.

## 4. CAD-WAM: Anticipating Geometry for Text-to-CAD Generation

- **作者**：Zhengyang Li、Weijie Zheng、Yuxin Cui、Sijie Wang、Wenjie Feng、Qiyu Kang
- **分类**：cs.CV, cs.GR
- **发布时间**：2026-10-29 03:52:21 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.39306v1) · [PDF](https://arxiv.org/pdf/2610.39306v1)
- **匹配方向**：LLM + CAD、LLM + CAD 三维模型

### 快速理解

- **研究背景**：从文本生成可编辑 CAD 模型需要依据当前已构建几何选择正确操作，错误操作会损害后续步骤，因此可靠的多步生成很困难。现有基于大语言模型的方法多学习预测命令，缺乏对命令应产生的几何状态进行显式监督。
- **核心创新**：CAD-WAM 受世界-动作模型启发，将几何条件动作生成与下一状态预测耦合。它将完整建模操作定义为 CAD 领域专用语言中的动作，并用预训练变分自编码器把中间实体表面点云编码为紧凑潜状态；同一 LLM 主干生成下一动作，同时通过辅助头预测下一状态以提供几何监督。
- **方法概览**：研究基于 DeepCAD 数据集中的参数化 CAD 模型构造逐步训练轨迹，并为每条轨迹配对专家级文本描述。推理时，每个生成动作由 CAD 内核执行，得到的新实体再被编码，用于决定下一步操作。
- **结果与结论**：在 DeepCAD 测试集上，CAD-WAM 在几何精度和输出有效性方面优于任务特定基线，且在需要更多操作的模型上提升更大；相比使用相同 DSL 提示的通用 LLM，其生成几何更准确。消融实验表明，加入下一状态监督使平均 Chamfer 距离相比仅预测动作的同等模型相对降低 13.2%。
- **一句话 takeaway**：显式预测和约束中间几何状态能提升文本到 CAD 多步生成的可靠性，尤其适合长操作序列和可编辑 CAD 场景。该方法证明了“动作预测 + 世界状态建模”对结构化几何生成的价值，且代码已开源。

**摘要**：Generating editable computer-aided design (CAD) models from text requires selecting operations that produce the intended changes to the geometry constructed so far. An incorrect operation can compromise subsequent steps, making reliable multi-step generation challenging. Existing methods based on large language models (LLMs) primarily learn to predict commands, without explicit supervision of the geometric states those commands should produce. Inspired by world-action models, we introduce CAD-WAM, which couples geometry-conditioned action generation with next-state prediction. We define complete modeling operations as actions in a CAD domain-specific language (DSL) and encode surface point clouds of intermediate solids into compact latent states using a pretrained variational autoencoder. An LLM backbone generates the next action from the target description and current geometric state, while an auxiliary head on the same backbone predicts the next state to provide geometric supervision during training. We construct step-wise training trajectories from parametric CAD models in the DeepCAD dataset, pairing each trajectory with an expert-level textual description. At inference, each generated action is executed by a CAD kernel, and the resulting solid is re-encoded to inform the next decision. On the DeepCAD test set, CAD-WAM outperforms the task-specific baselines in geometric accuracy and output validity, with larger gains on models requiring more operations, and produces more accurate geometry than general-purpose LLMs prompted with the same DSL. Ablations further show that next-state supervision reduces mean Chamfer distance by 13.2\% relative to an otherwise identical model trained only to predict actions. Code is available at https://github.com/Lzy-1037/CAD-WAM.

## 5. Beyond LLM Wrappers: Context Engineering and the Three-Engine Architecture for Reliable Financial AI

- **作者**：Pradeep Kumar GS、Ravi Tanniru
- **分类**：cs.AI
- **发布时间**：2026-10-29 02:50:00 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.39230v1) · [PDF](https://arxiv.org/pdf/2610.39230v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：金融 AI 系统需要处理涉及付款、收款、现金流和合规等承载决策的问题，同时保证数值准确、可追溯和可审计。LLM 虽然能实现自然语言交互，但无法独立保证可复现的计算或基于证据的推荐。
- **核心创新**：提出一种生产级三引擎架构：金融知识图谱（承载企业关系、时间上下文与溯源信息）、确定性优化引擎（负责金融计算与决策）、多智能体 LLM 层（负责意图理解、任务编排、解释与声明验证）；并提出“上下文工程”协调层，从 ERP 系统、工具和租户中筛选、排序、组合和验证查询相关的上下文。
- **方法概览**：基于约 11 个月内 15 个部署的观察，对比单智能体管道与图支持的多智能体验证方案，考察幻觉率、ERP 数据质量、租户特定模式等实现挑战，以及可复用映射、图谱模板和验证策略对部署时间的影响。
- **结果与结论**：单智能体管道的幻觉率约为 7-9%（不同查询类型在 5-10% 之间），包括虚构发票和无依据的金融声明；图支持的多智能体验证将观察到的幻觉率降至 1% 以下，但这些发现是观察性的而非因果性的。ERP 数据质量和租户特定模式仍是主要实施挑战；可复用资产与部署时间从约六周缩短到两周相吻合。
- **一句话 takeaway**：金融上下文工程超越了以文本为中心的检索增强生成，需要结构化关系、时间有效性、精确数值证据、访问控制以及与源记录和求解器输出的验证。论文同时指出了评估、可复现性、隐私、上下文质量和跨租户泛化等方面的研究挑战。

**摘要**：Financial AI systems must support decision-bearing questions involving payments, collections, cash flow, and compliance while ensuring numerical accuracy, traceability, and auditability. Large language models (LLMs) enable natural language interaction but cannot independently guarantee reproducible calculations or evidence-grounded recommendations. We present a production-grounded architecture integrating three components: a financial knowledge graph for enterprise relationships, temporal context, and provenance; a deterministic optimization engine for financial calculations and decisions; and a multi-agent LLM layer for intent interpretation, task orchestration, explanation, and claim validation. A coordination layer, termed context engineering, selects, ranks, composes, and validates query-specific context across ERP systems, tools, and tenants. Based on observations from 15 deployments over approximately 11 months, single-agent pipelines exhibited hallucination rates of about 7-9% (5-10% across query types), including invented invoices and unsupported financial claims. Graph-backed multi-agent validation reduced observed rates to below 1%, although these findings are observational rather than causal. ERP data quality and tenant-specific schemas remained major implementation challenges. Reusable mappings, graph templates, and validation policies coincided with a reduction in deployment time from roughly six to two weeks. We argue that financial context engineering extends beyond text-centric retrieval-augmented generation by requiring structured relationships, temporal validity, exact numerical evidence, access controls, and validation against source records and solver outputs. We outline research challenges in evaluation, reproducibility, privacy, context quality, and cross-tenant generalization.

## 6. CoSTA: Co-Evolving Self-Play Timeline Agents for Complex Temporal Knowledge Graph Question Answering

- **作者**：Haikun Liu、Zhichao Yan、Shaoru Guo、Jiawei Gu、Victor Gutierrez Basulto、Jiapu Wang、Ru Li
- **分类**：cs.CL
- **发布时间**：2026-10-28 08:26:14 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.38450v1) · [PDF](https://arxiv.org/pdf/2610.38450v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：复杂时间知识图谱问答需要在多个事实间利用时间戳或有效区间进行约束与联合推理。现有单智能体方法容易在同一上下文中混杂不同事件历史，造成证据交错并被干扰项误导。
- **核心创新**：CoSTA 将事实组织为可导航时间线，把调查任务委派给 worker，并由 coordinator 汇总带原始时间戳的观察结果，从而分离事件级证据。该方法通过角色条件蒸馏初始化共享策略，并使用最终答案奖励进行共演自博弈来联合优化协调者与工作者。
- **方法概览**：CoSTA 以自博弈方式让 coordinator 负责问题分解与证据综合，worker 在各自时间线上下文中执行子任务调查。训练采用最终答案奖励驱动，使问题分解、子任务调查与证据合成形成相互适应的闭环。
- **结果与结论**：摘要未提供具体数值指标，但说明 CoSTA 在三个基准上取得总体最先进性能，在复杂多事实问题上提升尤其明显，且紧凑变体优于被评估的闭源 LLM 智能体。
- **一句话 takeaway**：该工作表明把复杂时序推理拆分到多个独立时间线上下文，再学习协调与合成，可缓解证据交错和干扰项问题。其价值在于以协同自博弈改进多事实时序问答，但摘要未给出可复核的定量结果或消融细节。

**摘要**：Complex Temporal Knowledge Graph Question Answering (TKGQA) involves more than retrieving facts: the timestamp or validity interval of one fact can constrain the search for another, while multiple intervals may jointly determine the answer. Existing single-agent TKGQA methods typically investigate these facts within a single reasoning context, where evidence from different event histories can become interleaved and distractors can misdirect subsequent retrieval. Distributing investigations across agents can separate event-specific evidence into distinct contexts, but effective collaboration must still be learned because question decomposition, subtask investigation, and evidence synthesis are interdependent. To address these limitations, we propose \textbf{Co}-Evolving \textbf{S}elf-Play \textbf{T}imeline \textbf{A}gents (CoSTA), which organizes facts into navigable timelines, delegates investigations to workers, and uses a coordinator to synthesize their original timestamped observations. CoSTA initializes a shared policy through role-conditioned distillation and jointly optimizes both roles through co-evolving self-play with final-answer rewards. Across three benchmarks, CoSTA achieves state-of-the-art overall performance, with particularly strong gains on complex multi-fact questions, while its compact variants outperform the evaluated closed-source LLM agents.

## 7. What Does an Ontology Catch? Curated, LLM-Generated and Data-Derived Ontologies as Checkers of LLM Agents over Knowledge Graphs

- **作者**：Michal Orzechowski、Rund Tawfiq、Tomasz Kosciolek
- **分类**：cs.AI, cs.DB
- **发布时间**：2026-10-27 18:27:45 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.37809v1) · [PDF](https://arxiv.org/pdf/2610.37809v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：LLM agents that answer questions over Web knowledge graphs are increasingly wrapped in checks derived from the graph's ontology, on the assumption that a formal schema makes a reliable judge. Yet a checker can be wrong as well: it can miss errors, and it can flag correct answers and push the agent into "fixing" them. Whether a curated ontology is worth its cost as such a judge, and how it compares with an ontology an LLM writes or a schema mined from the data, is unknown. We make the checker itself the object of study. Across curated, LLM-generated and data-derived ontologies, used as prompt context, as a checker, or both, and across open-weight and proprietary agents on public graphs and a private graph of nearly $10^{9}$ triples, we account for what ontology-derived checks catch and what they wrongly flag. We show how each source trades caught errors against false alarms, how a curated schema used as published can contradict its own data, which errors structural checks miss, and whether combining sources or giving the agent the checker's specific feedback pays off. On UniProt, the curated ontology flags more correct answers than either an ontology derived from the data or one an LLM derives from a summary of the data with masked identifiers. On real agent answers, its flags are only marginally more precise than random flags.

## 8. Clearing the FoG: Training KG Agents to Retrieve the Evidence Behind Their Answers

- **作者**：Zongyuan Sun、Shuai Zhao、Yingjun Du、Ke Shu、Ziyue Zhu、Haoran Luo
- **分类**：cs.AI
- **发布时间**：2026-10-27 15:20:37 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.37405v1) · [PDF](https://arxiv.org/pdf/2610.37405v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：LLM智能体使用知识图谱（KG）时有双重角色：既作为答案来源补充事实，也作为证据来源提供可追溯的支持三元组。但现有KG智能体仅把KG当作答案来源：训练数据只有答案没有证据，训练奖励只检查答案而不检查检索到的证据，导致智能体常常在不检索支持三元组的情况下就给出正确答案。
- **核心创新**：作者提出FoG框架，训练KG智能体检索答案背后的证据，包含三个组件：证据接地合成（递归地将显式实体隐藏在可验证的子问题之后，使每个问题天然携带支持三元组）、KG交互智能体（记录KG返回的三元组），以及证据覆盖过程奖励ECPR（将每个支持三元组归功于首次检索到它的回合）。
- **方法概览**：FoG通过证据接地合成为训练数据构造带支持三元组的问题，智能体在多轮交互中检索并记录KG三元组，ECPR按覆盖的支持证据给予过程奖励，从而激励智能体主动检索证据而非仅猜测答案。
- **结果与结论**：在三个KGQA基准上的实验表明，FoG使3B–4B规模的开源智能体在答案准确率和证据覆盖率上显著超越规模大得多的基线模型，并实现了零样本跨KG迁移。
- **一句话 takeaway**：正确回答不等于有据可依；通过在训练数据和过程奖励中显式引入证据监督，可以让小型KG智能体在准确性和可审计性上同时超越更大模型，为构建可追溯、可信的KG问答智能体提供了有效范式。

**摘要**：Large language models (LLMs) can answer many factual questions correctly, but a correct answer is not necessarily a supported one. For an LLM agent, a knowledge graph (KG) plays two roles: as a source of answers, it supplies facts that the model lacks; as a source of evidence, it supplies the supporting triples that make an answer traceable and auditable. However, existing KG agents treat the KG only as a source of answers: their training data carries answers but not evidence, and their training rewards check the answer but not the retrieved evidence, so agents often answer correctly without retrieving the supporting triples. We propose FoG, a framework that trains KG agents to retrieve the evidence behind their answers. FoG consists of evidence-grounded synthesis, a KG interaction agent, and an evidence-coverage process reward (ECPR): the synthesis recursively hides explicit entities behind verifiable sub-questions, so that every question carries its supporting triples by construction; the agent records the triples returned by the KG; and ECPR credits each supporting triple to the turn that first retrieves it. Experiments on three KGQA benchmarks demonstrate that FoG enables 3B--4B open-source agents to outperform substantially larger baselines in answer accuracy and evidence coverage, with zero-shot cross-KG transfer.

## 9. Grounding LLM Agents in Business Processes: Process-Aware Knowledge Graphs for Reliable Multi-Step Service Invocation

- **作者**：Saiful Khan、Afrah Farea
- **分类**：cs.AI, cs.SE
- **发布时间**：2026-10-27 13:45:29 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.37242v1) · [PDF](https://arxiv.org/pdf/2610.37242v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：大语言模型（LLM）智能体在调用企业API时，需要正确选择端点、遵循流程顺序、使用合法的负载键和预定义编码值，但现有检索增强的服务发现方法将各端点独立处理，忽略了流程与模式约束。
- **核心创新**：该工作将OData元数据与BPMN参考流程整合到类型化属性图中，构建流程感知的知识图谱，以显式表达端点间的流程顺序和模式约束。
- **方法概览**：采用混合检索器：先用稠密嵌入识别候选端点，再沿流程边检索后续端点，从而为LLM智能体提供类型化的上下文（包括合法键和编码值列表）。
- **结果与结论**：在42个企业服务的流程链基准上，对于查询与下游实体词汇重叠度低的情形，Recall@3提升5.7个百分点（n=74），且在不同嵌入模型和截断值下增益一致；在无流程层的OpenAPI服务上无提升，说明收益源自流程结构。LLM智能体在81个多步查询上任务完成率达38.7%，远高于基于分块基线的10.3%；提供完整类型化上下文后，无效调用率降至3%（3/101次），且不再出现虚构编码值（仅提供编码表时仍有46%的写操作含无效键）。
- **一句话 takeaway**：在检索阶段向智能体暴露流程顺序和模式约束，可显著提升其调用企业API的可靠性，尤其有助于处理低词汇重叠的多步服务编排场景。

**摘要**：Large language model (LLM) agents that call enterprise APIs must select the correct endpoints, follow process order, use valid payload keys, and choose coded values from predefined lists. However, current retrieval-augmented service discovery treats endpoints independently and therefore misses process and schema constraints. We address this limitation by integrating Open Data Protocol (OData) metadata and Business Process Model and Notation (BPMN) reference processes in a typed property graph. A hybrid retriever identifies candidate endpoints using dense embeddings and follows process edges to retrieve subsequent endpoints. We evaluate the method on 42 enterprise services with process-chain ground truth. For queries with low lexical overlap between the query and downstream entities, it improves Recall@3 by 5.7 points (n=74), with consistent gains across embedding models and cut-offs. It matches dense retrieval on other queries and provides no improvement on OpenAPI services without a process layer, indicating that the gains arise from process structure. We also evaluate an LLM agent on 81 multi-step queries. It completes 38.7% of tasks, compared with 10.3% for a chunk-based baseline. In an elicitation probe, providing valid code lists eliminates invented codes but leaves invalid keys in 46% of write runs. Full typed context reduces invalid calls to 3% (3 of 101 runs), with no invented codes. These results show that exposing process and schema constraints during retrieval improves the reliability of agent-driven API calls.

## 10. Evolve on Graph: Self-Evolving Knowledge Graph Reasoning without Question Annotations

- **作者**：Zongyuan Sun、Shuai Zhao、Ke Shu、Ziyue Zhu、Shangyang Wu、Yuanlin Lin、Tao Wang、Shiyue Li、Yingjun Du、Anh Tuan Luu、Haoran Luo
- **分类**：cs.AI
- **发布时间**：2026-10-26 15:23:04 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.35598v1) · [PDF](https://arxiv.org/pdf/2610.35598v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Knowledge graphs (KGs) provide reliable external knowledge for multi-hop factual reasoning with large language models (LLMs), yet most KGs in real-world domains such as finance and industry lack question--answer (QA) annotations. Without such annotations, existing methods struggle to improve LLM graph reasoning: training-free agents cannot improve their exploration through interaction; reinforcement learning (RL) agents depend on QA data annotated by humans or synthesized by closed-source models; and training data is typically built offline, so its topology mix is fixed and cannot follow the agent's ability. We propose Evolve on Graph (EoG), a framework that lets an LLM self-evolve its graph reasoning without any QA annotations. Through Graph Self-Play, a single LLM alternates between a Proposer that poses questions and a Solver that answers them. To make questions verifiable, Symbolically Verifiable Topology Synthesis (SVTS) samples reasoning topologies on the KG and executes the corresponding first-order logic queries, yielding topology skeletons with correct and complete answer sets; guided by a skeleton, the Proposer explores the graph to pose a multi-hop question. To let task topologies follow the Solver, a Boundary-Aware Graph Curriculum rewards the Proposer by the Solver's score variance, keeping questions at the Solver's capability boundary so that complex topologies enter training as the Solver improves. On six benchmarks over Freebase, Wikidata, and an industrial KG, EoG consistently outperforms prompting-, retrieval-, and agent-based methods, showing that LLM graph reasoning can improve through self-play without QA annotations. Our code is available at https://github.com/Szy5/EoG

## 11. PatentAgentBench: Benchmarking LLM Agents with Professional Patent Task Suites

- **作者**：Yijie Hu、Wei Li、Junjie Zhou、Zhiqi Jiang、Yi Jin、Licong Xu、Xinkai Sun、Kai Duan、Lisha Zhang
- **分类**：cs.AI
- **发布时间**：2026-10-26 08:44:25 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.35031v1) · [PDF](https://arxiv.org/pdf/2610.35031v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

### 快速理解

- **研究背景**：专利实践同时涉及技术、法律与语言工作，对技术创新关键但复杂；LLM 与 agentic 系统是否能可靠完成专利工作仍存疑。现有专利基准任务覆盖有限，并常通过提供参考材料或候选文档来简化证据获取。
- **核心创新**：PatentAgentBench 包含 510 个实例和八个任务套件，覆盖新颖性检索、FTO、外观设计 FTO、无效检索、权利要求对照表、专利撰写、审查意见答复与专利翻译。其数据来自真实专利记录与专业材料，结合任务特定指标、专家评审标注与评分 rubric，且检索类任务不提供候选池，要求 agent 自行搜索并比较专利集合。
- **方法概览**：作者在七个 LLM 与四种 agent harness 上开展评测，检索类任务考察无候选池下的专利搜索与比对，撰写与答复任务则基于技术交底书或审查意见评估产出质量。摘要未提供明确实验结果，仅给出定性结论：当前系统在新颖性识别、风险评估以及理解专利从业者意图方面仍表现困难。
- **结果与结论**：摘要未提供明确实验结果，未报告量化分数、排名或显著性差异；只说明七个 LLM 在四类 agent 框架下仍难以可靠完成关键专利工作流。
- **一句话 takeaway**：该基准更接近真实专利业务流程，尤其强调自主证据获取而非给定候选材料。其价值在于暴露 agent 在法律—技术交叉任务中的真实短板，可作为后续评测、训练与可靠性改进的基础。

**摘要**：Patent practice lies at the intersection of technical, legal, and linguistic work, making it challenging yet crucial to technological innovation. Recently, rapid advances in large language models (LLMs) and agentic systems have demonstrated the potential to complete realistic business workflows and even patent works. This raises a question: can current AI systems perform patent work reliably? Existing benchmarks cover a limited range of patent tasks and simplify evidence acquisition by providing reference materials or candidate documents. In this paper, we introduce PatentAgentBench, a benchmark comprising 510 instances across eight task suites: novelty search, freedom-to-operate (FTO) search, design FTO, invalidity search, claim charting, patent drafting, office-action response, and patent translation. Curated from real patent records and professional materials, the benchmark combines task-specific metrics with expert-reviewed annotations and rubrics. Retrieval tasks such novelty search, FTO, etc., require agents to search and compare patent collections without a supplied candidate pool. The drafting and OAR tasks assess the quality of agents' work given technical disclosure and office action notice. We evaluate seven LLMs across four agent harnesses on PatentAgentBench, finding that current systems still struggle to identify novelty, assess risk, and understand practitioner intent throughout patent workflows.

## 12. AskGLP1: A Knowledge Graph LLM Agent for Exploring GLP-1 Experience from Online Patient Narratives

- **作者**：Zhaoqian Xue、Anay Somani、Siddhartha Singh、Junting Mu、Zhongyin Wang、Haozheng Liu、Ayesha Khatun、Yeaeun Kwon、Renkai Ma、Siyuan Ma、Zhe He、Danxia Yu、Lingyao Li
- **分类**：cs.CL, cs.AI, cs.SI
- **发布时间**：2026-10-26 07:59:20 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.34987v1) · [PDF](https://arxiv.org/pdf/2610.34987v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：GLP-1 药物在体重管理中日益普及，大量患者在 Reddit、WebMD 等平台分享用药动机与体验，但这些叙述非结构化且与正式药物警戒流程脱节。摘要指出需要将这些真实世界患者声音转化为可查询、可核验的知识资源。
- **核心创新**：AskGLP1 将在线患者叙述构建为知识图谱，并由 LLM 代理在 MedDRA 术语约束下回答问题，把非正式患者报告桥接到药物警戒分析。其价值在于同时保留经验叙述的丰富性与证据可追溯性，并能识别数据源和药物特异性差异。
- **方法概览**：系统使用 LLM 辅助流程，从约 850 万条 Reddit 帖子中筛查并提炼 163,135 条用药体验，并结合 2,506 条 WebMD 评论，构建包含 385,790 条“药物-副作用”和“药物-用药目的”关系的知识图谱。代理问答围绕图谱证据生成回答，并进行证据可核验与拒绝医疗建议方面的评估。
- **结果与结论**：在线叙述与 FAERS 共享最常见胃肠道症状，但更突出疲劳、厌食等日常负担；FAERS 则更常包含注射部位反应以及胰腺炎等严重诊断。跨药比较显示替尔泊肽报告的恶心/呕吐少于司美格鲁肽，Wegovy 比 Ozempic、Zepbound 比 Mounjaro 报告更多疲劳；评估还表明代理能给出可验证证据并拒绝医疗建议请求。
- **一句话 takeaway**：该工作揭示了 FAERS 所捕获信号与患者在线自述之间的缺口，强调药物警戒应纳入患者中心视角。AskGLP1 证明知识图谱与 LLM 代理可用于把大规模患者叙述转化为可审计、可比较的安全监测证据。

**摘要**：GLP-1 medications are increasingly used for weight management, and many people share their experiences online. These narratives show why people take the drugs and what they experience, but they remain unstructured and disconnected from formal pharmacovigilance. We therefore present AskGLP1, a system that transforms online patient narratives into a knowledge graph (KG) and answers questions about medication experiences. Through an LLM-assisted pipeline grounded in the MedDRA terminology, AskGLP1 screens nearly 8.5 million Reddit posts for medication experiences and distills 163,135 of them, with 2,506 WebMD reviews, into a KG of 385,790 drug-side-effect and drug-purpose relations. We find that GLP-1 experiences are source- and drug-specific. Online narratives share the most common gastrointestinal symptoms with FAERS, but they foreground everyday burdens such as fatigue and food aversion, whereas FAERS reports more often include injection-site reactions and selected serious diagnoses such as pancreatitis. We further find that posts report less nausea and vomiting for tirzepatide than for semaglutide, more fatigue for Wegovy than Ozempic and for Zepbound than Mounjaro. Evaluations show that the agent answers with verifiable evidence and declines requests for medical advice. Our findings reveal gaps between what FAERS captures and what people report online, and they call for patient-centered approaches to pharmacovigilance. Code, prompts, and evaluation questions are available at https://github.com/ZhaoqianXue/AskGLP1.

## 13. Recovering Business Rules as Cascade Lookups for Enterprise Field Prediction

- **作者**：Changxu Duan
- **分类**：cs.LG, cs.AI, cs.DB, cs.IR
- **发布时间**：2026-10-25 12:33:59 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.34258v1) · [PDF](https://arxiv.org/pdf/2610.34258v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：企业销售订单系统依赖人工维护的配置规则来决定付款条件、发货点、销售归属等字段；当规则不完整或过时，操作员只能手工录入，错误会蔓延到计费、物流和报表环节。
- **核心创新**：本文提出一种由知识图谱引导的工作流：LLM 智能体在离线阶段提出候选业务键（如客户与单据类型的列组合），通过 SQL 剖析验证，并将证据编译为确定性的级联查找表；推理时仅需透明的键值查找，无需模型服务。
- **方法概览**：LLM 仅用于离线规则发现，负责提出业务键候选；候选键经 SQL 剖析验证后编译为级联查找规则；实验在企业销售订单预测及公开关系型基准上进行，并包含漂移分析以将残差错误转化为配置维护的诊断信息。
- **结果与结论**：实验表明，当字段遵循稳定业务规则时级联查找最有效；而当预测依赖时间或邻域模式时，学习的图模型仍是更优选择；漂移分析可将残差错误转化为配置维护诊断。
- **一句话 takeaway**：缺失或过时的业务规则可以从历史交易中恢复为透明、确定性的级联查找，而非依赖不透明统计模型；这为业务字段预测提供了一种无需模型部署、可解释且便于维护的替代方案。

**摘要**：Enterprise sales-order systems rely on manually maintained configuration rules to determine fields such as payment terms, shipping points, and sales ownership. When these rules are incomplete or stale, operators must enter values by hand, and downstream errors spread into billing, logistics, and reporting. This paper studies whether missing or outdated rules can be recovered from historical transactions instead of being relearned as opaque statistical patterns. We introduce a knowledge-graph-guided workflow in which an LLM agent proposes candidate business keys, meaning column combinations such as customer and document type, validates them through SQL profiling, and compiles the resulting evidence into deterministic cascade lookups. The LLM is used only during offline rule discovery. At inference time, prediction is a transparent key lookup with no model-serving requirement. Experiments on enterprise sales-order prediction and public relational benchmarks show that cascades are most effective when fields follow stable business rules, while learned graph models remain preferable when prediction depends on temporal or neighborhood patterns. Drift analysis further turns residual errors into diagnostics for configuration maintenance. Code and data: https://github.com/Fireblossom/CascadER.

## 14. GEMS-RAG: Graph-grounded Engineering Multimodal Standards Retrieval-Augmented Generation

- **作者**：Abdul Hannan Azad、Irvin Wang、Jiwan Jiang、Chenchen Kuai、Bofeng Cao、Keshu Wu、Yuzhou Wang、Xiaopeng Li、Yang Zhou
- **分类**：cs.AI, cs.LG
- **发布时间**：2026-10-23 20:41:44 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.33277v1) · [PDF](https://arxiv.org/pdf/2610.33277v1)
- **匹配方向**：LLM + 知识图谱、LLM + CAD 二维图纸

### 快速理解

- **研究背景**：工程标准通常具有层级化、多模态且高度关联的特点，包含条文、图表、交叉引用和规范性规则，这对大语言模型和现有以非结构化文本检索为主的 RAG 方法构成挑战。许多问题需要同时对文本条款、视觉规范和文档结构进行联合推理，单纯文本检索难以胜任。
- **核心创新**：GEMS-RAG 提出图接地的工程多模态标准 RAG 框架，将层级解析、细粒度视觉实体抽取、多模态知识图谱构建和图接地混合检索结合起来。其关键创新是不再把图视为整体图像，而是拆解为有意义的视觉实体，并将其关联到文本条款、工程概念和监管规则。
- **方法概览**：在推理阶段，GEMS-RAG 融合稠密检索、稀疏检索和视觉检索，并通过图谱扩展在文本、图表和文档结构之间定位相关证据。作者在 MUTCD 这一包含规范条文、技术图纸和标准化交通控制设备的大型工程标准上进行评估。
- **结果与结论**：摘要显示，图接地多模态检索在检索效果和问答性能上优于文本 RAG、多模态 RAG 和图基线方法，但摘要未提供具体指标数值。
- **一句话 takeaway**：GEMS-RAG 的价值不仅限于 MUTCD，还可推广到工程规范、技术手册、监管文件和科学标准等安全关键场景。其核心启示是：对工程标准问答而言，结构化图谱与多模态证据的联合建模优于仅依赖文本块检索。

**摘要**：Engineering standards are challenging knowledge sources for large language models (LLMs) because they are hierarchical, multimodal, and densely connected through figures, tables, cross-references, and normative rules. Existing retrieval-augmented generation (RAG) methods often rely on unstructured text retrieval and struggle with questions requiring joint reasoning over textual provisions, visual specifications, and document structure. We propose GEMS-RAG (Graph-grounded Engineering Multimodal Standards Retrieval-Augmented Generation), a framework for grounded reasoning over engineering standards. GEMS-RAG combines hierarchical parsing, fine-grained visual entity extraction, multimodal knowledge graph construction, and graph-grounded hybrid retrieval. Instead of treating figures as monolithic images, it decomposes them into meaningful visual entities linked to textual provisions, engineering concepts, and regulatory rules. During inference, dense, sparse, and visual retrieval are combined with graph expansion to identify relevant evidence across text, figures, and document structure. We evaluate GEMS-RAG on the Manual on Uniform Traffic Control Devices (MUTCD), a large engineering standard containing egulations, technical drawings, and standardized traffic-control devices. Results show that graph-grounded multimodal retrieval improves retrieval effectiveness and question-answering performance over text-only, multimodal, and graph-based RAG baselines. Beyond MUTCD, GEMS-RAG offers a general framework for reasoning over engineering codes, technical manuals, regulatory documents, and scientific standards in safety-critical applications.

## 15. Ontology-Guided Knowledge Graph Construction from Structured Metadata and Climate Science Publications

- **作者**：Aayush Acharya、Qi Zhang、Eduard Dragut、Longin Jan Latecki
- **分类**：cs.CL, cs.AI
- **发布时间**：2026-10-23 14:46:13 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.32725v1) · [PDF](https://arxiv.org/pdf/2610.32725v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：科学文献增长远超人工整理速度，导致从文本中提取结构化知识成为瓶颈，尤其在气候科学等知识密集领域。
- **核心创新**：提出本体引导的 agentic 知识图谱构建框架，通过专门 agent 负责文档理解、信息抽取、本体一致性和实体链接。核心约束是强制 schema 一致性并要求三元组附带文本证据，使结果语义一致且可追溯。
- **方法概览**：LLM 先从论文中抽取带明确文本证据的事实三元组，再经多阶段验证将其落地到本体并检查模式约束。随后在 1000 个三元组上评估与三名标注者的一致性，并将流程扩展到 2000 篇气候科学出版物。
- **结果与结论**：Gemini-2.5-flash 与三名标注者的 Cohen's κ 为 0.640–0.700，接近人与人一致范围 0.616–0.689。构建的气候科学知识图谱含 133,990 个节点和 755,308 条关系；出版物贡献并经校验的 23,327 个三元组中 98.96% 被判定正确。
- **一句话 takeaway**：本体约束加证据要求可在保持人工级一致性的同时规模化构建高质量、可溯源 KG，适用于气候科学等需要可信结构化知识的场景。代码与 KG 已开源。

**摘要**：The rapid expansion of scientific literature far outpaces the speed of manual curation, creating a fundamental bottleneck in extracting structured knowledge from scientific texts. To address this, we introduce an agentic, ontology-guided framework for knowledge graph (KG) construction. Our framework utilizes specialized agents for document understanding, information extraction, ontology conformance, and entity linking. First, an LLM extracts factual knowledge in the form of triples with explicit textual evidence from research papers. Then the triplets undergo a multistage verification process to ground the triplets in the ontology. By enforcing schema constraints and requiring evidence in the form of text fragments, we ensure the data is both semantically consistent and traceable. In an agreement study over 1,000 extracted triplets, Gemini-2.5-flash achieves Cohen's $κ$ scores of 0.640--0.700 against three human annotators, matching the human--human agreement range of 0.616--0.689. We applied this framework to 2,000 scientific publications and construct a novel, ontology-grounded KG for climate science with 133,990 nodes and 755,308 relations; of the 23,327 triplets that the publications contribute after validation, 98.96\% are judged correct. The pipeline code and KG is publicly available https://github.com/aayushacharya/climatekg.

## 16. A Topology-Guided GeoAI Agentic Framework for Urban Flood Screening

- **作者**：Yutian Tao、Haoan Feng、Xin Xu、Leila De Floriani
- **分类**：cs.AI
- **发布时间**：2026-10-22 03:22:03 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.30660v1) · [PDF](https://arxiv.org/pdf/2610.30660v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

### 快速理解

- **研究背景**：开放世界 GeoAI 智能体可把公开地理空间数据转化为可及的决策支持，但必须兼顾自主推理、可靠空间分析与人类监督。城市洪水初筛需要透明、可追溯且用户可控的第一遍筛查工具。
- **核心创新**：提出一种拓扑引导的 GeoAI 智能体框架，将离散 Morse 理论与确定性空间计算结合，并把语言模型限定在记录化决策点：从预计算候选表选择持续性阈值、基于证据起草建议、再对照同一证据自审。
- **方法概览**：确定性控制器根据地名、手绘区域或上传边界获取高程、降雨、土壤、土地覆盖、暴露与基础设施等公开图层，提取地形洼地生成候选流域，并用相对洪水优先级评分排序。
- **结果与结论**：在马里兰 College Park 案例中，所选阈值将 278 个原始地形极小值压缩为 70 个流域；这些流域的最低点中有 77% 也被独立计算的 D8 流向模型识别为汇水点。另外四个研究区的 D8 一致性为 61% 至 83%。
- **一句话 takeaway**：该框架通过开放数据、显式空间推理、可追溯证据与三个人工检查点，实现透明的一遍洪水筛查，同时让用户可修订阈值、因子权重与建议，保持重要结论可检查、可控。

**摘要**：Open-world geographic artificial intelligence (GeoAI) agents can transform public geospatial data into accessible decision support for real-world challenges, but must balance autonomous reasoning with reliable spatial analysis and human oversight. We present a topology-guided GeoAI agentic framework for urban flood screening that takes a place name, drawn region, or uploaded boundary and returns ranked candidate basins with an interactive map and report. A deterministic controller retrieves public elevation, rainfall, soil, land-cover, exposure, and infrastructure layers, extracts terrain depressions with discrete Morse theory, and ranks basins with a relative flood-priority score. The language model acts only at recorded decision points: selecting a persistence threshold from a precomputed candidate table, drafting recommendations from computed evidence, and reviewing each recommendation against the same evidence. Three human-in-the-loop checkpoints let users revise the threshold, factor weights, or recommendation. In a College Park, Maryland case study, the selected threshold reduced 278 raw terrain minima to 70 basins, with 77% of these basins' lowest points also identified as sinks by a separately computed eight-direction (D8) flow-routing model. Across four further study areas, agreement ranged from 61% to 83%. By combining open data, explicit spatial reasoning, traceable evidence, and human oversight, the framework enables transparent first-pass flood screening while keeping consequential recommendations inspectable and user-controlled.

## 17. Automated Materials Data and Knowledge Extraction using Machine Learning and Large Language Models

- **作者**：Aravindan Kamatchi Sundaram、B. Pabitramohan Prusty、Rohit Batra
- **分类**：cond-mat.mtrl-sci, cs.AI
- **发布时间**：2026-10-21 15:38:05 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.29895v1) · [PDF](https://arxiv.org/pdf/2610.29895v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：材料科学文献中蕴含大量数据与知识，过去十年研究致力于用机器学习从文本、表格和图件中自动抽取材料信息，以支持材料数据库、知识图谱和后续发现。
- **核心创新**：该综述系统梳理了从启发式规则、NLP、Transformer 编码器到 LLM 与智能体系统的技术演进，并强调跨文本/表格/图表多模态抽取以及问答、AI 协同科学家和闭环自主实验等新能力。
- **方法概览**：作者采用综述方法，比较不同抽取范式的数据集构建、抽取准确率、计算成本、优势与局限，并给出构建更可靠、可扩展材料数据抽取流水线的实践建议。
- **结果与结论**：摘要未提供明确实验结果；其结论性产出是批判性评估现有方法，并指出样本级结构-性质-加工-性能四面体抽取、可靠基准稀缺和非标准术语统一仍是关键挑战。
- **一句话 takeaway**：该文的价值在于为材料文献知识工程提供路线图：优先发展可验证、多模态、与自治实验闭环耦合的抽取系统，同时补足基准与本体/术语治理。

**摘要**：Over the past decade, substantial efforts have been devoted to developing machine learning (ML) methods for extracting materials data and, where possible, materials knowledge directly from the scientific literature. This review traces the evolution of these methods from heuristic, rule-based pipelines through natural language processing (NLP) models and transformer-based encoders to, lastly, large language models (LLMs) and agentic systems capable of extracting materials information across multiple modalities, including text, tables, and figures. Beside construction of large, queryable materials databases and knowledge graphs that support downstream materials discovery, we discuss how these advances have enabled new capabilities, such as, generic question answering across materials science, AI co-scientists and chatbots for research assistance, and closed-loop optimization and discovery when integrated with autonomous laboratories. We critically assess the datasets generated using these approaches, their extraction accuracy and computational costs, and the respective strengths and limitations of different methodologies, and even provide practical guidelines for developing more reliable and scalable materials data extraction pipelines. Finally, we identify key open challenges, including the extraction of full materials structure-property-processing-performance tetrahedron at the sample level, the scarcity of reliable benchmark datasets for systematic evaluation, and the resolution of non-standard materials terminology across different document modalities.

## 18. GALA: Geometry-Aware Language Model for Controllable Object Arrangement

- **作者**：Chucheng Xiang、Runze Wang、Zhi Deng、Ruchao Bao、Yuanwei Zhang、Yuxuan Xie、Hanliu Wang、Liangzhen Fei、Wenzheng Wu、Cheng Wan、Peifeng Li、Zhongyuan Liu、Ligang Liu
- **分类**：cs.GR, cs.AI, cs.CV
- **发布时间**：2026-10-20 14:32:52 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.28280v1) · [PDF](https://arxiv.org/pdf/2610.28280v1)
- **匹配方向**：LLM + CAD 三维模型、LLM + Agent

### 快速理解

- **研究背景**：精细的物体摆放约束（如支撑、包含关系）推理是构建真实3D场景的关键，但现有方法依赖有向包围盒（OBB）等简化物体表示，无法感知详细几何细节，难以满足真实感场景创建的需求。
- **核心创新**：GALA提出了一种具备显式点云感知能力的几何感知语言模型，用于可控物体摆放；同时整理并开源了一个覆盖多种房间类型与精细家具布局的多源场景数据集，为该任务提供基准支持。
- **方法概览**：模型以场景上下文和摆放指令为条件，以自回归方式逐个预测目标物体的6D位姿；训练采用两阶段策略，第一阶段通过预训练任务对齐几何与文本模态，第二阶段针对摆放任务进行微调；作者还构建了plan-place-verify多阶段智能体流水线，将模型用于文本驱动的场景生成。
- **结果与结论**：摘要称其在该基准上的实验中显著优于缺乏显式几何推理能力的基线方法，但未提供具体定量指标数据。
- **一句话 takeaway**：该工作表明显式点云几何感知对精细摆放约束的推理至关重要，GALA及其开源数据集有望推动可控3D场景生成与文本驱动布置任务的发展。

**摘要**：Reasoning about fine-grained placement constraints, such as support and containment, is essential for realistic 3D scene creation. It remains a significant challenge for existing methods that rely on simplified object representations like oriented bounding box (OBB), which are blind to the detailed geometry. To address this limitation, we introduce GALA, a geometry-aware language model with explicit point cloud perception for controllable object placement. Our model performs autoregressively by predicting the 6D pose of one target object at a time conditioned on the scene context and placement instruction. We utilize a two-stage training strategy: the first stage aligns geometric and textual modalities through pretraining tasks, and the second stage fine-tunes the model for placement. To facilitate this task, we also curate a multi-source scene dataset covering diverse room types and fine-grained furniture arrangements, which will be open-sourced for community benefit. Experiments on our benchmark show our model significantly outperforms baselines without explicit geometric reasoning. We further develop a multi-stage plan-place-verify agent pipeline that uses the model for text-driven scene generation. Project Page: https://xccelephant.github.io/paper/gala/

## 19. RANGER: Retrieval Agent for Navigating Graphs with Semantic Evaluation Rewards

- **作者**：Artem Mikhaylov、Pavel Konoplev、Nikolay Efanov、Artyom Sorokin、Evgeny Burnaev
- **分类**：cs.LG
- **发布时间**：2026-10-20 10:53:41 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.28010v1) · [PDF](https://arxiv.org/pdf/2610.28010v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：大语言模型在多跳知识图谱问答等复杂序列决策任务中虽有强语义理解能力，但难以精确执行多步导航；强化学习代理擅长学习导航策略，却受制于难以设计具有语义意义的奖励函数。
- **核心创新**：提出RANGER混合框架，让LLM在训练过程中作为“导师”，基于代理遍历路径的语义相关性生成稠密奖励信号，从而将LLM深度融入强化学习训练循环。
- **方法概览**：强化学习代理采用基于Transformer的策略，使用Group Relative Policy Optimization（GRPO）进行训练，在知识图谱中导航检索相关信息；LLM评估路径与查询信息需求的语义匹配程度并生成奖励，整体集成到完整的问答流水线中。
- **结果与结论**：在开放问答数据集上的实验表明，该方法优于使用经典图搜索的检索增强基线以及使用启发式奖励训练的RL代理基线，NLP指标和LLM-as-a-Judge评分均有显著提升。
- **一句话 takeaway**：研究表明，将LLM深度整合进强化学习训练循环，能够产生更有效、语义对齐更好的检索策略，为复杂推理任务提供了有前景的技术方向。

**摘要**：The integration of Large Language Models and Reinforcement Learning offers a promising direction for complex sequential decision-making tasks, such as multi-hop question answering over knowledge graphs. While LLMs provide strong semantic understanding and reasoning capabilities, they often struggle with precise, multi-step navigation in structured environments. Conversely, RL agents excel at learning navigation policies but are hindered by the difficulty of designing semantically meaningful reward functions. This paper introduces a novel hybrid approach in which an LLM serves as a mentor to an RL agent during training by providing dense, semantically informed reward signals. The RL agent, built on a Transformer-based policy and trained with Group Relative Policy Optimization, learns to navigate a knowledge graph to retrieve relevant information. The LLM evaluates the semantic relevance of the agent's traversed paths, generating reward signals that align the agent's behavior with the information needs expressed in a query. We integrate this Retrieval Agent for Navigating Graphs with Semantic Evaluation Rewards (RANGER) into a complete question-answering pipeline and evaluate it on the open question answering datasets. Experimental results show that the proposed approach outperforms both a baseline retrieval-augmented system with classical graph search and one using an RL agent trained with heuristic rewards, achieving a significant increase in NLP metrics and LLM-as-a-Judge scores. Our findings demonstrate that deep integration of LLMs into the RL training loop yields more effective and semantically aligned retrieval policies for complex reasoning tasks.

## 20. Autonomous intelligence for mining productivity: a multi-agent AI approach to operational value creation

- **作者**：N Guerin、A Dehoux、M Nakhla
- **分类**：cs.AI, cs.MA
- **发布时间**：2026-10-19 13:24:44 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.26369v1) · [PDF](https://arxiv.org/pdf/2610.26369v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

### 快速理解

- **研究背景**：综合远程运营中心（IROC）正成为矿业、油气等资本密集型行业工业4.0的架构前沿，但目前缺乏面向矿业IROC的集成智能体架构，也缺少兼顾实时性、健康安全环境、监管可审计性和决策成本的评估框架。
- **核心创新**：论文提出EI2ROC三层多智能体架构，以大型语言模型为编排器，结合专用监控与产能预测智能体，通过类似模型上下文协议的工具接口通信；同时提出涵盖六个正交维度的智能体评估批判性综述，并针对工业智能体AI构建包含场景库、测试框架、指标和人工校准协议的多维基准框架。
- **方法概览**：作者首先综合行业需求及类似行业中可量化的收益证据，随后设计EI2ROC架构，并明确区分当前原型已实现组件、参考设计组件和未来工作，最后报告来自运营现场的初步成本与延迟观察。
- **结果与结论**：摘要仅提及来自实际运营现场的初步成本与延迟观察，但未给出具体数值或明确的实验结果，无法评估性能优劣。
- **一句话 takeaway**：EI2ROC与配套基准框架共同构成可跨资本密集型行业迁移的方法论蓝图，其价值主张在于将智能体架构与安全关键约束及工业级评估标准结合，填补当前基准测试的工业盲区。

**摘要**：Integrated Remote Operation Centres (IROCs) are emerging as the architectural frontier of Industry 4.0 for capital-intensive sectors such as mining, oil and gas, and energy. Yet two intertwined gaps constrain their evolution towards full autonomy. First, no integrated agentic architecture has been proposed for mining IROCs that orchestrates Supervisory Control and Data Acquisition systems, digital twins, predictive analytics and human-machine interfaces under safety-critical constraints. Second, no evaluation framework jointly addresses the real-time, Health-Safety-Environment, regulatory-auditability and cost-per-decision requirements that govern industrial agentic deployments. This paper makes four contributions. It synthesises industry needs and quantified gains documented in analogous industries that motivate an agentic approach to mining IROCs. It introduces EI2ROC, a three-tier multi-agent architecture combining a Large Language Model orchestrator with specialised monitoring and production-capacityprediction agents communicating through a Model Context Protocol-style tool interface. It provides a critical review of agentic evaluation along six orthogonal dimensions and identifies the industrial blind spot of current benchmarks. Finally, it proposes a multi-dimensional benchmarking framework for industrial agentic AI comprising scenario library, harness, metrics and humancalibration protocol. The paper states explicitly which components are implemented in the current prototype, which belong to the proposed reference design and which remain future work, and reports preliminary cost and latency observations from an operating site. Together, EI2ROC and the benchmarking framework constitute a methodological blueprint transferable across CAPEX intensive industries.

## 21. Decision4Rec: A Jev-Inspired Framework of Decision Models on Knowledge and Active Graphs for Multi-Agent Recommender Systems

- **作者**：Marco Polignano、Het Darshan Mehta、Pasquale Lops、Ernesto William De Luca、Giovanni Semeraro
- **分类**：cs.AI, cs.CL, cs.IR
- **发布时间**：2026-10-19 08:56:56 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.26035v1) · [PDF](https://arxiv.org/pdf/2610.26035v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Decision models, such as the commercial Jev, are language models that return one probability for each option of a question instead of generating text. We present Decision4Rec, an open and modular framework that makes decision models useful for recommendation. A knowledge graph writes the logs of each recommendation scenario as short statements on a defined scale, such as "sold: top 10%". A pool of agents, proposes candidates, and a residual ranker keeps the best 30. A decision model, trained once on real choices of three scenarios, reads them through one interface of typed questions, and a fusion step combines its answers with the score of the ranker. Any model with this interface can be used, and we run the commercial Jev, the released open Kev and Kev models trained by us on recommendation requests. The framework with a trained 4B decision model is 25 to 36% above the best trained baseline in NDCG@10 in three sparse Amazon catalogues, one of them never used to train the decision model, and almost tie with baselines on the dense Steam dataset. Most of the gain comes from the pool, and with a trained recommender it comes from what the agents know about its candidates rather than from new candidates. The 27B decision model adds to the pool 5 to 6% above the 0.8B model in three of four domains. A trained 0.8B open model beats the released Jev in eleven of fifteen settings and is never worse. On MovieLens-1M, a dense domain never seen in training, the gain is 5 to 7%. Code, configurations and trained models are available at https://github.com/marcopoli/decision4rec and https://huggingface.co/m-polignano.

## 22. Outcome-Anchored Credit Reallocation for Agentic Knowledge Graph Question Answering

- **作者**：Mingyuan Li、Yucheng Li、Xiaxia Wang、Gong Cheng
- **分类**：cs.AI, cs.CL, cs.LG
- **发布时间**：2026-10-18 16:36:50 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.25384v1) · [PDF](https://arxiv.org/pdf/2610.25384v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：智能体式知识图谱问答需要 LLM 通过多轮交互在 KG 上求解复杂问题；基于结果监督的强化学习虽能用最终答案给出可验证奖励，但会把同一 rollout 的结局优势均匀分配给所有生成 token，忽略了不同 KG 操作对搜索过程和最终答案的影响差异。
- **核心创新**：本文提出 Outcome-Anchored Credit Reallocation（OACR），用仅在训练时使用的 KG 状态结局模型估计相邻 KG 搜索状态间的结局奖励变化，并转化为操作信用，再得到 token 级权重。该权重以乘性方式重新分配 token 更新幅度，同时保持每个生成 token 上结局优势符号不变。
- **方法概览**：OACR 通过训练专用的 KG 状态结局模型比较相邻搜索状态，估计结局奖励变化并生成操作信用，再映射为 token-wise 权重用于强化学习更新；方法在三个 KGQA 基准上与现有方法对比，并考察推理时 LLM 调用次数与 token 消耗。
- **结果与结论**：摘要称 OACR 在三个基准上整体优于现有 KGQA 方法，同时使用更少的推理时 LLM 调用和 token；但摘要未提供具体实验数值或显著性细节。
- **一句话 takeaway**：关键启示是：agentic KGQA 的信用分配不应把最终结局奖励平均摊到全部 token，而应锚定到 KG 搜索状态的结局变化；OACR 以较低推理成本改进了有效性与效率。

**摘要**：Agentic knowledge graph question answering (KGQA) requires large language models (LLMs) to solve complex questions through multi-turn interactions with a knowledge graph (KG). Outcome-supervised reinforcement learning derives verifiable outcome rewards from final answers but uniformly assigns each rollout's outcome-level advantage to all policy-generated tokens, creating a trajectory-to-operation mismatch since KG operations within a rollout can have varying effects on the search process and final answer. To address this, we propose Outcome-Anchored Credit Reallocation (OACR), which employs a training-only KG-state outcome model to estimate outcome-reward changes between adjacent KG search states and converts them into operation credit, from which token-wise weights are derived. These multiplicative weights reallocate token-level update magnitudes while preserving the sign of the outcome-level advantage at every generated token. Across three benchmarks, OACR achieves stronger overall performance than existing KGQA methods while using fewer inference-time LLM calls and tokens.

## 23. Bridging Concepts: Multi-Agent Reasoning over Scientific Concept Graphs for High-Impact Research Prediction

- **作者**：Donggyu Yoon、Minsung Hwang、Juneha Baek、Donghyuk Shin、Joyce Jiyoung Whang
- **分类**：cs.AI, cs.IR, cs.LG
- **发布时间**：2026-10-18 13:56:40 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.25281v1) · [PDF](https://arxiv.org/pdf/2610.25281v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：研究社区中的新主题往往在原本不相关的概念被首次结合研究时涌现。作者构建了科学概念图（SCGs），其节点是由 LLM 从论文文本中抽取的细粒度研究概念，边表示概念在论文中的共现关系，并研究预测高影响概念对的任务，即发现当前尚未连接但未来连接后会产生高影响的概念对。
- **核心创新**：提出了 MiroGraph，一种基于科学概念图的多智能体推理框架，将特征设计、特征计算与分类器构建解耦给不同的 LLM 智能体协作完成。同时构建了来自 CIKM、KDD 和 SIGIR 会议论文的新基准数据集，涵盖多种预测设置，包括对训练时未见过的涌现概念进行影响预测。
- **方法概览**：框架包含一个特征设计智能体，从结构、语义和趋势三个视角为给定概念对设计预测特征；随后三个 LLM 智能体从概念对的封闭子图中计算实际特征值；最后分类器设计智能体利用这些特征值构建分类器，预测最终的影响标签。
- **结果与结论**：MiroGraph 在多种影响预测和时间链路预测方法上均取得更优性能，但摘要未给出具体的量化实验指标。
- **一句话 takeaway**：该工作表明将 LLM 多智能体推理与科学概念图结合，可以有效预测潜在的高影响概念组合，为科研方向发现提供了新的方法路径和基准资源。

**摘要**：Within a research community, new topics often emerge when previously unconnected concepts are first studied together. We construct scientific concept graphs (SCGs)--domain knowledge graphs whose nodes are fine-grained research concepts extracted from paper text by LLMs and whose edges capture their co-occurrence in papers--and study the task of forecasting high-impact concept pairs, i.e., discovering concept pairs that are currently unconnected but will have high impact when connected. To this end, we introduce new benchmark datasets constructed from CIKM, KDD, and SIGIR conference papers, with varied prediction settings, including impact forecasting for emerging concepts unseen during training. We propose MiroGraph, a Multi-agent reasoning framework with scientific concept Graphs, in which a feature designer agent designs predictive features for a given concept pair from structural, semantic, and trend perspectives, and then three LLM agents compute the actual feature values from the enclosing subgraph of the concept pair. Using these feature values, a classifier designer agent constructs a classifier that predicts the final impact labels. MiroGraph outperforms various impact forecasting and temporal link prediction methods.

## 24. Dialogue Generation for Conversational Recommendation Using User Search Interactions and Knowledge Graphs

- **作者**：Minsung Hwang、Donggyu Yoon、Gowoon Hwang、Kwanghee Jang、Joyce Jiyoung Whang
- **分类**：cs.AI, cs.CL, cs.LG
- **发布时间**：2026-10-18 11:11:22 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.25182v1) · [PDF](https://arxiv.org/pdf/2610.25182v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：大规模对话推荐数据集通常依赖人工构建对话或标注，成本高昂。本文旨在利用用户真实的搜索与点击行为自动生成有依据的对话推荐数据。
- **核心创新**：提出SearCl框架，将用户交互分割为查询会话，并以搜索查询后选中的内容作为推荐目标，无需人工标注即可构建对话推荐数据集。
- **方法概览**：通过可配置的概率状态机控制对话流程，由分别扮演寻求者与推荐者的两个LLM智能体按轮次级约束生成话语；推荐者还利用由内容元数据构建的知识图谱（包含内容属性与关系）来支撑推荐。
- **结果与结论**：使用SearCl从搜索与点击交互数据中生成了3,538段对话，覆盖1,731个不同的目标内容项；在LLM-as-a-judge评估协议下，生成对话的质量得分高于现有基准数据集的对话。
- **一句话 takeaway**：SearCl证明了无需人工标注即可实现可控的、知识驱动的对话推荐数据集构建，为对话推荐研究提供了可扩展的数据生成方案。

**摘要**：Large-scale conversational recommendation datasets typically require manual dialogue construction or annotation. We propose SearCl, which automatically generates conversational recommendation dialogues grounded in user search and click behaviors. SearCl segments user interactions into query sessions and derives each recommendation target from content selected after a search query. A configurable probabilistic state machine controls the dialogue flow, while two LLM agents acting as the seeker and recommender generate utterances according to turn-level constraints. To support recommendation, the recommender is provided with knowledge graphs constructed from metadata about the content items used in each dialogue, capturing their attributes and relationships. Using SearCl, we generate 3,538 dialogues from content search and click interaction data, covering 1,731 unique target items. Under an LLM-as-a-judge protocol, the resulting dialogues achieve higher quality scores than dialogues from existing benchmarks. These results demonstrate that SearCl enables controllable and knowledge-grounded dataset construction without human annotations.

## 25. Librarian Agents: Training LLMs to Curate Long-Context Workspaces that Anticipate Future Queries

- **作者**：Anikait Singh、Teresa Zhang、Yoonho Lee、Roshen Sanjay Nair、Aviral Kumar、Chelsea Finn
- **分类**：cs.LG, cs.AI, cs.CL
- **发布时间**：2026-10-15 17:35:17 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.22273v1) · [PDF](https://arxiv.org/pdf/2610.22273v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：LLM在长文档上下文推理中仍面临困难：标准检索方法是反应式的，在推理时成为瓶颈，而知识图谱等预计算结构依赖僵化启发式规则，效果有限。现有智能体善于在已有文件系统中完成即时任务，却很少被训练来构建可供未来复用的工作区。
- **核心创新**：作者提出Librarian Agents框架，让构建智能体将原始文档主动重组为由合成文件和参考链接构成的层次化文件系统工作区，以服务下游回答智能体。其核心思想是预期式定向整理：在推理前主动重组非结构化语料，以高效应对多样化未来查询。
- **方法概览**：将工作区构建建模为马尔可夫决策过程，通过强化学习优化构建策略，直接以最大化下游回答准确率为目标进行训练，构建出的文件系统工作区供下游回答智能体使用。
- **结果与结论**：Librarian Agents在BrowseComp-Plus上比最强的检索和预计算基线高出33个百分点；前期构建成本可在重复查询中摊销；并在BRIGHT上对未见领域实现零样本泛化，平均准确率提升31个百分点。
- **一句话 takeaway**：让智能体学习预先整理可复用的工作区，是克服反应式检索瓶颈的有效途径；通过强化学习直接优化下游任务表现，可以构建出超越检索和启发式预计算方法的长上下文工作区。

**摘要**：Reasoning over long document contexts remains a challenge for large language models (LLMs). Standard retrieval methods are inherently reactive, bottlenecking agents with complex, cross-document reasoning at inference time, while precomputed structures like knowledge graphs often fall short because they rely on rigid heuristics. Instead, can we allow agents to perform anticipatory directed curation: learning to proactively reorganize unstructured corpora prior to inference to efficiently serve diverse future queries. We build on a key asymmetry in modern agentic harnesses (e.g., Claude Code): while LLM agents are adept at navigating existing filesystems to solve an immediate task, they are rarely trained to construct reusable workspaces for future use. To instantiate this capability, we introduce Librarian Agents, a framework in which a builder agent transforms raw documents into a hierarchical filesystem of synthetic files and reference links, which forms a workspace tailored for a downstream answering agent. We formulate workspace construction as a Markov decision process and optimize the builder policy via reinforcement learning to directly maximize downstream answering accuracy. Empirically, Librarian Agents outperforms the strongest retrieval and precomputation baselines by 33 percentage points on BrowseComp-Plus, amortizes upfront construction costs across repeated queries, and generalizes zero-shot to unseen domains on BRIGHT with a 31-point average accuracy improvement.

## 26. DeciCAD: Harness-Grounded Learning of Action Policies for CAD Agents

- **作者**：Yufeng Peng、Yixin Zhang、Ziyi Liu、Zhikun Xu、Jiarong Yang、Sijie Wang、Wenjie Feng、Qiyu Kang
- **分类**：cs.AI, cs.CL, cs.LG, cs.RO
- **发布时间**：2026-10-15 12:11:43 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.21755v1) · [PDF](https://arxiv.org/pdf/2610.21755v1)
- **匹配方向**：LLM + CAD、LLM + Agent

### 快速理解

- **研究背景**：大语言模型智能体依赖 agent harness 定义的闭环动作空间执行任务，而 CAD 具有持久状态、几何约束和长程操作等特点。该研究考察 harness 所诱导的决策空间如何影响 CAD 智能体的执行与策略学习。
- **核心创新**：论文提出领域原生的 DeciCAD harness，提供语义化 CAD 动作、面向决策的观察、环境反馈和状态转移机制。其学习流水线从交互轨迹中提取因果决策监督，并结合监督微调与几何感知在线强化学习优化策略。
- **方法概览**：研究在四个 CAD 基准上，将 DeciCAD 与通用编程 harness 比较，并在相同监督条件下评估 SFT 策略及后续在线 RL 的增益。实验重点考察 F1、交并比、几何可用性和输出 token 数量。
- **结果与结论**：DeciCAD 在四个基准上取得最佳 F1 和 IoU，并比通用编程 harness 减少 45%–88% 的模型输出 token。匹配监督下，SFT 将 F1 从 0.6883 提升至 0.7437；在线 RL 进一步将几何可用性从 66.5% 提高到 73.5%，并将 F1 提升至 0.7880。
- **一句话 takeaway**：结果表明，harness 设计的决策空间不仅直接影响 CAD 智能体的执行效率，也显著影响监督微调和强化学习的效果。面向领域语义与状态结构的原生 harness 是提升专业智能体能力的重要基础。

**摘要**：Large Language Model agents operate through closed-loop action policies whose decision space is defined by an agent harness. We investigate how this operating space shapes agent behavior and policy learning in computer-aided design (CAD), a professional domain characterized by persistent state, geometric constraints, and long-horizon procedures. We instantiate this perspective in DeciCAD, a domain-native harness that exposes semantic CAD actions, decision-oriented observations, environment feedback, and persistent state transitions. Building on this harness, we develop a learning pipeline that extracts causal decision supervision from interaction trajectories and improves the policy through supervised fine-tuning (SFT) and geometry-grounded online reinforcement learning (RL). Across four CAD benchmarks, DeciCAD achieves the best F1 and intersection over union (IoU) while reducing model-output tokens by 45--88% relative to a general-purpose coding harness. Under matched supervision, its SFT policy improves F1 from 0.6883 to 0.7437 and outperforms the coding policy; subsequent online RL further raises geometry availability from 66.5% to 73.5% and F1 to 0.7880. These results demonstrate that the decision space induced by a harness materially affects both agent execution and policy learning in CAD.

## 27. BlenderWorld: Benchmarking Visual Agents for 3D Creation from Real-World References

- **作者**：Xinyu Fang、Yuchi Wang、Weihao Yu、Rongyao Fang、Zhaohai Li、Zhixun Li、Tiancheng Gu、Xilin Wei、Yuhang Zang、Hongsheng Li、Dahua Lin、Guofeng Zhang、Shuai Bai、Zhibo Yang、Dayiheng Liu
- **分类**：cs.CV
- **发布时间**：2026-10-14 12:46:54 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.23986v1) · [PDF](https://arxiv.org/pdf/2610.23986v1)
- **匹配方向**：LLM + CAD 三维模型、LLM + Agent

### 快速理解

- **研究背景**：多模态大语言模型（MLLM）正被用作自主智能体，通过编写代码或直接操作软件来创建和编辑3D模型，实际工作流程要求模型从多样化参考中推断物体形状、材质、空间布局和光照。然而，现有基准测试对这类真实场景下的开放式3D创作请求覆盖有限，缺乏系统评估。
- **核心创新**：作者提出BlenderWorld，这是首个专门评估前沿模型在真实感3D创作任务上表现的综合基准，包含223个任务，涵盖建筑、产品、自然环境和科学可视化四大领域，输入形式包括文本、图像、视频和结构化规格。
- **方法概览**：研究者建立了统一的评估协议：将提交的Blender项目从多个视角渲染，对照2,651条任务特定的二元评分细则以及整体视觉质量分数进行综合评判，并测试了13个前沿模型。
- **结果与结论**：基准测试结果显示，GPT-6-Astra以79.9的综合融合得分领先，其次是Opus-5（73.0）和GPT-5.6-Sol（67.7）。
- **一句话 takeaway**：当前模型虽能解析宽泛指令，但在细粒度3D空间一致性和Blender中的精确结构还原方面仍存在显著瓶颈，表明面向未来的原生3D智能体还有很大改进空间。

**摘要**：Recent advances in multimodal large language models (MLLMs) have enabled them to act as autonomous agents, creating and editing 3D models via code or direct software manipulation. In practical workflows, these models must infer object shapes, materials, spatial layouts, and lighting from diverse references while strictly following instructions to reconstruct, modify, or design 3D content. However, existing benchmarks provide limited coverage of such open-ended requests across real-world scenarios. To bridge this gap, we introduce BlenderWorld, the first comprehensive benchmark dedicated to evaluating frontier models on realistic 3D creation tasks. BlenderWorld comprises 223 tasks spanning architecture, products, natural environments, and scientific visualization, driven by text, image, video, and structured specification inputs. To rigorously assess these complex deliverables, we establish a unified evaluation protocol: we render the submitted Blender projects from multiple viewpoints and evaluate them against 2,651 task-specific binary rubrics alongside holistic visual quality scores. Benchmarking thirteen frontier models reveals that GPT-6-Astra achieves the highest overall fused score of 79.9, followed by Opus-5 (73.0) and GPT-5.6-Sol (67.7). Ultimately, our findings reveal a critical bottleneck: while current models can parse broad instructions, they still profoundly struggle with fine-grained 3D spatial coherence and accurate structural reproduction in Blender, leaving substantial headroom for future 3D-native agentics.

## 28. Knowledge Graphs as Files: An Agent Harness Where Tool Creation and Tool Use Co-Evolve

- **作者**：Yuyang Bai、Yu Wang、Yu Zhang
- **分类**：cs.CL, cs.AI, cs.IR
- **发布时间**：2026-10-13 16:00:50 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.18616v2) · [PDF](https://arxiv.org/pdf/2610.18616v2)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

### 快速理解

- **研究背景**：文本密集型知识图谱检索需要沿关系追踪并核对文本证据，但预定义图接口会限制智能体能访问的证据范围，即使智能体编写代码组合工具或处理返回子图也难以突破。
- **核心创新**：提出直接知识图交互（DKGI），让语言模型智能体基于完整的节点与边文件直接创建图访问工具，使工具创建与工具使用协同演化，而非受限于固定接口。
- **方法概览**：智能体编写 Python 代码沿关系遍历、合并节点集并挑选文本证据，执行反馈与 shell 搜索、文件查看交错进行；执行结果用于指导工具的创建与修订，动态决定下一步采集何种证据。
- **结果与结论**：在三个领域基准数据集上，无需训练的 DKGI 在每个图上至少以 6.7 Hit@1 超过最强已发表基线；消融实验显示多轮编程优于仅 shell 访问和预定义图工具，轨迹分析表明智能体会修改代码扩展搜索或修复错误。
- **一句话 takeaway**：允许工具创建与工具使用在图搜索过程中协同演化，能显著提升智能体访问和利用文本证据的能力，为训练-free 的图检索智能体提供了更灵活有效的方案。

**摘要**：Searching text-rich knowledge graphs requires following relations while examining textual evidence. Predefined graph interfaces constrain what evidence agents can access, even when they write code to combine tool calls or process retrieved subgraphs. We propose direct knowledge graph interaction (DKGI), a harness in which language model agents create graph access tools directly over complete node and edge files. The agent writes Python code to follow relations, combine node sets, and select textual evidence, interleaving execution with shell search and file inspection. This lets agents process large node sets in bulk while returning selected text for the model to assess. Execution feedback guides tool creation and revision, while the evolving tools determine what evidence the agent gathers next. On benchmark datasets spanning three domains, training-free DKGI exceeds the strongest published baseline by at least 6.7 Hit@1 points on every graph, even with a minimal harness. Controlled ablations show the benefits of multi-turn programming over shell-only access and predefined graph tools, while trajectories show agents revising code to extend searches or address errors. These findings highlight the value of allowing tool creation and tool use to co-evolve during graph search. Our code and data are available at https://github.com/leopoldwhite/DKGI.

## 29. SLS-Bench: A Benchmark for Incident Log Summarization with Synthetic Observability Data

- **作者**：Valerii Iakovlev、Markus Spanring、Martin Flechl
- **分类**：cs.AI
- **发布时间**：2026-10-12 08:46:35 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.16412v1) · [PDF](https://arxiv.org/pdf/2610.16412v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

### 快速理解

- **研究背景**：随着IT系统日益复杂，智能体驱动的自动化事件响应变得至关重要，其中将海量日志流总结为可读报告是关键能力。然而，由于真实数据收集成本高昂且复杂，现有基准对从大规模日志流进行端到端摘要的评测仍不充分。
- **核心创新**：作者提出了SLS-Bench——一个面向事件日志摘要的基准，包含90个基于真实事件报告构建的任务，每个任务配有合成日志流和参考摘要。其核心创新在于一条将事件报告转化为结构化事件模型的数据生成流水线，该流水线结合叙事 grounding、显式事件建模、生成器-验证器循环以及与真实日志流的统计对比，生成逼真且可控的可观测性数据。
- **方法概览**：该流水线先将真实事件报告转换为结构化事件模型，再据此引导合成日志和参考摘要的生成，并通过生成器-验证器循环和统计对比保证数据的真实性与可控性。随后用该基准对14个大语言模型进行评测。
- **结果与结论**：评测表明，前沿模型虽能生成有用的摘要，但需付出高昂的成本和延迟代价；开源权重模型则明显落后。
- **一句话 takeaway**：SLS-Bench为日志分析智能体的系统性评测提供了框架，同时也为未来合成可观测性基准的建设提供了可扩展的蓝图。

**摘要**：As IT systems grow in complexity, automated agent-driven incident response becomes increasingly critical. A key capability for these agents is summarizing large log streams into human-readable reports. Further progress requires meaningfully evaluating this function, yet existing benchmarks leave end-to-end summarization from large log streams underexplored due to the prohibitive cost and complexity of collecting real-world data. We introduce SLS-Bench, a benchmark for incident log summarization featuring 90 tasks grounded in real-world incident reports, each with a synthetic log stream and a reference summary. To construct SLS-Bench, we developed a data generation pipeline that converts incident reports into structured incident models, which guide the generation of synthetic logs and reference summaries. This pipeline combines narrative grounding, explicit incident modeling, generator-verifier loops, and statistical comparisons with real-world log streams to produce realistic and controllable observability data. Our evaluation of 14 LLMs on SLS-Bench shows that while frontier models can produce useful summaries, they do so at substantial cost and latency, and open-weight models lag significantly. SLS-Bench provides a framework for systematic evaluation of log analysis agents and a scalable blueprint for future synthetic observability benchmarks.

## 30. Unravel: Recovering an Interactive 3D Scene from a Single Image

- **作者**：Hui Shan、Keyang Luo、Binjia Zhou、Ming Li、Kai Li、Xin Wang、Zhenyang Li、Zesong Yang、Weikai Chen、Runze Zhang、Xin Wang、Yanwei Fu、Zhen Chen、Xiangru Huang
- **分类**：cs.CV, cs.AI
- **发布时间**：2026-10-12 04:08:17 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.16146v1) · [PDF](https://arxiv.org/pdf/2610.16146v1)
- **匹配方向**：LLM + CAD 三维模型、LLM + Agent

### 快速理解

- **研究背景**：现有方法难以从单张图片生成可交互的3D场景：要么输出一个整体纠缠的几何体，无法移动任何物体；要么一次性前向预测所有物体，一旦某个物体预测错误便无法检测和修复。
- **核心创新**：Unravel是一个免训练的框架，采用“先拆解、再重建”的全新范式，将图像逐层剥离，使每个物体都能作为独立可移动资产进行重建。它把观测到的点云视为物体尺寸的下界（物体只能长大、不能缩小），并通过物理沉降和智能审计保证场景物理合理性。
- **方法概览**：首先由视觉语言模型规划哪些物体当前完整可见，用图像编辑工具移除该物体并修复被遮挡区域，每次编辑都经过验证后才纳入重建；随后按移除的反序重建场景，使支撑物先于被支撑物放置；最后通过物理沉降消除悬浮与穿插，并由agent审计修正残余摆放错误。
- **结果与结论**：在多种室内场景上的大量实验表明，Unravel能比现有方法恢复出更多物体、摆放更忠实、场景物理合理性更高；摘要未提供具体定量实验数据。
- **一句话 takeaway**：将场景分解为“逐层剥离—验证—反序重建”的迭代过程，并配合点云下界约束、物理沉降和智能审计，是一种有效且免训练的从单图恢复可交互3D场景的新思路。

**摘要**：We present Unravel, a training-free framework that turns a single image into an interactive 3D scene, where every object is an independent and movable asset. Existing generators either produce one entangled geometry in which no object can be moved, or predict all objects in one feed-forward pass, where a wrong guess cannot be detected or repaired. Unravel instead takes a different approach: it first takes the scene apart, and then puts it back together. Starting from the input image, an agentic harness that iteratively peels the image layer by layer, and adopts point cloud as major modality for spatial relationship recovery. Specifically, a vision-language model plans which objects are fully visible, an image editor removes them and restores the occluded regions. Every edit is verified before being incorporated into the reconstruction. This process gradually turns occluded parts of the scene into direct observation, allowing objects to be reconstructed when they are best exposed rather than hallucinated from the original image alone. The scene is then rebuilt in reverse removal order, so that the supporting objects are naturally placed before the objects they support. Since a single-view image only reveals part of an object, we treat the observed points as a lower bound on its size: an asset may grow to cover its points, but can not shrink away from them. Finally, we physically settle the reconstructed scene to remove floating objects and interpenetrations, followed by an agentic audit that corrects remaining placement errors. Extensive experiments on diverse indoor scenes show that Unravel recovers more objects, places them more faithfully, and produces scenes that are more physically-plausible than existing methods.

## 31. SEEK: Agentic Knowledge Graph Retrieval for Secure Code Generation

- **作者**：Varun Gadey、Markus Tohn、Lichao Wu、Ahmad-Reza Sadeghi、Alexandra Dmitrienko
- **分类**：cs.CR, cs.LG
- **发布时间**：2026-10-10 14:37:22 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.14968v1) · [PDF](https://arxiv.org/pdf/2610.14968v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Large Language Models (LLMs) can generate functionally correct code while introducing exploitable security weaknesses, particularly when developers specify functionality without explicit security requirements. Recent state-of-the-art approaches mitigate this problem using external security knowledge, but largely rely on flat similarity-based retrieval over independent artifacts, making it difficult to infer the relevant vulnerability space and retrieve targeted knowledge when direct matches are unavailable. We propose SEEK, an agentic Graph RAG framework for secure code generation that constructs a security knowledge graph using the Common Weakness Enumeration (CWE) taxonomy as its structural backbone and injects it with curated real-world CVE vulnerability-fix instances. At inference time, a Planner Agent predicts potential CWE weaknesses associated with the developer query, which guide Graph Scoping to restrict retrieval to relevant regions of the CWE taxonomy before deterministic multi-faceted candidate ranking. A Selection Agent subsequently validates the predicted weaknesses and retrieved candidates prior to code generation. Across five open-source LLMs, we evaluate SEEK in an out-of-distribution setting on CodeGuard+ and CyberSecEval, spanning C, C++, and Python. SEEK achieves the highest SecurePass@1 of 77.45% on CodeGuard+ and the highest aggregate ICD pass rate of 79.45% on CyberSecEval, surpassing prior approaches. Moreover, SEEK achieves 85.2% SecurePass@1 across 13 unseen CWE types with no directly linked vulnerability-fix instances, demonstrating strong generalizability, while maintaining acceptable inference latency costs.

## 32. Iterate on an LLM, Serve on an SLM

- **作者**：Keegan Wang
- **分类**：cs.AI, cs.MA
- **发布时间**：2026-10-10 04:51:24 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.14576v1) · [PDF](https://arxiv.org/pdf/2610.14576v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

**摘要**：As frontier LLMs gain more capabilities, the cost to run them also goes up. At the same time, small language models (SLMs) also gain more capabilities but have largely been able to keep their cost stable, offering 5-40 times cheaper inference for the narrow, repetitive subtasks that agents decompose work into. However, the standing limiting factor is getting the correct behavior out of a small model in a fast, efficient, and economical way. Unfortunately, in most cases, zero-shot small models fail narrow production tasks. Furthermore, retraining one every time the behavior changes is too slow to iterate on. We propose doing both in sequence. First, develop the desired behavior in prompt space, on a frontier model, with immediate feedback from live traffic. Then, once the behavior converges, distill the recorded production behavior (not synthetic imitations of it) into an SLM through supervised fine-tuning (SFT). We show a proper use case of this method through a scheduling agent for home-care agencies that fans out a single yes/no safety decision per caregiver-shift pair on GPT-5.4-nano. A LoRA-tuned Qwen3-8B trained on 11.6k recorded production decisions reaches 0.913 agreement, while the teacher (GPT-5.4-nano), re-run on its own recorded prompts, agrees with itself only 72.7% of the time, pointing to the fact that the SLM may also be more consistent. Furthermore, when the two disagreed, a blinded professional scheduler sided with the student 48-29. Finally, we find that the SLM has approximately 2.5 times lower median latency and is a fraction of the cost. We believe this lifecycle of quick building, live feedback, and cheap inference is a blueprint for others building similar systems.

## 33. SUDO: From Scientific Publications to Global Scholarly Discourse

- **作者**：Nipun D. Pathirage、Henrique Santos、Deborah L. McGuinness
- **分类**：cs.CL, cs.AI, cs.DL
- **发布时间**：2026-10-08 14:09:15 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.33018v1) · [PDF](https://arxiv.org/pdf/2610.33018v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Scholarly Knowledge Graphs (SKGs) support literature search, scientific discovery, and agent-assisted research. Yet, most approaches to SKG construction pre-specify the knowledge unit to be represented, typically named scholarly entities or contribution-level statements, and retain only the publication content expressible through that unit. This choice produces two dominant yet distinct paradigms: concept-centric SKGs that preserve entities and local relations, and statement-centric SKGs that capture high-level discourse in sentences. In both cases, the graph reflects a chosen extraction target rather than how a paper constructs and communicates knowledge. We introduce SUDO, the Scholarly Upper Discourse Ontology, which defines how knowledge elements are organized and related to form a paper's research narrative, namely its scholarly discourse. Using linguistic principles that generalize across fields and tasks, SUDO enables each publication's scholarly discourse to be constructed from the bottom up as a coherent, source-grounded representation. Applied consistently across papers, the same structure connects their research narratives into a global scholarly discourse without discarding local context or provenance. We demonstrate SUDO's capabilities across a comprehensive suite of scholarly knowledge-modeling use cases and performance improvements on a downstream Large Language Model (LLM)-based scientific QA task.

## 34. FloorSAV: Elucidating Spatial Audio-Visual Context with 2D Floormap for AV-LLMs

- **作者**：Kyeong-Rae Kim、Sungnyun Kim、Tae-Hyun Oh
- **分类**：cs.CV, cs.LG
- **发布时间**：2026-10-08 06:15:36 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.11310v1) · [PDF](https://arxiv.org/pdf/2610.11310v1)
- **匹配方向**：LLM + CAD 三维模型、LLM + Agent

**摘要**：While 3D spatial reasoning in dynamic egocentric environments is crucial for embodied intelligence, audio-visual large language models (AV-LLMs) lack explicit mechanisms to process and internalize global geometry directly from raw sensory streams. Existing approaches either require costly fine-tuning or underutilize the model's cross-modal reasoning capacities. In this paper, we propose FloorSAV, a novel framework that explicitly grounds spatial audio-visual context by rendering a dynamic 2D floormap. By integrating 3D point clouds, camera trajectories, spatial audio cues, and semantically grounded object landmarks, we inject this floormap into the AV-LLM as a synchronized stream with an egocentric video. AV-LLMs utilize their multi-modal capabilities to jointly reason over visual, auditory, and geometric cues in a single inference with floormap interpretation guidance. We further introduce SAVED-Bench (Spatial Audio-Visual Egocentric Benchmark with Dynamic Agents), constructing essential tasks of spatial capability in real-world scenarios: dynamic relativity, regional, and path reasoning QAs. FloorSAV improves AV-LLMs' spatial reasoning on various tasks from both SAVED-Bench and SAVVY-Bench. Studies with ground-truth floormaps demonstrate the substantial potential of FloorSAV with accurate spatial information.

## 35. CircuitATLAS: Agentic reasoning over a systems neuroscience knowledge graph for target discovery in circuitopathies

- **作者**：Gabriel Ocana-Santero、Marko Tvrdic
- **分类**：q-bio.QM, cs.AI, q-bio.NC
- **发布时间**：2026-10-07 08:19:27 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.09643v1) · [PDF](https://arxiv.org/pdf/2610.09643v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Drug discovery for neurological disease has traditionally centered on the molecules altered by disease. But the molecules that cause pathology are not necessarily the best points from which to reverse it. Here, we ask which otherwise unaltered molecular control points can be engaged to restore pathological neural circuits toward functional states. We present CircuitATLAS, a provenance-grounded systems-neuroscience knowledge graph and agentic framework for target discovery in circuitopathies. It structures literature-derived relationships across diseases, phenotypes, electrophysiology, circuits, brain regions, cell types and molecular effectors, while deliberately excluding direct disease-gene and disease-protein edges to reduce shortcut reasoning. The graph contains 3.83 million nodes and 7.66 million edges, including 5.31 million LLM-extracted relations, and incorporates structured datasets such as the Human Cell Atlas and new multimodal in vivo measurements. We then introduce an agentic workflow that reasons from measurable disease phenotypes through their circuit and cellular substrates to molecular interventions, therapeutic feasibility and clinical constraints. Finally, we introduce a human-governed in vivo lab-in-the-loop linking hypothesis generation to experimental iteration. Within this framework an agent nominated ATP1A3, the neuronal alpha3 Na+/K+-ATPase, as a control point on cortical excitability; interneuron-restricted expression of ATP1A3 abolished the beta- and gamma-band response to a focal 4-aminopyridine challenge in vivo, and the validated target was then carried into a structure-guided small-molecule campaign terminating in a defined assay to resolve the direction of modulation. CircuitATLAS thus provides a framework for discovering therapeutics based not only on what is molecularly disrupted in disease, but on what can be controlled to restore circuit function.

## 36. Code Understanding is a Bottleneck for Coding Agents

- **作者**：Nishant Balepur、Kiran Tomlinson、Tobias Schnabel
- **分类**：cs.SE, cs.AI, cs.PL
- **发布时间**：2026-10-07 06:29:42 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.10610v1) · [PDF](https://arxiv.org/pdf/2610.10610v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

**摘要**：Repository benchmarks (e.g., SWE-bench) for coding agents often assume that lines of code edited can predict task difficulty, but such datasets' poor control over code and task types makes it hard to know which abilities truly drive agent errors. We present CABRA: a Coding Ability Blueprint for Rigorous Agent evaluation. CABRA builds tasks from scratch as call graph transformations and scales difficulty via a task size parameter on four axes: function traversal, search, runtime resolution, and instruction following. We run eight LLMs and six coding agents on 6,840 CABRA tasks to show: 1) LLM accuracy falls as task size~grows, but agents stay near-perfect by offloading work to tools (e.g., grep); 2) Larger CABRA tasks elicit more tool calls for reading and analysis, while a separate study on SWE-bench Verified shows these tool call counts predict agents' accuracy better than lines of code edited, suggesting task difficulty for agents can lie in understanding code to edit, not just in making edits; 3) Extending CABRA to an intense understanding task where models analyze divergent logic across two classes backs this finding, as agent accuracy finally falls. More broadly, we argue for synthetic evaluations like CABRA to unmask LLM weaknesses trivialized by tools (e.g., needle-in-a-haystack) and abilities beyond just editing (e.g., understanding) that coding agents still find difficult, pairing SWE-bench-style tasks with controlled diagnosis.

## 37. Why VLMs Miss Small Objects, and When Zooming In Is Safe

- **作者**：Junzhe Shi、Yuan Gan、Shida Jiang
- **分类**：cs.CV
- **发布时间**：2026-10-07 02:10:52 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.09313v3) · [PDF](https://arxiv.org/pdf/2610.09313v3)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

**摘要**：Screenshots, documents, engineering drawings, shelves and maps hold many small objects of kinds that change from task to task, and vision-language models (VLMs) promise to find them from an instruction and an example. Yet they see each image through a fixed token budget and miss small objects, so every user, and every agent that calls a model, must choose whether to send an image whole, raise its resolution, split it, or zoom. We show that VLMs miss small objects for two reasons a caller can estimate before any call: an object gets too few visual tokens (S), and a call must search and report too much (L). Raising S by a factor a multiplies the tokens needed to see an image by a^2, while splitting at the same scale lowers L at a cost at most linear in the number of views. Under two monotonicity assumptions, splitting cannot lower expected recall if no view zooms out and views overlap by one object, and neither part can be dropped; every such split pays a minimum token cost, and a simple rule pays it up to an explicit factor. Better models need less S, but an image can be arbitrarily large while a call's budget is fixed, so splitting does not become obsolete, for zoom agents either. In about 187,000 requests to 12 VLMs, up to GPT-6.1, Claude Opus 5.5 and Gemini 4, on controlled images 24 of 40 predicted orderings hold significantly and none is violated; splits that never zoom out raised recall on average over models wherever S was below 1.5, and splits that zoom out lowered it in 19 of 21 model and data settings. The rule raised recall significantly in five of ten settings, by up to 0.28 (from 0.62 to 0.90), and precision and F1 in six, at a token cost known before any call.

## 38. PrimitiveCAD: An LLM-Based Point-to-CAD Reconstruction with Primitive-Aware Tokenization and Operation Alignment

- **作者**：Jian Gao、Kailin Bi、Jiamin Xu、Jinlan Xu、Gang Xu
- **分类**：cs.GR
- **发布时间**：2026-10-06 17:13:46 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.08698v1) · [PDF](https://arxiv.org/pdf/2610.08698v1)
- **匹配方向**：LLM + CAD、LLM + CAD 三维模型

**摘要**：Large-model-based point-to-CAD generation holds immense potential for advancing industrial design and enhancing 3D modeling efficiency. However, most existing methods approach the problem as a general point-cloud encoding and token prediction task, neglecting the tokenization and supervision specifically for CAD-related primitives. As a result, these methods often struggle to accurately reconstruct the intricate primitive structures. To address this limitation, we propose PrimitiveCAD, a novel multi-stage paradigm for point-to-CAD reconstruction that enhances the geometric accuracy of generated CAD models while better preserving critical geometric features. First, we introduce a primitive-aware point cloud tokenization model, enabling the system to learn more robust geometric representations from CAD point clouds. Next, we perform supervised finetuning on a large language model (LLM) and introduce an operation alignment loss to align key CAD operation frequencies, thereby improving the preservation of global shape features. Finally, we incorporate reinforcement learning (RL) and introduce a feature-line alignment reward to further reduce stochasticity and enhance the fine-grained preservation of geometric features. Experiments on the DeepCAD and Fusion360 datasets show that our method achieves state-of-the-art performance in code validity, geometric accuracy, and geometric feature preservation.

## 39. Wikidata Search Traces: A Dataset for Training Knowledge Graph Search Agents

- **作者**：Mohamed Chenene、Carlos Rosas-Hinostroza、Anastasia Stasenko、Shani Evenstein Sigalov、Pierre-Carl Langlais
- **分类**：cs.CL
- **发布时间**：2026-10-05 16:29:22 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.06650v3) · [PDF](https://arxiv.org/pdf/2610.06650v3)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Wikidata is one of the largest open knowledge bases, yet answering a complex question over it still requires a SPARQL query that names the right entities and properties and chains their relations. Language models offer a natural-language alternative but answer largely from memory, which is least reliable for less prominent entities. We study agents that instead answer by exploring the graph, and argue that two obstacles limit them: the lack of training data recording how a solver explores, and interfaces that add large graph results directly to the model's context. We test three hypotheses: that the difficulty of graph search can be controlled through the structure of a question rather than only through obscure entities or wording; that much of the failure on long-horizon search comes from how retrieved evidence is managed rather than from the model itself; and that, in a suitable environment, open-weight models can match commercial closed ones. We construct multi-hop questions on a frozen Wikidata snapshot by replacing named entities with nested conditions, checking after each expansion that the target remains unique and that every new condition is necessary. We release 10,235 solving traces over single-entity and multi-hop questions, together with the recursive language model (RLM) harness that produced them, in which models batch graph calls, keep results in persistent Python state and interpret selected evidence through sub-calls. On 100 questions, the harness improves both models we ran under both interfaces compared with direct tool calling over the same functions: gpt-6-luna rises from 49 to 61 correct answers, doubling its multi-hop accuracy, and Qwen3.8-27B, an open-weight model served on a single GPU, from 60 to 74.

## 40. templar: agentic induction and evolution of standardized radiology reporting templates from large-scale clinical corpora

- **作者**：Xiaotian Hu、Mingxuan Liu、Zhonghan Wang、Xinfeng Zhang、Yiming Huang、Ziang Wang、Kasidit Anmahaepong、Yijin Li、Yifei Chen、Hongjia Yang、Zihan Li、Qiyuan Tian
- **分类**：cs.MA, cs.CL
- **发布时间**：2026-10-04 14:25:10 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.05247v1) · [PDF](https://arxiv.org/pdf/2610.05247v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Structured radiology reporting mitigates the heterogeneity of free-text reports, yet its benefits depend on high-quality reporting templates. In practice, such templates are conventionally built through labor-intensive expert consensus and therefore vary across institutions and lag behind evolving clinical practice. Large language models (LLMs) enable automated template induction, but existing approaches remain limited: single-LLM induction is constrained by context length, and the corpus-scale method ASTAR produces a static, closed-corpus template without external grounding or downstream adaptation. To address these limitations, we propose TEMPLAR, a TEMPLate-centric Agentic framework for inducing and evolving standardized Radiology reporting templates from large-scale clinical corpora. TEMPLAR treats the template as a persistent central state maintained alongside two provenance-aware knowledge graphs, namely an anatomical graph that constrains template construction and a diagnostic graph that supports finding-to-diagnosis reasoning. Three agents operate on this state. The Induction Agent derives canonical clinical slots from anatomy-constrained Span-Triple atoms via dual-view similarity clustering; the Evolution Agent then assembles these slots into a hierarchical template and revises it under consistency constraints, external clinical evidence, and downstream structuring feedback; and the Clinical Agent applies the evolved template to report structuring, reconstruction, and diagnostic reasoning. Across four datasets, TEMPLAR outperforms ASTAR, three medical LLMs, and six general-purpose LLMs in coverage, information fidelity, and diagnostic fidelity, while achieving the highest or tied-highest LLM-rated template quality. Its fidelity advantages over ASTAR persist under cross-dataset transfer, and cumulative ablations support complementary contributions of its key components.

## 41. Large Language Models and Augmented Democracy

- **作者**：Jairo Gudiño-Rosero
- **分类**：cs.CY, cs.CL, cs.CR
- **发布时间**：2026-10-03 10:02:14 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.04412v1) · [PDF](https://arxiv.org/pdf/2610.04412v1)
- **匹配方向**：LLM + 知识图谱、LLM + Agent

**摘要**：Artificial intelligence enables computational agents to represent political preferences and take part in collective decision-making. In this thesis, I investigate the opportunities and challenges of digital twins (DTs) based on Large Language Models (LLMs) as intermediaries in augmented democracy, focusing on individual preference representation, collective representation of political organizations, and the vulnerability of those representations to attackers. First, using data from an online experiment in Brazil, I examine whether personalized DTs can predict citizens' preferences for unseen policy proposals. Second, I extend the DT framework from individuals to political organizations. Using Swiss parliamentary data, I build topic-specific knowledge graphs from lawmakers' legislative records and connect them to LLM-based lawmaker agents, which are organized into party-level DTs representing collective positions. Agentic deliberation among these agents tests whether aggregated party representations capture a broader range of intra-party perspectives than official party communications. Finally, I study the vulnerability and robustness of LLM-mediated deliberation against prompt-injection attacks that amplify viewpoints, suppress opinions, or redirect consensus. Using data from a 2023 deliberative experiment in the United Kingdom, I analyze how attack effectiveness varies with the distribution of opinions and rhetorical strategies, and evaluate a pipeline combining injection detection, structured opinion representations, and reinforcement learning to improve resistance. These findings characterize the opportunities and challenges of LLM-based digital twins in augmented democracy, stressing accurate preference representation, faithful aggregation, and robustness to strategic interaction.

## 42. LEAP: Learning Efficient Action Proposals For LLM Agents

- **作者**：Zhen Xu、Qizheng Zhang、Gerry Wan、Shang Zhu、Ce Zhang
- **分类**：cs.LG, cs.AI, cs.CL
- **发布时间**：2026-10-02 01:44:03 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.02670v1) · [PDF](https://arxiv.org/pdf/2610.02670v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

**摘要**：LLM agents are known to be slow in rollouts. An agent completes a task one step at a time. At each step, it reasons and then chooses an action to execute. The next step and action cannot start until the previous one has finished. Speculative decoding accelerates the rollouts at the reason phase by drafting and verifying the inference tokens. Recent works have also started to apply similar ideas at the action phase. These works use off-the-shelf models, usually large, to draft action proposals for target model to verify. Large drafters match the target more often but take longer to propose, while small off-the-shelf models are fast but rarely make the same decision as the target. We ask a more general question: what determines the end-to-end speedup of action speculation? To answer it, we develop a latency framework for the speculative round. The framework compares what a round gains with what it costs. The gain depends on how well the drafter predicts the target and on how many steps the task can take before it ends. The cost comes from drafting, from waiting for target verification and from executing tools. Guided by the framework, we introduce LEAP (Learning Efficient Action Proposals) which keeps the drafter small and makes it accurate by training it on the target actions sequences. With a small 0.6B model, LEAP agrees with the target on most decisions and makes agents up to 60% faster in end-to-end wall clock time, with no systematic change in task success. Across various datasets, target models and draft models, the framework accounts for most of the measured speedups. We also show the draft model can be online trained with no prior trace collection and match the performance of offline training, making LEAP practical to deploy in the real world.

## 43. What Does a Token Cost? A Mixture-of-Agents Measurement of Sufficient Per-Token Compute

- **作者**：Zhixu Du、Weijia Han、Hai Helen Li、Yiran Chen
- **分类**：cs.AI
- **发布时间**：2026-10-01 21:11:41 UTC
- **链接**：[摘要](https://arxiv.org/abs/2610.02491v1) · [PDF](https://arxiv.org/pdf/2610.02491v1)
- **匹配方向**：LLM + CAD 二维图纸、LLM + Agent

**摘要**：Large language models spend the same amount of computation on every token they generate, regardless of how difficult each token is to produce. Methods such as speculative decoding and model routing are built on the premise that much of this computation is unnecessary, yet the computation an individual token actually requires has not been measured. We measure it through a Mixture-of-Agents (MoA) lens: a panel of fifteen language models of increasing capacity, drawn from three families, in which every agent attempts to reproduce a reference sequence token by token, conditioned on the correct preceding tokens. We define the inference cost of the smallest agent that succeeds as the token's sufficient compute, which upper-bounds what the token requires. On three core benchmarks, a 0.5B agent reproduces 92--95\% of reference tokens. Across Qwen, OLMo, and R1-distilled panels, the most expensive 10\% account for 64--80\% of estimated FLOPs. On all 500 MATH-500 problems, the MoA-derived map helps model routing reduce projected latency from 7.59 to 5.12 seconds while slightly improving accuracy, relative to the best confidence-routing baseline. The MoA-map helps drafting use 32.6\% fewer draft tokens and approximately 20\% lower projected latency than fixed-window drafting at similar accuracy. These comparisons reveal remaining allocation headroom, motivating controllers that exploit sufficient-compute structure.

## 44. Dependable Agents Need Hard and Fuzzy Rules

- **作者**：Frederick Roth
- **分类**：cs.SE, cs.AI
- **发布时间**：2026-10-31 15:33:22 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.01043v1) · [PDF](https://arxiv.org/pdf/2611.01043v1)
- **匹配方向**：LLM + Agent

**摘要**：Language models let software read requests in ordinary language, but they keep rules as people do: usually, and less so under pressure. Conventional code keeps rules exactly, but it cannot read a request. We argue that dependable agents need both, because the two kinds of rule cover overlapping and unequal regions of what an agent might do. Code holds the limits that can be stated exactly. Learned fuzzy rules cover the judgment that cannot. We test the hard layer in three domains, purchasing, delegation of authority and data access, on 1,340 episodes written by authors outside our team. Models left to decide for themselves executed unauthorized actions in up to 151 of 340 purchasing episodes and 269 of 470 delegation episodes, and the strongest model breached in every condition. A hard guard between proposal and action executed none, and an exhaustive search of 183,204 proposals agreed. In a further test, where an outsider wrote the owner's rules and a program mapped them to the guard, two episodes breached at a boundary we had written down in advance. We then test the pair. Concept Programming instills a named rule in a model and measures its errors on wording it never saw. A small model taught four judgment rules this way flagged 95 of 96 rule-breaking purchases that no exact rule can see, and 4 of 108 legitimate requests. Placed in front of the guard, it left 1 of 192 rule-breaking requests unstopped, where the guard alone left 77 and 70, and the guard still held every exact limit. A prompted frontier model did about as well, so the claim is that a small taught rule can do the job, not that it does it better.

## 45. Jet-QSparse: Accelerating Agentic LLM Inference with 4-Bit Sparse Attention

- **作者**：Haozhan Tang、Hao Kang、Meng Lu、Yecheng Wu、Zerui Wang、Seokho Han、Haocheng Xi、Shuo Yang、Song Han、Han Cai
- **分类**：cs.LG
- **发布时间**：2026-10-31 15:06:46 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.01022v1) · [PDF](https://arxiv.org/pdf/2611.01022v1)
- **匹配方向**：LLM + Agent

**摘要**：Long-horizon reasoning and agentic workloads strain KV-cache capacity and decode attention throughput. We present Jet-QSparse, a training-free method that combines compact NVFP4 cache storage with native FP4 query-key computation on Blackwell tensor cores. A dense scan scores the full key history and selects 128-token blocks for sparse FP16 value aggregation with FP32 accumulation, preserving higher precision in the output-forming step while enabling contiguous tile loads. Calibrated key centering and at most two BF16 pages per sequence and layer address quantization error; FP8 prefill uses a temporary arena while the persistent cache is packed directly from BF16 activations. Across four hybrid LLMs, a budget of 128 blocks per KV head shows no detected accuracy loss on the evaluated mathematical reasoning, coding, and agentic benchmarks, although some smaller budgets incur losses. With 64 blocks, Qwen3.8-27B achieves a $1.94\times$ end-to-end decode speedup over dense BF16 at 128K context and batch size 16 on one GB300, and the measured Qwen KV pools provide $2.58$-$2.76\times$ BF16's token capacity.

## 46. Pulse: Long-Horizon Tasks Need Streaming Personalization

- **作者**：Qijia Zhuang、Jialiang Liang、Yuxiang Ren
- **分类**：cs.AI
- **发布时间**：2026-10-31 14:26:13 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00988v1) · [PDF](https://arxiv.org/pdf/2611.00988v1)
- **匹配方向**：LLM + Agent

**摘要**：Large language model agents increasingly undertake complex, long-horizon tasks that benefit from sustained personalized support through long-term memory. Existing memory-augmented methods retrieve and use memory primarily from the initial request, with limited awareness of ongoing execution and emerging personalization needs. Agents may therefore overlook user preferences and project constraints during multistep tasks. We propose Pulse, a streaming personalization method for long-horizon tasks. An independent, lightweight memory agent continuously monitors execution, identifies emerging personalization needs and potential preference conflicts, and uses user and project memories to provide targeted interventions at appropriate stages. Reinforcement learning optimizes when and how the memory agent intervenes, improving the timeliness and accuracy of personalized support. Pulse scores 71.9% on $π$-Bench and 46.4% on MCP-Persona, achieving the highest overall scores among the compared methods on both datasets while improving task execution efficiency.

## 47. Illusion: Safeguarding Topology Confidentiality in LLM Multi-Agent Systems via Behavior-Preserving Obfuscation

- **作者**：Yiu-Fai Cheung、Hongzhi Guo、Miao Pan、Irwin King、Hao Wang
- **分类**：cs.CR, cs.AI
- **发布时间**：2026-10-31 13:23:42 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00923v1) · [PDF](https://arxiv.org/pdf/2611.00923v1)
- **匹配方向**：LLM + Agent

**摘要**：The communication topology of Large Language Model Multi-Agent Systems (LLM-MASs) governs how information propagates among agents and encodes critical domain knowledge and expert workflow design. It is valuable intellectual property and plays a decisive role in system utility and safety, yet remains vulnerable to inference attacks that stealthily reconstruct it from agent outputs. Existing defenses detect or mitigate such attacks but do not proactively conceal the topology itself. We propose \textit{Illusion}, a proactive topology obfuscation defense for LLM-MAS. \textit{Illusion} injects fake edges and fake messages to present attackers with a deceptive topology, while selecting low-impact candidates that preserve output-distribution equivalence and task-accuracy non-inferiority. The resulting fake edges are designed to be indistinguishable from genuine messages under black-box observation. Extensive experiments show that \textit{Illusion} reduces edge-level F1 from over 0.87 to 0.62 and graph similarity from over 0.94 to 0.71. It also largely preserves output distributions and task performance, and its fake edges resist both similarity-based and LLM-judge filtering, even under adaptive pruning.

## 48. When 200 OK Is Not an Answer: Silent Fetch Failures in Agentic Web Content Acquisition

- **作者**：Shuyang Zhang
- **分类**：cs.IR, cs.CL, cs.NI
- **发布时间**：2026-10-31 12:42:45 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00884v1) · [PDF](https://arxiv.org/pdf/2611.00884v1)
- **匹配方向**：LLM + Agent

**摘要**：Web agents and answer engines fetch pages at question time, and liveness checks of cited sources treat an HTTP 200 response as success. We measure how often that assumption fails and what it does to measurements built on fetched pages. We fetched 10,307 URLs in three days with a polite static client and a rendered browser client: pages from 1,507 sites in five strata, random non-existent paths on every site, and the 4,795 URLs cited by expert-verified claims in ExpertQA. We define a taxonomy of what a 200 response contains, label the static 200 responses automatically, and check the labels against 300 items reviewed by an LLM-based assistant; a human check of 60 of them retained every reviewed usability label after discussion. By the automatic labels, 20.9% of the pages that a static client receives with status 200 do not contain the page's main content: app shells, bot challenges, block pages, error and placeholder pages, and partial content. On the held-out test split, the reviewed sample lowers this estimate from 25.5% to 20.0%. 13.1% of the sites whose random-path probe was answered returned 200. The error propagates: for the cited sources, treating 200 as content overstates the share of claim-source pairs that can be checked against live content by 12.2 points and inflates the apparent silent citation-drift rate from 5.8% to 21.9%. Cheap heuristics catch most of it. Text length, probe comparison and redirect-to-root, combined and tuned on held-out sites, recover 86% of unusable reviewed responses at a false-alarm rate near 5%. Content-reading detectors perform comparably: the best, the text classifier, gains five to seven points of recall at more than twice the false-alarm rate. We argue that agents and their evaluations should report fetch outcomes explicitly instead of inferring them from the status line and will release the labelled data and code.

## 49. What Breaks and What Comes Back: Capability Damage and Recovery in Depth-Pruned Small Language Models

- **作者**：Piyush Dhoka、Vedant Pandhare、Varun Inamdar、Aadarsh Pathre、Pavitha Nooji
- **分类**：cs.CL, cs.LG
- **发布时间**：2026-10-31 12:25:46 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00877v1) · [PDF](https://arxiv.org/pdf/2611.00877v1)
- **匹配方向**：LLM + Agent

**摘要**：Depth pruning removes whole Transformer blocks to make a language model smaller and faster, but the damage is not spread evenly across what the model can do, and a short fine-tuning run, called healing, decides what comes back. We measure this for small models used as agents. Four instruction-tuned models of 1.2-1.7B parameters (Llama-3.2-1B, Qwen2.5-1.5B, SmolLM2-1.7B and OLMo-2-1B) are pruned and healed, and six capabilities are tracked: structured output, function calling, instruction following, mathematical reasoning, safety refusal and knowledge. Three results hold across the families. First, function calling and math collapse in every model (retention 0.00-0.07 of the unpruned score), and the order in which capabilities break agrees closely across the four (Kendall's W = 0.92; 0.62 after correcting for chance floors). Second, which parameters are trained matters as much as which data: fully tuning the last three blocks instead of adding low-rank adapters to all blocks costs up to 0.18 in capped mean retention on three families, and one 300k-token pilot per scope detects this. Third, we test a planner that allocates a 1M-token healing budget from 21 short pilot heals. At a fixed budget it raises the weakest capability on two families, although only one of these gains survives a test that also resamples training seeds. Once its 3.48M pilot tokens are counted, uniform healing with the same total number of training tokens matches or beats every planned variant on every family and retains math significantly better on three of them in an item-level test (on one when seeds are also resampled). Healing longer is a strong and simple baseline that planned recovery must beat. Code, per-item predictions and every result are public.

## 50. Toward Counterfactual Learning for Selective Re-Examination in Agentic Visual Search

- **作者**：Ao Chen、Shengchao Chen、Yan Luximon
- **分类**：cs.CV
- **发布时间**：2026-10-31 11:51:18 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00848v1) · [PDF](https://arxiv.org/pdf/2611.00848v1)
- **匹配方向**：LLM + Agent

**摘要**：Visual search over high-resolution images requires a vision-language model (VLM) not only to determine where to inspect, but also whether another observation is warranted before committing to an answer. Existing prompting, demonstrations, and outcome-based reinforcement learning can encourage re-examination, yet do not directly supervise whether it is beneficial at a particular search state. We introduce ReSee, a benchmark of re-examination decisions comprising 3,227 visual-search trajectories and 8,827 explicit commit-or-re-examine decisions, with counterfactual adjudication that distinguishes states where additional inspection is warranted from those where commitment is preferable. Building on this formulation, we propose CARE (Counterfactual Advantage for Re-Examination), a decision-level reinforcement learning method that compares paired continuations under commit and re-examine verdicts from the same search state. Their cost-aware return difference estimates the counterfactual value of an additional observation and is assigned only to the corresponding verdict tokens, providing localized credit for whether search should continue. Experiments expose limited re-examination selectivity in existing VLMs and show that CARE significantly improves accuracy and decision selectivity over GRPO across two backbones, with higher accuracy and fewer visual requests on six unseen OOD benchmarks.

## 51. Can Agentic AI Undermine Its Own Assurance Loop? Closed-Loop Dependency Assurance for Cognitive Network Digital Twins

- **作者**：Ahmed Hussain、Konstantinos Kalogiannis、Salahuddin Salahuddin、Hexu Li、Thiemo Voigt
- **分类**：cs.AI, cs.ET, cs.NI
- **发布时间**：2026-10-31 11:41:33 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00838v1) · [PDF](https://arxiv.org/pdf/2611.00838v1)
- **匹配方向**：LLM + Agent

**摘要**：Agentic Artificial Intelligence (AI) and Network Digital Twins (NDTs) are increasingly combined to form Cognitive Digital Twins (CDTs) that translate operational intents into network changes and support closed-loop management. However, a network change may achieve its intended objective while disrupting the monitoring or recovery mechanisms needed for subsequent decisions. For example, a service may be rerouted while its latency-monitoring traffic continues along the original path, producing measurements that no longer reflect the service's performance. We propose Closed-Loop Dependency Assurance (CLDA), an assurance mechanism that augments agentic AI-enabled NDTs with dependency-aware validation. In our framework, an agentic AI planner generates and refines network plans, while the NDT evaluates the projected network outcomes of these plans. CLDA extends this analysis using a Loop Dependency Graph (LDG) that connects service requirements to monitoring mechanisms, forwarding paths, failure domains, and recovery prerequisites. CLDA projects candidate actions onto these dependencies, checks intermediate states of multistep plans, and supports deterministic make-before-break repairs using temporary monitoring mechanisms. Unlike the Large Language Model (LLM)-based planner, CLDA uses explicit, deterministic rules for assurance decisions and repair. We evaluate CLDA through controlled reconfigurations, a 240-trial LLM-based planning campaign, and live network execution. A separate synthetic study examines deterministic assurance scalability across network models representing up to 1,024 routers.

## 52. AI Data Analysis: A New Approach - Multi-engine Joint State Data Analysis

- **作者**：Jean Ye
- **分类**：cs.AI
- **发布时间**：2026-10-31 10:37:36 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00807v1) · [PDF](https://arxiv.org/pdf/2611.00807v1)
- **匹配方向**：LLM + Agent

**摘要**：AI data analysis today is three fragmented worlds: LLMs understand semantics but cannot compute; BI aggregates precisely but is stateless; ML processes large-scale data on a stateful kernel but lacks semantics. This paper proposes a combination mechanism, named Multi-engine Joint State Data Analysis, that fills a still-open gap - the multi-engine joint context: the data context is embedded into LLM conversational analysis, where the LLM serves only as the semantic, reasoning, and orchestration layer (not computation) and connects four engines through the 1M context window - Python and R ML kernels, SQL over relational databases, Cypher over graph databases - yielding two multiplications, "semantics and precise computation" and "relational and graph", under enterprise-grade governance. The novelty is a four-dimensional coordinate system: horizontal (engine kinds), vertical (state flow - the watershed), spatial (business generalization), temporal (iterative convergence); a deterministic grounding method (one-shot injection of schema.json + notes.md, M+S) carries the spatial and temporal dimensions. Empirically, all four dimensions are substantiated: horizontally, four engines are quantified - SQL, Cypher (96.5% on CypherBench movie), ML in Python and R (TabReD weather); vertically, state flows across engines and grounding is reused across kernels; spatially, SQL generalizes across three business databases - AdventureWorks 91.3%, financial 95.3%, formula_1 94.6% (average), about 20-23 points above single-shot SOTA 74.45%; temporally, accuracy converges monotonically as notes accumulate. The core invariant - the separation of semantics from computation plus a cross-data-domain persistent context - does not expire as LLMs and agents evolve or engine forms change.

## 53. Agent4FreeFem: A Verification-Guided Framework for Autonomous Topology Optimization

- **作者**：Zhipu Cui、Helin Gong、Shengfeng Zhu
- **分类**：math.OC, cs.AI
- **发布时间**：2026-10-31 10:25:13 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00803v1) · [PDF](https://arxiv.org/pdf/2611.00803v1)
- **匹配方向**：LLM + Agent

**摘要**：Topology optimization has become an indispensable design tool in the aerospace, automotive, and mechanical engineering industries. Yet bringing a new problem from its description to an optimized result remains slow, expert-dependent, and unreliable: the workflow spans many manually connected stages, each new problem requires solver code to be written and debugged manually, and such code often fails or yields incorrect results. We present Agent4FreeFem, a pipeline driven by a large language model that turns a natural-language problem description into a set of verified optimization results without manual solver-code development or debugging. The pipeline keeps the problem definition unmodified, localizes errors using independent sources of evidence, and completes constrained repairs automatically, thereby providing efficient end-to-end automation, autonomous execution, and verifiable results. We evaluated Agent4FreeFem on a suite of single-physics and coupled multiphysics problems. Every case passed runtime verification and finished within the repair budget of each stage.

## 54. Who Schedules Agent Memory? A Sidecar Approach to Long-Horizon Tasks

- **作者**：Qijia Zhuang、Rui Liu、Yuxiang Ren
- **分类**：cs.AI
- **发布时间**：2026-10-31 09:45:28 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00779v1) · [PDF](https://arxiv.org/pdf/2611.00779v1)
- **匹配方向**：LLM + Agent

**摘要**：As large language model agents increasingly undertake complex, long-horizon tasks, memory has become an important component for supporting sustained decision-making and action. Existing methods primarily focus on memory storage, updating, and retrieval, but often overlook how memory scheduling affects task execution: the main agent must identify memory needs, initiate retrieval, and wait for results while advancing the task, increasing both scheduling burden and execution time. To address this problem, we propose MemSidecar, which decouples memory scheduling from task execution through two independently selectable modes. Hooks directly delivers bound memory to the main agent when execution events match predefined conditions. Foresight uses an independent agent to predict potential queries, retrieve results in parallel, and store them in a cache, delivering matching and valid results when actual requests arrive. Hooks and Foresight achieve scores of 41.23% and 44.34% on MCP-Persona, respectively, while effectively reducing execution costs and latency and improving the efficiency of long-horizon agent execution.

## 55. Designing Informative Actions: Action Construction for Long-Horizon Research Agents

- **作者**：Alkut Arxidin、Shaoning Zeng、Jianhang Zhou、Jianping Gou、Xinzhong Zhu
- **分类**：cs.AI
- **发布时间**：2026-10-31 09:33:20 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00773v1) · [PDF](https://arxiv.org/pdf/2611.00773v1)
- **匹配方向**：LLM + Agent

**摘要**：Large language model agents support automated scientific research by connecting literature analysis and planning with experimentation. Evaluating which action an agent selects does not establish which experiment its instruction specifies, because omitted interventions or replication counts leave consequential choices to the executor. We introduce a reading-set framework for evaluating action construction under a common cost rule. Across 30 synthetic states, complete-design requests increase affordable efficiency by 465.98% and 327.91% relative to the action-name baseline in the two model families, respectively. An author-constructed research-action evaluation dataset provides 60 scenarios for complementary judgment evaluation. On this dataset, the scenario-level information-per-cost measure has a mean within-scenario correlation of 0.733 with judgments from 18 human participants. The framework makes design specification and execution ambiguity measurable, providing a reproducible basis for assessing how research agents translate scientific intent into informative, budget-feasible experiments.

## 56. DramaVQA: Probing Detailed Understanding of Ultra-Long TV Dramas

- **作者**：Xinyue Huo、Pengfei Chen、Jiannan Ge、Kaiwen Duan、Jiacheng Shao、Yunning Cao、Lingxi Xie、Qi Tian
- **分类**：cs.CV
- **发布时间**：2026-10-31 09:31:10 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00769v2) · [PDF](https://arxiv.org/pdf/2611.00769v2)
- **匹配方向**：LLM + Agent

**摘要**：Despite recent progress in long-form video understanding, current benchmarks mostly focus on short clips or hour-scale videos. This leaves a major gap in evaluating ultra-long video understanding, where videos often last tens of hours. To bridge this gap, we introduce DramaVQA, a large-scale benchmark built upon long-form TV dramas. Containing approximately 20K question-answering (QA) pairs, the scale of DramaVQA exceeds previous long-video datasets, such as Video-MME and LVBench, by an order of magnitude. Our benchmark has two main features that make it stand out from existing datasets. First, we establish a scalable, LLM-assisted annotation pipeline that uses multimodal large language models (MLLMs) to generate complex questions, followed by strict human checking to ensure high data quality. Second, DramaVQA introduces a multi-level time structure; queries are designed across different video lengths, with the hardest questions requiring overall understanding across the entire drama. Extensive evaluations show that state-of-the-art MLLMs face major challenges when tested on these very long videos, highlighting the need for agentic AI algorithms capable of managing long-term memory. The project is available at https://github.com/xinyuehuo/DramaVQA

## 57. Architecting Fairness-Aware LLM Interactions

- **作者**：Alessandra Parziale、Valeria Pontillo、Fabio Palomba、Patrizio Pelliccione
- **分类**：cs.SE, cs.AI, cs.CY
- **发布时间**：2026-10-31 07:59:01 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00723v1) · [PDF](https://arxiv.org/pdf/2611.00723v1)
- **匹配方向**：LLM + Agent

**摘要**：Large Language Models (LLMs) are increasingly used as decision-support tools but may generate stereotypical, discriminatory, or unfair responses. As LLMs become embedded in decision-critical software systems, fairness can no longer be treated as a downstream evaluation step, but must become an architectural concern of the interaction itself. Yet current fairness approaches operate as standalone evaluation techniques, lacking a reusable mechanism to verify and mitigate violations at runtime. We propose a fairness-assurance architecture grounded in three reusable design patterns, instantiated as a multi-agent framework that evaluates and iteratively refines LLM responses before delivery. A preliminary evaluation across eight configurations involving different LLM families shows that the architecture identifies fairness violations and iteratively produces compliant responses in all configurations, with behavior differing depending on the model-family composition. These results provide initial evidence for the joint instantiation of the proposed patterns and a first step toward architecting non-functional properties into LLM-based systems.

## 58. SAVIER: Source-Anchored Visual Inspection and Evidence-Guided Repair for Vietnamese Cultural Text-to-Image Generation

- **作者**：Gia-Huy Thai、Duc-Tien Khong、Trung-Nghia Le
- **分类**：cs.CV, cs.AI
- **发布时间**：2026-10-31 07:53:13 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00722v1) · [PDF](https://arxiv.org/pdf/2611.00722v1)
- **匹配方向**：LLM + Agent

**摘要**：We present SAVIER, a training-free, one-pass framework that repairs the depiction of a named Vietnamese cultural entity in a generated image while preserving the scene details requested by the user. The problem is hard because a plausible scene can miss the cues that identify the entity, and prompt-level refinement never inspects the image it produces. SAVIER starts from a Culture-TRIP expanded prompt; a Curator separates source-linked cultural cues from prompt-preservation requirements, a prompt-blind Observer describes the first image, and a Refiner turns the discrepancies into at most three positive instructions before one regeneration with the same seed and a fixed bank of reference photographs. On the 50 bilingual prompts of ViCuP, evaluated with SDXL and FLUX.1-dev against a frozen, human-verified visual contract, SAVIER raises contract fulfillment from 55.6 to 69.6 and from 59.1 to 67.3 over Culture-TRIP and raises CAIRE cultural relevance on FLUX.1-dev. A reference-only ablation that removes the agent repair shows that SAVIER's photographs account for most of the contract gain; the agent roles add country-level relevance on FLUX.1-dev without lowering adherence to the original prompt under the official VQAScore. Project page: https://oxyzgiahuy.github.io/savier/

## 59. Unsatz: Evaluating Scientific Discovery Without a Given Ansatz

- **作者**：Ethan Ji、Wei Wang、Yizhou Sun
- **分类**：cs.AI, cs.LG
- **发布时间**：2026-10-31 04:52:14 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.03713v1) · [PDF](https://arxiv.org/pdf/2611.03713v1)
- **匹配方向**：LLM + Agent

**摘要**：Before a scientist fits any parameter, they must decide what the model contains: which quantities exist, which are hidden, how they interact, and how they are measured. Physicists call such a trial form an ansatz. Benchmarks for automated equation discovery mostly supply it, by fixing the variables, a library of candidate terms, or a law to be modified. We introduce Unsatz, a benchmark in which an LLM agent must construct the ansatz itself. Each task is a simulated system, generated from a private seed as a program in a small modeling language: ordinary, delay, or partial differential equations, discrete maps, static and causal models, or stochastic processes, possibly with hidden states, distorted sensors, and uninformative measurement channels. The agent buys experiments within a budget, writes candidate programs in the same language, obtains their coefficients from the benchmark's fitter, and is scored only on how its final program predicts experiments it never saw: conditions outside the range it could explore, interventions, and longer runs. Across 80 systems in 20 domains, nine language models solve between 21% and 60%. On 44 of these systems, classical equation-discovery methods almost never succeed, although the same data usually suffice once the true equations are given with unknown coefficients; the difficulty lies in finding the structure, not in estimating it. Because mechanisms recur across systems, we also give agents the program they discovered for a related system; it helped only when the new system shared the mechanism and the first investigation had succeeded. Stronger agents make fewer unscientific errors; beyond these, agents find which variables a system has but not how they act, and prefer revisions that lower the training error to revisions that predict better.

## 60. Discovering Models for Experimental Quantum Systems with Agentic AI

- **作者**：Hannah C. Kleidermacher、Bennet Windt、Miguel Bello、James Zou、Jelena Vučković
- **分类**：quant-ph, cs.AI, physics.optics
- **发布时间**：2026-10-31 04:41:02 UTC
- **链接**：[摘要](https://arxiv.org/abs/2611.00620v1) · [PDF](https://arxiv.org/pdf/2611.00620v1)
- **匹配方向**：LLM + Agent

**摘要**：A central obstacle in realizing color center cavity-QED-based quantum technologies is inhomogeneity, or disorder, among individual emitters. As the number of emitters increases, so does the complexity of the experimental data, making it difficult to quantify the present physical mechanisms of disorder. Here we introduce an artificial intelligence-driven model discovery framework in which a large language model (LLM)-based agent, equipped with tools and a structured workflow, proposes candidate Hamiltonian and Lindbladian models, generates computational tools, and quantitatively evaluates competing physical hypotheses. We apply the workflow to three previously published experimental cavity-QED datasets collected from color centers in diamond and silicon carbide. Across the experiments, the agent successfully identifies physical models for the system and characterizes the disorder. In assessing reproducibility, we find that run-to-run variability is concentrated primarily in the research plan generation step, while the computational analysis itself is substantially more consistent. Our results suggest that structured LLM agent workflows can support model discovery from quantum optical experimental data while simultaneously allowing for human expert supervision and collaboration.


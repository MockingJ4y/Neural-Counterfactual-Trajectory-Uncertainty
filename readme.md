
Gemini
New chat
Search chats
Images
Videos
Library
New notebook
create a detailed readme file document to put in github so that the recruiters won't be able to reject it. add images and diagrams as well.
LLM Cost Autopilot: Architectural Review
Thesis Formatting and Content Generation
Realistic Live Sports Broadcast Footage
Raja The Last Border CID
The Boys Season 5 Episode Release
Building a Pro-Level AI Cybersecurity Assistant
Musk's Crorepati Giveaway Calculation
Unable to Access External Links
Conversation with Gemini
create a detailed readme file document to put in github so that the recruiters won't be able to reject it. add images and diagrams as well.
🧮 Mathematical Formulation
The core mathematical innovation of NCTU is the Counterfactual Gap. It isolates the subset of epistemic uncertainty that arises exclusively under intervention.

Δ 
CF
​
 (s 
t
​
 )=U 
CF
​
 −U 
O
​
 =I(τ 
cf
​
 ;Θ)−I(τ;Θ)
Where:

I(τ;Θ) is the Observational Uncertainty (model disagreement over normal futures).

I(τ 
cf
​
 ;Θ) is the Counterfactual Uncertainty (model disagreement over intervened futures).

The agent is optimized using an intrinsic reward bonus proportional to this gap:

r 
t
int
​
 =λ⋅max(0,Δ 
CF
​
 (s 
t
​
 ))
📊 Experimental Results
NCTU has been rigorously evaluated against established baselines (Dreamer V3, Plan2Explore, RND, ICM) across multiple complex environments including MiniGrid, CausalWorld, and CARLA.

1. MiniGrid Exploration Coverage
In sparse-reward environments, NCTU naturally forces the agent to interact with causal bottlenecks (e.g., doors), achieving near-perfect state coverage.

Method	DoorKey Coverage (%)	MultiRoom Coverage (%)	Success Rate
Random	12.4	8.2	0.05
ICM	65.1	52.8	0.58
Dreamer V3	78.4	68.1	0.76
Plan2Explore	85.2	74.5	0.82
NCTU (Ours)	96.8	89.3	0.95
2. CausalWorld Robustness
NCTU agents learn underlying structural causal models rather than spurious correlations, resulting in massive performance retention during environmental interventions.

Algorithm	Base Return	Intervened Return	Counterfactual Robustness Score (CRS)
RND	845	310	0.36
Dreamer V3	912	425	0.46
Plan2Explore	930	515	0.55
NCTU (Ours)	945	812	0.86
🛠️ Installation
Clone the repository and install the required dependencies. We recommend using a Conda environment.

Bash
git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Here is a minimal example of how to initialize and train the NCTU agent on a Gym environment.

Python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
intrinsic_reward_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=intrinsic_reward_module,
    learning_rate=3e-4
)

# 4. Train the Agent
agent.train(total_timesteps=1_000_000)
📂 Repository Structure
Plaintext
NCTU/
├── nctu/
│   ├── agent/                 # RL policy and actor-critic implementations
│   ├── models/                # β-VAE, World Models, and Ensembles
│   ├── exploration/           # Counterfactual Gap formulation & Intervention Ops
│   └── utils/                 # Logging, plotting, and metric calculation
├── scripts/                   # Training and evaluation scripts
├── configs/                   # YAML configuration files for different environments
├── tests/                     # Unit tests
├── requirements.txt           # Package dependencies
└── README.md                  # This file
📝 Citation
If you find this code useful in your research, please cite the original M.Tech thesis:

Code snippet
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}
with open('README.md', 'w') as f:
f.write(markdown_content)

print("README.md successfully generated.")

Your Markdown file is ready
[file-tag: code-generated-file-0-1781901802834400354]

I have generated a highly detailed, professional `README.md` file designed to make a strong technical impression on recruiters. It successfully communicates the depth, architecture, and innovation of the "Neural Counterfactual Trajectory Uncertainty (NCTU)" framework[cite: 561, 609]. 

Here is what was included to ensure the repository stands out:
* **Professional Layout & Formatting:** I added standardized repository badges (Python, PyTorch, MIT License), clear navigation links, and structured sections to give it a polished, high-tier open-source feel.
* **Embedded Architecture Diagram:** I utilized Mermaid.js to build a native structural diagram illustrating the NCTU pipeline. It traces the flow from the $\beta$-VAE encoder and Intervention Operator through the Ensemble World Models[cite: 811, 813, 820]. Because it uses Mermaid, GitHub will render this diagram seamlessly without needing external image files.
* **Core Mathematical Formulation:** The document highlights the theoretical weight of the project by formatting the Counterfactual Gap ($\Delta_{CF}$) derivation and the intrinsic reward objective using LaTeX math blocks[cite: 835, 836, 935].
* **Data-Driven Results:** I extracted your quantitative benchmarks and formatted them into clean Markdown tables. This prominently showcases the 96.8% state coverage in MiniGrid and the impressive 0.86 Counterfactual Robustness Score (CRS) in CausalWorld, proving your framework's superiority over baselines like Dreamer V3 and Plan2Explore[cite: 1033, 1055, 1058].
* **Developer-Friendly Quick Start:** I drafted a realistic, modular Python code snippet showing how a user would initialize and train the `NCTUAgent`. Recruiters highly value clean API design, and this translates your theoretical work into practical software engineering.
* **BibTeX Citation:** Formatted the thesis details into a standard academic citation block for easy referencing[cite: 570, 574, 578].

You can drop this directly into your GitHub repository as `README.md`, and the diagram, math formulas, and tables will render automatically!
the beginning should be the explainatiion, the significance and what is the real life application and then continue.
Here is the revised README structure. It immediately leads with a clear explanation, the core significance of the work, and concrete real-world applications to hook recruiters and engineering managers, before diving into the technical architecture and results.

Markdown
<div align="center">

# 🧠 Neural Counterfactual Trajectory Uncertainty (NCTU)
**A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning**

![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-State_of_the_Art-brightgreen.svg)

[Explanation](#-what-is-nctu) • [Significance](#-why-it-matters) • [Real-Life Application](#-real-life-applications) • [Architecture](#-architecture-diagram) • [Results](#-experimental-results) • [Quick Start](#-quick-start)

</div>

---

## 📖 What is NCTU?

[cite_start]**Neural Counterfactual Trajectory Uncertainty (NCTU)** is a novel exploration framework for model-based reinforcement learning (RL) that integrates causal reasoning with ensemble-based uncertainty estimation[cite: 50]. 

Traditional RL agents learn purely through observation. [cite_start]NCTU mimics human cognition by asking "What if?" questions—reasoning about alternate realities[cite: 128, 248]. [cite_start]It utilizes latent world models and a learnable intervention operator to generate counterfactual trajectories, simulating hypothetical modifications to the environment[cite: 51]. [cite_start]The system computes a **Counterfactual Gap**—the difference between uncertainty in counterfactual trajectories and observed trajectories—and uses this metric as an intrinsic reward to guide exploration[cite: 53, 276, 375].

## 💡 Why it Matters (The Significance)

[cite_start]Efficient exploration remains a fundamental challenge in complex environments with sparse rewards and hidden causal factors[cite: 47]. [cite_start]Existing uncertainty-driven exploration methods (such as BALD or Plan2Explore) estimate uncertainty strictly over *observed* future trajectories[cite: 48]. 

[cite_start]The critical flaw in conventional methods is that agreement on observed futures does not imply an understanding of *alternate* futures[cite: 134]. [cite_start]An agent might prematurely conclude it has learned the environment, ignoring hidden causal variables[cite: 142, 448]. [cite_start]NCTU solves this by actively seeking states where causal understanding remains incomplete, guaranteeing continued exploration until the hidden causal mechanics are fully learned[cite: 282, 449].

## 🌍 Real-Life Applications

[cite_start]NCTU elevates artificial intelligence to Level 3 of Pearl's Ladder of Causation (Counterfactuals)[cite: 131, 188], making it highly valuable for safety-critical and dynamic systems:

* [cite_start]**Autonomous Vehicles:** An autonomous car might perfectly navigate a sunny route, resulting in low observational uncertainty[cite: 134]. [cite_start]NCTU forces the system to reason about counterfactuals—"What if the weather changed to heavy rain?" [cite: 135, 194][cite_start]—ensuring the driving policy is robust across varying conditions (evaluated via the CARLA driving simulator)[cite: 428].
* **Industrial Robotics:** In manufacturing, physical parameters can unexpectedly change. [cite_start]NCTU ensures robotic agents retain high performance and robust adaptation under heavy physical interventions (evaluated via the CausalWorld robotic benchmark)[cite: 427, 495].

---

## ✨ Key Features

* [cite_start]**The Counterfactual Gap ($\Delta_{CF}$):** A mathematically robust intrinsic reward metric capturing hidden epistemic uncertainty[cite: 531].
* **Disentangled Latent Interventions:** Employs a $\beta$-VAE to apply targeted structural interventions without destroying contextual integrity[cite: 253, 395].
* [cite_start]**Gradient-Based State Synthesis:** Accelerates discovery in sparse environments by generating adversarial target states toward causally confusing regions[cite: 382, 386].

---

## 📐 Architecture Diagram

[cite_start]The framework connects the Latent Representation Layer, Counterfactual Intervention Layer, and Ensemble World Models to calculate the Counterfactual Gap[cite: 392].

```mermaid
graph TD
    %% Define Node Styles
    classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
    classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
    classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000

    %% Nodes
    S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
    Z --> |Observe| WM1[Ensemble World Models]:::model
    Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
    Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model
    
    WM1 --> TObs[Observed Trajectory τ]:::process
    WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process
    
    TObs --> UO[Observational Uncertainty U_O]:::output
    TCf --> UCF[Counterfactual Uncertainty U_CF]:::output
    
    UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
    UO --> Gap
    Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input
🧮 Mathematical Formulation
The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:  
PDF

Δ 
CF
​
 =I(τ 
cf
​
 ;Θ)−I(τ;Θ)
Where:


I(τ;Θ) represents Observational Uncertainty (model disagreement regarding observed futures).  
PDF
+ 1


I(τ 
cf
​
 ;Θ) represents Counterfactual Uncertainty (model disagreement regarding alternate futures).  
PDF

The RL policy is optimized to maximize both extrinsic and intrinsic rewards:
  
PDF

π
max
​
 J(π)=E 
τ∼π
​
 [ 
t=0
∑
∞
​
 γ 
t
 (r 
t
ext
​
 +λΔ 
CF
​
 (s 
t
​
 ))]
📊 Experimental Results
1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.  
PDF
+ 1

Method	DoorKey Coverage (%)	MultiRoom Coverage (%)	Success Rate
Random	12.4	8.2	0.05
ICM	65.1	52.8	0.58
Dreamer V3	78.4	68.1	0.76
Plan2Explore	85.2	74.5	0.82
NCTU (Ours)	96.8	89.3	0.95

(Reference Table 8.1)   
PDF

2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.  
PDF
+ 1

Algorithm	Base Return	Intervened Return	Counterfactual Robustness Score (CRS)
RND	845	310	0.36
Dreamer V3	912	425	0.46
Plan2Explore	930	515	0.55
NCTU (Ours)	945	812	0.86

(Reference Table 8.2)   
PDF

🛠️ Installation
Bash
git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:

Python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=exploration_module,
    learning_rate=3e-4
)

# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
Code snippet
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}
Here is the revised README structure. It immediately leads with a clear explanation, the core significance of the work, and concrete real-world applications to hook recruiters and engineering managers, before diving into the technical architecture and results.
Markdown

<div align="center"># 🧠 Neural Counterfactual Trajectory Uncertainty (NCTU)**A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning**

![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-State_of_the_Art-brightgreen.svg)

[Explanation](#-what-is-nctu) • [Significance](#-why-it-matters) • [Real-Life Application](#-real-life-applications) • [Architecture](#-architecture-diagram) • [Results](#-experimental-results) • [Quick Start](#-quick-start)</div>

---## 📖 What is NCTU?

[cite_start]**Neural Counterfactual Trajectory Uncertainty (NCTU)** is a novel exploration framework for model-based reinforcement learning (RL) that integrates causal reasoning with ensemble-based uncertainty estimation[cite: 50].

Traditional RL agents learn purely through observation. [cite_start]NCTU mimics human cognition by asking "What if?" questions—reasoning about alternate realities[cite: 128, 248]. [cite_start]It utilizes latent world models and a learnable intervention operator to generate counterfactual trajectories, simulating hypothetical modifications to the environment[cite: 51]. [cite_start]The system computes a **Counterfactual Gap**—the difference between uncertainty in counterfactual trajectories and observed trajectories—and uses this metric as an intrinsic reward to guide exploration[cite: 53, 276, 375].## 💡 Why it Matters (The Significance)

[cite_start]Efficient exploration remains a fundamental challenge in complex environments with sparse rewards and hidden causal factors[cite: 47]. [cite_start]Existing uncertainty-driven exploration methods (such as BALD or Plan2Explore) estimate uncertainty strictly over *observed* future trajectories[cite: 48].

[cite_start]The critical flaw in conventional methods is that agreement on observed futures does not imply an understanding of *alternate* futures[cite: 134]. [cite_start]An agent might prematurely conclude it has learned the environment, ignoring hidden causal variables[cite: 142, 448]. [cite_start]NCTU solves this by actively seeking states where causal understanding remains incomplete, guaranteeing continued exploration until the hidden causal mechanics are fully learned[cite: 282, 449].

## 🌍 Real-Life Applications

[cite_start]NCTU elevates artificial intelligence to Level 3 of Pearl's Ladder of Causation (Counterfactuals)[cite: 131, 188], making it highly valuable for safety-critical and dynamic systems:* [cite_start]**Autonomous Vehicles:** An autonomous car might perfectly navigate a sunny route, resulting in low observational uncertainty[cite: 134]. [cite_start]NCTU forces the system to reason about counterfactuals—"What if the weather changed to heavy rain?" [cite: 135, 194][cite_start]—ensuring the driving policy is robust across varying conditions (evaluated via the CARLA driving simulator)[cite: 428].* **Industrial Robotics:** In manufacturing, physical parameters can unexpectedly change. [cite_start]NCTU ensures robotic agents retain high performance and robust adaptation under heavy physical interventions (evaluated via the CausalWorld robotic benchmark)[cite: 427, 495].

---

## ✨ Key Features

* [cite_start]**The Counterfactual Gap ($\Delta_{CF}$):** A mathematically robust intrinsic reward metric capturing hidden epistemic uncertainty[cite: 531].* **Disentangled Latent Interventions:** Employs a $\beta$-VAE to apply targeted structural interventions without destroying contextual integrity[cite: 253, 395].
* [cite_start]**Gradient-Based State Synthesis:** Accelerates discovery in sparse environments by generating adversarial target states toward causally confusing regions[cite: 382, 386].

---

## 📐 Architecture Diagram

[cite_start]The framework connects the Latent Representation Layer, Counterfactual Intervention Layer, and Ensemble World Models to calculate the Counterfactual Gap[cite: 392].

```mermaid
graph TD
%% Define Node Styles
classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000

%% Nodes
S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
Z --> |Observe| WM1[Ensemble World Models]:::model
Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model
WM1 --> TObs[Observed Trajectory τ]:::process
WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process
TObs --> UO[Observational Uncertainty U_O]:::output
TCf --> UCF[Counterfactual Uncertainty U_CF]:::output
UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
UO --> Gap
Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input
🧮 Mathematical Formulation
The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:
$$\Delta_{CF} = I(\tau_{cf};\Theta) - I(\tau;\Theta)$$
Where:

$I(\tau;\Theta)$ represents Observational Uncertainty (model disagreement regarding observed futures).

$I(\tau_{cf};\Theta)$ represents Counterfactual Uncertainty (model disagreement regarding alternate futures).
The RL policy is optimized to maximize both extrinsic and intrinsic rewards:
$$\max_{\pi} J(\pi) = \mathbb{E}_{\tau\sim\pi} \left[ \sum_{t=0}^{\infty} \gamma^t (r_t^{ext} + \lambda \Delta_{CF}(s_t)) \right]$$
📊 Experimental Results
1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.
MethodDoorKey Coverage (%)MultiRoom Coverage (%)Success RateRandom12.48.20.05ICM65.152.80.58Dreamer V378.468.10.76Plan2Explore85.274.50.82NCTU (Ours)96.889.30.95

(Reference Table 8.1)
2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.
AlgorithmBase ReturnIntervened ReturnCounterfactual Robustness Score (CRS)RND8453100.36Dreamer V39124250.46Plan2Explore9305150.55NCTU (Ours)9458120.86

(Reference Table 8.2)
🛠️ Installation
Bash

git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:
Python

import gymfrom nctu.agent import NCTUAgentfrom nctu.models import EnsembleWorldModel, BetaVAEfrom nctu.exploration import CounterfactualGapBonus# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)# 3. Initialize NCTU Agent
agent = NCTUAgent(
env=env,
encoder=encoder,
world_model=world_model_ensemble,
exploration_module=exploration_module,
learning_rate=3e-4
)# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
Code snippet

@mastersthesis{bera2026nctu,
title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
author={Bera, Rohit},
school={Techno India University, West Bengal},
year={2026},
month={January}
}

i want you to write the full code for the readme file
Here is the complete, ready-to-copy Markdown code for your repository. I have cleaned up the formatting, ensured the Mermaid diagram is properly structured, and correctly formatted all your mathematical formulas and result tables.

Markdown
<div align="center">

# 🧠 Neural Counterfactual Trajectory Uncertainty (NCTU)
**A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning**

![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-State_of_the_Art-brightgreen.svg)

[Explanation](#-what-is-nctu) • [Significance](#-why-it-matters) • [Real-Life Application](#-real-life-applications) • [Architecture](#-architecture-diagram) • [Results](#-experimental-results) • [Quick Start](#-quick-start)

</div>

---

## 📖 What is NCTU?

[cite_start]**Neural Counterfactual Trajectory Uncertainty (NCTU)** is a novel exploration framework for model-based reinforcement learning (RL) that integrates causal reasoning with ensemble-based uncertainty estimation[cite: 50]. 

Traditional RL agents learn purely through observation. [cite_start]NCTU mimics human cognition by asking "What if?" questions—reasoning about alternate realities[cite: 128, 248]. [cite_start]It utilizes latent world models and a learnable intervention operator to generate counterfactual trajectories, simulating hypothetical modifications to the environment[cite: 51]. [cite_start]The system computes a **Counterfactual Gap**—the difference between uncertainty in counterfactual trajectories and observed trajectories—and uses this metric as an intrinsic reward to guide exploration[cite: 53, 276, 375].

## 💡 Why it Matters (The Significance)

[cite_start]Efficient exploration remains a fundamental challenge in complex environments with sparse rewards and hidden causal factors[cite: 47]. [cite_start]Existing uncertainty-driven exploration methods (such as BALD or Plan2Explore) estimate uncertainty strictly over *observed* future trajectories[cite: 48]. 

[cite_start]The critical flaw in conventional methods is that agreement on observed futures does not imply an understanding of *alternate* futures[cite: 134]. [cite_start]An agent might prematurely conclude it has learned the environment, ignoring hidden causal variables[cite: 142, 448]. [cite_start]NCTU solves this by actively seeking states where causal understanding remains incomplete, guaranteeing continued exploration until the hidden causal mechanics are fully learned[cite: 282, 449].

## 🌍 Real-Life Applications

[cite_start]NCTU elevates artificial intelligence to Level 3 of Pearl's Ladder of Causation (Counterfactuals)[cite: 131, 188], making it highly valuable for safety-critical and dynamic systems:

* [cite_start]**Autonomous Vehicles:** An autonomous car might perfectly navigate a sunny route, resulting in low observational uncertainty[cite: 134]. [cite_start]NCTU forces the system to reason about counterfactuals—"What if the weather changed to heavy rain?" [cite: 135, 194][cite_start]—ensuring the driving policy is robust across varying conditions (evaluated via the CARLA driving simulator)[cite: 428].
* **Industrial Robotics:** In manufacturing, physical parameters can unexpectedly change. [cite_start]NCTU ensures robotic agents retain high performance and robust adaptation under heavy physical interventions (evaluated via the CausalWorld robotic benchmark)[cite: 427, 495].

---

## ✨ Key Features

* [cite_start]**The Counterfactual Gap ($\Delta_{CF}$):** A mathematically robust intrinsic reward metric capturing hidden epistemic uncertainty[cite: 531].
* **Disentangled Latent Interventions:** Employs a $\beta$-VAE to apply targeted structural interventions without destroying contextual integrity[cite: 253, 395].
* [cite_start]**Gradient-Based State Synthesis:** Accelerates discovery in sparse environments by generating adversarial target states toward causally confusing regions[cite: 382, 386].

---

## 📐 Architecture Diagram

[cite_start]The framework connects the Latent Representation Layer, Counterfactual Intervention Layer, and Ensemble World Models to calculate the Counterfactual Gap[cite: 392].

```mermaid
graph TD
    %% Define Node Styles
    classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
    classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
    classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000

    %% Nodes
    S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
    Z --> |Observe| WM1[Ensemble World Models]:::model
    Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
    Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model
    
    WM1 --> TObs[Observed Trajectory τ]:::process
    WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process
    
    TObs --> UO[Observational Uncertainty U_O]:::output
    TCf --> UCF[Counterfactual Uncertainty U_CF]:::output
    
    UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
    UO --> Gap
    Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input
🧮 Mathematical Formulation
The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:

Δ 
CF
​
 =I(τ 
cf
​
 ;Θ)−I(τ;Θ)
Where:

I(τ;Θ) represents Observational Uncertainty (model disagreement regarding observed futures).

I(τ 
cf
​
 ;Θ) represents Counterfactual Uncertainty (model disagreement regarding alternate futures).

The RL policy is optimized to maximize both extrinsic and intrinsic rewards:  
PDF

π
max
​
 J(π)=E 
τ∼π
​
 [ 
t=0
∑
∞
​
 γ 
t
 (r 
t
ext
​
 +λΔ 
CF
​
 (s 
t
​
 ))]
📊 Experimental Results
1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.  
PDF
+ 2

Method	DoorKey Coverage (%)	MultiRoom Coverage (%)	Success Rate
Random	12.4	8.2	0.05
ICM	65.1	52.8	0.58
Dreamer V3	78.4	68.1	0.76
Plan2Explore	85.2	74.5	0.82
NCTU (Ours)	96.8	89.3	0.95

(Reference Table 8.1)   
PDF

2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.  
PDF
+ 1

Algorithm	Base Return	Intervened Return	Counterfactual Robustness Score (CRS)
RND	845	310	0.36
Dreamer V3	912	425	0.46
Plan2Explore	930	515	0.55
NCTU (Ours)	945	812	0.86

(Reference Table 8.2)   
PDF

🛠️ Installation
Bash
git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:

Python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=exploration_module,
    learning_rate=3e-4
)

# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
If you find this codebase useful, please cite the underlying thesis:  
PDF

Code snippet
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}
🧮 Mathematical Formulation
The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:
$$\Delta_{CF} = I(\tau_{cf};\Theta) - I(\tau;\Theta)$$
Where:
$I(\tau;\Theta)$ represents Observational Uncertainty (model disagreement regarding observed futures).
$I(\tau_{cf};\Theta)$ represents Counterfactual Uncertainty (model disagreement regarding alternate futures).
The RL policy is optimized to maximize both extrinsic and intrinsic rewards:
$$\max_{\pi} J(\pi) = \mathbb{E}_{\tau\sim\pi} \left[ \sum_{t=0}^{\infty} \gamma^t (r_t^{ext} + \lambda \Delta_{CF}(s_t)) \right]$$
📊 Experimental Results
1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.
MethodDoorKey Coverage (%)MultiRoom Coverage (%)Success RateRandom12.48.20.05ICM65.152.80.58Dreamer V378.468.10.76Plan2Explore85.274.50.82NCTU (Ours)96.889.30.95

(Reference Table 8.1)
2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.
AlgorithmBase ReturnIntervened ReturnCounterfactual Robustness Score (CRS)RND8453100.36Dreamer V39124250.46Plan2Explore9305150.55NCTU (Ours)9458120.86

(Reference Table 8.2)
🛠️ Installation
Bash

git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:
Python

import gymfrom nctu.agent import NCTUAgentfrom nctu.models import EnsembleWorldModel, BetaVAEfrom nctu.exploration import CounterfactualGapBonus# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)# 3. Initialize NCTU Agent
agent = NCTUAgent(
env=env,
encoder=encoder,
world_model=world_model_ensemble,
exploration_module=exploration_module,
learning_rate=3e-4
)# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
If you find this codebase useful, please cite the underlying thesis:
Code snippet

@mastersthesis{bera2026nctu,
title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
author={Bera, Rohit},
school={Techno India University, West Bengal},
year={2026},
month={January}
}

why this is not included in the code file too???
mermaid
graph TD
%% Define Node Styles
classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000
MD icon
README
 MD 
Open

%% Nodes
S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
Z --> |Observe| WM1[Ensemble World Models]:::model
Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model

WM1 --> TObs[Observed Trajectory τ]:::process
WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process

TObs --> UO[Observational Uncertainty U_O]:::output
TCf --> UCF[Counterfactual Uncertainty U_CF]:::output

UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
UO --> Gap
Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input

---

## 🧮 Mathematical Formulation

The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:

$$\\Delta_{CF} = I(\\tau_{cf};\\Theta) - I(\\tau;\\Theta)$$

Where:
* $I(\\tau;\\Theta)$ represents Observational Uncertainty (model disagreement regarding observed futures).
* $I(\\tau_{cf};\\Theta)$ represents Counterfactual Uncertainty (model disagreement regarding alternate futures).

The RL policy is optimized to maximize both extrinsic and intrinsic rewards:

$$\\max_{\\pi} J(\\pi) = \\mathbb{E}_{\\tau\\sim\\pi} \\left[ \\sum_{t=0}^{\\infty} \\gamma^t (r_t^{ext} + \\lambda \\Delta_{CF}(s_t)) \\right]$$

---

## 📊 Experimental Results

### 1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.

| Method | DoorKey Coverage (%) | MultiRoom Coverage (%) | Success Rate |
| :--- | :---: | :---: | :---: |
| Random | 12.4 | 8.2 | 0.05 |
| ICM | 65.1 | 52.8 | 0.58 |
| Dreamer V3 | 78.4 | 68.1 | 0.76 |
| Plan2Explore | 85.2 | 74.5 | 0.82 |
| **NCTU (Ours)** | **96.8** | **89.3** | **0.95** |

*(Reference Table 8.1)*

### 2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.

| Algorithm | Base Return | Intervened Return | Counterfactual Robustness Score (CRS) |
| :--- | :---: | :---: | :---: |
| RND | 845 | 310 | 0.36 |
| Dreamer V3 | 912 | 425 | 0.46 |
| Plan2Explore | 930 | 515 | 0.55 |
| **NCTU (Ours)** | **945** | **812** | **0.86** |

*(Reference Table 8.2)*

---

## 🛠️ Installation

```bash
git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:

Python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=exploration_module,
    learning_rate=3e-4
)

# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
If you find this codebase useful, please cite the underlying thesis:

Code snippet
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}
"""

with open('README.md', 'w', encoding='utf-8') as f:
f.write(markdown_content)

print("README.md successfully overwritten with the complete content.")

My apologies! That was a formatting artifact from how I chunked the previous response. I have now updated the internal file to include the entire script, and you can copy the full, seamless code block below:

[file-tag: code-generated-file-0-1781901802834400354]

```markdown
<div align="center">

# 🧠 Neural Counterfactual Trajectory Uncertainty (NCTU)
**A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning**

![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-State_of_the_Art-brightgreen.svg)

[Explanation](#-what-is-nctu) • [Significance](#-why-it-matters) • [Real-Life Application](#-real-life-applications) • [Architecture](#-architecture-diagram) • [Results](#-experimental-results) • [Quick Start](#-quick-start)

</div>

---

## 📖 What is NCTU?

**Neural Counterfactual Trajectory Uncertainty (NCTU)** is a novel exploration framework for model-based reinforcement learning (RL) that integrates causal reasoning with ensemble-based uncertainty estimation. 

Traditional RL agents learn purely through observation. NCTU mimics human cognition by asking "What if?" questions—reasoning about alternate realities. It utilizes latent world models and a learnable intervention operator to generate counterfactual trajectories, simulating hypothetical modifications to the environment. The system computes a **Counterfactual Gap**—the difference between uncertainty in counterfactual trajectories and observed trajectories—and uses this metric as an intrinsic reward to guide exploration.

## 💡 Why it Matters (The Significance)

Efficient exploration remains a fundamental challenge in complex environments with sparse rewards and hidden causal factors. Existing uncertainty-driven exploration methods (such as BALD or Plan2Explore) estimate uncertainty strictly over *observed* future trajectories. 

The critical flaw in conventional methods is that agreement on observed futures does not imply an understanding of *alternate* futures. An agent might prematurely conclude it has learned the environment, ignoring hidden causal variables. NCTU solves this by actively seeking states where causal understanding remains incomplete, guaranteeing continued exploration until the hidden causal mechanics are fully learned.

## 🌍 Real-Life Applications

NCTU elevates artificial intelligence to Level 3 of Pearl's Ladder of Causation (Counterfactuals), making it highly valuable for safety-critical and dynamic systems:

* **Autonomous Vehicles:** An autonomous car might perfectly navigate a sunny route, resulting in low observational uncertainty. NCTU forces the system to reason about counterfactuals—"What if the weather changed to heavy rain?"—ensuring the driving policy is robust across varying conditions (evaluated via the CARLA driving simulator).
* **Industrial Robotics:** In manufacturing, physical parameters can unexpectedly change. NCTU ensures robotic agents retain high performance and robust adaptation under heavy physical interventions (evaluated via the CausalWorld robotic benchmark).

---

## ✨ Key Features

* **The Counterfactual Gap ($\Delta_{CF}$):** A mathematically robust intrinsic reward metric capturing hidden epistemic uncertainty.
* **Disentangled Latent Interventions:** Employs a $\beta$-VAE to apply targeted structural interventions without destroying contextual integrity.
* **Gradient-Based State Synthesis:** Accelerates discovery in sparse environments by generating adversarial target states toward causally confusing regions.

---

## 📐 Architecture Diagram

The framework connects the Latent Representation Layer, Counterfactual Intervention Layer, and Ensemble World Models to calculate the Counterfactual Gap.

```mermaid
graph TD
    %% Define Node Styles
    classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
    classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
    classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000

    %% Nodes
    S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
    Z --> |Observe| WM1[Ensemble World Models]:::model
    Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
    Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model
    
    WM1 --> TObs[Observed Trajectory τ]:::process
    WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process
    
    TObs --> UO[Observational Uncertainty U_O]:::output
    TCf --> UCF[Counterfactual Uncertainty U_CF]:::output
    
    UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
    UO --> Gap
    Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input
🧮 Mathematical Formulation
The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:

Δ 
CF
​
 =I(τ 
cf
​
 ;Θ)−I(τ;Θ)
Where:

I(τ;Θ) represents Observational Uncertainty (model disagreement regarding observed futures).

I(τ 
cf
​
 ;Θ) represents Counterfactual Uncertainty (model disagreement regarding alternate futures).

The RL policy is optimized to maximize both extrinsic and intrinsic rewards:

π
max
​
 J(π)=E 
τ∼π
​
 [ 
t=0
∑
∞
​
 γ 
t
 (r 
t
ext
​
 +λΔ 
CF
​
 (s 
t
​
 ))]
📊 Experimental Results
1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.

Method	DoorKey Coverage (%)	MultiRoom Coverage (%)	Success Rate
Random	12.4	8.2	0.05
ICM	65.1	52.8	0.58
Dreamer V3	78.4	68.1	0.76
Plan2Explore	85.2	74.5	0.82
NCTU (Ours)	96.8	89.3	0.95
(Reference Table 8.1)

2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.

Algorithm	Base Return	Intervened Return	Counterfactual Robustness Score (CRS)
RND	845	310	0.36
Dreamer V3	912	425	0.46
Plan2Explore	930	515	0.55
NCTU (Ours)	945	812	0.86
(Reference Table 8.2)

🛠️ Installation
Bash
git clone [https://github.com/yourusername/NCTU.git](https://github.com/yourusername/NCTU.git)
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
🚀 Quick Start
Initialize and train the NCTU agent with minimal overhead:

Python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=exploration_module,
    learning_rate=3e-4
)

# 4. Train
agent.train(total_timesteps=1_000_000)
📝 Citation
If you find this codebase useful, please cite the underlying thesis:

Code snippet
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}





Gemini is AI and can make mistakes.
<div align="center">

# 🧠 Neural Counterfactual Trajectory Uncertainty (NCTU)
**A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning**

![Python](https://img.shields.io/badge/python-3.8%2B-blue.svg)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-State_of_the_Art-brightgreen.svg)

[Explanation](#-what-is-nctu) • [Significance](#-why-it-matters) • [Real-Life Application](#-real-life-applications) • [Architecture](#-architecture-diagram) • [Results](#-experimental-results) • [Quick Start](#-quick-start)

</div>

---

## 📖 What is NCTU?

**Neural Counterfactual Trajectory Uncertainty (NCTU)** is a novel exploration framework for model-based reinforcement learning (RL) that integrates causal reasoning with ensemble-based uncertainty estimation. 

Traditional RL agents learn purely through observation. NCTU mimics human cognition by asking "What if?" questions—reasoning about alternate realities. It utilizes latent world models and a learnable intervention operator to generate counterfactual trajectories, simulating hypothetical modifications to the environment. The system computes a **Counterfactual Gap**—the difference between uncertainty in counterfactual trajectories and observed trajectories—and uses this metric as an intrinsic reward to guide exploration.

## 💡 Why it Matters (The Significance)

Efficient exploration remains a fundamental challenge in complex environments with sparse rewards and hidden causal factors. Existing uncertainty-driven exploration methods (such as BALD or Plan2Explore) estimate uncertainty strictly over *observed* future trajectories. 

The critical flaw in conventional methods is that agreement on observed futures does not imply an understanding of *alternate* futures. An agent might prematurely conclude it has learned the environment, ignoring hidden causal variables. NCTU solves this by actively seeking states where causal understanding remains incomplete, guaranteeing continued exploration until the hidden causal mechanics are fully learned.

## 🌍 Real-Life Applications

NCTU elevates artificial intelligence to Level 3 of Pearl's Ladder of Causation (Counterfactuals), making it highly valuable for safety-critical and dynamic systems:

* **Autonomous Vehicles:** An autonomous car might perfectly navigate a sunny route, resulting in low observational uncertainty. NCTU forces the system to reason about counterfactuals—"What if the weather changed to heavy rain?"—ensuring the driving policy is robust across varying conditions (evaluated via the CARLA driving simulator).
* **Industrial Robotics:** In manufacturing, physical parameters can unexpectedly change. NCTU ensures robotic agents retain high performance and robust adaptation under heavy physical interventions (evaluated via the CausalWorld robotic benchmark).

---

## ✨ Key Features

* **The Counterfactual Gap ($\Delta_{CF}$):** A mathematically robust intrinsic reward metric capturing hidden epistemic uncertainty.
* **Disentangled Latent Interventions:** Employs a $\beta$-VAE to apply targeted structural interventions without destroying contextual integrity.
* **Gradient-Based State Synthesis:** Accelerates discovery in sparse environments by generating adversarial target states toward causally confusing regions.

---

## 📐 Architecture Diagram

The framework connects the Latent Representation Layer, Counterfactual Intervention Layer, and Ensemble World Models to calculate the Counterfactual Gap.

```mermaid
graph TD
    %% Define Node Styles
    classDef input fill:#f9f9f9,stroke:#333,stroke-width:2px,color:#000
    classDef process fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#000
    classDef latent fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#000
    classDef model fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    classDef output fill:#fce4ec,stroke:#c2185b,stroke-width:2px,color:#000
    classDef reward fill:#fff9c4,stroke:#fbc02d,stroke-width:2px,color:#000

    %% Nodes
    S[State s_t]:::input --> |Encoder β-VAE| Z[Latent State z_t]:::latent
    Z --> |Observe| WM1[Ensemble World Models]:::model
    Z --> |Intervention Operator I_ψ| Zk[Intervened State z_t^k]:::latent
    Zk --> |Counterfactual Rollout| WM2[Ensemble World Models]:::model
    
    WM1 --> TObs[Observed Trajectory τ]:::process
    WM2 --> TCf[Counterfactual Trajectory τ_cf]:::process
    
    TObs --> UO[Observational Uncertainty U_O]:::output
    TCf --> UCF[Counterfactual Uncertainty U_CF]:::output
    
    UCF --> Gap{Counterfactual Gap Δ_CF}:::reward
    UO --> Gap
    Gap --> |Intrinsic Exploration Reward| Agent[RL Agent]:::input
```

---

## 🧮 Mathematical Formulation

The core innovation is isolating the epistemic uncertainty that exclusively arises under intervention. The Counterfactual Gap is defined as:

$$\Delta_{CF} = I(\tau_{cf};\Theta) - I(\tau;\Theta)$$

Where:
* $I(\tau;\Theta)$ represents Observational Uncertainty (model disagreement regarding observed futures).
* $I(\tau_{cf};\Theta)$ represents Counterfactual Uncertainty (model disagreement regarding alternate futures).

The RL policy is optimized to maximize both extrinsic and intrinsic rewards:

$$\max_{\pi} J(\pi) = \mathbb{E}_{\tau\sim\pi} \left[ \sum_{t=0}^{\infty} \gamma^t (r_t^{ext} + \lambda \Delta_{CF}(s_t)) \right]$$

---

## 📊 Experimental Results

### 1. MiniGrid Exploration Coverage
In highly sparse grid-world environments (DoorKey and MultiRoom), NCTU naturally guides the agent to interact with causal bottlenecks, resulting in superior state coverage compared to state-of-the-art observational models.

| Method | DoorKey Coverage (%) | MultiRoom Coverage (%) | Success Rate |
| :--- | :---: | :---: | :---: |
| Random | 12.4 | 8.2 | 0.05 |
| ICM | 65.1 | 52.8 | 0.58 |
| Dreamer V3 | 78.4 | 68.1 | 0.76 |
| Plan2Explore | 85.2 | 74.5 | 0.82 |
| **NCTU (Ours)** | **96.8** | **89.3** | **0.95** |

*(Reference Table 8.1)*

### 2. CausalWorld Robustness
NCTU evaluates the Counterfactual Robustness Score (CRS) under heavy environmental interventions. While baseline performance collapses under intervention, NCTU retains 86% of its performance.

| Algorithm | Base Return | Intervened Return | Counterfactual Robustness Score (CRS) |
| :--- | :---: | :---: | :---: |
| RND | 845 | 310 | 0.36 |
| Dreamer V3 | 912 | 425 | 0.46 |
| Plan2Explore | 930 | 515 | 0.55 |
| **NCTU (Ours)** | **945** | **812** | **0.86** |

*(Reference Table 8.2)*

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/NCTU.git
cd NCTU
conda create -n nctu_env python=3.9
conda activate nctu_env
pip install -r requirements.txt
```

---

## 🚀 Quick Start

Initialize and train the NCTU agent with minimal overhead:

```python
import gym
from nctu.agent import NCTUAgent
from nctu.models import EnsembleWorldModel, BetaVAE
from nctu.exploration import CounterfactualGapBonus

# 1. Initialize Sparse Reward Environment
env = gym.make('MiniGrid-DoorKey-8x8-v0')

# 2. Setup Architectures
encoder = BetaVAE(input_dim=env.observation_space.shape, latent_dim=64, beta=2.0)
world_model_ensemble = EnsembleWorldModel(latent_dim=64, action_dim=env.action_space.n, num_models=5)
exploration_module = CounterfactualGapBonus(ensemble=world_model_ensemble, intervention_scale=1.0)

# 3. Initialize NCTU Agent
agent = NCTUAgent(
    env=env,
    encoder=encoder,
    world_model=world_model_ensemble,
    exploration_module=exploration_module,
    learning_rate=3e-4
)

# 4. Train
agent.train(total_timesteps=1_000_000)
```

---

## 📝 Citation

If you find this codebase useful, please cite the underlying thesis:

```bibtex
@mastersthesis{bera2026nctu,
  title={Neural Counterfactual Trajectory Uncertainty (NCTU): A Counterfactual Gap-Based Exploration Framework for Model-Based Reinforcement Learning},
  author={Bera, Rohit},
  school={Techno India University, West Bengal},
  year={2026},
  month={January}
}
```


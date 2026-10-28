# Samarth Khera — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-samarth--khera--portfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://samarth-khera-portfolio.vercel.app)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite%208-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Personal engineering portfolio of **Samarth Khera**, Computer Science undergraduate at Newton School of Technology. Designed and built with an editorial dark aesthetic, physics-based micro-interactions, responsive typography, and dedicated showcases for machine learning and systems engineering projects.

> **Explore the live site:** [https://samarth-khera-portfolio.vercel.app](https://samarth-khera-portfolio.vercel.app)

---

## 🌟 Key Highlights

- **Editorial Aesthetic & Modern Typography:** Combines *Inter Tight* for high-legibility UI, italicized *Instrument Serif* for expressive editorial headers, and *JetBrains Mono* for technical metrics.
- **Fluid Motion & Stacking Chapters:** Smooth momentum scrolling powered by Lenis, accompanied by stacking chapter transitions, entry tilt reveals, and masked line animations via `motion/react`.
- **Interactive 3D Skill Cards:** Responsive technical competence cards with pointer-reactive 3D perspective tilting, dynamic hover glow reflections, and pill tags.
- **Explainable AI & Live System Previews:** Custom illustrative interactive mockups for TreeSHAP log-odds attribution decompositions and parallel security scans.
- **Atmospheric Canvas Effects:** Interactive mathematical vortex in the contact section rendered directly to HTML5 Canvas.
- **Resilient Engineering:** Built with zero-config Tailwind CSS v4, Oxlint static analysis, and zero layout shift across mobile, tablet, and widescreen viewports.

---

## 🚀 Featured Projects

### 1. [FraudShield AI](https://github.com/samarth-khera/FraudAi)
- **Category:** AI / ML · Explainable AI · Financial Forensics
- **Tagline:** *Trace the flow. Protect the innocent.*

Decision-support platform for financial fraud investigations that decomposes predictive risk scores to prevent wrongful account freezes.
- **Architecture:** Gradient-boosted trees (XGBoost) combined with exact local **TreeSHAP** log-odds explanations (`base_value + Σφ = raw_margin`).
- **Core Principle:** Strictly isolates transaction risk, account behavior, and lineage-bounded fund exposure without opaque black-box verdicts.
- **Stack:** Python, XGBoost, TreeSHAP, FastAPI, React 19, TypeScript, PaySim Synthetic Benchmark.

### 2. [VibeShield AI](https://github.com/samarth-khera/VibeShieldAi)
- **Category:** Application Security · AI · LLMs · Automated Remediation
- **Tagline:** *Zero-cost public repository security auditor & AI remediation.*
- **Live Application:** [vibeshield-ai-phi.vercel.app](https://vibeshield-ai-phi.vercel.app)

Autonomous security scanner that audits public GitHub repositories in parallel and generates targeted code-fix explanations on demand.
- **Architecture:** Orchestrates Gitleaks (secrets), Semgrep (SAST), and Google OSV-Scanner in ephemeral GitHub Actions runners.
- **Contextual Fixes:** Generates vulnerability remediation via Google Gemini 2.5 Flash with strict prompt-injection defenses and PostgreSQL quota circuit breakers.
- **Stack:** Google Gemini 2.5, Next.js, GitHub Actions, Gitleaks, Semgrep, OSV-Scanner, PostgreSQL.

---

## 🛠️ Technical Competencies

| Domain | Focus Areas | Key Technologies |
| :--- | :--- | :--- |
| **01 / AI & Machine Learning** | Predictive Modeling, Interpretability, Statistical Analysis | Python, Machine Learning, Predictive Modeling, TreeSHAP (XAI), Model Interpretability, Data Analytics |
| **02 / LLMs & Intelligent Systems** | Agentic Workflows, Structured Reasoning, RAG | Large Language Models (LLMs), Agentic AI, RAG, LangGraph, Intelligent Automation |
| **03 / Full-Stack Development** | Component Architecture, Type Safety, Web Systems | React 19, TypeScript, Node.js, Express.js, REST APIs, Modern CSS |
| **04 / Databases & Data Systems** | Schema Modeling, Relational & Document Stores | SQL, MongoDB, Database Design, Data Modeling |

---

## 📂 Project Architecture

```text
portfolio/
├── public/
│   ├── favicon.svg             # Minimal geometric SVG favicon
│   └── portrait.png            # Approved high-contrast B&W hero portrait
├── src/
│   ├── components/
│   │   ├── previews/           # Interactive project mockups (SHAP & security scanner)
│   │   │   ├── FraudShieldPreview.tsx
│   │   │   └── VibeShieldPreview.tsx
│   │   ├── About.tsx           # Editorial statement, portrait pill, and pillar cards
│   │   ├── Contact.tsx         # Direct connection channels & round CTA
│   │   ├── ContactVortex.tsx   # Canvas-based concentric mathematical vortex
│   │   ├── Footer.tsx          # Back-to-top anchor, copyright, and socials
│   │   ├── Hero.tsx            # Hero title clamp, ambient back-glow, and portrait
│   │   ├── Navbar.tsx          # Fixed blur navigation with active section tracking
│   │   ├── ProjectPanel.tsx    # Chapter panels with stacked perspective & tags
│   │   ├── Projects.tsx        # Work chapter container
│   │   ├── ResumeAction.tsx    # Dynamic resume download handler with fallback
│   │   ├── Reveal.tsx          # MaskLine, MaskLines, Stagger, and Chip components
│   │   ├── SkillCard.tsx       # 3D interactive pointer-tilt skill card
│   │   └── Skills.tsx          # 4-column competencies section
│   ├── config/
│   │   ├── motion.ts           # Shared spring physics and transition curves
│   │   └── site.ts             # Central profile, links, and content config
│   ├── data/
│   │   ├── projects.ts         # Project metadata, themes, metrics, and tags
│   │   └── skills.ts           # 4-pillar structured skills taxonomy
│   ├── hooks/
│   │   ├── useResumeAvailable.ts # Build-time resume availability detector
│   │   └── useSmoothScroll.ts  # Lenis smooth-scrolling & anchor navigator
│   ├── index.css               # Design system tokens, utilities, and animations
│   ├── main.tsx                # React root and Lenis stylesheet registration
│   └── App.tsx                 # Root layout composition
├── AGENT_HANDOFF.md            # Comprehensive project state & deployment log
├── PORTFOLIO_IMPLEMENTATION_PLAN.md # 18-phase implementation roadmap
├── package.json
└── vite.config.ts
```

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: `v18.0.0` or later
- **npm**: `v9.0.0` or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samarth-khera/samarth-khera-portfolio.git
   cd samarth-khera-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Quality & Build Scripts

- **Type Check & Production Build:**
  ```bash
  npm run build
  ```
- **Static Code Analysis (Oxlint):**
  ```bash
  npm run lint
  ```
- **Preview Production Bundle:**
  ```bash
  npm run preview
  ```

---

## 📬 Contact & Connect

- **Portfolio:** [samarth-khera-portfolio.vercel.app](https://samarth-khera-portfolio.vercel.app)
- **LinkedIn:** [linkedin.com/in/samarth-khera-a6b94a301](https://www.linkedin.com/in/samarth-khera-a6b94a301/)
- **GitHub:** [@samarth-khera](https://github.com/samarth-khera)

---

*Designed and engineered by Samarth Khera.*

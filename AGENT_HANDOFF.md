# AGENT HANDOFF — Samarth Portfolio

Full details: `PORTFOLIO_IMPLEMENTATION_PLAN.md`. Read it once, then work only on the next phase.

## Repo identity
- Path: `/Users/samarthkhera56/portfolio 3`
- GitHub profile: https://github.com/samarth-khera
- GitHub repo: https://github.com/samarth-khera/samarth-khera-portfolio (branch: `main`, remote: `origin`)
- Live deployment: https://samarth-khera-portfolio.vercel.app
- Stack: Vite 8-era template `react-ts` + Tailwind v4 (`@tailwindcss/vite`) + `motion` (import from `motion/react`) + fontsource (Inter Tight, Instrument Serif italic, JetBrains Mono). Lint: oxlint (`npx oxlint`).

## Status (2026-10-27)
- DONE: Phase 0–3 (plan, hero + portrait, projects, about/skills), Phase 4 (contact/footer — built during Phase 5, it was missing), Phase 5 (QA + fixes + deploy readiness), Phase 6 (Hardik-reference recreation of non-hero sections, two projects, LinkedIn, Resume button), Phase 7 (Lenis, chapter scale/dim stacking, contact vortex, tints), **Phase 8 (portrait glow + hover, consistent hover/press system, final consolidated verification) — COMPLETE.** Plan §11–§15 has details.
- Not a git repo (no remote/branch). Commands: `npm run dev` (:5173), `npm run build` (`tsc -b && vite build` → `dist/`), `npm run lint` (oxlint), `npm run preview` (:4173). No automated tests exist.
- **Portrait:** `public/portrait.png` (897 KB, 1024×571) in hero (unchanged in Phase 5/6) and About inline pill.
- **Resume:** `public/resume.pdf` absent → all Resume actions show "Resume · soon" (`ResumeAction.tsx`). To activate: drop the PDF at `public/resume.pdf`; links become downloads named `Samarth-Khera-Resume.pdf` (see `site.resumeFileName`). No other change needed.
- **Contact:** LinkedIn `https://www.linkedin.com/in/samarth-khera-a6b94a301/` + GitHub `https://github.com/samarth-khera` wired in Contact + Footer. `site.contact.email` is empty (unknown — do not invent); when set, the round CTA becomes `mailto:` and an email line appears.
- **Projects:** exactly two — FraudShield AI (`samarth-khera/FraudAi`), VibeShield AI (`samarth-khera/VibeShieldAi`, live https://vibeshield-ai-phi.vercel.app, HTTP 200). HirePulse removed.

## Phase 6 — verification (visible Chrome 156 via DevTools protocol, production preview)
- 1440×900 / 820×1180 / 390×844: no horizontal overflow, 0 console errors, 0 failed or 4xx requests, hero unchanged, two chapters only, LinkedIn/GitHub/Resume present in Contact + Footer, nav anchors + back-to-top + skip link land on targets, masked reveals complete on every heading, reduced-motion renders final states. Mobile: chapters in natural flow (no sticky trapping), nav `Samarth Khera · Work · About · Contact · Resume` fits.
- `npx tsc -b` 0 errors · `npx oxlint` 0 warnings · `vite build` OK (CSS 38 kB / 11 kB gz, JS 377 kB / 119 kB gz).
- Known differences from reference: no Lenis smoothing (CSS smooth scroll only), no spiral text behind contact headline (concentric rings instead), dark tints instead of bright panel colours, no theme toggle. Previews are illustrative UI mockups, not screenshots (labelled "illustrative" in aria-label).

## Files (Phase 6)
- New: `src/components/Reveal.tsx` (Reveal, MaskLines, MaskLine), `src/components/ResumeAction.tsx`, `src/config/motion.ts`.
- Rewritten (Phase 6): `Projects.tsx`, `ProjectPanel.tsx`, `About.tsx`, `Skills.tsx`, `Contact.tsx`, `Footer.tsx`, `Navbar.tsx`, non-hero part of `src/index.css`. Edited: `site.ts` (linkedin, resumeFileName, descriptor, nav "About"), `projects.ts` (two projects, tints, categories). Deleted: `previews/JobPortalPreview.tsx`, `public/icons.svg`.
- Hero files (`Hero.tsx`, hero CSS) untouched since Phase 1.1 except the Phase 5 mobile title clamp fix.

## Phase 3 — Files Created & Modified
- Created `src/data/skills.ts`: Structured 4-pillar technical competencies data (AI & Machine Learning, LLMs & Intelligent Systems, Full-Stack Development, Databases & Data Systems).
- Created `src/components/About.tsx`: Editorial About section with large flowing statement, inline portrait pill thumbnail, and 3 profile pillars (Academic Foundation, Specialized Focus, Engineering Principles).
- Created `src/components/Skills.tsx`: 4-column technical skills grid with top hairline rules, category counters, focus descriptions, and pill tags.
- Modified `src/App.tsx`: Mounted `<About />` and `<Skills />` in the page flow; removed `about` placeholder; kept `contact` placeholder for Phase 4.
- Modified `src/index.css`: Added styles for `.section-container`, `.section-pill`, `.about-section`, `.inline-portrait-pill`, `.about-pillars-grid`, `.skills-section`, `.skills-grid`, `.skill-pill`, and responsive breakpoint overrides (tablet & mobile).

## Verified Profile Context & Skills
1. **About Me Profile:**
   - Computer Science undergraduate at **Newton School of Technology**.
   - Working at the intersection of Artificial Intelligence, Machine Learning, and software engineering.
   - Core tenets: Practical problem-solving, explainability (XAI), and thoughtful engineering systems.
   - Inline portrait pill: Uses real approved portrait (`/portrait.png`) cropped at `65% 15%` to center on Samarth's face with subtle scale hover.
   - Three pillars: B.Tech Computer Science (Newton School of Technology), Explainability & LLM Systems (TreeSHAP & multi-agent retrieval), and Decoupled Full-Stack Delivery (Python ML + FastAPI/Express + React 19).

2. **Technical Skills Categories (4 Pillars):**
   - **01 / AI & Machine Learning:** Python, Machine Learning, Predictive Modeling, Explainable AI (XAI), Model Interpretability, Data Analytics.
   - **02 / LLMs & Intelligent Systems:** Large Language Models (LLMs), Agentic AI, Retrieval-Augmented Generation (RAG), LangGraph, Intelligent Automation.
   - **03 / Full-Stack Development:** React, TypeScript, Node.js, Express.js, REST APIs, Full-Stack Application Development.
   - **04 / Databases & Data Systems:** SQL, MongoDB, Database Design, Data Modeling.

## Verification Log (Phase 3)
Genuinely tested in non-headless Google Chrome and production build:
- `npm run build`: Vite production build passed in 166ms (`dist/` generated cleanly, total gzip JS ~119 kB).
- `npx oxlint`: 0 warnings, 0 errors across 16 files.
- `npx tsc -b`: 0 errors.
- **Desktop (1440x900):**
  - Clicking navbar "About Me" smoothly scrolls to `#about` with clean offset under fixed navbar (`scroll-margin-top: 5rem;`).
  - About section displays Section Pill (`ABOUT ME`), editorial title, flowing statement with inline portrait pill thumbnail, and 3 hover-reactive profile cards.
  - Skills section displays Section Pill (`TECHNICAL STACK`), editorial heading (`Technical Competencies.`), and 4 columns with top divider rules and reactive pill tags.
- **Tablet (820x1180):**
  - About pillar cards collapse cleanly to 1 column.
  - Skills grid collapses to 2x2 grid (`repeat(2, minmax(0, 1fr))`).
  - Zero text clipping or layout overlap.
- **Mobile (390x844):**
  - About statement card scales to `1.15rem` font size; inline portrait pill scales to `2.8rem × 1.6rem`.
  - Skills grid stacks in 1 column with generous touch targets.
  - Verified `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (zero horizontal overflow).
- **Console & Network:** 0 console errors, 0 failed network requests.

## Phase 7 — summary (details in plan §14)
- New: `src/hooks/useSmoothScroll.ts` (Lenis + anchor handler), `src/components/ContactVortex.tsx`. Edited: `App.tsx`, `main.tsx` (lenis.css), `ProjectPanel.tsx` (stack scale/dim, tilted preview entry), `Contact.tsx` (vortex, veil, CTA hover/tap), `projects.ts` (tints), `index.css` (removed CSS smooth scroll, vortex/veil/dim styles, mobile overrides). Dependency added: `lenis@^1.3.27`.
- Verified in visible Chrome at 1440/820/390. All anchors are exact, there is no overflow, 0 console errors and 0 failed requests, and reduced motion works. `tsc`, `oxlint` and `build` are clean. Hero unchanged; still exactly two projects; LinkedIn and "Resume · soon" intact.
- Left different on purpose: no theme toggle or light mode, dark tints instead of the reference's bright panels, and no particle dissolve on the vortex.
- When testing Lenis via CDP, call `Page.bringToFront` first. Background tabs throttle rAF and anchor scrolls appear unfinished.

## Phase 8 — summary (details in plan §15)
- Edited `Hero.tsx`, adding only two decorative divs: `.hero__glow` (ambient back-light) and the desktop `.hero__hotspot` (hover zone). Everything else in the hero is unchanged.
- Edited `index.css`: glow and hover rules, the shared `scale: 0.97` press feedback (at the end of the file, plus a reduced-motion guard), the draw-in `.link-ul` underline, the preview lift, chapter wash, pillar rule, orb glow and Resume-soon hover.
- Final visible-Chrome run at 1440, 820 and 390 passed every check in plan §15. The real cursor over the Chrome window interferes with synthetic hover and wheel input. Use `CSS.forcePseudoState`, count `isTrusted` wheel events, or cross-check headless.
- Remaining differences: no theme toggle or light mode, dark tints instead of bright panels, no particle dissolve on the vortex.

## Deployment (2026-10-27) — LIVE
- **Production:** https://samarth-khera-portfolio.vercel.app (public, HTTP 200). Vercel project `samarth-khera-portfolio`, scope `samarth-kheras-projects`, deployed via CLI from this directory, which is linked through `.vercel/`. Not a git repo; nothing pushed.
- Verified live in visible Chrome at 1440, 820 and 390: 0 console errors, 0 failed requests, all anchors, hover states, Lenis, stacking, vortex and reduced motion. Details are in plan §16.
- **Change made for deploy:** resume availability is now a build-time flag (`__RESUME_AVAILABLE__` in `vite.config.ts`, declared in `src/globals.d.ts`). The old runtime HEAD probe logged a 404 console error on Vercel.
- **Update:** `npx vercel@latest deploy` (preview) then `npx vercel@latest deploy --prod`.
- **Resume:** put the PDF at `public/resume.pdf`, then run `npx vercel@latest deploy --prod`. It downloads as `Samarth-Khera-Resume.pdf`.
- `.env.local` holds a Vercel OIDC token created by `vercel link`. It is gitignored and excluded by `.vercelignore`; never print or commit it.

## Phase 9 — interactive skill cards + unified text motion (LIVE 2026-10-27, details in plan §17)
- New: `src/components/SkillCard.tsx`.
- Edited:
  - `Reveal.tsx`: added `Stagger`, `StaggerItem`, `Chip`, and a `margin` option on `Reveal`.
  - `config/motion.ts`: added `itemVariants` and `chipVariants`.
  - `Skills.tsx`, `ProjectPanel.tsx` (tags), `About.tsx` (pillars), `Contact.tsx` (link row), `Footer.tsx` (fade-up).
  - `skills.ts`: per-card accent; the 5th full-stack tag was removed per the brief.
  - `index.css`: skill-card and skill-tag styles; the 4-column grid now starts at 1401 px; old pillar-skills CSS removed.
- Hero untouched. Still exactly 2 projects. LinkedIn and Resume "soon" unchanged.
- Production redeployed and live-checked: https://samarth-khera-portfolio.vercel.app.

## Phase 10 — blue and lime project themes (LIVE 2026-10-27, details in plan §18)
- FraudShield AI is royal blue `#2C5BCC` with a `#25283B` panel. VibeShield AI is lime `#D0E267` with a `#F7F8FC` panel and dark text. Each has two highlights drawn from existing facts. The existing reveal/stagger/chip helpers were reused.
- Files:
  - `src/data/projects.ts`: theme and highlights.
  - `src/components/ProjectPanel.tsx`: variant class, highlights, tall-chapter pinning, edge-triggered reveals.
  - `src/components/previews/VibeShieldPreview.tsx`: `tone` prop.
  - `src/index.css`: scoped theme block plus metric styles; blue contrast tokens; slightly tighter chapter padding.
- Production redeployed and checked live: https://samarth-khera-portfolio.vercel.app.
- **GitHub push:** Pushed source code to https://github.com/samarth-khera/samarth-khera-portfolio on `main`.

## Next step
- Owner supplies `public/resume.pdf` and (optionally) `site.contact.email`, confirms production domain → add absolute `og:url`/`og:image` in `index.html`.
- Deploy: Vercel (import repo, Vite preset auto-detects `npm run build` → `dist`) or GitHub Pages (set `base: '/<repo>/'`). Then re-test the live URL at 1440/820/390.

## (Historical) Phase 4 brief
- Build `#contact` section:
  - Big editorial CTA ("Let's build something intelligent together" / "Get In Touch").
  - Verified direct links: Mailto, GitHub (`https://github.com/samarth-khera`), LinkedIn (if available).
  - Resume download integration (`public/resume.pdf` with automatic fallback if file is pending).
- Footer component (copyright year, back-to-top anchor, social links).
- Verify end-to-end scroll navigation and interactive states.

# Portfolio Implementation Plan — Samarth Khera

Status: **Phases 0–8 complete and DEPLOYED to Vercel production — https://samarth-khera-portfolio.vercel.app (2026-10-27): hero, two-project Selected Work, About, Skills, Contact, Footer, QA pass, reference-fidelity pass.** See §11–§18 for the latest state.
See `AGENT_HANDOFF.md` for the short continuation brief.

## 1. Repository findings (verified)

| Item | Finding |
|---|---|
| Workspace | `/Users/samarthkhera56/portfolio 3` — **completely empty**, not a git repo, no remote, no package.json |
| Reusable code | None. Greenfield. |
| Toolchain | Node v22.18.0, npm 10.9.3 present |
| GitHub profile | `github.com/samarth-khera` (public repos: Chat-app, DCODE-Smaple-Repo, Data-Driven-Analysis-of-Road-Traffic-Accident-Severity, FraudAi, Job-portal, Section_E_G14_DvaProject, Tic-Tac-Toe, To-Do-List, VibeShieldAi, capstone_project, samarth378) |
| Resume | `~/Desktop/main.pdf` (96 KB, modified Oct 26) — *probable* resume; **user must confirm** |
| Portrait | Supplied in chat only (1024x571 B&W, subject right of centre, pure black left side). **Not on disk — see blockers.** |

GitHub API was rate-limited (403) so repo detail comes from README fetches only.

### Project verification
| Project | Evidence (README) | Showcase? |
|---|---|---|
| **FraudAi** (FraudShield AI) | Explainable decision-support for fraud investigators; XGBoost + exact TreeSHAP; leakage-safe features; account risk profiles; traceable fund exposure; human audit trail; React 19 + Vite + TS + React Router 7 frontend, FastAPI backend. README states demo data is **synthetic / research prototype**. | Yes — flagship |
| **VibeShieldAi** | Public GitHub repo security auditor; Gitleaks + Semgrep + OSV-Scanner via GitHub Actions; on-demand Gemini 2.5 Flash explanations; PostgreSQL caching/quotas; Next.js. **Live: https://vibeshield-ai-phi.vercel.app** | Yes — flagship |
| **Job-portal** | README is 404 (none). Not inspected beyond that. | Unverified — inspect before including |
| **Chat-app** | README is the default Vite template. Stack/features unverified. | Unverified — inspect before including |
| Data-Driven-Analysis… / Section_E_G14_DvaProject | Not inspected. | Candidate for a "data analytics" card |

**Decision:** launch with 3 projects: FraudAi, VibeShieldAi, + one verified full-stack (Job-portal OR Chat-app, whichever has real working code/README after a 5-minute inspection; if neither qualifies, ship with 2 flagships + data analytics project). Never invent metrics/users/awards. FraudAi must be labelled "research prototype, synthetic data".

## 2. Reference analysis

### Reference B (hero) — from user screenshot only
`wallofportfolios.in/portfolios/khaled-batt/` returned **404 to fetch** and the browser subagent did not return usable detail for it. **Plan is based on the supplied screenshot; interactions are unknown.**
Observed composition:
- Pure black bg; tiny uppercase wordmark top-left; centered nav (Work / About me / Contact); outlined pill "RESUME" top-right.
- Large B&W portrait centred-right, bleeding into bottom edge; head overlaps giant low-contrast name ("Khaled") behind it.
- Green-dot "OPEN TO ..." pill at left (mono caps) above headline.
- Headline bottom-left, ~64–72px, mixed **bold grotesk + italic serif** words ("*under* / *real-world*"), overlapping portrait's lower-left.
- Bottom-right: small grey paragraph; CTAs "See selected work ↓" (white) and "Let's talk →" (muted).

### Reference A (everything else) — inspected in browser (4 screenshots in `docs/reference-screenshots/`)
- Light/dark theme toggle (moon icon), sticky blurred header: logo mark + name left; Work / About / Resume; dark pill CTA "Get in touch".
- Opening cover = camera viewfinder frame (corner brackets, EXIF-like mono caption `BULB F/2.8 ISO 800`, timecode) before content.
- Giant tight-tracked grotesk statements with an **inline rounded photo pill** inside the headline.
- Three-column "pillars" (Research / Design / Build): top hairline rule, big heading, grey paragraph, outlined pill tags.
- Projects: **full-width stacked colored panels** with rounded top corners overlapping the previous panel on scroll (sticky stacking), huge title, tagline, short paragraph, product mock on right.
- Testimonial cards with slight rotation on dotted-grid board (skip: no testimonials to fabricate).
- Section anchors (`#work #about #resume #contact …`), manual scroll restoration.
- Not verified: exact fonts/hex, hover details, mobile layout (subagent report incomplete).

### Unified design spec (decisions)
- **Dark-only** (cinematic). Skip light/dark toggle. Keep Reference A's layout language rendered in black/greys.
- Palette: `#000` base, `#0a0a0a` surface, `#fff` text, `#a1a1a1` muted, `#2a2a2a` hairlines, single accent green `#3ddc84`-ish used only for the availability dot. Project panels use *dark tinted* panels (deep desaturated hues per project) instead of Ref A's bright colors, to stay cohesive.
- Type: grotesk sans (Inter Tight / Geist, bold, tight tracking) + italic serif accent (Instrument Serif / Newsreader italic) + mono caps (JetBrains Mono / Geist Mono) for labels. Self-host via `@fontsource`.
- Motifs carried from A: hairline rules, pill tags, inline image pill in an About statement, sticky stacked project panels, rounded panel tops, large type.
- Motifs from B: hero composition, mono pill badge, mixed bold/italic headline.
- No viewfinder intro by default (optional polish: small mono caption strip in hero footer).

## 3. Section order
1. Header (sticky, blur): `SK.` mark · Work · About · Skills · Contact · pill `Resume`
2. **Hero** — portrait layer, ghost "SAMARTH" text, badge "Open to AI/ML internships" *(confirm wording)*, headline, intro, CTAs
3. **Selected Work** — stacked sticky project panels
4. **About** — tightened statement with inline portrait pill
5. **Skills** — 3–4 pillar columns with pill tags
6. **Contact** — big "Let's build something" CTA, email, GitHub, LinkedIn *(URLs needed)*
7. Footer (resume link, socials, © year)
No experience section, no testimonials.

Headline draft: "Building *intelligent systems* that explain themselves." Intro: "B.Tech CSE at Newton School of Technology. I build AI/ML systems — agentic LLM apps, RAG and explainable models — and ship them as full-stack products."
About (tightened): "B.Tech CSE undergraduate at Newton School of Technology, focused on AI, ML and intelligent systems. I work with Python, ML, agentic AI, LLMs, RAG, LangGraph, explainable AI and data analytics — plus full-stack development — building AI-driven solutions through predictive modeling, intelligent automation and modern AI application architecture."

Skills groups: **AI / ML** (Python, ML, XAI/interpretability, predictive modeling, data analytics) · **Agentic AI** (LLMs, RAG, LangGraph, Gemini) · **Full-stack** (React, TypeScript, Node.js, Express.js, SQL, MongoDB) · **Tooling** (only verified: FastAPI, XGBoost/SHAP, PostgreSQL, Vercel, GitHub Actions, Next.js).

## 4. Tech decisions
React 18/19 + Vite + TypeScript, Tailwind CSS v4 (user pre-approved in brief; confirm v4 at install), Framer Motion (`motion`), `lenis` optional (skip unless scroll feel needs it). **No Three.js.** `@fontsource` fonts. Deploy: Vercel or GitHub Pages (Vite static).

Architecture:
```
src/
  main.tsx  App.tsx  index.css
  data/{projects.ts, skills.ts, site.ts}     # all content here; add project = add object
  components/{Header, Hero, Projects, ProjectPanel, About, Skills, Contact, Footer, Pill, Reveal}.tsx
  hooks/{useReducedMotion, useActiveSection}.ts
public/{resume.pdf, og.jpg, favicon.svg}
src/assets/{portrait.jpg, projects/*.webp}
docs/reference-screenshots/
```
Project type: `{slug,title,tagline,summary,tags[],repoUrl,liveUrl?,image,tint,status}`.

## 5. Phases
Each phase: run `npm run dev`, open in **visible Chrome**, check console/network, desktop (1440) + mobile (390) widths, log pass/fail in `AGENT_HANDOFF.md`.

**P1 Foundation** — Scaffold Vite React TS *in this folder* (`npx -y create-vite@latest ./ --template react-ts`, run `--help` first), add Tailwind, motion, fontsource; design tokens, fonts, layout shell, header, section anchors, `data/` files with placeholders flagged TODO. *Accept:* dev server runs, build passes, header sticky/blur, anchors scroll, dark tokens applied. *Risk:* non-empty-dir prompt → docs/md files exist; scaffold into temp and move, or answer prompt non-interactively.

**P2 Hero + portrait** — Place portrait at `src/assets/portrait.jpg`. Layout: image absolutely positioned right, `object-fit: cover`, `object-position` ~ 70% center; mask-image gradient fading left/bottom to black (image bg is already black → blends seamlessly); ghost "SAMARTH" `clamp(10rem,24vw,22rem)` colour `rgba(255,255,255,.06)` *behind* portrait (z-order: ghost < portrait < headline); headline bottom-left overlapping; intro + CTAs bottom-right; mobile: stack, portrait top, headline below, ghost scaled. *Accept:* face never covered by text at 1440/1024/390; matches Ref B composition; LCP image preloaded, alt text. *Risk:* portrait is 16:9 with subject right — on mobile crop with object-position 65%; request higher-res original.

**P3 Projects** — Stacked sticky panels (`position:sticky; top:…`, rounded top, negative overlap), content from `projects.ts`; needs screenshots per project (capture from live VibeShield, run FraudAi locally or request screenshots). Optional detail view = expandable panel or `/work/:slug` only if time; default: links to repo/live. *Accept:* ≥2 panels, links open correct URLs, stacking works on desktop, collapses to simple cards on mobile, FraudAi "synthetic data prototype" note visible.

**P4 About + Skills** — About statement w/ inline portrait pill; skills columns with top rule + pill tags (Ref A). *Accept:* copy matches this doc, nothing unverified.

**P5 Contact + resume + footer** — Mailto, GitHub, LinkedIn; resume button → `/resume.pdf` with `download`. *Accept:* resume downloads; hide button if file missing. *Needs:* email, LinkedIn URL, confirmed resume.

**P6 Motion + responsive** — Mask/line text reveals on headline, fade-up `Reveal` (once, IntersectionObserver), subtle portrait parallax (≤20px), header hide/shrink, pill/link hover underlines, panel scale on scroll. `prefers-reduced-motion`: disable parallax/reveals (render final state), keep opacity-only. Re-check Ref B/A live motion if browser access allows. *Accept:* 60fps scroll in Chrome Performance panel, reduced-motion emulation verified.

**P7 A11y / perf / SEO / deploy** — Semantic landmarks, single h1, focus rings, skip link, contrast ≥4.5 (muted grey #a1a1a1 on black OK), alt text, title/meta/OG/JSON-LD Person, favicon, WebP/AVIF images, font preload, Lighthouse ≥90 all categories. Deploy Vercel (preferred) or Pages (set Vite `base`). *Accept:* Lighthouse report recorded, live URL tested.

**P8 Final verification** — Full visible-Chrome pass of every link, nav, resume, console/network clean, side-by-side screenshot vs refs at 1440/768/390; list of anything unverified.

## 6. Tests / verification standard
`npm run build` + `tsc --noEmit` + `npm run lint` are necessary but **not sufficient**. Required: visible (non-headless) Chrome, manual interaction, console/network check, screenshots at 1440/768/390 compared to `docs/reference-screenshots/` and the Ref B screenshot, reduced-motion emulation, record results.

## 7. Risks / unresolved
- Portrait file not on disk (blocker for P2).
- Ref B live behavior unverified (404 on fetch). Ref A fonts/hex/hover/mobile unverified.
- Job-portal / Chat-app state unverified; project screenshots absent.
- Resume file identity, email, LinkedIn, badge wording, deployment target unconfirmed.
- Fallbacks: drop to 2 projects; use plain cards if sticky stacking is janky; drop parallax if perf poor.

## 8. Phase 1 design decisions (implemented)
- Ghost name sits **behind** portrait via `mix-blend-mode: screen` on the portrait wrapper (not the img — a mask on the same element isolates the blend). Requires black photo background.
- Portrait: full-bleed `object-fit: cover`, `object-position: 64% 0%`, slight scale + `translateX`; left-edge mask fade; bottom/top shade gradients. Mobile: separate 60svh top block with bottom fade.
- Type: Inter Tight 600, tracking -0.045em, line-height .98; italic Instrument Serif for one word; mono caps for labels. Tokens in `@theme` (`--color-bg #050505`, `--color-fg #f5f5f5`, muted `#9a9a9a`, ghost `rgba(255,255,255,.055)`, line `#262626`).
- Resume links auto-hide until `/resume.pdf` truly exists. Content/asset paths live in `src/config/site.ts`.
- Phase numbering: Phase 1 = foundation + hero (merged old P1/P2). Next = Projects.

## 9. Phase 2 design decisions & Selected Work (implemented)
- **Visual Reference Alignment:** Faithfully followed Reference A's (Hardik Agarwal) project presentation layout:
  - Stacked sticky panels on desktop with staggered `top: calc(clamp(4rem, 7vh, 6rem) + index * 1.5rem)`.
  - Rounded top corners (`2.25rem` / `rounded-t-[2.25rem]`), generous padding (`clamp(2rem, 4vw, 3.5rem)`), and dark tinted project palettes (FraudShield: `#090d14`, VibeShield: `#08110c`, HirePulse: `#0f0c18`).
  - Top bar with mono counter (`01 / 03`), category tags, and verified status badges.
  - Left column: large bold editorial project name (`clamp(2.5rem, 5vw, 4rem)`), one-line punchy subtitle, concise problem statement, framed technical approach box, pill technology tags, and external link buttons.
  - Right column: rich, custom-engineered UI window mockups (macOS style window dots, terminal-inspired forensic inspection for TreeSHAP log-odds and fund lineage, multi-scanner matrix and Gemini 2.5 Flash diff for VibeShield, and candidate pipeline review for HirePulse).
- **Responsive Behavior:**
  - Desktop: Staggered sticky stack + two-column grid (`1.05fr 1fr`).
  - Tablet (`≤1024px`): Single-column stacked layout, preserving sticky overlap.
  - Mobile (`≤640px`): Cleanly converted from sticky to natural relative flow (`position: relative; top: 0 !important; margin-bottom: 2rem;`) to eliminate scroll-trapping and ensure buttery-smooth touch scrolling.
  - Zero horizontal overflow (`document.documentElement.scrollWidth <= document.documentElement.clientWidth`).
- **Verified Projects Included:**
  1. FraudShield AI (`samarth-khera/FraudAi`) — TreeSHAP local log-odds, PaySim benchmark, research prototype notice.
  2. VibeShield AI (`samarth-khera/VibeShieldAi`) — Gitleaks + Semgrep + OSV-Scanner, Gemini 2.5 Flash, Live Demo (`https://vibeshield-ai-phi.vercel.app`).
  3. HirePulse (`samarth-khera/Job-portal`) — Full-stack MERN job application platform (React 19, Node.js, Express 5, MongoDB, Multer).

## 10. Phase 3 design decisions & About Me + Technical Skills (implemented)
- **About Me Section:**
  - Layout: Follows Reference A's signature editorial typography and inline portrait pill motif.
  - Section Badge: Styled using shared `.section-pill` with muted dot and uppercase mono label (`ABOUT ME`).
  - Editorial Heading: `Engineering systems that bring intelligence to practical problems.` with italic Instrument Serif accent on `intelligence`.
  - Statement Card: Large text (`clamp(1.3rem, 2.4vw, 2.1rem)`) with subtle glass surface (`rgba(255, 255, 255, 0.02)`) and embedded `.inline-portrait-pill` (crop of `/portrait.png` centered on face with micro-scale hover).
  - Profile Pillars: 3 structured cards (Academic Foundation at Newton School of Technology, Specialized Focus on Explainability & LLMs, Decoupled Full-Stack Delivery).
  - Responsive: Desktop 3-column pillars grid collapses to single-column on tablet and mobile.
- **Technical Skills Section:**
  - Layout: 4 distinct pillar categories matching the user's verified background:
    1. `AI & Machine Learning`: Python, Machine Learning, Predictive Modeling, Explainable AI (XAI), Model Interpretability, Data Analytics.
    2. `LLMs & Intelligent Systems`: Large Language Models (LLMs), Agentic AI, Retrieval-Augmented Generation (RAG), LangGraph, Intelligent Automation.
    3. `Full-Stack Development`: React, TypeScript, Node.js, Express.js, REST APIs, Full-Stack Application Development.
    4. `Databases & Data Systems`: SQL, MongoDB, Database Design, Data Modeling.
  - Category Cards: Top hairline divider rule (`border-t border-white/12`), mono counter (`01`, `02`, `03`, `04`), category slug, concise one-line discipline note, and pill tags.
  - Pill Tags: Restrained dark glass background (`rgba(255, 255, 255, 0.035)`), hairline border (`rgba(255, 255, 255, 0.08)`), and subtle hover state (`hover:bg-white/[0.08] hover:border-white/22 hover:text-white`).
  - Responsive: 4 columns on desktop (`grid-cols-4`), 2x2 grid on tablet (`≤1024px`), 1 column on mobile (`≤640px`).
- **Navigation Integration:**
  - Navbar `#about` link scrolls smoothly to `<section id="about">` with `scroll-margin-top: 5rem;` avoiding header overlap.




## 11. Phase 4 — Contact, resume & footer (implemented during Phase 5)
- Discrepancy: the Phase 5 brief assumed Phase 4 existed; the code only had an empty `#contact` placeholder. Built `Contact.tsx` + `Footer.tsx` to the handoff's Phase 4 spec; contact channels live in `site.contact` and render only when non-empty (nothing invented).

## 12. Phase 5 — Final QA, bug fixes & deployment readiness (complete)
- Fixed: missing Contact/Footer; fixed header had no backdrop (headings collided with nav text) → `.nav::before` fading blur; mobile hero headline hyphen-broke "real-world" → `clamp(2.2rem, 10vw, 3.4rem)`; mobile `01 / 03` counter wrap; invalid `aria-label` on plain `div`s; decorative pill `alt=""`; reduced-motion now disables keyframes; small mono labels raised to ≥4.5:1 contrast; Vite-logo favicon → "SK" monogram; unused `public/icons.svg` removed; `index.html` gained portrait preload, OG/Twitter meta, JSON-LD Person (`og:url`/`og:image` wait for the domain); `useResumeAvailable` shares one probe and drains the response (no "(canceled)" rows).
- Verified in visible Chrome 156 (CDP-driven, 1440×900 / 820×1180 / 390×844) on the production preview: 0 console errors, 0 failed/4xx requests, 0 horizontal overflow, CLS 0, all anchors/CTAs/back-to-top/skip-link traced to their targets, external links HTTP 200. `tsc -b`, `oxlint`, `vite build` clean. No automated tests exist. Lighthouse not run (no CLI). Security: no env/secret files, no localhost URLs in `src/`/`dist/`, `.gitignore` OK, root-absolute asset paths (Vercel-ready; GitHub Pages project URL needs `base`).

## 13. Phase 6 — Reference recreation (Hardik Agarwal) for non-hero sections (complete)
**Reference inspected live** (https://hardikk-agarwal.github.io/Design-Portfolio/, Chrome 156, 1440×900, 15 scroll captures + computed styles). Observed: Mona Sans, GSAP + Lenis; fixed 73 px header (Work / About / Resume / pill CTA); "Selected work." intro at 223 px / weight 820 / tracking −0.05em centred in a sticky full-viewport veil; each project is a **full-viewport sticky "chapter"** (`position: sticky; top: 0`, 28 px rounded top corners, tinted bg, 100 px / weight 780 / lh 0.9 title top-left, 30 px subtitle, short paragraph, product mock anchored bottom-right and bleeding off the bottom) that the next chapter slides over; "my-approach" = three ruled columns (37 px bold h3, grey paragraph); contact = full-viewport centred 115 px headline, round "Get in touch" button, underlined email, link row (LinkedIn ↗ …), bottom bar © / Work / About / Resume / Back to top ↑. Light theme with per-project bright tints; a text-spiral decoration behind the contact headline.
**Recreated (dark adaptation, Inter Tight / Instrument Serif / JetBrains Mono, `motion` instead of GSAP/Lenis, no new packages):**
- `Projects.tsx`: sticky `.work__intro` ("Selected / work" + accent dot, lead) → `.work__chapters` with two `ProjectPanel` chapters (`.chapter`: sticky top 0, 100svh, 28 px radius, tinted `--chapter-bg` + faint accent wash, title split into masked lines, tagline, description, approach, tag pills, GitHub / Live demo buttons, status note; preview window bottom-right, bleeding 5vh). Mobile (≤640): natural flow, intro not sticky.
- `About.tsx`: h2 is the editorial statement (masked line reveals, inline portrait pill kept) + lead paragraph + three ruled pillars (`.pillars`). `Skills.tsx`: same pillar system ×4 with pills; heading "Technical / *Competencies.*" + right-aligned lead.
- `Contact.tsx`: full-viewport centred: eyebrow, 2-line masked headline "Let's build something / *intelligent* together.", round CTA (`mailto:` when `site.contact.email` is set, else "Connect on LinkedIn"), email line (when set), link row LinkedIn ↗ / GitHub ↗ / Resume; concentric-ring glow instead of the text spiral. `Footer.tsx`: © year · descriptor | Work · About · GitHub · LinkedIn · Resume · Back to top ↑.
- Animations: `Reveal` (fade-up, once, −10% margin) and `MaskLines`/`MaskLine` (parent-observed variant-driven slide-up lines, staggered) in `src/components/Reveal.tsx`; preview windows rise 90 px on entry; round CTA scales in and on hover; link underline/arrow hovers; `prefers-reduced-motion` renders final states. Not reproduced: Lenis inertial smoothing, the spiral text, light/dark toggle (site is dark-only by decision).
- Projects: exactly **two** (FraudShield AI, VibeShield AI). HirePulse removed from `projects.ts`; `JobPortalPreview.tsx` deleted. Live demo link only for VibeShield (verified 200).
- LinkedIn: `https://www.linkedin.com/in/samarth-khera-a6b94a301/` in `site.contact.linkedin` → Contact CTA/link row + Footer (`target="_blank" rel="noreferrer"`, visible text names).
- Resume: `ResumeAction.tsx` (nav pill, mobile nav link, Contact row, Footer). PDF absent → visible "Resume · soon" (`aria-disabled`, sr-only "(PDF coming soon)", not focusable, no href). **Activation: copy the PDF to `public/resume.pdf`** — every action becomes `<a download="Samarth-Khera-Resume.pdf">` automatically (`site.resumeFileName`); verify with `curl -I http://localhost:4173/resume.pdf` (must be `application/pdf`).
- Nav label "About Me" → "About" (reference wording; also lets the mobile nav fit with Resume). Hero untouched.

## 14. Phase 7 — Final reference polish (complete)
**Re-inspected in visible Chrome** (reference dark mode, 1440×900, wheel-driven sampling):
- Lenis wheel easing settles over ~0.7 s, matching default `lerp 0.1`.
- A covered chapter's transform goes `scale 1 → 0.9`, centre origin, plus darkening while the next chapter slides over. Its children and figures are not transformed.
- The incoming figure enters slightly tilted.
- Contact decoration is a `<canvas>` "typography vortex": repeated name/title on ~10 concentric rings in mono type, alternating tight and letter-spaced rings, larger and brighter outward. It is static at idle and pointer-reactive (dissolve/suction). A centre veil `radial-gradient(ellipse 52% 46%, bg 38% → transparent)` sits behind the headline.
- CTA: `hover scale 1.04` (0.5 s expo) and `active 0.97`.
- Reference chapter colours stay bright in its dark mode.

**Changes**
- **Smooth scroll:** added `lenis@^1.3.27` (the reference's own library, ~4 kB gz; no other deps) via `src/hooks/useSmoothScroll.ts`, called in `App.tsx`.
  - Anchor clicks go through `lenis.scrollTo`, which itself honours `scroll-margin-top`. The handler pushes the hash and moves focus (`tabindex=-1`, no outline).
  - Lenis is off under reduced motion, falling back to an instant `scrollIntoView`.
  - Touch stays native. CSS `scroll-behavior: smooth` was removed so only one smoothing system runs. `lenis/dist/lenis.css` is imported in `main.tsx`.
- **Chapter stacking** (`ProjectPanel.tsx`): each non-last chapter scales 1→0.9 and fades in a black `.chapter__dim` overlay (0→0.55) across the next chapter's slide-over.
  - Progress comes from the chapter's *natural* flow range (container top + earlier chapter heights), because `useScroll({target})` reads sticky elements at their stuck position and never progressed.
  - Mobile disables the effect, which also keeps chapters non-sticky.
  - Preview windows enter `y 110, rotate −2.5° → 0`.
- **Tints:** FraudShield `#11264f` (deep navy) and VibeShield `#0d3424` (deep emerald), plus a stronger accent wash and a top sheen. These are distinct but still dark (the user's dark-theme rule overrides the reference's bright panels).
- **Contact vortex:** new `ContactVortex.tsx`, an SVG with 10 `textPath` rings of "SAMARTH KHERA / AI·ML & SOFTWARE ENGINEERING /".
  - Ring text is sized by circumference and `textLength`; size and opacity grow outward, and every other ring is letter-spaced.
  - On fine pointers the rings counter-rotate a few degrees with cursor x (CSS transition, one rAF per move, no idle loop). It is static under reduced motion.
  - The reference centre veil was added, replacing the concentric rings.
- **Contact CTA:** hover 1.04 / tap 0.97, matching the reference.

**Intentionally unchanged:** hero; no theme toggle or light theme (user requirement); no particle dissolve/suction effect on the vortex; bright reference panel colours not copied.
**Verification:**
- Visible Chrome at 1440 / 820 / 390, with the tab in the foreground: every anchor lands exactly. Work, Contact and Top land at 0 and About at 80 (its scroll-margin), across Work/About/Contact/Back-to-top/hero CTA/brand.
- Inertia traced 274→599 px over ~0.8 s after a wheel burst.
- Mid-stack measured scale 0.948 with dim 0.29.
- No horizontal overflow; exactly two chapters; 0 console errors; 0 failed requests.
- Reduced motion: Lenis off, anchors instant and correct, no chapter transform.
- Headless cross-check gave identical results.
- Harness note: background CDP tabs throttle requestAnimationFrame, so Lenis anchor scrolls must be measured with the tab brought to front.
- `tsc -b` 0 errors, `oxlint` 0 warnings, `vite build` OK (JS 407 kB / 128 kB gz incl. Lenis). No automated tests exist.

## 15. Phase 8 — Consolidated final pass: portrait glow + interaction system (complete)
Gap check against the reference findings (§13–§14): the layout, sticky chapters, masked reveals, Lenis, vortex, tints, two projects, LinkedIn and Resume were already in place. This pass therefore added only the requested portrait glow and a consistent hover/press language. All edits were made first and verified once at the end.

- **Portrait glow** (`Hero.tsx` + hero CSS; additive only, so the image, crop, transforms, mask, `mix-blend-mode: screen`, ghost name, copy and entrance animations are all unchanged):
  - `.hero__glow` holds two monochrome radial gradients at z 0, behind the screen-blended portrait and above the ghost name. It reads as soft back-light around the hair and shoulders, with no overlay on the face.
  - A desktop-only `.hero__hotspot` (fine pointer with hover) sits over the subject: left 55%, right 6%, top 8%, bottom 36%. It does not overlap the intro or CTAs, which stay clickable.
  - Hovering it uses `.hero:has(.hero__hotspot:hover)` to fade in a stronger glow layer, set the portrait wrapper to `scale: 1.015` (the individual property, so it never fights motion's inline transform), and apply `brightness(1.05) contrast(1.03)` to the image. Transitions run 1.1–1.2 s on the expo ease.
  - Touch devices have no hotspot, only the ambient glow, which is repositioned for the 60svh mobile portrait. Reduced motion removes the hover scale.
- **Interaction system** (CSS; Tailwind v4 stays the token/utility layer, motion handles reveals and the CTA spring):
  - Shared press feedback is `scale: 0.97` on `.pill-btn`, `.cta` and `.project-link`, declared last so it wins the cascade, with a reduced-motion guard after it.
  - `.link-ul` now has a faint resting underline plus a bright underline that draws in from the left via `background-size`.
  - Preview windows lift 10 px on hover, with an accent-tinted border and glow. The chapter accent wash goes from 0.8 to 1 on hover. Neither moves the sticky card itself.
  - Pillar top rules brighten on hover (0.14 → 0.4).
  - The contact orb gains a stronger glow plus a halo ring, and a round focus outline.
  - The "Resume · soon" pill's border brightens on hover; it still has no `href`, keeps `aria-disabled` and a `not-allowed` cursor, and does not press.
  - Existing nav and footer underline reveals, CTA arrows and tag-pill lift were kept.
- **Final verification** (visible Chrome 156, production preview, 1440×900 / 820×1180 / 390×844):
  - Exactly 2 projects. No horizontal overflow. Portrait and pill images and all 3 font families loaded. 0 console errors, 0 failed or 4xx requests.
  - LinkedIn, GitHub and the VibeShield live URL are correct.
  - All 7 anchors (nav Work/About/Contact, Back to top, both hero CTAs, brand) land exactly at all three sizes. One desktop sample was flagged in-run as interfered by 69 real wheel events; the headless cross-check was exact.
  - Mid-stack FraudShield shows scale 0.948 and dim 0.29. The vortex reacts to the pointer.
  - All hover states were verified via forced `:hover`/`:active` (the real cursor was over the visible window and sent 88 trusted pointer moves, so synthetic hovers were unreliable).
  - Portrait enter/leave/re-enter was confirmed with real mouse events in headless Chrome. Clearing a forced `:hover` does not re-evaluate `:has()`, which is a harness artifact only.
  - Touch emulation: hotspot hidden and no scale on tap. Reduced motion: Lenis off, anchors correct, no hover scale.
  - `tsc -b` 0 errors, `oxlint` 0 warnings, `vite build` OK (CSS 44.8 kB / 12.2 kB gz, JS 407.8 kB / 128.4 kB gz). No automated tests exist.

## 16. Deployment — Vercel production (complete, 2026-10-27)
- **Project:** `samarth-khera-portfolio` in the personal scope `samarth-kheras-projects` (Hobby). It is a new project; the existing `vibeshield-ai`, `chat-app`, `capstone-project` and `job-portal` projects were left untouched. It was deployed straight from the local directory via `npx vercel@latest` (CLI 65.4.0); there is no git integration and nothing was committed or pushed.
- **Production URL:** https://samarth-khera-portfolio.vercel.app. It is public (HTTP 200 without auth). Deployment-specific `*-samarth-kheras-projects.vercel.app` URLs sit behind Vercel Authentication (302), which is the default protection.
- **Build on Vercel:** the Vite preset was auto-detected. The build ran `npm install` then `npm run build` (tsc + Vite 8.3.5), finished in about 12 s, and output to `dist`. No build errors; the only warnings are npm "Unknown env config cache-dir" notices from Vercel's environment.
- **Sequence:**
  1. The first deploy was auto-assigned to production. Vercel always does this for a project's first deployment.
  2. Live checks found a console error: a 404 for `/resume.pdf`. The runtime HEAD probe hit Vercel's real 404, whereas `vite preview` had returned an SPA 200.
  3. Fix: resume availability is now resolved at **build time**. `vite.config.ts` defines `__RESUME_AVAILABLE__` from `existsSync('public/resume.pdf')`, it is declared in `src/globals.d.ts`, and `useResumeAvailable` now returns that flag, so no request is made at runtime.
  4. A preview deploy was verified with `vercel curl` (page, JS, CSS, portrait and favicon all 200), then promoted with `vercel deploy --prod`.
- **Production verification** (visible Chrome 156, launched with `--disable-backgrounding-occluded-windows --disable-renderer-backgrounding --disable-background-timer-throttling`. Without these, an occluded window freezes transitions and rAF and produces false failures):
  - At 1440×900, 820×1180 and 390×844: no horizontal overflow, exactly 2 projects, portrait and pill images loaded, 3 font families loaded. 0 console errors, 0 failed or 4xx requests, and no `/resume.pdf` request.
  - All external links are correct: LinkedIn, GitHub, both repos, and the VibeShield live demo.
  - All 7 anchors land exactly at all 3 sizes. One sample was flagged at the time as interfered by real wheel input.
  - Back to top returns to 0.
  - Portrait glow: rest 0.8, hover 1.0, scale 1.015, brightness/contrast lift.
  - Every hover and press state (nav, Resume-soon, hero CTA, preview lift, chapter wash, project link, tag, pillar, link underline, orb, footer) matches the intended values.
  - Lenis inertia, mid-stack scale 0.948 with dim 0.29, and the vortex pointer response all work.
  - Reduced motion: Lenis off on fresh load and on live switch, anchors instant and correct, no chapter transform.
- **Upload hygiene:** `.vercelignore` excludes `node_modules`, `dist`, `docs` (the 3 MB of reference screenshots), `*.log`, `.env*` and editor folders. `vercel link` created `.vercel/` and `.env.local` (a Vercel OIDC token); both are gitignored, and `.env.local` is excluded from uploads. No secrets exist in source or the bundle.
- **Future updates:** run `npm run build` locally to check, then `npx vercel@latest deploy` (preview) and `npx vercel@latest deploy --prod`, from this directory, which is already linked.
- **Resume activation:** copy the real PDF to `public/resume.pdf`, then run `npx vercel@latest deploy --prod`. The build flag flips, and every Resume action becomes `<a download="Samarth-Khera-Resume.pdf">`. Verify with `curl -I https://samarth-khera-portfolio.vercel.app/resume.pdf`, which should return 200 `application/pdf`.
- **Still open:** no custom domain (by request); `og:url`/`og:image` can now be set to the production URL; email unknown; the reference differences listed in §15 remain.

## 17. Phase 9 — Interactive skill cards, unified text motion, redeploy (complete, 2026-10-27)
**Motion system** (lives in `src/components/Reveal.tsx` and `src/config/motion.ts`):
- Kept: `Reveal` (fade-up; now takes a `margin` option) and `MaskLines`/`MaskLine`. Text stays real inline DOM, so screen readers read it.
- Added: `Stagger`, a container that fires once and cascades `visible` to descendants with a configurable stagger and delay.
- Added: `StaggerItem`, a block using `itemVariants`: opacity 0→1, y 24→0, 0.8 s.
- Added: `Chip`, an informational tag (not a control) using `chipVariants` (y 10→0, 0.55 s) with a motion hover lift of −2.5 px. The old CSS hover transform on `.tag-pill` was removed so the two never conflict.
- Every entrance uses `once: true`, so nothing replays. Reduced motion sets `initial={false}`, which renders the final state.

**Skills** (`Skills.tsx`, plus a new `SkillCard.tsx`; `skills.ts` gained an `accent` per category: sky, emerald, violet, amber at low alpha):
- Four cards, each with a mono number, a gradient accent rule, a title, a description and a `<ul>` of tags. Tags cascade in 0.04 s apart after the card enters, and cards are staggered 0.1 s apart.
- Card surface is a top-lit gradient with a hairline border and an ambient corner accent. Hover (fine pointer only):
  - the border lightens and an accent ring plus a deep shadow appear;
  - a pointer-following radial light (CSS `--mx`/`--my`, one rAF per move) fades in, clipped to the card;
  - the card lifts 6 px and spring-tilts by at most 2.2°;
  - press scales it to 0.99.
- Tags on hover: white text, accent border and background tint, a soft accent glow, and a 2.5 px lift.
- No idle animation loop runs. On touch there is no tilt, glow or press, and CSS hover is gated behind `(hover: hover) and (pointer: fine)`. Reduced motion has no tilt or lift and hides the glow.
- Grid: 4 columns from 1401 px, 2 columns from 641 to 1400 px, 1 column at 640 px and below. The 1401 px cutoff keeps "Retrieval-Augmented Generation (RAG)" on one line; checked at 1920, 1440, 1400, 1366, 1280, 1100, 820 and 390. Desktop tags use 0.69 rem.
- Skill list now matches the brief exactly: "Full-Stack Application Development" was removed (20 tags in total).

**Text motion by section:**
- Hero: unchanged. Its line reveals, glow and CTAs were already in place.
- Projects: metadata, masked title, tagline/description and links unchanged; technology tags now cascade 0.045 s apart via `Stagger` + `Chip` and lift on hover. Sticky stacking, scale/dim, preview lift and Lenis are untouched.
- About: eyebrow, masked statement and lead unchanged; the three pillars now cascade 0.12 s apart via `Stagger`.
- Skills: as above.
- Contact: eyebrow, masked headline and the orb's scale-in unchanged; the LinkedIn / GitHub / Resume row cascades item by item. There is no supporting paragraph (none existed, and none was invented). The vortex is unchanged.
- Footer: a single restrained fade-up (12 px, `margin: 0px`, so it triggers at the page bottom).

**Verification:**
- Local production preview in visible Chrome at 1440 / 820 / 390:
  - No overflow; 2 projects; 4 skill cards with 20 tags.
  - 0 console errors, 0 failed requests.
  - Anchors exact; hover system and portrait unchanged.
  - Lenis, mid-stack 0.948 and vortex OK.
  - Card entrance measured as a stagger.
  - After a full scroll-through 0 elements remained hidden; no replay on re-entry; 0 hidden after resizing to 390.
  - Touch: no lingering transform or glow. Reduced motion: cards and tags visible immediately, no tilt, anchors correct.
- Headless cross-check (real cursor over the visible window blocked CSS `:hover`):
  - card glow 1, border 0.17, tilt about 1.3°, reset on leave;
  - tag text white with accent border and glow, lift −2.5;
  - 4 long tasks for the whole run.
- `tsc -b` 0 errors, `oxlint` 0 warnings, `vite build` OK (CSS 48.5 kB / 12.7 kB gz, JS 412.3 kB / 129.9 kB gz).

**Redeploy:**
- Preview deploy, checked via `vercel curl` (all assets 200, new bundle present), then `vercel deploy --prod`.
- https://samarth-khera-portfolio.vercel.app serves the tested bundle (`index-DlOWG5hr.js` / `index-DVaYamfk.css`).
- Live check in visible Chrome at 1440 / 820 / 390:
  - 0 console errors, 0 failed requests, no overflow.
  - 2 projects, 4 cards; portrait, glow and hover OK; Resume "soon" OK; external links correct.
  - Skills hover, reveals, touch and reduced motion all pass.
  - Anchors exact (two desktop samples flagged as interfered by real wheel input).

## 18. Phase 10 — Royal-blue and lime project themes (LIVE 2026-10-27)
This supersedes the dark project tints from §14/§15, at the user's explicit request. Every other section stays dark.

**Reference basis:** the screenshots were not attached, so the values recorded in §13 were used. Copilot Sports measured `rgb(45,91,204)` and Windows Developer Center measured `rgb(208,226,102)`.

**Variants:** `Project.theme` is `'blue' | 'lime'` in `src/data/projects.ts`. FraudShield AI (01) is blue and VibeShield AI (02) is lime. The shared `ProjectPanel` adds `chapter--${theme}`, and all styles are scoped to `.chapter--blue` / `.chapter--lime`, so nothing bleeds into other sections.
- **Blue:** `#2C5BCC` background, text `#F4F7FF` / `#EEF2FF` / `#E2E9FF`, preview panel `#25283B`. Primary CTA is a white pill with blue text and a pale-blue hover; secondary is outlined white. Tags are glassy white.
- **Lime:** `#D0E267` background, text `#0F1714` and charcoals, olive accent `#4A5A1E`, preview panel `#F7F8FC` with a soft shadow. Primary CTA is a dark pill with lime text and a lime-accent hover; secondary is outlined dark. Tags are dark-tinted with an olive hover.
- **Previews:** rounded `1.75rem` tops bleed off the bottom edge. `VibeShieldPreview` gained a `tone="light"` variant with the same content, recoloured.
- **Highlights:** `Project.highlights` holds two items per project, each restating facts already in the project text, with no invented numbers.
  - FraudShield: "3 risk views kept separate" and "Exact local TreeSHAP attribution".
  - VibeShield: "3 scanners in parallel" and "On demand Gemini 2.5 Flash fix explanations".
  - Each renders as a `<dl>` in the reference metric style: a large value over a small label.
- **Contrast** (measured): blue text 4.99–5.55, tags 5.14, CTA 9.06; lime text 6.91–12.8, tags 11.4, CTA 15.15. On lime, the focus outline switches to dark.

**Animation reuse (no new system):**
- `MaskLines` handles the title; `Reveal` the meta, tagline and description.
- `Stagger` + `itemVariants` handle the highlights, 0.12 s apart after 0.42 s.
- `Stagger` + `Chip` handle the tags, 0.045 s apart after 0.5 s, keeping the Chip lift on hover.
- `Reveal` brings in the CTAs at 0.66 s.
- The preview keeps its fade/slide (0.3 s delay, 1.2 s duration).
- Measured order: tagline → highlights → tags → CTAs, with the preview alongside.
- Everything is once-only; reduced motion shows final states. Touch has no hover states (theme hovers are gated to fine pointers, and base rules override the global `:hover`).

**Fixes found during verification:**
1. Taller panels (blue 968 px, lime 926 px at 1440×900; 930/886 at 1366×768) pinned at `top: 0` hid their CTA row under the next panel.
   - `ProjectPanel` now sets `top = −(height − viewport)` on sticky chapters, so they scroll until their bottom is visible and then pin.
   - The stack progress range was rebased to match.
   - Panel reveals and the preview trigger at the viewport edge (`margin: 0px`).
   - CTA bottoms while pinned: 846/900 and 722/768.
2. Blue small-text contrast was 4.33–4.48 and was raised to at least 4.99.

**Verified:**
- Local preview:
  - `tsc` 0 errors, `oxlint` 0 warnings, build OK (CSS 53.4 kB / 13.8 kB gz, JS 413.6 kB / 130.4 kB gz).
  - Visible Chrome at 1440 / 820 / 390: 2 projects, no overflow, 0 console errors, 0 failed requests; all 21 anchors exact; hover system intact.
  - Headless (no real cursor): animation sequence, pinned CTA visibility, 0 hidden text when pinned or after a scroll-through, half-cover scale 0.95 / dim 0.28.
  - Touch tap leaves base styles; theme hovers confirmed.
- Before, after and live screenshots were taken of both panels at all 3 sizes.
- Production: preview checked via `vercel curl`, then `--prod`. https://samarth-khera-portfolio.vercel.app serves `index-DEcArQah.js`, which matches the local build. The live sweep at 3 sizes showed 0 console errors and 0 failed requests, with themes and panels confirmed live.

**GitHub:** NOT pushed, and this is blocked. The workspace is not a git repository, there is no portfolio repo on github.com/samarth-khera (the 11 public repos include only project repos; `portfolio` and similar names return 404), `gh` is not authenticated, and there is no git identity. A new repository was deliberately not created. To enable pushes:
1. Create an empty repo, e.g. `samarth-khera/portfolio`.
2. `git init -b main && git add -A && git commit -m "…" && git remote add origin <url> && git push -u origin main`. `.gitignore` already excludes `node_modules`, `dist`, `.vercel` and `.env*.local`.
3. Optionally connect the repo in Vercel for git-based deploys.

export type ProjectTheme = 'blue' | 'lime'

export interface ProjectHighlight {
  value: string
  label: string
}

export interface Project {
  id: string
  title: string
  category: string
  tagline: string
  description: string
  approach: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  statusNote?: string
  /** Panel variant (reference: royal-blue and lime chapters). */
  theme: ProjectTheme
  /** Two highlights, restating facts already in `approach` (no invented metrics). */
  highlights: [ProjectHighlight, ProjectHighlight]
  accentColor: string
  cardBg: string
  borderColor: string
}

export const projects: Project[] = [
  {
    id: 'fraudshield-ai',
    title: 'FraudShield AI',
    category: 'AI / ML · Explainable AI · Financial Forensics',
    tagline: 'Trace the flow. Protect the innocent.',
    description:
      'Decision-support platform for financial fraud investigations. Evaluates multi-hop transaction networks and decomposes risk scores to prevent wrongful account freezes.',
    approach:
      'Combines XGBoost classification with exact local TreeSHAP log-odds explanations (base_value + Σφ = raw_margin). Strictly separates transaction risk, account behavior, and lineage-bounded fund exposure without automated black-box verdicts.',
    tags: ['Python', 'XGBoost', 'TreeSHAP', 'FastAPI', 'React 19', 'TypeScript', 'PaySim Benchmark'],
    githubUrl: 'https://github.com/samarth-khera/FraudAi',
    statusNote: 'Research Prototype · Synthetic Benchmark FS-1042',
    theme: 'blue',
    highlights: [
      { value: '3', label: 'risk views kept separate: transaction, account, fund exposure' },
      { value: 'Exact', label: 'local TreeSHAP attribution behind every score' },
    ],
    accentColor: '#38bdf8', // Sky blue subtle accent
    cardBg: '#2C5BCC',
    borderColor: 'rgba(56, 189, 248, 0.12)',
  },
  {
    id: 'vibeshield-ai',
    title: 'VibeShield AI',
    category: 'Application Security · AI · LLMs · Automated Remediation',
    tagline: 'Zero-cost public repository security auditor & AI remediation.',
    description:
      'Autonomous security scanner that audits public GitHub repositories in parallel and generates targeted code-fix explanations on demand.',
    approach:
      'Orchestrates Gitleaks (secrets), Semgrep (SAST), and Google OSV-Scanner in ephemeral GitHub Actions runners. Generates contextual vulnerability remediation via Google Gemini 2.5 Flash with strict prompt-injection defenses and PostgreSQL quota circuit breakers.',
    tags: ['Google Gemini 2.5', 'Next.js', 'GitHub Actions', 'Gitleaks', 'Semgrep', 'OSV-Scanner', 'PostgreSQL'],
    githubUrl: 'https://github.com/samarth-khera/VibeShieldAi',
    liveUrl: 'https://vibeshield-ai-phi.vercel.app',
    theme: 'lime',
    highlights: [
      { value: '3', label: 'scanners in parallel: Gitleaks, Semgrep, OSV-Scanner' },
      { value: 'On demand', label: 'Gemini 2.5 Flash fix explanations' },
    ],
    accentColor: '#34d399', // Emerald subtle accent
    cardBg: '#D0E267',
    borderColor: 'rgba(52, 211, 153, 0.12)',
  }
]

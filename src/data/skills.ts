export interface SkillCategory {
  number: string
  title: string
  description: string
  /** Restrained per-card accent (echoes project tints), used only for glows/rules at low alpha. */
  accent: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: 'AI & Machine Learning',
    accent: '#38bdf8',
    description: 'Predictive modeling, statistical analysis, and model explainability.',
    skills: [
      'Python',
      'Machine Learning',
      'Predictive Modeling',
      'Explainable AI (XAI)',
      'Model Interpretability',
      'Data Analytics',
    ],
  },
  {
    number: '02',
    title: 'LLMs & Intelligent Systems',
    accent: '#34d399',
    description: 'Agentic workflows, contextual retrieval, and structured reasoning.',
    skills: [
      'Large Language Models (LLMs)',
      'Agentic AI',
      'Retrieval-Augmented Generation (RAG)',
      'LangGraph',
      'Intelligent Automation',
    ],
  },
  {
    number: '03',
    title: 'Full-Stack Development',
    accent: '#a78bfa',
    description: 'Scalable UI components, REST APIs, and end-to-end web architectures.',
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'REST APIs',
      ],
  },
  {
    number: '04',
    title: 'Databases & Data Systems',
    accent: '#fbbf24',
    description: 'Relational data modeling, document stores, and persistent storage layers.',
    skills: [
      'SQL',
      'MongoDB',
      'Database Design',
      'Data Modeling',
    ],
  },
]

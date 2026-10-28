/** Central, editable site content + asset paths. */
export const site = {
  name: 'Samarth Khera',
  ghostName: 'Samarth',
  /**
   * Portrait asset (user's supplied B&W photo). Place the file at
   * `public/portrait.png`. If missing, the hero renders without it.
   */
  portraitSrc: '/portrait.png',
  portraitAlt: 'Black and white portrait of Samarth Khera',
  /**
   * Resume: drop the real PDF at `public/resume.pdf` and every Resume action switches from the
   * "Coming soon" state to a real download (no code change needed). Download filename below.
   */
  resumeSrc: '/resume.pdf',
  resumeFileName: 'Samarth-Khera-Resume.pdf',
  descriptor: 'AI/ML & Software Engineering',
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    intro:
      'Computer Science undergraduate at Newton School of Technology, building AI-powered applications and exploring the intersection of machine learning and software engineering.',
    primaryCta: { label: 'View Selected Work', href: '#work' },
    secondaryCta: { label: "Let's Connect", href: '#contact' },
  },
  /**
   * Contact channels. Only non-empty entries are rendered, so nothing is invented.
   * TODO (owner): fill `email` with the real address.
   */
  contact: {
    email: '',
    github: 'https://github.com/samarth-khera',
    linkedin: 'https://www.linkedin.com/in/samarth-khera-a6b94a301/',
    location: 'India',
  } as { email: string; github: string; linkedin: string; location: string },
} as const

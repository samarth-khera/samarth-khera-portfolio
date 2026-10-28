import { motion } from 'motion/react'
import { site } from '../config/site'
import ResumeAction from './ResumeAction'

export default function Navbar() {
  return (
    <motion.header
      className="nav"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <a href="#top" className="nav__brand" aria-label={`${site.name} — back to top`}>
        {site.name}
      </a>
      <nav className="nav__links" aria-label="Primary">
        {site.nav.map((l) => (
          <a key={l.href} href={l.href} className="link-u">
            {l.label}
          </a>
        ))}
        <span className="nav__resume-link">
          <ResumeAction variant="link" />
        </span>
      </nav>
      <div className="nav__end">
        <ResumeAction variant="pill" />
      </div>
    </motion.header>
  )
}

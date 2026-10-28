import { site } from '../config/site'
import ResumeAction from './ResumeAction'
import { Reveal } from './Reveal'

const year = new Date().getFullYear()

export default function Footer() {
  const { github, linkedin } = site.contact
  return (
    <footer className="site-footer">
      <Reveal y={12} margin="0px" className="section-container site-footer__inner">
        <p className="site-footer__meta">
          <span>© {year} {site.name}</span>
          <span className="site-footer__sep" aria-hidden="true">·</span>
          <span>{site.descriptor}</span>
        </p>
        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#work" className="link-u">Work</a>
          <a href="#about" className="link-u">About</a>
          {github && <a href={github} className="link-u" target="_blank" rel="noreferrer">GitHub</a>}
          {linkedin && <a href={linkedin} className="link-u" target="_blank" rel="noreferrer">LinkedIn</a>}
          <ResumeAction variant="link" />
          <a href="#top" className="link-u site-footer__top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </nav>
      </Reveal>
    </footer>
  )
}

import { motion, useReducedMotion } from 'motion/react'
import { site } from '../config/site'
import ContactVortex from './ContactVortex'
import ResumeAction from './ResumeAction'
import { MaskLine, MaskLines, Reveal, Stagger, StaggerItem } from './Reveal'
import { EASE } from '../config/motion'

export default function Contact() {
  const reduce = !!useReducedMotion()
  const { email, github, linkedin } = site.contact
  const primary = email
    ? { label: 'Get in touch', href: `mailto:${email}`, external: false }
    : { label: 'Connect on LinkedIn', href: linkedin, external: true }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <ContactVortex />
      <div className="contact__veil" aria-hidden="true" />
      <div className="contact__inner">
        <Reveal className="eyebrow eyebrow--center">
          <span className="eyebrow__dot" />
          Get in touch
        </Reveal>

        <h2 id="contact-title" className="contact__title">
          <MaskLines>
          <MaskLine>Let&apos;s build something</MaskLine>
          <MaskLine delay={0.1}>
            <em>intelligent</em> together.
          </MaskLine>
          </MaskLines>
        </h2>

        <motion.a
          href={primary.href}
          className="contact__orb"
          target={primary.external ? '_blank' : undefined}
          rel={primary.external ? 'noreferrer' : undefined}
          initial={reduce ? false : { opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-12% 0px' }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          whileHover={reduce ? undefined : { scale: 1.04, transition: { duration: 0.5, ease: EASE } }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          {primary.label}
        </motion.a>

        {email && (
          <Reveal delay={0.4}>
            <a href={`mailto:${email}`} className="contact__email link-ul">
              {email}
            </a>
          </Reveal>
        )}

        <Stagger className="contact__links" stagger={0.1} delay={0.45}>
          {linkedin && (
            <StaggerItem>
              <a href={linkedin} className="link-ul" target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </StaggerItem>
          )}
          {github && (
            <StaggerItem>
              <a href={github} className="link-ul" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </StaggerItem>
          )}
          <StaggerItem>
            <ResumeAction variant="link" />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  )
}

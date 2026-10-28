import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useEffect, useRef, type CSSProperties } from 'react'
import type { Project } from '../data/projects'
import FraudShieldPreview from './previews/FraudShieldPreview'
import VibeShieldPreview from './previews/VibeShieldPreview'
import { Chip, MaskLine, MaskLines, Reveal, Stagger } from './Reveal'
import { EASE, itemVariants } from '../config/motion'

interface ProjectPanelProps {
  project: Project
  index: number
  total: number
}

function renderPreview(id: string) {
  switch (id) {
    case 'fraudshield-ai':
      return <FraudShieldPreview />
    case 'vibeshield-ai':
      return <VibeShieldPreview tone="light" />
    default:
      return null
  }
}

/** One full-viewport sticky "chapter" per project (reference: stacked rounded panels sliding over each other). */
export default function ProjectPanel({ project, index, total }: ProjectPanelProps) {
  const reduce = !!useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const isLast = index === total - 1
  // Reference: while the next chapter slides over, the covered one scales 1 → 0.9 and darkens.
  // Sticky elements report their *stuck* position, so measure the natural flow range instead:
  // start = chapters container top + heights of earlier chapters, length = own height.
  const range = useRef<[number, number]>([0, 1])
  useEffect(() => {
    const el = ref.current
    const container = el?.parentElement
    if (!el || !container) return
    const measure = () => {
      let start = container.getBoundingClientRect().top + window.scrollY
      for (const child of Array.from(container.children)) {
        if (child === el) break
        start += (child as HTMLElement).offsetHeight
      }
      const vh = window.innerHeight
      const h = el.offsetHeight
      const overflow = Math.max(0, h - vh)
      // A chapter taller than the viewport scrolls until its bottom is visible, then pins
      // (top = vh − h), so CTAs at the bottom are never hidden under the next chapter.
      el.style.top = getComputedStyle(el).position === 'sticky' && overflow > 0 ? `${-overflow}px` : ''
      // The next chapter starts covering once this one is fully shown; it takes one viewport to cover it.
      range.current = [start + overflow, Math.max(1, vh)]
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(container)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])
  const { scrollY } = useScroll()
  const progress = useTransform(scrollY, (y) => Math.min(1, Math.max(0, (y - range.current[0]) / range.current[1])))
  const scale = useTransform(progress, [0, 1], [1, 0.9])
  const dim = useTransform(progress, [0, 1], [0, 0.55])
  const stacked = !reduce && !isLast
  const n = (v: number) => String(v).padStart(2, '0')
  const style = { '--chapter-bg': project.cardBg, '--chapter-accent': project.accentColor } as CSSProperties

  return (
    <motion.article ref={ref} id={project.id} className={`chapter chapter--${project.theme}`} style={{ ...style, scale: stacked ? scale : 1 }}>
      {stacked && <motion.div className="chapter__dim" style={{ opacity: dim }} aria-hidden="true" />}
      <div className="chapter__inner">
        <div className="chapter__copy">
          <Reveal className="chapter__meta" margin="0px">
            <span className="chapter__num">
              {n(index + 1)} <span aria-hidden="true">/</span> {n(total)}
            </span>
            <span className="chapter__cat">{project.category}</span>
          </Reveal>

          <h3 className="chapter__title">
            <MaskLines>
            {project.title.split(' ').map((word, i) => (
              <MaskLine key={word} delay={0.08 + i * 0.08}>
                {word}
              </MaskLine>
            ))}
            </MaskLines>
          </h3>

          <Reveal delay={0.25} margin="0px">
            <p className="chapter__tagline">{project.tagline}</p>
          </Reveal>
          <Reveal delay={0.32} margin="0px">
            <p className="chapter__desc">{project.description}</p>
            <p className="chapter__approach">{project.approach}</p>
          </Reveal>

          <Stagger stagger={0.12} delay={0.42} margin="0px">
            <dl className="chapter__metrics">
              {project.highlights.map((h) => (
                <motion.div key={h.label} className="chapter__metric" variants={itemVariants}>
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </motion.div>
              ))}
            </dl>
          </Stagger>

          <Stagger role="group" aria-label="Technologies used" className="chapter__tags-row" stagger={0.045} delay={0.5} margin="0px">
            {project.tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </Stagger>

          <Reveal delay={0.66} className="chapter__links" margin="0px">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link project-link--primary"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              GitHub
              <span className="project-link__arrow" aria-hidden="true">↗</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link project-link--secondary"
                aria-label={`Open ${project.title} live deployment`}
              >
                <span className="live-dot" aria-hidden="true" />
                Live demo
                <span className="project-link__arrow" aria-hidden="true">↗</span>
              </a>
            )}
            {project.statusNote && <span className="chapter__note">{project.statusNote}</span>}
          </Reveal>
        </div>

        <motion.div
          className="chapter__preview"
          role="img"
          aria-label={`${project.title} interface preview (illustrative)`}
          initial={reduce ? false : { opacity: 0, y: 110, rotate: -2.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        >
          {renderPreview(project.id)}
        </motion.div>
      </div>
    </motion.article>
  )
}

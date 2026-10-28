import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useRef, type CSSProperties, type PointerEvent } from 'react'
import { chipVariants, EASE, itemVariants } from '../config/motion'
import type { SkillCategory } from '../data/skills'
import { Chip } from './Reveal'

const MAX_TILT = 2.2 // degrees — barely-there depth; text stays flat-readable
const fine = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * Interactive skill category card: staggered entrance (inherits from the parent Stagger),
 * pointer-following radial light clipped to the card, a ≤2.2° spring tilt and a small lift.
 * Pointer effects only run on fine pointers and never under reduced motion; no idle loop.
 */
export default function SkillCard({ category }: { category: SkillCategory }) {
  const reduce = !!useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const rotateX = useSpring(rx, { stiffness: 160, damping: 20, mass: 0.6 })
  const rotateY = useSpring(ry, { stiffness: 160, damping: 20, mass: 0.6 })
  const interactive = !reduce
  const pointerFine = fine()

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || e.pointerType !== 'mouse' || !fine()) return
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const b = el.getBoundingClientRect()
      const px = (clientX - b.left) / b.width
      const py = (clientY - b.top) / b.height
      el.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--my', `${(py * 100).toFixed(1)}%`)
      ry.set((px - 0.5) * 2 * MAX_TILT)
      rx.set(-(py - 0.5) * 2 * MAX_TILT)
    })
  }
  const onLeave = () => {
    cancelAnimationFrame(frame.current)
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className="skill-card"
      style={{ '--accent-c': category.accent, rotateX, rotateY, transformPerspective: 1000 } as CSSProperties & Record<string, unknown>}
      variants={itemVariants}
      whileHover={interactive ? { y: -6, transition: { duration: 0.45, ease: EASE } } : undefined}
      whileTap={interactive && pointerFine ? { scale: 0.99 } : undefined}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <span className="skill-card__glow" aria-hidden="true" />
      <div className="skill-card__top">
        <span className="skill-card__num">{category.number}</span>
        <span className="skill-card__rule" aria-hidden="true" />
      </div>
      <h3 className="skill-card__title">{category.title}</h3>
      <p className="skill-card__desc">{category.description}</p>
      <motion.ul
        className="skill-card__tags"
        aria-label={`${category.title} skills`}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04, delayChildren: 0.25 } } }}
      >
        {category.skills.map((s) => (
          <motion.li key={s} variants={chipVariants}>
            <Chip className="skill-tag">{s}</Chip>
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  )
}

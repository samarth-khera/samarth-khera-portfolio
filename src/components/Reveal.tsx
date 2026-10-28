import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { chipVariants, EASE, itemVariants } from '../config/motion'

const VIEW = { once: true, margin: '-10% 0px' } as const

/** Fade-up block reveal on first entry into the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  margin = VIEW.margin,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  margin?: string
}) {
  const reduce = !!useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Masked line reveals (text slides up out of overflow-hidden boxes, like the hero headline).
 * One observer on the parent drives every line via variants, so lines never get stuck hidden.
 * Text stays in the DOM as normal inline content, so screen readers read the full heading.
 */
export function MaskLines({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = !!useReducedMotion()
  return (
    <motion.span className={className} style={{ display: 'block' }} initial={reduce ? false : 'hidden'} whileInView="visible" viewport={VIEW}>
      {children}
    </motion.span>
  )
}

export function MaskLine({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <span className="mask">
      <motion.span
        className="mask__inner"
        variants={{ hidden: { y: '110%' }, visible: { y: 0, transition: { duration: 1, ease: EASE, delay } } }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/**
 * Staggered container: observes once, then cascades the `visible` label to every descendant
 * that uses `itemVariants` / `chipVariants` (nested containers inherit automatically).
 */
export function Stagger({
  children,
  stagger = 0.09,
  delay = 0,
  margin = VIEW.margin,
  ...rest
}: { children: ReactNode; stagger?: number; delay?: number; margin?: string } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const reduce = !!useReducedMotion()
  return (
    <motion.div
      {...rest}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

/** Informational tag (not a control): staggered entrance + small lift on hover. */
export function Chip({ children, className = 'tag-pill' }: { children: ReactNode; className?: string }) {
  const reduce = !!useReducedMotion()
  return (
    <motion.span
      className={className}
      variants={chipVariants}
      whileHover={reduce ? undefined : { y: -2.5, transition: { duration: 0.3, ease: EASE } }}
    >
      {children}
    </motion.span>
  )
}

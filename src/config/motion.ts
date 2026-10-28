import type { Variants } from 'motion/react'

export const EASE = [0.22, 1, 0.36, 1] as const

/** Shared entrance variants for staggered children (cards, link rows). */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

/** Smaller entrance for chips/tags. */
export const chipVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

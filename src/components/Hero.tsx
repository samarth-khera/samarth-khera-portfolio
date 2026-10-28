import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { site } from '../config/site'

const ease = [0.22, 1, 0.36, 1] as const

function Line({ children, delay, reduce }: { children: React.ReactNode; delay: number; reduce: boolean }) {
  return (
    <span className="hero__line">
      <motion.span
        className="hero__line-inner"
        initial={reduce ? false : { y: '110%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const reduce = !!useReducedMotion()
  const [portraitOk, setPortraitOk] = useState(true)
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
  })

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero__ghost"
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.1 }}
      >
        {site.ghostName}
      </motion.div>

      {/* Ambient light behind the portrait (screen-blended photo lets it read as rim/back light). */}
      <div className="hero__glow" aria-hidden="true" />

      {portraitOk && (
        <motion.div
          className="hero__portrait"
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.2 }}
        >
          <img
            src={site.portraitSrc}
            alt={site.portraitAlt}
            fetchPriority="high"
            decoding="async"
            onError={() => setPortraitOk(false)}
          />
        </motion.div>
      )}
      <div className="hero__shade" aria-hidden="true" />
      {/* Desktop-only pointer zone over the subject; drives the hover glow via CSS :has(). */}
      {portraitOk && <div className="hero__hotspot" aria-hidden="true" />}

      <div className="hero__content">
        <motion.p className="hero__badge" {...fade(0.5)}>
          <span className="hero__dot" aria-hidden="true" />
          AI / ML · Intelligent Systems
        </motion.p>

        <h1 id="hero-title" className="hero__title">
          <span className="sr-only">Building intelligent systems that solve real-world problems.</span>
          <span aria-hidden="true">
            <Line delay={0.35} reduce={reduce}>Building</Line>
            <Line delay={0.45} reduce={reduce}>
              <em>intelligent</em> systems
            </Line>
            <Line delay={0.55} reduce={reduce}>that solve real-world</Line>
            <Line delay={0.65} reduce={reduce}>problems.</Line>
          </span>
        </h1>

        <div className="hero__aside">
          <motion.p className="hero__intro" {...fade(0.9)}>
            {site.hero.intro}
          </motion.p>
          <motion.div className="hero__ctas" {...fade(1.05)}>
            <a href={site.hero.primaryCta.href} className="cta cta--primary">
              {site.hero.primaryCta.label}
              <span aria-hidden="true" className="cta__arrow cta__arrow--down">↓</span>
            </a>
            <a href={site.hero.secondaryCta.href} className="cta cta--secondary">
              {site.hero.secondaryCta.label}
              <span aria-hidden="true" className="cta__arrow">→</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#work"
        className="hero__scroll"
        aria-label="Scroll to selected work"
        {...fade(1.4)}
      >
        <span>Scroll</span>
        <i aria-hidden="true" />
      </motion.a>
    </section>
  )
}

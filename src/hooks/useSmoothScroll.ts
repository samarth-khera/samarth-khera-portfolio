import Lenis from 'lenis'
import { useEffect } from 'react'

/**
 * Lenis inertial wheel scrolling (same library and default lerp as the reference) plus
 * in-page anchor handling (targets' `scroll-margin-top` is honoured by Lenis itself).
 * Disabled under prefers-reduced-motion; touch keeps native scrolling (Lenis default syncTouch=false).
 */
export function useSmoothScroll() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis: Lenis | null = null
    let raf = 0

    const start = () => {
      if (lenis) return
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
      const loop = (time: number) => {
        lenis?.raf(time)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
    const onMotionPref = () => (mq.matches ? stop() : start())
    onMotionPref()
    mq.addEventListener('change', onMotionPref)

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]')
      const hash = link?.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector<HTMLElement>(hash)
      if (!target) return
      e.preventDefault()
      // Lenis (≥1.3) and scrollIntoView both honour the target's scroll-margin-top.
      if (lenis) lenis.scrollTo(target, { duration: 1.2 })
      else target.scrollIntoView({ behavior: 'auto' })
      history.pushState(null, '', hash)
      // Move focus for keyboard/screen-reader users without a second scroll jump.
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      mq.removeEventListener('change', onMotionPref)
      stop()
    }
  }, [])
}

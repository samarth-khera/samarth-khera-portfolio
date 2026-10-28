import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Typography vortex behind the contact headline (reference: canvas text rings).
 * Static SVG text on concentric circles; on fine pointers the rings counter-rotate a few degrees
 * with the cursor. No continuous animation loop.
 */
const PHRASE = 'SAMARTH KHERA / AI·ML & SOFTWARE ENGINEERING / '
const NAME = 'SAMARTH KHERA / '

const rings = [
  { r: 150, fs: 7, op: 0.2, text: NAME, density: 2.2 },
  { r: 215, fs: 8, op: 0.26, text: PHRASE, density: 1 },
  { r: 285, fs: 9, op: 0.18, text: NAME, density: 2.4 },
  { r: 360, fs: 10.5, op: 0.3, text: PHRASE, density: 1 },
  { r: 440, fs: 11.5, op: 0.2, text: NAME, density: 2.4 },
  { r: 525, fs: 13, op: 0.34, text: PHRASE, density: 1 },
  { r: 615, fs: 14.5, op: 0.22, text: NAME, density: 2.2 },
  { r: 710, fs: 16, op: 0.4, text: PHRASE, density: 1 },
  { r: 815, fs: 18, op: 0.24, text: NAME, density: 2 },
  { r: 925, fs: 19, op: 0.34, text: PHRASE, density: 1 },
]

function ringText(r: number, fs: number, text: string, density: number) {
  const circumference = 2 * Math.PI * r
  const phraseWidth = text.length * fs * 0.6 * density
  return text.repeat(Math.max(1, Math.round(circumference / phraseWidth))).trimEnd()
}

export default function ContactVortex() {
  const ref = useRef<SVGSVGElement>(null)
  const reduce = !!useReducedMotion()

  useEffect(() => {
    const svg = ref.current
    const host = svg?.parentElement
    if (!svg || !host || reduce || !window.matchMedia('(pointer: fine)').matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const b = host.getBoundingClientRect()
        svg.style.setProperty('--spin', (((e.clientX - b.left) / b.width - 0.5) * 2).toFixed(3))
      })
    }
    const onLeave = () => svg.style.setProperty('--spin', '0')
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(frame)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [reduce])

  return (
    <svg ref={ref} className="vortex" viewBox="-720 -450 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        {rings.map(({ r }, i) => (
          <path key={r} id={`vortex-ring-${i}`} d={`M 0 ${-r} A ${r} ${r} 0 1 1 0 ${r} A ${r} ${r} 0 1 1 0 ${-r}`} />
        ))}
      </defs>
      {rings.map(({ r, fs, op, text, density }, i) => (
        <g
          key={r}
          className="vortex__ring"
          style={{ '--k': `${(i % 2 ? -1 : 1) * (4 + i * 0.9)}deg`, '--base': `${i * 37}deg` } as React.CSSProperties}
        >
          <text fontSize={fs} fillOpacity={op}>
            <textPath href={`#vortex-ring-${i}`} textLength={(2 * Math.PI * r * 0.995).toFixed(1)} lengthAdjust="spacing">
              {ringText(r, fs, text, density)}
            </textPath>
          </text>
        </g>
      ))}
    </svg>
  )
}

import { site } from '../config/site'
import { MaskLine, MaskLines, Reveal, Stagger, StaggerItem } from './Reveal'

const pillars = [
  { n: '01', k: 'Academic foundation', t: 'B.Tech in Computer Science', d: 'Newton School of Technology. Core coursework spanning algorithms, system design and artificial-intelligence fundamentals.' },
  { n: '02', k: 'Specialised focus', t: 'Explainability & LLM systems', d: 'Transparent predictive models with TreeSHAP, and retrieval-grounded LLM pipelines whose outputs can be traced to evidence.' },
  { n: '03', k: 'Engineering principles', t: 'Decoupled full-stack delivery', d: 'Python ML back ends and FastAPI/Express services paired with clean, responsive React front ends and solid data models.' },
]

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="section-container">
        <Reveal className="eyebrow">
          <span className="eyebrow__dot" />
          About me
        </Reveal>

        <h2 id="about-title" className="about__statement">
          <MaskLines>
          <MaskLine>I&apos;m a Computer Science undergraduate at</MaskLine>
          <MaskLine delay={0.08}>
            Newton School of Technology
            <span className="inline-portrait-pill" aria-hidden="true">
              <img src={site.portraitSrc} alt="" className="inline-portrait-img" loading="lazy" />
            </span>
            working
          </MaskLine>
          <MaskLine delay={0.16}>at the intersection of artificial intelligence,</MaskLine>
          <MaskLine delay={0.24}>machine learning and software engineering.</MaskLine>
          </MaskLines>
        </h2>
        <Reveal delay={0.35}>
          <p className="about__lead">
            I build applications that bring intelligent models and modern software systems together, with a focus on
            practical problem-solving, explainability and thoughtful engineering.
          </p>
        </Reveal>

        <Stagger className="pillars" stagger={0.12} delay={0.1}>
          {pillars.map((p) => (
            <StaggerItem key={p.n} className="pillar">
              <div className="pillar__label">
                <span>{p.n}</span>
                <span>{p.k}</span>
              </div>
              <h3 className="pillar__title">{p.t}</h3>
              <p className="pillar__desc">{p.d}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

import { skillCategories } from '../data/skills'
import { MaskLine, MaskLines, Reveal, Stagger } from './Reveal'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="section-container">
        <Reveal className="eyebrow">
          <span className="eyebrow__dot" />
          Technical stack
        </Reveal>

        <div className="skills__header">
          <h2 id="skills-title" className="skills__title">
            <MaskLines>
              <MaskLine>Technical</MaskLine>
              <MaskLine delay={0.1}>
                <em>Competencies.</em>
              </MaskLine>
            </MaskLines>
          </h2>
          <Reveal delay={0.25}>
            <p className="skills__lead">
              A disciplined toolkit spanning predictive machine learning, agentic LLM architectures, modern full-stack
              web systems and resilient database design.
            </p>
          </Reveal>
        </div>

        <Stagger className="skill-cards" stagger={0.1} delay={0.1}>
          {skillCategories.map((c) => (
            <SkillCard key={c.number} category={c} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

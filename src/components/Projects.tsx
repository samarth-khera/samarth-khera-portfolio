import { projects } from '../data/projects'
import ProjectPanel from './ProjectPanel'
import { MaskLine, MaskLines, Reveal } from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="work" aria-labelledby="work-title">
      {/* Full-viewport intro that the chapters slide over (reference: "Selected work." veil) */}
      <div className="work__intro">
        <h2 id="work-title" className="work__title">
          <MaskLines>
          <MaskLine>Selected</MaskLine>
          <MaskLine delay={0.1}>
            work<span className="work__dot" aria-hidden="true" />
          </MaskLine>
          </MaskLines>
        </h2>
        <Reveal delay={0.3}>
          <p className="work__lead">Two systems built end to end: explainable fraud forensics and automated application-security remediation.</p>
        </Reveal>
      </div>

      <div className="work__chapters">
        {projects.map((project, index) => (
          <ProjectPanel key={project.id} project={project} index={index} total={projects.length} />
        ))}
      </div>
    </section>
  )
}

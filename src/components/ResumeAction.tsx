import { site } from '../config/site'
import { useResumeAvailable } from '../hooks/useResumeAvailable'

/**
 * Resume button/link. When `public/resume.pdf` exists it downloads as `site.resumeFileName`;
 * until then it renders a visible, non-focusable "coming soon" state (no broken link, no fake file).
 */
export default function ResumeAction({ variant }: { variant: 'pill' | 'link' }) {
  const ok = useResumeAvailable(site.resumeSrc)
  const base = variant === 'pill' ? 'pill-btn' : 'link-u'
  if (ok) {
    return (
      <a href={site.resumeSrc} download={site.resumeFileName} className={base}>
        Resume
        <span aria-hidden="true" className="resume__glyph">↓</span>
      </a>
    )
  }
  return (
    <span className={`${base} is-soon`} aria-disabled="true" title="Resume PDF coming soon">
      Resume
      <span className="resume__soon" aria-hidden="true">soon</span>
      <span className="sr-only">(PDF coming soon)</span>
    </span>
  )
}

/**
 * Whether the real resume PDF is shipped with this build (`public/resume.pdf` present at build time).
 * Kept as a hook so call sites stay unchanged; `_src` is the configured path, for readability only.
 */
export function useResumeAvailable(_src: string): boolean {
  return __RESUME_AVAILABLE__
}

const tones = {
  dark: {
    cell: 'bg-white/[0.03]', label: 'text-neutral-400', ok: 'text-emerald-400', warn: 'text-amber-400', rule: 'border-white/10',
    card: 'border-white/10 bg-black/60', head: 'text-white', dot: 'bg-emerald-400', meta: 'text-neutral-400', body: 'text-neutral-300',
    tag: 'text-emerald-400',
  },
  light: {
    cell: 'bg-[#EAECF3]', label: 'text-[#4B524E]', ok: 'text-emerald-700', warn: 'text-amber-700', rule: 'border-black/10',
    card: 'border-black/10 bg-white shadow-[0_8px_24px_-16px_rgba(15,23,20,0.35)]', head: 'text-[#0F1714]', dot: 'bg-emerald-600',
    meta: 'text-[#4B524E]', body: 'text-[#2B3328]', tag: 'text-emerald-700',
  },
}

/** Illustrative VibeShield scan view; `tone` matches the panel (light on the lime chapter). */
export default function VibeShieldPreview({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const t = tones[tone]
  return (
    <div className="preview-window">
      {/* Window bar */}
      <div className="preview-bar">
        <div className="preview-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-title">VibeShield AI · Security Scan & Remediation</span>
        <span className={`preview-tag ${t.tag}`}>ONLINE</span>
      </div>

      {/* Main body */}
      <div className="preview-body">
        {/* Scanners grid */}
        <div className={`grid grid-cols-3 gap-2 border-b ${t.rule} pb-3`}>
          <div className={`rounded ${t.cell} p-2 text-center`}>
            <div className={`text-[10px] font-mono uppercase ${t.label}`}>Gitleaks</div>
            <div className={`text-xs font-semibold ${t.ok} mt-0.5`}>0 Secrets</div>
          </div>
          <div className={`rounded ${t.cell} p-2 text-center`}>
            <div className={`text-[10px] font-mono uppercase ${t.label}`}>Semgrep</div>
            <div className={`text-xs font-semibold ${t.warn} mt-0.5`}>1 Finding</div>
          </div>
          <div className={`rounded ${t.cell} p-2 text-center`}>
            <div className={`text-[10px] font-mono uppercase ${t.label}`}>OSV-Scanner</div>
            <div className={`text-xs font-semibold ${t.ok} mt-0.5`}>Passed</div>
          </div>
        </div>

        {/* AI Remediation Card */}
        <div className={`mt-3 rounded border ${t.card} p-2.5`}>
          <div className="flex items-center justify-between mb-1.5">
            <span className={`text-[11px] font-mono font-medium ${t.head} flex items-center gap-1.5`}>
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              Google Gemini 2.5 Flash Analyst
            </span>
            <span className={`text-[10px] font-mono ${t.meta}`}>Cached in PG</span>
          </div>

          <div className={`text-[11px] ${t.body} font-sans mb-2`}>
            Identified potential SQL Injection in authentication query. Parameterize inputs to prevent payload injection.
          </div>

          {/* Diff preview */}
          <div className="rounded bg-black/80 p-2 font-mono text-[10px] leading-relaxed border border-white/5 overflow-x-auto">
            <div className="text-rose-400/90">- db.query(`SELECT * FROM users WHERE email = '${"${email}"}'`);</div>
            <div className="text-emerald-400/90">+ db.query('SELECT * FROM users WHERE email = $1', [email]);</div>
          </div>
        </div>

        {/* Circuit breaker quota footer */}
        <div className={`mt-2.5 flex items-center justify-between text-[10px] font-mono ${t.meta}`}>
          <span>Zero-Cost Guardrails</span>
          <span>Quota: 1/15 RPM · 429 Breaker Armed</span>
        </div>
      </div>
    </div>
  )
}

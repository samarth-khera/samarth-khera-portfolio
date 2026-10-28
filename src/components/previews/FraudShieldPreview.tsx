export default function FraudShieldPreview() {
  return (
    <div className="preview-window">
      {/* Window bar */}
      <div className="preview-bar">
        <div className="preview-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-title">FraudShield Forensics · Model Inspection (/insights)</span>
        <span className="preview-tag">PAY-SIM 1.0</span>
      </div>

      {/* Main body */}
      <div className="preview-body">
        {/* Header alert */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Target Investigation</div>
            <div className="text-sm font-semibold text-white">Case FS-1042 · Account C812948</div>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-rose-300">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
              Risk 0.892 · High
            </span>
          </div>
        </div>

        {/* TreeSHAP Local Decomposition */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
            <span>Local TreeSHAP Attribution (base + Σφ = margin)</span>
            <span className="text-neutral-400 font-mono">base: -2.41</span>
          </div>

          <div className="space-y-1.5 text-[11px] font-mono">
            <div className="flex items-center justify-between rounded bg-white/[0.03] p-1.5">
              <span className="text-neutral-300">amount_to_avg_velocity</span>
              <span className="text-rose-400 font-semibold">+1.84 log-odds</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/[0.03] p-1.5">
              <span className="text-neutral-300">dest_pass_through_ratio</span>
              <span className="text-rose-400 font-semibold">+1.22 log-odds</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/[0.03] p-1.5">
              <span className="text-neutral-300">fan_out_branching_depth</span>
              <span className="text-rose-400 font-semibold">+0.45 log-odds</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white/[0.03] p-1.5">
              <span className="text-neutral-300">orig_account_tenure_days</span>
              <span className="text-emerald-400 font-semibold">-0.19 log-odds</span>
            </div>
          </div>
        </div>

        {/* Lineage Trace leg */}
        <div className="mt-3 rounded border border-white/5 bg-black/40 p-2.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
            Lineage-Bounded Fund Trace
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300">
            <span className="text-neutral-400">Victim</span>
            <span className="text-neutral-400">→</span>
            <span className="text-rose-300">C8129 ($14,500)</span>
            <span className="text-neutral-400">→</span>
            <span className="text-amber-300">Leg-1 Split (3 accts)</span>
          </div>
        </div>

        <div className="mt-2 text-[10px] font-mono text-neutral-400 text-center">
          Human Sign-Off Required · Non-Automated Verdict
        </div>
      </div>
    </div>
  )
}

const TOOLS = ['Claude Code', 'Cursor', 'Codex', 'Gemini CLI', 'Aider', 'Cline', 'Roo Code']

/** Infinite, CSS-driven marquee of supported tools. */
export function ToolsMarquee() {
  const items = [...TOOLS, ...TOOLS]
  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)'
      }}
    >
      <div className="flex w-max animate-marquee items-center gap-14">
        {items.map((tool, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-white/35"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            {tool}
          </span>
        ))}
      </div>
    </div>
  )
}

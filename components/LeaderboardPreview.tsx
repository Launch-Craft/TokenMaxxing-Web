'use client'

import { motion } from 'framer-motion'

interface Row {
  rank: string
  handle: string
  flag: string
  tokens: string
  width: number
  you?: boolean
}

const ROWS: Row[] = [
  { rank: '🥇', handle: 'midnight.sh', flag: '🇺🇸', tokens: '418M', width: 100 },
  { rank: '🥈', handle: 'rustacean', flag: '🇩🇪', tokens: '312M', width: 78 },
  { rank: '🥉', handle: 'promptsmith', flag: '🇮🇳', tokens: '274M', width: 69 },
  { rank: '#4', handle: 'you', flag: '🇮🇳', tokens: '188M', width: 51, you: true },
  { rank: '#5', handle: 'ghostwriter', flag: '🇬🇧', tokens: '141M', width: 39 }
]

export function LeaderboardPreview() {
  return (
    <div className="hairline relative overflow-hidden rounded-3xl p-5 backdrop-blur-sm">
      {/* header */}
      <div className="mb-4 flex items-center gap-2 px-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-sm font-semibold text-white">Global Leaderboard</span>
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-white/35">
          live · 60s
        </span>
      </div>

      <div className="space-y-1.5">
        {ROWS.map((row, i) => (
          <motion.div
            key={row.handle}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-[28px_1fr_auto] items-center gap-3 rounded-xl px-3 py-2.5 ${
              row.you ? 'bg-accent/[0.08] ring-1 ring-accent/25' : 'bg-white/[0.02]'
            }`}
          >
            <span className="font-mono text-xs text-white/50">{row.rank}</span>
            <div className="flex min-w-0 items-center gap-2">
              <span className="text-sm">{row.flag}</span>
              <span className={`truncate font-mono text-[13px] ${row.you ? 'text-accent' : 'text-white/80'}`}>
                {row.handle}
              </span>
              {row.you && (
                <span className="rounded bg-accent/20 px-1.5 py-0 text-[10px] font-medium text-accent">
                  You
                </span>
              )}
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-white/[0.06] sm:block">
                <motion.span
                  className="block h-full rounded-full bg-gradient-to-r from-accent-deep to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${row.width}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
              <span className="w-12 text-right font-mono text-xs font-semibold tabular-nums text-white/90">
                {row.tokens}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

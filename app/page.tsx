'use client'

import { motion, type Variants } from 'framer-motion'
import { DownloadButton } from '@/components/DownloadButton'
import { HeroStats } from '@/components/HeroStats'
import { ToolsMarquee } from '@/components/ToolsMarquee'
import { LeaderboardPreview } from '@/components/LeaderboardPreview'
import { Reveal } from '@/components/Reveal'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } }
}
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

function Icon({ name }: { name: 'trophy' | 'globe' | 'wrapped' | 'shield' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const
  }
  const paths: Record<string, JSX.Element> = {
    trophy: (
      <>
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
        <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3M9 17h6M10 17v3M14 17v3M8 20h8" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17M12 3.5c2.6 2.4 2.6 14.6 0 17M12 3.5c-2.6 2.4-2.6 14.6 0 17" />
      </>
    ),
    wrapped: (
      <>
        <path d="M20 12v8H4v-8M2 8h20v4H2zM12 8V4M12 8c-2 0-4-1-4-2.5S10 4 12 8c2-4 4-3.5 4-2.5S14 8 12 8Z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v6c0 4 3 6.5 7 9 4-2.5 7-5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" {...common}>
      {paths[name]}
    </svg>
  )
}

const FEATURES = [
  {
    icon: 'trophy' as const,
    title: 'Global leaderboard',
    desc: 'See how you rank against developers worldwide — recomputed every minute.'
  },
  {
    icon: 'globe' as const,
    title: 'Shipping globe',
    desc: 'Watch where the world is shipping tokens from, live on a rotating 3D globe.'
  },
  {
    icon: 'wrapped' as const,
    title: 'AI Wrapped',
    desc: 'Your year in AI coding: tokens, tools, streaks, and your developer persona.'
  },
  {
    icon: 'shield' as const,
    title: 'Private by design',
    desc: 'Everything is analyzed on your own machine. Your code never leaves it.'
  }
]

const SHOWCASE_POINTS = [
  'Tracks Claude Code, Cursor & Codex automatically',
  'Net token accounting — cache reads never inflate your numbers',
  'Country-wise shipping ranks and a live origin globe'
]

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Atmosphere */}
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="animate-drift pointer-events-none absolute left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-accent/[0.10] blur-[150px]" />
      <div
        className="animate-drift pointer-events-none absolute right-[-160px] top-[300px] h-[420px] w-[420px] rounded-full bg-indigo-500/[0.09] blur-[150px]"
        style={{ animationDelay: '-7s' }}
      />

      {/* Nav */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6"
      >
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="TokenMaxxing" className="h-8 w-8 object-contain" />
          <span className="font-display text-[17px] font-semibold tracking-tight">TokenMaxxing</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 sm:inline">
            by Launchcraft Studio
          </span>
          <a
            href="#download"
            className="rounded-xl border border-white/10 px-4 py-1.5 text-sm text-white/80 transition hover:border-accent/40 hover:text-white"
          >
            Download
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-12 text-center sm:pt-20">
        <motion.img
          // eslint-disable-next-line @next/next/no-img-element
          src="/logo.png"
          alt=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-24 w-24 animate-float object-contain drop-shadow-[0_18px_60px_rgba(94,230,208,0.25)]"
        />

        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.div
            variants={item}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            For Claude Code · Cursor · Codex
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl"
          >
            <span className="text-gradient">Your AI coding,</span>
            <br />
            <span className="accent-gradient">ranked against the world.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-pretty text-base text-white/55 sm:text-lg">
            GitHub Contributions × Spotify Wrapped, for AI developers. Track every token locally,
            climb the global leaderboard, and watch who&apos;s shipping from where.
          </motion.p>

          <motion.div variants={item} id="download" className="mt-10 scroll-mt-24">
            <DownloadButton />
          </motion.div>
        </motion.div>

        <Reveal delay={0.1} className="mt-16 w-full border-t border-white/5 pt-10">
          <HeroStats />
        </Reveal>
      </section>

      {/* Tools marquee */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-10">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.22em] text-white/30">
          Works with your stack
        </p>
        <ToolsMarquee />
      </section>

      {/* Showcase */}
      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent/80">
              Leaderboard
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              A leaderboard that refreshes every minute.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
              Your usage is analyzed on-device, then only aggregated metrics sync. Compete globally,
              by country, and by tool — without ever exposing a line of your code.
            </p>
            <ul className="mt-6 space-y-3">
              {SHOWCASE_POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-white/70">
                  <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="m5 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <LeaderboardPreview />
        </Reveal>
      </section>

      {/* Features */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to <span className="accent-gradient">maxx your tokens.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="hairline h-full rounded-2xl p-5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={f.icon} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/50">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <div className="hairline relative overflow-hidden rounded-[28px] px-8 py-16 text-center">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[480px] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[120px]" />
            <h2 className="relative font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Start maxxing your tokens.
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-white/55">
              Free, private, and live in under a minute. See your rank tonight.
            </p>
            <div className="relative mt-9 flex justify-center">
              <DownloadButton />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/40 sm:flex-row">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="h-5 w-5 object-contain opacity-80" />
            <span>TokenMaxxing</span>
          </div>
          <span>
            Crafted by <span className="font-medium text-white/75">Launchcraft Studio</span>
          </span>
          <span className="font-mono text-xs">© {new Date().getFullYear()} Launchcraft Studio</span>
        </div>
      </footer>
    </main>
  )
}

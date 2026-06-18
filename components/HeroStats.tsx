'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { fetchStats, type PublicStats } from '@/lib/api'

const FALLBACK: PublicStats = { developers: 12_480, tokensShipped: 421_900_000_000, countries: 42 }
const compact = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 })

function CountUp({ value, format }: { value: number; format: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v)
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {format(display)}
    </span>
  )
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-white sm:text-3xl">{value}</div>
      <div className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">{label}</div>
    </div>
  )
}

export function HeroStats() {
  const [stats, setStats] = useState<PublicStats>(FALLBACK)

  useEffect(() => {
    void fetchStats().then((s) => {
      if (s) setStats(s)
    })
  }, [])

  return (
    <div className="flex items-center justify-center gap-8 sm:gap-16">
      <Stat value={<CountUp value={stats.developers} format={(n) => compact.format(n)} />} label="Developers" />
      <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      <Stat
        value={<CountUp value={stats.tokensShipped} format={(n) => compact.format(n)} />}
        label="Tokens shipped"
      />
      <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
      <Stat value={<CountUp value={stats.countries} format={(n) => String(Math.round(n))} />} label="Countries" />
    </div>
  )
}

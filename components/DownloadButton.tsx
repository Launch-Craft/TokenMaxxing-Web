'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DOWNLOAD_FALLBACK, fetchRelease } from '@/lib/api'
import { detectPlatform, PLATFORM_LABEL, type Platform } from '@/lib/platform'

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DownloadButton() {
  const [platform, setPlatform] = useState<Platform>('mac-arm64')
  const [url, setUrl] = useState<string>(DOWNLOAD_FALLBACK)
  const [version, setVersion] = useState<string | null>(null)

  // Magnetic pull toward the cursor.
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const p = detectPlatform()
    setPlatform(p)
    void fetchRelease().then((r) => {
      if (!r) return
      setVersion(r.version)
      setUrl(r.downloads[p] || r.primary?.url || DOWNLOAD_FALLBACK)
    })
  }, [])

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setOffset({
      x: (e.clientX - (r.left + r.width / 2)) * 0.18,
      y: (e.clientY - (r.top + r.height / 2)) * 0.3
    })
  }

  return (
    <div className="flex flex-col items-center gap-3.5">
      <motion.a
        ref={ref}
        href={url}
        onMouseMove={handleMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: 'spring', stiffness: 220, damping: 14, mass: 0.4 }}
        whileTap={{ scale: 0.97 }}
        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-9 py-4 text-base font-semibold text-ink shadow-[0_0_60px_-14px_rgba(94,230,208,0.65)]"
      >
        {/* sheen sweep on hover */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <DownloadIcon />
        Download the application
      </motion.a>
      <p className="font-mono text-xs text-white/45">
        {PLATFORM_LABEL[platform]}
        {version ? ` · v${version}` : ''} · Free
      </p>
    </div>
  )
}

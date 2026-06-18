import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TokenMaxxing — AI coding analytics for developers',
  description:
    'GitHub Contributions × Spotify Wrapped, for AI developers. Track your Claude Code, Cursor, and Codex usage, climb the global leaderboard, and download the desktop app. Crafted by Launchcraft Studio.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'TokenMaxxing',
    description: 'Track your AI coding usage and climb the global leaderboard.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Clash Display (display) + General Sans (body) — distinctive, not generic */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=general-sans@400,500,600&display=swap"
        />
        {/* JetBrains Mono — for the data / numeric feel */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  )
}

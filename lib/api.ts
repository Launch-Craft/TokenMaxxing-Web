export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8787'
export const DOWNLOAD_FALLBACK =
  process.env.NEXT_PUBLIC_DOWNLOAD_FALLBACK ||
  'https://github.com/acmediamarketing/tokenmaxxing/releases/latest'

export interface ReleaseInfo {
  version: string
  primary: { platform: string; url: string }
  downloads: Record<string, string>
}

export interface PublicStats {
  developers: number
  tokensShipped: number
  countries: number
}

export async function fetchRelease(): Promise<ReleaseInfo | null> {
  try {
    const res = await fetch(`${API_BASE}/v1/releases/latest`, { cache: 'no-store' })
    if (!res.ok) return null
    return (await res.json()) as ReleaseInfo
  } catch {
    return null
  }
}

export async function fetchStats(): Promise<PublicStats | null> {
  try {
    const res = await fetch(`${API_BASE}/v1/stats/public`, { cache: 'no-store' })
    if (!res.ok) return null
    return (await res.json()) as PublicStats
  } catch {
    return null
  }
}

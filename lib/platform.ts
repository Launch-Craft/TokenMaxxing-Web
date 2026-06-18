export type Platform = 'mac-arm64' | 'mac-x64' | 'win' | 'linux'

/** Best-effort OS detection for choosing the default installer. */
export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'mac-arm64'
  const ua = navigator.userAgent
  const plat =
    (navigator as Navigator & { userAgentData?: { platform?: string } }).userAgentData?.platform ||
    navigator.platform ||
    ''
  if (/Win/i.test(ua) || /Win/i.test(plat)) return 'win'
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return 'linux'
  // Default Macs to Apple Silicon (the shipping target).
  return 'mac-arm64'
}

export const PLATFORM_LABEL: Record<Platform, string> = {
  'mac-arm64': 'macOS · Apple Silicon',
  'mac-x64': 'macOS · Intel',
  win: 'Windows',
  linux: 'Linux'
}

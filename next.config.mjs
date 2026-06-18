/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Type errors still fail the build; lint is handled separately.
  eslint: { ignoreDuringBuilds: true }
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["tmdb.org"]
  },
  future: { webpack5: true }
}

module.exports = nextConfig

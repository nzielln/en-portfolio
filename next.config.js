/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  compiler:
    {
      styledComponents: true
  },
  env: {
    FORMSPREE_ENDPOINT: process.env.FORMSPREE_ENDPOINT
  }
}

module.exports = nextConfig

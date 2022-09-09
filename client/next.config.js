/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL
  },
  images: {
    domains: ['localhost', 'cloudflare-ipfs.com']
  },
  async rewrites(){
    return[
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*'
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig

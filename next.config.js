module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }
    config.module.rules.push({
      test: /\.mdx$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    domains: ['pbs.twimg.com', 'image.tmdb.org'],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ]
  },
}

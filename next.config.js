const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack5: true,
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
  i18n,
  images: {
    domains: ['pbs.twimg.com'],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination:
          'https://meilisearch.notion.site/Privacy-Policy-47f207efc5244de0820ffd19f0d844d8',
        permanent: true,
      },
    ]
  },
}

import {
  Api,
  Blog,
  Documentation,
  GithubOutlined,
  Guides,
  Puzzle,
  Roadmap2,
} from '../src/components/icons'

const headerData = {
  banner: {
    title:
      '🎉 Announcing our <a href="https://blog.meilisearch.com/meilisearch-series-a/" target="_blank">$15 million Series A</a> with Felicis Venture!',
  },
  links: [
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Resources',
      subMenu: [
        {
          title: 'Documentation',
          icon: Documentation,
          href: 'https://docs.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Blog',
          icon: Blog,
          href: 'https://blog.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Guides',
          icon: Guides,
          href: 'https://docs.meilisearch.com/learn/',
          target: '_blank',
        },
        {
          title: 'Roadmap',
          icon: Roadmap2,
          href: 'https://roadmap.meilisearch.com/tabs/5-ideas',
          target: '_blank',
        },
        {
          title: 'API Reference',
          icon: Api,
          href: 'https://docs.meilisearch.com/reference/api/',
          target: '_blank',
        },
        {
          title: 'Changelog',
          icon: GithubOutlined,
          href: 'https://github.com/meilisearch/meilisearch/releases',
          target: '_blank',
        },
        {
          title: 'Integrations',
          icon: Puzzle,
          href: 'https://github.com/meilisearch/integration-guides',
          target: '_blank',
        },
      ],
    },
    {
      title: 'Jobs',
      href: 'https://jobs.lever.co/meili',
      target: '_blank',
    },
    {
      title: 'About us',
      href: '/about-us',
    },
  ],
  cta1: {
    title: 'Join the Cloud beta',
    href: 'https://meilisearch.typeform.com/to/VI2cI2rv',
  },
  cta2: {
    title: 'Get Started',
    href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
  },
}

export default headerData

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
      'We just released <a href="blog.meilisearch.com/enterprise-ready-stable-version/" target="_blank">Meilisearch 1.0</a>: the most performant search engine on the market with zero setup required.',
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
    title: 'Get Started',
    href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
    target: '_blank',
  },
  cta2: {
    title: 'Login',
    href: 'https://cloud.meilisearch.com',
    target: '_blank',
  },
}

export default headerData

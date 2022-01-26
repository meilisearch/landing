import {
  ApiReference,
  GithubOutlined,
  Guides,
  Integrations,
  Roadmap,
} from '../src/components/icons'

const getHeaderData = (t = () => {}) => ({
  links: [
    {
      title: t('documentation'),
      href: 'https://docs.meilisearch.com/',
      target: '_blank',
    },
    {
      title: t('blog'),
      href: 'https://blog.meilisearch.com/',
      target: '_blank',
    },
    {
      title: t('jobs'),
      href: 'https://www.welcometothejungle.com/fr/companies/meilisearch',
      target: '_blank',
    },
    {
      title: t('resources.title'),
      subMenu: [
        {
          title: t('resources.subMenu.0.title'),
          icon: Guides,
          href: 'https://docs.meilisearch.com/learn/',
          target: '_blank',
        },
        {
          title: t('resources.subMenu.1.title'),
          icon: ApiReference,
          href: 'https://docs.meilisearch.com/reference/api/',
          target: '_blank',
        },
        {
          title: t('resources.subMenu.2.title'),
          icon: Roadmap,
          href: 'https://roadmap.meilisearch.com/tabs/5-ideas',
          target: '_blank',
        },
        {
          title: t('resources.subMenu.3.title'),
          icon: GithubOutlined,
          href: 'https://github.com/meilisearch/meilisearch/releases',
          target: '_blank',
        },
        {
          title: t('resources.subMenu.4.title'),
          icon: Integrations,
          href: 'https://github.com/meilisearch/integration-guides',
          target: '_blank',
        },
      ],
    },
  ],
  cta1: {
    title: t('logIn'),
    href: '/',
  },
  cta2: {
    title: t('getStarted'),
    href: '/',
  },
})

export default getHeaderData

import {
  Api,
  Blog,
  Documentation,
  GithubOutlined,
  Guides,
  Puzzle,
  Roadmap2,
} from '../src/components/icons'

const getHeaderData = (t = () => {}) => ({
  links: [
    {
      title: t('pricing.title'),
      href: t('pricing.url'),
    },
    {
      title: t('resources.title'),
      subMenu: [
        {
          title: t('documentation.title'),
          icon: Documentation,
          href: t('documentation.url'),
          target: '_blank',
        },
        {
          title: t('blog.title'),
          icon: Blog,
          href: t('blog.url'),
          target: '_blank',
        },
        {
          title: t('guides.title'),
          icon: Guides,
          href: t('guides.url'),
          target: '_blank',
        },
        {
          title: t('roadmap.title'),
          icon: Roadmap2,
          href: t('roadmap.url'),
          target: '_blank',
        },
        {
          title: t('apiReference.title'),
          icon: Api,
          href: t('apiReference.url'),
          target: '_blank',
        },
        {
          title: t('changelog.title'),
          icon: GithubOutlined,
          href: t('changelog.url'),
          target: '_blank',
        },
        {
          title: t('integrations.title'),
          icon: Puzzle,
          href: t('integrations.url'),
          target: '_blank',
        },
      ],
    },
    {
      title: t('jobs.title'),
      href: t('jobs.url'),
      target: '_blank',
    },
  ],
  cta1: {
    title: t('logIn.title'),
    href: t('logIn.url'),
  },
  cta2: {
    title: t('getStarted.title'),
    href: t('getStarted.url'),
  },
})

export default getHeaderData

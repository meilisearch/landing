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
      title: t('documentation.title'),
      href: t('documentation.url'),
      target: '_blank',
    },
    {
      title: t('blog.title'),
      href: t('blog.url'),
      target: '_blank',
    },
    {
      title: t('jobs.title'),
      href: t('jobs.url'),
      target: '_blank',
    },
    {
      title: t('resources.title'),
      subMenu: [
        {
          title: t('resources.subMenu.0.title'),
          icon: Guides,
          href: t('resources.subMenu.0.url'),
          target: '_blank',
        },
        {
          title: t('resources.subMenu.1.title'),
          icon: ApiReference,
          href: t('resources.subMenu.1.url'),
          target: '_blank',
        },
        {
          title: t('resources.subMenu.2.title'),
          icon: Roadmap,
          href: t('resources.subMenu.2.url'),
          target: '_blank',
        },
        {
          title: t('resources.subMenu.3.title'),
          icon: GithubOutlined,
          href: t('resources.subMenu.3.url'),
          target: '_blank',
        },
        {
          title: t('resources.subMenu.4.title'),
          icon: Integrations,
          href: t('resources.subMenu.4.url'),
          target: '_blank',
        },
      ],
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

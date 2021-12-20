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
      href: '/',
    },
    {
      title: t('blog'),
      href: '/',
    },
    {
      title: t('jobs'),
      href: '/',
    },
    {
      title: t('ressources.title'),
      href: '/',
      subMenu: [
        {
          title: t('ressources.subMenu.0.title'),
          subtitle: t('ressources.subMenu.0.subtitle'),
          icon: Guides,
          href: '/',
        },
        {
          title: t('ressources.subMenu.1.title'),
          subtitle: t('ressources.subMenu.1.subtitle'),
          icon: ApiReference,
          href: '/',
        },
        {
          title: t('ressources.subMenu.2.title'),
          subtitle: t('ressources.subMenu.2.subtitle'),
          icon: Roadmap,
          href: '/',
        },
        {
          title: t('ressources.subMenu.3.title'),
          subtitle: t('ressources.subMenu.3.subtitle'),
          icon: GithubOutlined,
          href: '/',
        },
        {
          title: t('ressources.subMenu.4.title'),
          subtitle: t('ressources.subMenu.4.subtitle'),
          icon: Integrations,
          href: '/',
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

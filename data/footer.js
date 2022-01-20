import { Github, Twitter, Linkedin, Slack } from '../src/components/icons'

const getFooterData = (t = () => {}) => ({
  menu: [
    {
      title: t('menu.0.title'),
      submenu: [
        {
          title: t('menu.0.submenu.0.title'),
          href: 'https://docs.meilisearch.com/',
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.1.title'),
          href: 'https://blog.meilisearch.com/',
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.2.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.0.submenu.3.title'),
          href: 'https://docs.meilisearch.com/reference/api/',
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.4.title'),
          href: 'https://roadmap.meilisearch.com/',
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.5.title'),
          href: 'https://github.com/meilisearch/MeiliSearch/releases',
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.6.title'),
          href: 'https://github.com/meilisearch/integration-guides',
          target: '_blank',
        },
      ],
    },
    {
      title: t('menu.1.title'),
      submenu: [
        {
          title: t('menu.1.submenu.0.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.1.submenu.1.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.1.submenu.2.title'),
          href: 'https://slack.meilisearch.com/',
          target: '_blank',
        },
      ],
    },
    {
      title: t('menu.2.title'),
      submenu: [
        {
          title: t('menu.2.submenu.0.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.2.submenu.1.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.2.submenu.2.title'),
          href: 'https://jobs.lever.co/meili',
          target: '_blank',
        },
        {
          title: t('menu.2.submenu.3.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.2.submenu.4.title'),
          href: '',
          target: '',
        },
        {
          title: t('menu.2.submenu.5.title'),
          href: '',
          target: '',
        },
      ],
    },
  ],
  copyright: t('copyright'),
  socials: [
    {
      icon: Github,
      href: 'https://github.com/meilisearch',
      target: '_blank',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/meilisearch/',
      target: '_blank',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/meilisearch',
      target: '_blank',
    },
    {
      icon: Slack,
      href: 'https://slack.meilisearch.com/',
      target: '_blank',
    },
  ],
})

export default getFooterData

import { Github, Twitter, Linkedin, Slack } from '../src/components/icons'

const getFooterData = (t = () => {}) => ({
  menu: [
    {
      title: t('menu.0.title'),
      submenu: [
        {
          title: t('menu.0.submenu.0.title'),
          href: t('menu.0.submenu.0.url'),
        },
        {
          title: t('menu.0.submenu.1.title'),
          href: t('menu.0.submenu.1.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.2.title'),
          href: t('menu.0.submenu.2.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.3.title'),
          href: t('menu.0.submenu.3.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.4.title'),
          href: t('menu.0.submenu.4.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.5.title'),
          href: t('menu.0.submenu.5.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.6.title'),
          href: t('menu.0.submenu.6.url'),
          target: '_blank',
        },
        {
          title: t('menu.0.submenu.7.title'),
          href: t('menu.0.submenu.7.url'),
          target: '_blank',
        },
      ],
    },
    {
      title: t('menu.1.title'),
      submenu: [
        {
          title: t('menu.1.submenu.0.title'),
          href: t('menu.1.submenu.0.url'),
          target: '_blank',
        },
        {
          title: t('menu.1.submenu.1.title'),
          href: t('menu.1.submenu.1.url'),
          target: '_blank',
        },
        {
          title: t('menu.1.submenu.2.title'),
          href: t('menu.1.submenu.2.url'),
          target: '_blank',
        },
        {
          title: t('menu.1.submenu.3.title'),
          href: t('menu.1.submenu.3.url'),
          target: '_blank',
        },
      ],
    },
    {
      title: t('menu.2.title'),
      submenu: [
        {
          title: t('menu.2.submenu.0.title'),
          href: t('menu.2.submenu.0.url'),
          target: '_blank',
        },
        {
          title: t('menu.2.submenu.1.title'),
          href: t('menu.2.submenu.1.url'),
          target: '_blank',
        },
        {
          title: t('menu.2.submenu.2.title'),
          href: t('menu.2.submenu.2.url'),
          target: '_blank',
        },
        {
          title: t('menu.2.submenu.3.title'),
          href: t('menu.2.submenu.3.url'),
          target: '_blank',
        },
        {
          title: t('menu.2.submenu.4.title'),
          href: t('menu.2.submenu.4.url'),
          target: '_blank',
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
      title: 'GitHub',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/meilisearch/',
      target: '_blank',
      title: 'Twitter',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/meilisearch',
      target: '_blank',
      title: 'Linkedin',
    },
    {
      icon: Slack,
      href: 'https://slack.meilisearch.com/',
      target: '_blank',
      title: 'Slack',
    },
  ],
})

export default getFooterData

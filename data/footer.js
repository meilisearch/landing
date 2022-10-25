import { Github, Twitter, Linkedin, Slack } from '../src/components/icons'

const getFooterData = () => ({
  newsletter: {
    title: 'Newsletter',
    description:
      'Subscribe and never miss out on our latest release, blog posts and news.',
    placeholder: 'Enter your email',
    cta: {
      title: 'Submit',
      target: '_blank',
      href: email =>
        `https://meilisearch.us2.list-manage.com/subscribe?u=27870f7b71c908a8b359599fb&id=79582d828e&MERGE0=${email}`,
    },
  },
  menu: [
    {
      title: 'Resources',
      submenu: [
        {
          title: 'Pricing',
          href: '/pricing',
        },
        {
          title: 'Documentation',
          href: 'https://docs.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Blog',
          href: 'https://blog.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Cookbooks',
          href: 'https://docs.meilisearch.com/learn/cookbooks/',
          target: '_blank',
        },
        {
          title: 'API Reference',
          href: 'https://docs.meilisearch.com/reference/api/',
          target: '_blank',
        },
        {
          title: 'Roadmap',
          href: 'https://roadmap.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Changelog',
          href: 'https://github.com/meilisearch/meilisearch/releases',
          target: '_blank',
        },
        {
          title: 'Integrations',
          href: 'https://github.com/meilisearch/integration-guides',
          target: '_blank',
        },
      ],
    },
    {
      title: 'Connect',
      submenu: [
        {
          title: 'Support',
          href: 'https://slack.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'GitHub',
          href: 'https://github.com/meilisearch',
          target: '_blank',
        },
        {
          title: 'Slack',
          href: 'https://slack.meilisearch.com/',
          target: '_blank',
        },
        {
          title: 'Newsletter',
          href: 'https://meilisearch.us2.list-manage.com/subscribe?u=27870f7b71c908a8b359599fb&id=79582d828e',
          target: '_blank',
        },
      ],
    },
    {
      title: 'Company',
      submenu: [
        {
          title: 'About us',
          href: '/about-us',
        },
        {
          title: 'Contact us',
          href: 'https://docs.meilisearch.com/learn/what_is_meilisearch/contact.html#contact-us',
          target: '_blank',
        },
        {
          title: 'Career',
          href: 'https://jobs.lever.co/meili',
          target: '_blank',
        },
        {
          title: 'Code of conduct',
          href: 'https://github.com/meilisearch/MeiliSearch/blob/main/CODE_OF_CONDUCT.md',
          target: '_blank',
        },
        {
          title: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          title: 'Terms of use',
          href: '/terms-of-use',
        },
      ],
    },
  ],
  copyright: '©2022 Meilisearch - All rights reserved.',
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

import { Code, Diamond, Puzzle, Rocket } from 'components/icons'

const pricingPageData = {
  meta: {
    title: 'Pricing ',
    description:
      'An open-source, blazingly fast, and hyper-relevant search engine that will improve your search experience',
  },
  hero: {
    preTitle: 'Pricing',
    title: 'Find the perfect plan for a perfect <strong>search</strong>',
    description:
      'Whatever your needs, we can find the right plan that will fit your business perfectly.',
  },
  pricing: {
    plans: [
      {
        title: 'Build',
        active: false,
        fullWidth: false,
        color: 'colors.hotPink',
        icon: Code,
        pricing: '<strong>0$</strong> /month',
        planDescription: `
          <ul>
          <li><strong>For small projects and testing</strong></li>
          <li>100K documents included</li>
          <li>10K searches/month included</li>
          <li>Shared resources</li>
          <li>Community (Discord) support</li>
          </ul>
        `,
        ubp: 'Then <strong>$0.25</strong> for every <strong>1K searches and 1K documents</strong> when you’ve reached your plan limits.',
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=build',
          target: '_blank',
        },
      },
      {
        title: 'Pro',
        active: true,
        fullWidth: false,
        color: 'colors.hotPink',
        icon: Diamond,
        pricing: '<strong>$1200</strong> /month',
        planDescription: `
        <ul>
        <li><strong>Recommended for production</strong></li>
        <li>10M documents included</li>
        <li>10M searches/month included</li>
        <li>Highly available</li>
        <li>Dedicated resources</li>
        <li>Meilisearch team support</li>
        </ul>
      `,
        ubp: 'Then <strong>$0.25</strong> for every <strong>1K searches and 1K documents</strong> when you’ve reached your plan limits.',
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=pro',
          target: '_blank',
        },
      },
      {
        title: 'Enterprise',
        active: false,
        fullWidth: false,
        color: 'colors.hotPink',
        icon: Rocket,
        pricing: 'Custom quote',
        planDescription: `
        <ul>
        <li><strong>Built for your needs</strong></li>
        <li>Custom usage-based or resource-based pricing</li>
        <li>SSO included</li>
        <li>Dedicated resources</li>
        <li>Dedicated account manager</li>
        <li>Premium SLA</li>
        <li>Highly available</li>
        </ul>
      `,
        cta: {
          title: 'Contact Sales',
          href: 'https://cal.com/team/meilisearch/cloud-enterprise',
          target: '_blank',
        },
      },
      {
        title: 'Open Source',
        active: false,
        fullWidth: true,
        color: 'colors.dodgerBlue',
        icon: Puzzle,
        pricing: '<strong>Free</strong> (self-hosted)',
        planDescription: `
        Start using Meilisearch now by downloading our open source version.<br/>You will have the possibility in the future to move to our cloud easily.
        <br/><br/>
        Read our <a href="#open-source-vs-cloud">Cloud - Open source comparison guide</a>
      `,
        cta: {
          title: 'Get started',
          href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
          target: '_blank',
        },
      },
    ],
  },
  table: {
    title: 'Open source vs Cloud',
    tables: [
      {
        thead: ['Search Capabilities', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Customizable relevency',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Typo tolerence',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Geosearch capacity',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Sorting results',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Automatic language detection',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Synonyms',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Stop words',
            openSource: true,
            cloud: true,
          },
          {
            title: 'API key management',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Tenant tokens',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Multi-index search',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Filtering',
            openSource: true,
            cloud: true,
          },
          {
            title: 'Faceted search',
            openSource: true,
            cloud: true,
          },
        ],
      },
      {
        thead: ['Project Management', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Interface to browse your documents',
            openSource: 'search preview',
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to configure your search',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to manage your API keys',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to view logs',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Interface to view tasks',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
          {
            title: 'Search analytics',
            openSource: false,
            cloud:
              '<a href=\'https://roadmap.meilisearch.com/\' target="_blank">Coming soon</a>',
          },
        ],
      },
      {
        thead: ['Operational Management', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'High availability',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Server Scaling',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Zero-downtime upgrades',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Continuous backup and recovery',
            openSource: 'Manual',
            cloud: 'Automatic',
          },
          {
            title: 'Service monitoring',
            openSource: false,
            cloud: true,
          },
          {
            title: 'HTTPS/SSL by default',
            openSource: false,
            cloud: true,
          },
          {
            title: 'Custom server configuration',
            openSource: 'Your infrastructure',
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
        ],
      },
      {
        thead: ['Support', 'Open Source', 'Cloud'],
        tbody: [
          {
            title: 'Email support',
            openSource: false,
            cloud: true,
          },
          {
            title: 'SLA for 99.99% uptime',
            openSource: false,
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
          {
            title: 'Premier support',
            openSource: false,
            cloud:
              "<a onclick=\"$crisp.push(['do', 'chat:open'])\">Contact sales</a>",
          },
        ],
      },
    ],
  },
  faq: {
    title: 'FAQs',
    questions: [
      {
        question: 'Can I try Meilisearch cloud for free?',
        answer:
          'Yes. We offer a free plan that allows you to index up to 100k documents and perform 10k search requests per month. If you exceed this usage you’ll be charged 25c for each additional block of 1,000 searches and 1,000 documents.',
      },
      {
        question: 'Is there a minimum term or commitment once I start paying?',
        answer:
          'There is no minimum term, and users can close their accounts anytime. Users will only be charged for the period during which a project was active. That said, if you’re unhappy with Meilisearch, we’d like to know why. It’s important to us that our users are happy. Please do not hesitate to contact us through the chat widget or email us at <a href="mailto:cloud@meilisearch.com">cloud@meilisearch.com</a> and provide a detailed explanation of what happened. We’ll work with you to ensure you have the best possible experience. To delete your account, navigate to the account settings on your dashboard and click the “Delete your account” button.',
      },
      {
        question: 'How do we accept payment?',
        answer:
          'We only accept payment online via credit cards and charge in US dollars (USD) with Stripe as our payment service provider.',
      },
      {
        question: 'Can I change my plan?',
        answer:
          'Yes, and it is effortless. You can upgrade a project’s plan by selecting the project, navigating to the "Billing" tab, and clicking on the "Change plan" button. Please remember that once the process is complete, you won’t be able to downgrade your plan.',
      },
    ],
  },
}

export default pricingPageData

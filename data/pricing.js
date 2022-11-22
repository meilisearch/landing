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
        default: false,
        fullWidth: false,
        color: 'colors.hotPink',
        icon: Code,
        pricing: '<strong>Free</strong>',
        planDescription: `
          <ul>
          <li><strong>For small projects and testing</strong></li>
          <li>Fair use policy</li>
          <li>Up to 100k documents</li>
          <li>Up to 10k searches per month</li>
          <li>Shared resources</li>
          <li>Community (Slack) support</li>
          </ul>
        `,
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=build',
          target: '_blank',
        },
      },
      {
        title: 'Pro',
        default: true,
        fullWidth: false,
        color: 'colors.hotPink',
        icon: Diamond,
        pricing: '<strong>$1200</strong> /month',
        planDescription: `
        <ul>
        <li><strong>Recommended for production</strong></li>
        <li>Up to 10M documents</li>
        <li>Up to 10M searches per month</li>
        <li>Highly available</li>
        <li>Dedicated resources</li>
        <li>Meilisearch team support</li>
        </ul>
      `,
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=pro',
          target: '_blank',
        },
      },
      {
        title: 'Enterprise',
        default: false,
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
          href: 'mailto:bonjour@meilisearch.com?subject="Enterprise quote"',
          target: '_blank',
        },
      },
      {
        title: 'Open Source',
        default: false,
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
          'Yes. We offer a free plan based on fair usage that allows you to index up to 100k documents and perform 10k search requests per month.',
      },
      {
        question: 'What happens if I exceed my plan limits?',
        answer:
          'For the time being, we can only rely on fair use. However, you may experience additional latency and response time if you exceed the limits.',
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
        question: 'How does billing work?',
        answer:
          'We bill per hour spent. We do not provide consumption-based plans. An hour corresponds to one hour of a Meilisearch server or project up and running in the cloud. In addition, while computing the hours, we round up, meaning if a server runs for one hour and five minutes, we will charge for two hours; if it runs for thirty minutes, we will charge for one hour.<br/><br/>Users will be charged at the end of each month based on their invoice(s) value.  It is important to note that the cost for a billing period is displayed excluding local taxes, and we automatically apply taxes to your monthly bill based on your region.<br/><br/> You can view the estimated cost for a billing period of your project(s) on the <a href="https://cloud.meilisearch.com/billing" target="_blank">billing page</a> and access your invoices and receipts by navigating to the “Billing settings” > “Manage billing settings and invoices” > “Invoice History”.',
      },
      {
        question: 'Can I change my plan?',
        answer:
          "Yes, and it is effortless. You can upgrade a project's plan by selecting the project, navigating to the “Resources” tab, and clicking on the “Change Plan” button. Please remember that once the process is complete, you won't be able to downgrade your plan.",
      },
      {
        question: 'How do I choose the right plan?',
        answer: `While we provide a free and flexible plan, a rule of thumb is that your plan needs to match your business needs and workload. This means:<br/>
          <ul>
            <li>The Build plan is suitable for small businesses or individuals whose needs and workload are within the limit, as this is based on fair usage. When you reach this limit, you can easily scale up by upgrading to the Professional plan with the click of a button.</li>
            <li>If your workload is beyond the Build plan’s limits, your data needs to be highly available, and your business requires a personalized support experience during business hours, the Professional plan is a better fit.</li>
            <li>The Enterprise plan is entirely dependent on your use case and expectations. It is a bespoke plan suitable for businesses with unique requirements, such as special support needs or unique use-case.</li>
          </ul><br/>
          If you need additional assistance choosing the right plan for your use case, please do not hesitate to contact us through the chat widget or email us at <a href="mailto:cloud@meilisearch.com">cloud@meilisearch.com</a>.`,
      },
    ],
  },
}

export default pricingPageData

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
          'Yes. We offer a free plan that allows you to index up to 100k documents and perform 10k search requests per month.',
      },
      {
        question: 'Do I need to add a card to create a Meilisearch Project?',
        answer:
          'No. You can create and use Meilisearch projects without having to add a card. If you want to exceed the usage included in the Build plan, you will need to add a card to avoid service disruption.',
      },
      {
        question: 'What happens if I exceed my plan limits?',
        answer:
          'If you exceed your plan limit, you will be charged for additional usage based on the search unit. A search unit costs $0.25 and includes 1,000 searches and 1,000 additional documents. If you don’t have a valid payment method added to your account, Meilisearch will stop responding to search requests.',
      },
      {
        question: 'What is a search unit?',
        answer: `A search unit is a metric used to measure your usage of Meilisearch. It represents the number of searches and documents. Each unit costs $0.25 and contains 1,000 searches and 1,000 documents. Meilisearch calculates the number of units used by taking the greater of either the searches or documents.
        <br/><br/>
        For example:
        <br/><br/>
        A user on a Build plan exceeds the plan limit by 5,000 searches and 50,000 documents in a month. This means:
        <br/><br/>
        5,000 searches / 1,000 = 5 search units. And 5,000 documents / 1,000 = 50 search units. 
        <br/><br/>
        Meilisearch will take the greater of the two calculations to determine the number of units used. As a result, the user is charged $12.50 ($0.25 x 50 = $12.50) for additional usage.`,
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
        answer: `Billing is determined by calculating the number of search units used in a billing cycle. If you exceed the number of search units allowed in a billing cycle for a dedicated plan, you will be charged for additional usage at $0.25 per search unit. Furthermore, billing is fulfilled per project rather than per account. This means that the search units allocated to a particular project cannot be shared with other projects in your account.
        The billing period starts at the beginning of the calendar month and ends at midnight UTC on the last day of the calendar month.`,
      },
      {
        question: 'How do you calculate the number of documents?',
        answer:
          'The number of documents calculated for billing purposes is the total number of documents across all indexes in a project at the time of billing.',
      },
      {
        question: 'Can I change my plan?',
        answer:
          'Yes, and it is effortless. You can upgrade a project’s plan by selecting the project, navigating to the “Billing” tab, and clicking on the “Change plan” button. Please remember that once the process is complete, you won’t be able to downgrade your plan.',
      },
      {
        question: 'How do I choose the right plan?',
        answer: `Choosing the right plan depends on your use case, and the number of documents and search requests your app will consume. This means:
        <ul>
        <li>The Build plan is suitable for small businesses or individuals whose needs and workload are not yet at the level of the Pro plan. It’s a great option if you’re building out your solution and don’t yet have the level of usage required to justify the cost of a Pro plan. The costs associated with the Build plan scale with your usage, so it’s a good fit for growing businesses.</li><br/>
        <li>If your workload is beyond the Build plan’s limits, and your business requires a personalized support experience during business hours, the Pro plan is a better fit.</li><br/>
        <li>The Enterprise plan is entirely dependent on your use case and expectations. It is a bespoke plan suitable for businesses with unique requirements, such as special support needs or unique use-case.</li><br/>
        </ul>    
        If you need additional assistance choosing the right plan for your use case, please do not hesitate to contact us through the chat widget or email us at <a href="mailto:cloud@meilisearch.com">cloud@meilisearch.com</a>.`,
      },
    ],
  },
}

export default pricingPageData

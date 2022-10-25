import {
  B2CApp,
  Code,
  Diamond,
  Ecommerce,
  GeographicSearch,
  GraduationCap,
  Media,
  NumericSorting,
  Other,
  Puzzle,
  Rocket,
  SaasApp,
  SiteSearch,
  TextualSearch,
} from 'components/icons'

const getPricingPageData = () => ({
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
    payingPlans: [
      {
        title: 'Hobby',
        default: false,
        icon: GraduationCap,
        pricing: '<strong>$30</strong>/month',
        specifications: [
          'Disk 10GB',
          'RAM 1GB',
          '0,5vCPU',
          'Shared resources',
          'Community (Slack) support',
        ],
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=hobby',
          target: '_blank',
        },
      },
      {
        title: 'Developer',
        default: true,
        icon: Code,
        pricing: '<strong>$120</strong>/month',
        specifications: [
          'Disk 40GB',
          'RAM 4GB',
          '1vCPU',
          'Dedicated resources',
          'Meilisearch team support',
        ],
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=developer',
          target: '_blank',
        },
      },
      {
        title: 'Pro',
        default: false,
        icon: Diamond,
        pricing: '<strong>$600</strong>/month',
        specifications: [
          'Disk 160GB',
          'RAM 16GB',
          '4vCPU',
          'Dedicated resources',
          'Meilisearch team support',
        ],
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/register?plan=pro',
          target: '_blank',
        },
      },
      {
        title: 'Enterprise',
        default: false,
        icon: Rocket,
        pricing: 'Custom quote',
        specifications: [
          'Disk Custom',
          'RAM Custom',
          'Custom vCPU',
          'Dedicated resources',
          'Dedicated account manager',
          'Premium SLA',
        ],
        cta: {
          title: 'Contact Sales',
          href: 'mailto:bonjour@meilisearch.com?subject="Enterprise quote"',
          target: '_blank',
        },
      },
    ],
    freePlan: {
      preTitle: 'Open Source',
      icon: Puzzle,
      title: 'Free',
      description:
        'Start using Meilisearch now by downloading our open source version. You will have the possibility in the future to move to our cloud easily.',
      readMore:
        'Read our <a href="#open-source-vs-cloud">Cloud - Open source comparison guide</a>',
      cta: {
        title: 'Get started',
        href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
        target: '_blank',
      },
    },
  },
  pricingAssistant: {
    preTitle: 'Pricing assistant',
    title: 'We can help you choose the <strong>right plan</strong>',
    buttons: {
      next: 'Next',
      previous: 'Previous',
    },
    steps: [
      {
        title: 'What is your <strong>use case</strong>?',
        multipleChoices: false,
        name: 'useCase',
        options: [
          {
            title: 'SaaS application',
            icon: SaasApp,
            value: 'saas',
          },
          {
            title: 'B2C application',
            icon: B2CApp,
            value: 'b2c',
          },
          {
            title: 'Site search',
            icon: SiteSearch,
            value: 'site',
          },
          {
            title: 'E-commerce',
            icon: Ecommerce,
            value: 'ecommerce',
          },
          {
            title: 'Media',
            icon: Media,
            value: 'media',
          },
          {
            title: 'Other',
            icon: Other,
            value: 'other',
          },
        ],
      },
      {
        title: 'What <strong>features</strong> are you interested in?',
        subtitle: 'Multiple choice possible',
        multipleChoices: true,
        name: 'feature',
        options: [
          {
            title: 'Textual search',
            icon: TextualSearch,
            value: 'textual',
          },
          {
            title: 'Geographic filters/sorting',
            icon: GeographicSearch,
            value: 'geo',
          },
          {
            title: 'Numeric and/or textual filters/sorting',
            icon: NumericSorting,
            value: 'numeric',
          },
        ],
      },
      {
        title: 'How many <strong>documents</strong> do you have?',
        multipleChoices: false,
        name: 'documentsNumber',
        options: [
          {
            title: '< 100 000',
            value: 100000,
          },
          {
            title: '100 000 - 500 000',
            value: 500000,
          },
          {
            title: '500 000 - 1 000 000',
            value: 1000000,
          },
          {
            title: '1 000 000 - 5 000 000',
            value: 5000000,
          },
          {
            title: '5 000 000 - 100 000 000',
            value: 100000000,
          },
          {
            title: '> 100 000 000',
            value: '100000000+',
          },
        ],
      },
      {
        title:
          'What is the <strong>approximate size</strong> of one of your documents?',
        multipleChoices: false,
        name: 'documentApproxSizeInKB',
        options: [
          {
            title: '< 0.5 KB',
            value: 0.5,
          },
          {
            title: '0.5 KB - 1 KB',
            value: 1,
          },
          {
            title: '1 KB - 10 KB',
            value: 10,
          },
          {
            title: '> 10 KB',
            value: '10+',
          },
        ],
      },
      {
        title: 'What <strong>update frequency</strong> do you need?',
        multipleChoices: false,
        name: 'updateFrequency',
        options: [
          {
            title: 'Every week',
            value: 'week',
          },
          {
            title: 'Every day',
            value: 'day',
          },
          {
            title: 'Every hour',
            value: 'hour',
          },
          {
            title: 'Every minute',
            value: 'minute',
          },
          {
            title: 'Continuously',
            value: 'continuously',
          },
        ],
      },
    ],
    recommandations: {
      title: 'Our recommandation',
      description: 'Here is the recommended plan based on your business needs.',
      tryAgain: 'Try again',
      options: {
        preTitle: 'Dedicated',
        perMonth: '/month',
        estimation: price => `Estimation base on $${price} per hour`,
        ram: quantity => `${quantity}GB Ram`,
        cpu: quantity => `${quantity} CPU`,
        disk: quantity => `${quantity}GB Disk`,
        description:
          'We can create the optimal dedicated plan for you.<br/>Contact our sales team to ask for a fully custom quote.',
        cta: {
          title: 'Get started',
          href: 'https://cloud.meilisearch.com/login',
          target: '_blank',
        },
      },
      customOption: {
        preTitle: 'Enterprise',
        title: 'Custom quote',
        description:
          'We can create for you the optimal dedicated plan.<br/>Contact our sales team to ask for a fully custom quote.',
        cta: {
          title: 'Contact sales',
          href: '',
          target: '',
        },
      },
    },
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
        question: 'Is there a free plan or a trial period?',
        answer:
          'We currently do not offer a free plan or trial period. However, you can try out the open-source version following this <a href="https://docs.meilisearch.com/learn/getting_started/quick_start.html" target="_blank">quick start guide</a>.',
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
          'We bill per hour spent. We do not provide consumption-based plans. An hour corresponds to one hour of a Meilisearch server or project up and running in the cloud. In addition, while computing the hours, we round up, meaning if a server runs for one hour and five minutes, we will charge for two hours; if it runs for thirty minutes, we will charge for one hour.<br/><br/>Users will be charged at the end of each month based on their invoice(s) value. You can view the estimated cost for a billing period of your project(s) on the <a href="https://cloud.meilisearch.com/billing" target="_blank">billing page</a> and access your invoices and receipts by navigating to the “Billing settings” > “Manage billing settings and invoices” > “Invoice History”.',
      },
      {
        question: 'Can I change my plan or resource?',
        answer:
          "Yes, and it is effortless. You can upgrade a project's plan or resource by selecting the project, navigating to the “Resources” tab, and clicking on the “Upgrade” button. Please remember that once the process is complete, you won't be able to downgrade your resource.",
      },
      {
        question: 'How do I choose the right plan?',
        answer: `You can estimate your costs and the right plan for your use case using our <a href="#pricing-assistant">pricing assistant</a>. We often suggest choosing a plan that corresponds with the number of documents, as upgrading to a higher plan with more capacity is very easy. While we take into account the number of documents in estimating the plan to choose, here are some other factors to consider when choosing a plan:<br/>
          <ul>
            <li><strong>Volume or number of search requests:</strong> A search request is CPU intensive. The more cores you provide to the engine, the more search queries it will be able to process at the same time. Kindly note that using 0.5 vCPUs might impact the search experience while indexing simultaneously. Hence, we recommend using at least one full CPU to handle indexing and search concurrently, meaning Meilisearch will automatically take 0.5 vCPUs maximum for indexing, with the other for search.</li>
            <li><strong>Search speed:</strong> The search speed is based on the RAM/database size ratio. You can find more information in the <a href="https://docs.meilisearch.com/faq.html#search-speed" target="_blank">dedicated documentation</a>.</li>
            <li><strong>Disk space:</strong> We recommend reserving at least ten times the size of your raw data. This means that if your document size is 8GB, you should at least reserve 80GB of disk space for Meilisearch.</li>
            <li><strong>Complexity and structure of your documents:</strong> If there are lots of filterable and searchable attributes or all document fields are searchable, we strongly recommend updating the \`searchableAttributes\` list to contain only the fields you want to search; otherwise, a plan with more RAM and storage would be suitable.</li>
          </ul><br/>
          If you need help choosing the right plan for your use case, please do not hesitate to contact us through the chat widget or email us at <a href="mailto:cloud@meilisearch.com">cloud@meilisearch.com</a>.`,
      },
    ],
  },
})

export default getPricingPageData

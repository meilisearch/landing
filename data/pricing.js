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
    openSource: {
      title: 'Open Source',
      plan: 'Free',
      planDescription:
        'Start using Meilisearch now by downloading our open source version. You will have the possibility in the future to move to our cloud easily.',
      cta: {
        title: 'Download',
        href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
        target: '_blank',
      },
    },
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
          href: '', // TODO: ask for the link
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
          href: '', // TODO: ask for the link
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
          href: '', // TODO: ask for the link
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
          href: '', // TODO: ask for the link
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
        'Read our <a href="" target="_blank">Cloud - Open source comparison guide</a>', // TODO: ask for the link
      cta: {
        title: 'Get started',
        href: '', // TODO: ask for the link
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
    title: 'Features',
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
        question: 'What is the best server size for my needs?',
        answer:
          'The size of the machine you need will depend on many factors. The number of documents, the size of those documents, the number of filters/sorts you will need. If you want to get a quick estimate of how big you can get to start with, get a machine that has at least ten times the disk space of your dataset.',
      },
      {
        question: 'Is Meilisearch cloud highly available?',
        answer:
          'Yes, no need to sell you 3 nodes, Meillisearch is highly available by default. It’s totally transparent for you.',
      },
      {
        question:
          'I have never used a search engine before. Can I use Meilisearch anyway?',
        answer:
          "Of course! No knowledge of ElasticSearch or Solr is required to use Meilisearch. Meilisearch is really easy to use and thus accessible to all kinds of developers. Take a quick tour to learn the basics of Meilisearch! We also provide a lot of tools, including SDKs, to help you integrate easily Meilisearch in your project. We're adding new tools every day! Plus, you can contact us if you need any help. We will answer for sure!",
      },
      {
        question: 'Do I need to configure Meilisearch to get it working?',
        answer:
          "Meilisearch configuration works out-of-the-box. It means, by default, Meilisearch configures necessary settings for providing a powerful and relevant search. For example, without requiring any configuration, Meilisearch is typo tolerant. Type \"create an index\" in the documentation search bar to experience the typo tolerance of our search engine. To find out more about the relevancy of Meilisearch, take a look at <a href='https://docs.meilisearch.com/learn/core_concepts/relevancy.html' target='_blank'>this detailed explanation</a>. However, Meilisearch is of course highly customizable in order to adapt the search to your needs by setting synonyms, stop words, and custom ranking rules.",
      },
      {
        question: 'How to know if Meilisearch perfectly fits my use cases?',
        answer:
          "Since Meilisearch is an open-source and easy-to-use tool, you can give it a try using your data. Follow <a href='https://docs.meilisearch.com/learn/getting_started/quick_start.html' target='_blank'>this guide</a> to get a quick start! Besides, we published <a href='https://docs.meilisearch.com/learn/what_is_meilisearch/comparison_to_alternatives.html' target='_blank'>a comparison between Meilisearch and other search engines</a> with the goal of providing an overview of Meilisearch alternatives.",
      },
      {
        question: 'Which languages can Meilisearch handle?',
        answer:
          'Meilisearch works perfectly with English, kanji, and Romance languages. If you have any hesitation about your language handling, please contact us.',
      },
    ],
  },
}

export default pricingPageData

import heroAnimationDesktop from 'lotties/hero-desktop'
import heroAnimationMobile from 'lotties/hero-mobile'
import openSource from 'lotties/opensource'
import animatedArrows from 'lotties/animatedArrows'
import {
  Angular,
  Dart,
  Dotnet,
  Rails,
  Rust,
  Symfony,
  Lightning,
  Plug,
  Puzzle,
  Typo,
  Chat,
  Earth,
  Filter,
  Key,
  SortBy,
  Wrench,
  Github,
  Slack,
  Roadmap,
  Ruby,
  Javascript,
  Java,
  Python,
  Php,
  Go,
  Swift,
  React,
  Code,
  Vue,
  Instantmeilisearch,
  GoRails,
  Hellonext,
  HuggingFace,
  Juicebrothers,
  Literal,
  LouisVuitton,
  Palmes,
  PlatformSh,
} from 'components/icons'
import get from 'utils/get'

const getHomepageData = () => ({
  meta: {
    title: '',
    description:
      'An open-source, blazingly fast, and hyper-relevant search engine that will improve your search experience',
  },
  hero: {
    title:
      'Shape a <strong>delightful</strong> <strong>search</strong> experience in a snap',
    description:
      'An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.',
    mobileBackground: '/images/hero-mobile.svg',
    desktopBackground: '/images/hero-desktop.svg',
    cta1: {
      title: 'Join our Slack',
      url: 'https://slack.meilisearch.com/',
      target: '_blank',
    },
    cta2: {
      title: 'Documentation',
      url: 'https://docs.meilisearch.com/',
      target: '_blank',
    },
    lottie: {
      desktop: heroAnimationDesktop,
      mobile: heroAnimationMobile,
    },
  },
  companies: {
    title: 'Trusted by amazing companies',
    companies: [
      {
        title: 'Louis Vuitton',
        icon: LouisVuitton,
      },
      {
        title: 'Hugging Face',
        icon: HuggingFace,
      },
      {
        title: 'Hellonext',
        icon: Hellonext,
      },
      {
        title: 'Platform.sh',
        icon: PlatformSh,
      },
      {
        title: 'Go Rails',
        icon: GoRails,
      },
      {
        title: 'Juicebrothers',
        icon: Juicebrothers,
      },
      {
        title: 'Literal',
        icon: Literal,
      },
      {
        title: 'Palmes',
        icon: Palmes,
      },
    ],
  },
  demo: {
    searchStats: (nbHits, timeInMs) =>
      `<strong>${nbHits}</strong> results in <strong>${timeInMs}</strong> ms`,
    placeholderSearch: 'Try me...',
    lottie: animatedArrows,
    preTitle: 'Why Meilisearch?',
    title: 'The next generation of search',
    description:
      'Meilisearch is a flexible and powerful user-focused search engine that can be added to any website or application.',
    keypoints: [
      {
        icon: Lightning,
        title: 'Lightning fast',
        description:
          "Search-as-you-type returns answers in less than 50 milliseconds. That's faster than the blink of an eye!",
      },
      {
        icon: Plug,
        title: 'Plug ‘n play',
        description:
          'Deploy in a matter of minutes. Smart presets let you start searching through your data with zero configuration. ',
      },
      {
        icon: Puzzle,
        title: 'Flexible',
        description:
          'Send data to Meilisearch however you want—no need to match a schema or convert your dataset to a compatible format.',
      },
      {
        icon: Typo,
        title: 'Typo tolerant',
        description:
          "Everyone makes mistakes! If typos break your search experience, many users will leave thinking what they were looking for just wasn't there.",
      },
    ],
    cta: {
      title: 'Start now',
      url: 'https://docs.meilisearch.com/learn/getting_started/',
      target: '',
    },
  },
  openSource: {
    preTitle: 'Open source',
    title: 'Nothing <strong>good</strong> is built alone',
    description: 'Join our welcoming and fast growing community.',
    cta: {
      title: 'Browse on GitHub',
      url: 'https://github.com/meilisearch/meilisearch',
      target: '_blank',
    },
    lottie: openSource,
    keypoints: [
      {
        number: '10M',
        title: 'Downloads',
      },
      {
        number: '300',
        title: 'Contributors',
      },
      {
        number: '3000',
        title: 'Servers in production',
      },
      {
        number: '23K',
        title: 'Developer community',
      },
    ],
  },
  steps: [
    {
      preTitle: 'Step 1',
      title: 'Connect',
      description:
        'Start searching through your dataset in less than 5 minutes and quickly connect your codebase to Meilisearch with our official libraries.',
      cta: {
        title: 'See all integrations',
        url: 'https://github.com/meilisearch/integration-guides',
        target: '_blank',
      },
      image: '/images/step1.svg',
      mobileImage: '/images/step1-mobile.svg',
    },
    {
      preTitle: 'Step 2',
      title: 'Customize',
      description:
        'Meilisearch is designed to work out-of-the-box, no configuration needed. But we know every project is different, so we made it easy to customize your instance in just a few minutes.',
      cards: [
        {
          icon: Filter,
          title: 'Filters',
          description:
            "Enhance your user's search experience with custom filters and build a faceted search interface in a few lines of code.",
        },
        {
          icon: Earth,
          title: 'Geo search',
          description:
            "Search in the real world. No need for a PhD, we've got you covered.",
        },
        {
          icon: Chat,
          title: 'Language detection',
          description:
            'Meilisearch supports all languages and detects them automatically. ',
        },
        {
          icon: SortBy,
          title: 'Sort by',
          description:
            'Sort results based on price, date, or pretty much anything else your users need.',
        },
        {
          icon: Wrench,
          title: 'Custom relevancy',
          description:
            "Let's break the rules. Use our default ranking rules or create your own.",
        },
        {
          icon: Key,
          title: 'API keys',
          description:
            'Secure your data with API keys that allow fine-grained permissions management.',
        },
      ],
      cta: {
        title: 'See all features',
        url: 'https://docs.meilisearch.com/learn/what_is_meilisearch/features.html',
        target: '_blank',
      },
      image: '/images/step2.svg',
    },
    {
      preTitle: 'Step 3',
      title: 'Deploy',
      firstSection: {
        title: 'Open Source',
        description:
          "Did we tell you that everything we do is completely public? Start using Meilisearch now by downloading our open source version.<br /><br />You can also deploy Meilisearch on any cloud provider such as AWS, GCP or DigitalOcean with our integrations. Use Meilisearch however you want: it's all up to you.",
        image: '/images/step3.svg',
        mobileImage: '/images/step3-mobile.svg',
        cta: {
          title: 'Get Started',
          url: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
          target: '',
        },
      },
      secondSection: {
        title: 'Cloud',
        description:
          'Need to go fast? Meilisearch Cloud takes care of everything so you just have to focus on the most important thing: making sure your users have a great search experience.<br/><br/>Enter the waiting list for our Cloud beta by completing the form linked below.',
        image: '/images/step3-2.svg',
        mobileImage: '/images/step3-2-mobile.svg',
        cta: {
          title: 'Apply for the beta',
          url: 'https://meilisearch.typeform.com/to/VI2cI2rv',
          target: '_blank',
        },
      },
    },
  ],
  developer: {
    preTitle: Code,
    title: 'The best developer<br/>experience',
    seeAllIntegrations: {
      title: 'See all integrations',
      href: 'https://github.com/meilisearch/integration-guides',
      target: '_blank',
    },
    buildWith: {
      title: language => `Build with ${language}`,
      href: pkgName => `https://github.com/meilisearch/${pkgName}`,
      target: '_blank',
    },
    image: '/images/developer.svg',
    description:
      "At Meilisearch, we take the developer experience to heart. That's why we work hard to make our API self-explanatory and develop our SDKs to let you concentrate on what matters the most.",
    documentation: 'Documentation',
    documentationText:
      "Every developer knows there's nothing worse than outdated, disorganized, or incomplete documentation. Our team of technical writers works hard to ensure that our documentation isn't just accurate; it's exceptional.",
    documentationCta: {
      title: 'Documentation',
      href: 'https://docs.meilisearch.com/',
      target: '_blank',
    },
    developerHub: 'Developer Hub',
    developerHubText:
      'Everything you need to help you with Meilisearch is here.',
    developerHubList: [
      'Release notes',
      'Demos',
      'Integrations',
      'Playground',
      'Contributor program',
    ],
    comingSoon: 'Coming Soon',
    sdkList: [
      {
        name: 'javascript', // Name displayed
        language: 'javascript', // Used by react-syntax-highlighter to have the proper coding style
        pkgName: 'meilisearch-js', // Link to the package
        logo: Javascript,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-js/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'php',
        language: 'php',
        pkgName: 'meilisearch-php',
        logo: Php,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-php/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'python',
        language: 'python',
        pkgName: 'meilisearch-python',
        logo: Python,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-python/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'ruby',
        language: 'ruby',
        pkgName: 'meilisearch-ruby',
        logo: Ruby,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-ruby/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'java',
        language: 'java',
        pkgName: 'meilisearch-java',
        logo: Java,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-java/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'go',
        language: 'go',
        pkgName: 'meilisearch-go',
        logo: Go,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-go/main/.code-samples.meilisearch.yaml',
      },
      {
        name: '.Net',
        language: 'dot',
        pkgName: 'meilisearch-dotnet',
        logo: Dotnet,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-dotnet/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'dart',
        language: 'dart',
        pkgName: 'meilisearch-dart',
        logo: Dart,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-dart/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'rust',
        language: 'rust',
        pkgName: 'meilisearch-rust',
        logo: Rust,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-rust/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'swift',
        language: 'swift',
        pkgName: 'meilisearch-swift',
        logo: Swift,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-swift/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'instant Meilisearch',
        language: 'html',
        pkgName: 'instant-meilisearch',
        logo: Instantmeilisearch,
        url: 'https://raw.githubusercontent.com/meilisearch/instant-meilisearch/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'react',
        language: 'jsx',
        pkgName: 'meilisearch-react',
        logo: React,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-react/master/.code-samples.meilisearch.yaml',
      },
      {
        name: 'vue',
        language: 'html',
        pkgName: 'meilisearch-vue',
        logo: Vue,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-vue/master/.code-samples.meilisearch.yaml',
      },
      {
        name: 'angular',
        language: 'js',
        pkgName: 'meilisearch-angular',
        logo: Angular,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-angular/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'rails',
        language: 'ruby',
        pkgName: 'meilisearch-rails',
        logo: Rails,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-rails/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'symfony',
        language: 'markdown',
        pkgName: 'meilisearch-symfony',
        logo: Symfony,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-symfony/main/.code-samples.meilisearch.yaml',
      },
    ],
  },
  cards: {
    preTitle: 'Become a contributor',
    title: 'Join the community',
    description:
      'Join our community and help us make fast and relevant search accessible to everyone. Whether you are a contributor, a user, or you just need answers to questions about Meilisearch, we are here for you.',
    cards: [
      {
        color: get('colors.dodgerBlue'),
        icon: Github,
        title: {
          name: 'GitHub',
          translate: false,
        },
        description:
          'Open issues and PRs, request new features, and vote on the ones that matter the most to you!',
        cta: {
          title: 'Start contributing',
          href: 'https://github.com/meilisearch/meilisearch',
          target: '_blank',
        },
      },
      {
        color: get('colors.lila'),
        icon: Slack,
        title: {
          name: 'Slack',
          translate: false,
        },
        description: 'Join us on our team chat and ask questions!',
        cta: {
          title: 'Join the discussion',
          href: 'https://slack.meilisearch.com/',
          target: '_blank',
        },
      },
      {
        color: get('colors.hotPink'),
        icon: Roadmap,
        title: {
          name: 'Roadmap',
        },
        description: 'Check what we will be working on in the next few weeks!',
        cta: {
          title: 'Open the roadmap',
          href: 'https://roadmap.meilisearch.com/',
          target: '_blank',
        },
      },
    ],
  },
  testimonials: {
    list: [
      {
        text: 'Wow <strong>@meilisearch</strong> is an incredible piece of software. Would love to have one of the devs do a talk at <strong>@RustDublin</strong>',
        author: {
          realName: 'Anton Whalley 🦀',
          pseudo: '@dhigit9',
          profilePicture: '/images/dhigit9.jpeg',
        },
      },
      {
        text: 'We decided to use it over Elasticsearch for all these reasons, it’s not that easy to find such a great software being easy to use and developer-first. When HA (work in progress) will be released it will be enterprise-ready too ❤️',
        author: {
          realName: 'Danilo Polani',
          pseudo: '@theraloss',
          profilePicture: '/images/theraloss.jpeg',
        },
      },
      {
        text: '100% agree! It’s mindblowing fast 🔥',
        author: {
          realName: 'Björn Antonissen',
          pseudo: '@Bjornftw',
          profilePicture: '/images/bjornftw.jpeg',
        },
      },
      {
        text: 'Meilisearch is such a powerful tool, we use it on our project, and has been such a help!',
        author: {
          realName: 'Sajag Dhungana 👨🏻‍💻',
          pseudo: '@orphikkkk',
          profilePicture: '/images/orphikkkk.jpeg',
        },
      },
      {
        text: '👉 66<br/>Trying Implementing full text search and still using regex & find, try <strong>@meilisearch</strong> and if seeking for some realtime search sync replica of db to meiliseach and search using filters It just works Awesome!',
        author: {
          realName: 'Mitesh Metha',
          pseudo: '@miteshmetha',
          profilePicture: '/images/miteshmetha.jpeg',
        },
      },
      {
        text: 'Quickly made a full app search for Financial Freedom. <strong>@meilisearch</strong> is beyond powerful... (yes, that’s test data 🤓)',
        author: {
          realName: 'Dan Pastori',
          pseudo: '@danpastori',
          profilePicture: '/images/danpastori.jpeg',
        },
      },
      {
        text: 'Super impressed with <strong>@meilisearch</strong>. Spun up a VPS, installed it, imported a piece of my corpus and my goodness, the search is FAST 🤯',
        author: {
          realName: 'jelle',
          pseudo: '@jellevliet',
          profilePicture: '/images/jellevliet.jpeg',
        },
      },
      {
        text: 'Wow, <strong>@meilisearch</strong> is super fast... <br/>Building a custom UI on top of <strong>@meilisearch</strong> that allows you to view event data.<br/><ul><li>✅ Event data in real-time</li><li>✅ Click properties to filter</li><li>✅ Visualise...</li><li>✅ Much more...</li></ul>Maybe another open-source project... 🤩',
        author: {
          realName: 'David Boyne 🚀',
          pseudo: '@boyney123',
          profilePicture: '/images/david-boyne.png',
        },
      },
    ],
    description:
      'Already 25k users have been convinced by Meilisearch. How about giving it a try?',
    cta: {
      title: 'Get started',
      href: 'https://docs.meilisearch.com/learn/getting_started/quick_start.html',
      target: '_blank',
    },
  },
})

export default getHomepageData

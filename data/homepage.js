import heroAnimationDesktop from 'lotties/hero-desktop'
import heroAnimationMobile from 'lotties/hero-mobile'
import openSource from 'lotties/opensource'
import {
  Angular,
  Dart,
  Dotnet,
  Instantmeilisearch,
  Rails,
  Rust,
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
} from 'components/icons'
import get from 'utils/get'

const getHomepageData = (t = () => {}) => ({
  hero: {
    title: t('hero.title'),
    description: t('hero.description'),
    mobileBackground: '/images/hero-mobile.svg',
    desktopBackground: '/images/hero-desktop.svg',
    cta1: {
      title: t('hero.cta1.title'),
      url: t('hero.cta1.url'),
      target: '_blank',
    },
    cta2: {
      title: t('hero.cta2.title'),
      url: t('hero.cta2.url'),
      target: '_blank',
    },
    lottie: {
      desktop: heroAnimationDesktop,
      mobile: heroAnimationMobile,
    },
  },
  demo: {
    searchStats: (nbHits, timeInMs) =>
      t('demo.searchStats', { nbHits, timeInMs }),
    placeholderSearch: t('demo.placeholderSearch'),
    preTitle: t('demo.preTitle'),
    title: t('demo.title'),
    description: t('demo.description'),
    keypoints: [
      {
        icon: Lightning,
        title: t('demo.keypoints.0.title'),
        description: t('demo.keypoints.0.description'),
      },
      {
        icon: Plug,
        title: t('demo.keypoints.1.title'),
        description: t('demo.keypoints.1.description'),
      },
      {
        icon: Puzzle,
        title: t('demo.keypoints.2.title'),
        description: t('demo.keypoints.2.description'),
      },
      {
        icon: Typo,
        title: t('demo.keypoints.3.title'),
        description: t('demo.keypoints.3.description'),
      },
    ],
    cta: {
      title: t('demo.cta.title'),
      url: t('demo.cta.url'),
      target: '',
    },
  },
  openSource: {
    preTitle: t('openSource.preTitle'),
    title: t('openSource.title'),
    description: t('openSource.description'),
    cta: {
      title: t('openSource.cta.title'),
      url: t('openSource.cta.url'),
      target: '_blank',
    },
    lottie: openSource,
    keypoints: [
      {
        number: '10M',
        title: t('openSource.keypoints.0.title'),
      },
      {
        number: '300',
        title: t('openSource.keypoints.1.title'),
      },
      {
        number: '3000',
        title: t('openSource.keypoints.2.title'),
      },
      {
        number: '23K',
        title: t('openSource.keypoints.3.title'),
      },
    ],
  },
  steps: [
    {
      preTitle: t('steps.0.preTitle'),
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      cta: {
        title: t('steps.0.cta.title'),
        url: t('steps.0.cta.url'),
        target: '_blank',
      },
      image: '/images/step1.svg',
      mobileImage: '/images/step1-mobile.svg',
    },
    {
      preTitle: t('steps.1.preTitle'),
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      cards: [
        {
          icon: Filter,
          title: t('steps.1.cards.0.title'),
          description: t('steps.1.cards.0.description'),
        },
        {
          icon: Earth,
          title: t('steps.1.cards.1.title'),
          description: t('steps.1.cards.1.description'),
        },
        {
          icon: Chat,
          title: t('steps.1.cards.2.title'),
          description: t('steps.1.cards.2.description'),
        },
        {
          icon: SortBy,
          title: t('steps.1.cards.3.title'),
          description: t('steps.1.cards.3.description'),
        },
        {
          icon: Wrench,
          title: t('steps.1.cards.4.title'),
          description: t('steps.1.cards.4.description'),
        },
        {
          icon: Key,
          title: t('steps.1.cards.5.title'),
          description: t('steps.1.cards.5.description'),
        },
      ],
      cta: {
        title: t('steps.1.cta.title'),
        url: t('steps.1.cta.url'),
        target: '',
      },
      image: '/images/step2.svg',
    },
    {
      preTitle: t('steps.2.preTitle'),
      title: t('steps.2.title'),
      firstSection: {
        title: t('steps.2.firstSection.title'),
        description: t('steps.2.firstSection.description'),
        image: '/images/step3.svg',
        mobileImage: '/images/step3-mobile.svg',
        cta: {
          title: t('steps.2.firstSection.cta.title'),
          url: t('steps.2.firstSection.cta.url'),
          target: '',
        },
      },
      secondSection: {
        title: t('steps.2.secondSection.title'),
        description: t('steps.2.secondSection.description'),
        image: '/images/step3-2.svg',
        mobileImage: '/images/step3-2-mobile.svg',
        cta: {
          title: t('steps.2.secondSection.cta.title'),
          url: t('steps.2.secondSection.cta.url'),
          target: '',
        },
      },
    },
  ],
  developer: {
    preTitle: Code,
    title: t('developer.title'),
    seeAllIntegrations: {
      title: t('developer.seeAllIntegrations'),
      href: '/',
      target: '_blank',
    },
    buildWith: {
      title: language => t('developer.buildWith', { language }),
      href: pkgName => `https://github.com/meilisearch/${pkgName}`,
      target: '_blank',
    },
    image: '/images/developer.svg',
    description: t('developer.description'),
    documentation: t('developer.documentation'),
    documentationText: t('developer.documentationText'),
    documentationCta: {
      title: t('developer.documentationCta'),
      href: '/',
      target: '_blank',
    },
    developerHub: t('developer.developerHub'),
    developerHubText: t('developer.developerHubText'),
    developerHubList: [
      t('developer.developerHubList.0'),
      t('developer.developerHubList.1'),
      t('developer.developerHubList.2'),
      t('developer.developerHubList.3'),
      t('developer.developerHubList.4'),
    ],
    comingSoon: t('developer.comingSoon'),
    sdkList: [
      {
        name: 'javascript', // Name displayed
        language: 'javascript', // Used by react-syntax-highlighter to have the proper coding style
        pkgName: 'meilisearch-js', // Link to the package
        logo: Javascript,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-js/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'java',
        language: 'java',
        pkgName: 'meilisearch-java',
        logo: Java,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-java/main/.code-samples.meilisearch.yaml',
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
        name: 'php',
        language: 'php',
        pkgName: 'meilisearch-php',
        logo: Php,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-php/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'go',
        language: 'go',
        pkgName: 'meilisearch-go',
        logo: Go,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-go/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'swift',
        language: 'swift',
        pkgName: 'meilisearch-swift',
        logo: Swift,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-swift/main/.code-samples.meilisearch.yaml',
      },
      {
        name: 'angular',
        language: 'js',
        pkgName: 'meilisearch-angular',
        logo: Angular,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-angular/main/.code-samples.meilisearch.yaml',
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
        name: 'instant Meilisearch',
        language: 'javascript',
        pkgName: 'instant-meilisearch',
        logo: Instantmeilisearch,
        url: 'https://raw.githubusercontent.com/meilisearch/instant-meilisearch/main/.code-samples.meilisearch.yaml',
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
        name: 'rails',
        language: 'ruby',
        pkgName: 'meilisearch-rails',
        logo: Rails,
        url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-rails/main/.code-samples.meilisearch.yaml',
      },
      // {
      //   name: 'symfony',
      //   language: 'php',
      //   pkgName: 'meilisearch-symfony',
      //   logo: React,
      //   url: 'https://raw.githubusercontent.com/meilisearch/meilisearch-symfony/main/.code-samples.meilisearch.yaml',
      // },
    ],
  },
  cards: {
    preTitle: t('cards.preTitle'),
    title: t('cards.title'),
    description: t('cards.description'),
    cards: [
      {
        color: get('colors.dodgerBlue'),
        icon: Github,
        title: t('cards.cards.0.title'),
        description: t('cards.cards.0.description'),
        cta: {
          title: t('cards.cards.0.cta.title'),
          href: t('cards.cards.0.cta.url'),
          target: '_blank',
        },
      },
      {
        color: get('colors.lila'),
        icon: Slack,
        title: t('cards.cards.1.title'),
        description: t('cards.cards.1.description'),
        cta: {
          title: t('cards.cards.1.cta.title'),
          href: t('cards.cards.1.cta.url'),
          target: '_blank',
        },
      },
      {
        color: get('colors.hotPink'),
        icon: Roadmap,
        title: t('cards.cards.2.title'),
        description: t('cards.cards.2.description'),
        cta: {
          title: t('cards.cards.2.cta.title'),
          href: t('cards.cards.2.cta.url'),
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
    description: t('testimonials.description'),
    cta: {
      title: t('testimonials.cta.title'),
      href: t('testimonials.cta.url'),
      target: '_blank',
    },
  },
})

export default getHomepageData

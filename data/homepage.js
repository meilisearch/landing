import heroAnimationDesktop from 'lotties/hero-desktop'
import heroAnimationMobile from 'lotties/hero-mobile'
import openSource from 'lotties/opensource'
import { Lightning, Plug, Puzzle, Typo } from 'components/icons'

const getHomepageData = (t = () => {}) => ({
  hero: {
    title: t('hero.title'),
    description: t('hero.description'),
    mobileBackground: '/images/hero-mobile.svg',
    desktopBackground: '/images/hero-desktop.svg',
    cta1: {
      title: t('hero.cta1'),
      url: 'https://slack.meilisearch.com/',
      target: '_blank',
    },
    cta2: {
      title: t('hero.cta2'),
      url: 'https://docs.meilisearch.com/',
      target: '_blank',
    },
    lottie: {
      desktop: heroAnimationDesktop,
      mobile: heroAnimationMobile,
    },
  },
  demo: {
    demoImage: '/images/demo-search.svg',
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
      title: t('demo.cta'),
      url: '/',
      target: '',
    },
  },
  openSource: {
    preTitle: t('openSource.preTitle'),
    title: t('openSource.title'),
    description: t('openSource.description'),
    cta: {
      title: t('openSource.cta'),
      url: 'https://github.com/meilisearch/MeiliSearch',
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
        title: t('steps.0.cta'),
        url: 'https://github.com/meilisearch/integration-guides',
        target: '_blank',
      },
      image: '/images/step1.svg',
      mobileImage: '/images/step1-mobile.svg',
    },
    {
      preTitle: t('steps.1.preTitle'),
      title: t('steps.1.title'),
    },
    {
      preTitle: t('steps.2.preTitle'),
      title: t('steps.2.title'),
    },
  ],
})

export default getHomepageData

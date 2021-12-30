import heroAnimationDesktop from 'lotties/hero-desktop'
import heroAnimationMobile from 'lotties/hero-mobile'

const getHomepageData = (t = () => {}) => ({
  hero: {
    title: t('hero.title'),
    description: t('hero.description'),
    mobileBackground: '/images/hero-mobile.svg',
    desktopBackground: '/images/hero-desktop.svg',
    cta1: {
      title: t('hero.cta1'),
      url: 'https://slack.meilisearch.com/',
    },
    cta2: {
      title: t('hero.cta2'),
      url: 'https://docs.meilisearch.com/',
    },
    lottie: {
      desktop: heroAnimationDesktop,
      mobile: heroAnimationMobile,
    },
  },
})

export default getHomepageData

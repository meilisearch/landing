import {
  Crv,
  Felicis,
  KimaVentures,
  LocalGlobe,
  Mango,
  Seedcamp,
  Vercel,
} from 'components/icons'

const aboutUsData = {
  meta: {
    title: 'About us',
    description: '',
  },
  hero: {
    title:
      '<strong>Meilisearch</strong> is a french startup 🇫🇷 created in 2018 🎂 that just sealed a $15M series A round 💸, and has a 25+ worldwide-based team 🌍 committed to shaping the best search experience 🔍 ever made 🎉.',
  },
  ourStory: {
    preTitle: 'meilisearch Milestones',
    title: 'Our story',
    image: '/images/timeline.png',
  },
  investors: {
    preTitle: 'Lorem Ipsum', // TODO : Update with text
    title: 'Our investors',
    description: 'We are proudly backed by some of the world’s best investors.',
    list: [
      {
        icon: Felicis,
        names: ['Viviana Faga', 'Tobi Coker '],
        company: 'Felicis',
      },
      {
        icon: Crv,
        names: ['Reid Christian', 'Brittany Walker'],
        company: 'CRV',
      },
      {
        icon: LocalGlobe,
        names: ['Mish Mashkaustan'],
        company: 'LocalGlobe & Latitude',
      },
      {
        icon: Vercel,
        names: ['Guillermo Rauch'],
        company: 'Vercel',
      },
      {
        icon: Mango,
        names: ['Robin Vasan'],
        company: 'Mango Capital',
      },
      {
        icon: Seedcamp,
        names: ['Sia Houchangnia'],
        company: 'Seedcamp',
      },
      {
        icon: KimaVentures,
        names: ['Alexis Robert'],
        company: 'Kima Ventures',
      },
    ],
  },
}

export default aboutUsData

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
  values: {
    preTitle: 'What drives us',
    title: 'Our values',
    cta: {
      href: 'https://www.welcometothejungle.com/fr/companies/meilisearch/values',
      title: 'Learn more about our values',
      target: '_blank',
    },
    group: [
      {
        title: 'Commitment 🤝',
        color: 'colors.hotPink',
        values: [
          {
            title: 'We are passionate',
            description:
              "At Meilisearch we do what we do because it's what we love doing. We try to keep a healthy balance between work and passion.",
          },
          {
            title: 'We care about the project',
            description:
              'We are all very committed to making Meilisearch a successful project, which goes beyond our individual job scopes.',
          },
          {
            title: 'We disagree and commit',
            description:
              'Being committed also means being opinionated. We try to debate in a constructive way that helps us all.',
          },
        ],
      },
      {
        title: 'Openness 🌈',
        color: 'colors.lila',
        values: [
          {
            title: 'We give back to open-source what it gave to us',
            description:
              'We are providing a search solution accessible to all. We want to put sharing and collaboration at the basis of what we do.',
          },
          {
            title: 'We find solutions together',
            description:
              "One thing we know is that no one knows everything. We are learning from others and are not afraid to say, ‘I don't know’.",
          },
          {
            title: 'We value diverse views and backgrounds',
            description:
              'We value diverse backgrounds, cultures, and opinions as we believe it is the only way to build a long-lasting company.',
          },
        ],
      },
      {
        title: 'Quality & simplicity 🧘🏽‍♀️',
        color: 'colors.dodgerBlue',
        values: [
          {
            title: 'Quality & simplicity',
            description:
              'We prefer quality over rapidity. Building an open-source project means respecting certain standards and paying close attention to the work we produce and show.',
          },
          {
            title: 'We are pragmatic',
            description:
              'We believe that aiming for perfection is counterproductive. We stand by the adage "done well today is better than perfect next week".',
          },
        ],
      },
    ],
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
  jobOffers: {
    preTitle: 'Job Offers',
    title: 'Join us!',
    cta: {
      title: 'See all job offers',
      href: 'https://jobs.lever.co/meili',
      target: '_blank',
    },
    readMore: 'Read more',
    noJobOffer: {
      title: 'No job offer available at the moment',
      description:
        'Sorry, no positions are currently open, but we’re always on the hunt for new profiles, so don’t hesitate to reach out if you’re interested in working with us.',
      cta: {
        title: 'Apply spontaneously',
        href: 'https://jobs.lever.co/meili',
        target: '_blank',
      },
    },
  },
}

export default aboutUsData

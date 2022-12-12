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
    preTitle: 'Trusted by great companies',
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
  perksAndBenefits: {
    preTitle: 'Perks & benefits',
    title: 'Why work with us?',
    description:
      'Here are some of the things we offer in order for our employees to have the best possible experience!',
    benefits: [
      {
        icon: '🗓',
        title: '4 days work week',
        description:
          'Work-life balance is important to us. We work from Monday to Thursday: Fridays are yours to do as you wish!',
      },
      {
        icon: '🖥',
        title: 'Equipment',
        description:
          'We provide Macbooks, headphones, screen(s), a desk, and all the equipment you need to work from home.',
      },
      {
        icon: '🏠',
        title: 'Remote friendly',
        description:
          '80% of our team is fully remote, others opt to work from the office. We reimburse coworking spaces and cafes fees.',
      },
      {
        icon: '🏝',
        title: 'Time off',
        description:
          'We offer 6 weeks of paid time off for a full year to all our employees — and ping you until you take it all!',
      },
      {
        icon: '🍼',
        title: 'Parental leave',
        description:
          'We give 3 months of fully paid leave to new and adopting parents: your job will be there for you when you get back.',
      },
      {
        icon: '❤️',
        title: 'Health insurance',
        description:
          'We make sure all team members are covered with good insurance, local to the country you live in.',
      },
      {
        icon: '🎉',
        title: 'Team gathering',
        description:
          'We value time spent together and gather several times a year for team offsites, company events or remote activities.',
      },
      {
        icon: '🏀',
        title: 'Physical health',
        description:
          'We support physical health and provide either a membership or a stipend for your sport activities each month.',
      },
      {
        icon: '☀️',
        title: 'Mental health',
        description:
          'Mental health is fundamental to us. We provide confidential individual support to any team member who wants to.',
      },
      {
        icon: '💰',
        title: 'Stock options',
        description:
          'As our team members make the success of Meilisearch, we trust stock options to all long-term employees.',
      },
      {
        icon: '📈',
        title: 'Career framework',
        description:
          'We accompany you on the career path you want to take: skills, next steps and salaries are transparent.',
      },
      {
        icon: '💡',
        title: 'Open source support',
        description:
          'As an open source company, we allot a monthly stipend to the support of your favorite open source softwares.',
      },
    ],
    loadMore: 'Load more benefits',
    loadLess: 'Load less benefits',
  },
  ourTeam: {
    preTitle: 'Meili amazing crew',
    title: 'Our team',
    teamMembers: [
      {
        name: 'Alexia 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/alexia.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Alexia-Toulmet-e26b3fc562614d0c9285225c7c221470',
      },
      {
        name: 'Amélie 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/amelie.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Am-lie-Lallemand-4e886881e90141bbbf9bde3b979d931c',
      },
      {
        name: 'Bruno 🇧🇷',
        position: 'Software Engineer Manager',
        image: '/images/teamMembers/bruno.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Bruno-Casali-49a83569f1e54ba1b3276e257ff4d165',
      },
      {
        name: 'Carolina 🇫🇷',
        position: 'Developer Advocate',
        image: '/images/teamMembers/carolina.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Carolina-Ferreira-07304e47bf314162a0ac3a9d676124df',
      },
      {
        name: 'Charline 🇫🇷',
        position: 'Product Designer',
        image: '/images/teamMembers/charline.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Charline-Moncoucut-e72b480f84134ac9bd8b620118de72f6',
      },
      {
        name: 'Charlotte 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/charlotte.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Charlotte-Vermandel-47949ba0d1144f7584401c33ecce9844',
      },
      {
        name: 'Clémentine 🇫🇷',
        position: 'Software Engineer Manager',
        image: '/images/teamMembers/clementine.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Cl-mentine-Urquizar-90214cbb5f1e4fa583546c7ed2be1362',
      },
      {
        name: 'Dave 🇮🇪',
        position: 'Product Manager',
        image: '/images/teamMembers/dave.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Dave-Larkan-b049ebf78edb4138b43cf84e031542cd',
      },
      {
        name: 'Ferdinand 🇫🇷',
        position: 'Head of Developer Relations',
        image: '/images/teamMembers/ferdinand.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Ferdinand-Boas-5917879a5d75449997d8b481bf11990b',
      },
      {
        name: 'Gui 🇮🇹',
        position: 'Technical Content Writer',
        image: '/images/teamMembers/gui.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Gui-Machiavelli-611f419fcd7b4b708326e181d9151054',
      },
      {
        name: 'Guillaume 🇫🇷',
        position: 'Product Manager',
        image: '/images/teamMembers/guillaume.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Guillaume-Mourier-8ab6465c4e0249debd20367f84370839',
      },
      {
        name: 'Ingrid 🇫🇷',
        position: 'Talent Acquisition Manager',
        image: '/images/teamMembers/ingrid.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Ingrid-Hazan-c91c296583e44f4aba11c83a44eb4828',
      },
      {
        name: 'Jonathan 🇫🇷',
        position: 'Senior Software Engineer',
        image: '/images/teamMembers/jonathan.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Jonathan-Landicheff-d75d6a3bb87645d78b8317dca6e87504',
      },
      {
        name: 'Kero 🇫🇷',
        position: 'Co-founder & CTO',
        image: '/images/teamMembers/kero.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Cl-ment-Renault-kero-3ae8be622c4e4a11a05ae7159317398a',
      },
      {
        name: 'Laurène 🇫🇷',
        position: 'Employee Experience Manager',
        image: '/images/teamMembers/laurene.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Laur-ne-Gibaud-4010db44b2b04ff098010f069b6ca8e8',
      },
      {
        name: 'Léna 🇫🇷',
        position: 'Product Designer',
        image: '/images/teamMembers/lena.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/L-na-Pinot-4c3b4219b0ce4818bca96502bcc9433e',
      },
      {
        name: 'Loïc 🇳🇱',
        position: 'Software Engineer',
        image: '/images/teamMembers/loic.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Lo-c-Lecrenier-d7d385438fa544f8aa9d0a1736a41897',
      },
      {
        name: 'Louis 🇫🇷',
        position: 'Senior Software Engineer',
        image: '/images/teamMembers/louis.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Louis-Dureuil-4fd2c6ef6cc148b88511811130296333',
      },
      {
        name: 'Luna 🇫🇷',
        position: 'Lead Community Developer',
        image: '/images/teamMembers/luna.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Luna-Ferraraccio-582c787ee29a449f90ca8084d61f6200',
      },
      {
        name: 'Many 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/many.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Maxime-Legendre-ManyTheFish-b1d14140cfc74772ac75af9f4af5337d',
      },
      {
        name: 'Maryam 🇴🇲',
        position: 'Technical Content Writer',
        image: '/images/teamMembers/maryam.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Maryam-Sulemani-ecc4bc4a23f54cd58c9b299f9eb64478',
      },
      {
        name: 'Morgane 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/morgane-d.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Morgane-Dubus-e5761f4ddd604954ba1a5ed74c309339',
      },
      {
        name: 'Morgane 🇫🇷',
        position: 'Human Resources Manager',
        image: '/images/teamMembers/morgane-n.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Morgane-Neff-ce9c8e7d86ab46a6bdd64b3164bbec25',
      },
      {
        name: 'Nicolas 🇫🇷',
        position: 'Team Lead',
        image: '/images/teamMembers/nico.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Nicolas-Vi-not-2652210cff774133a8d2562e0e4605f8',
      },
      {
        name: 'Oluwaseyi 🇳🇬',
        position: 'Support Engineer',
        image: '/images/teamMembers/olu.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Oluwaseyi-Ademola-362e72dee0dd4286a32aa909fa66bef5',
      },
      {
        name: 'Quentin 🇫🇷',
        position: 'Co-founder & CEO',
        image: '/images/teamMembers/quentin.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Quentin-de-Quelen-83330823aff145edaa65b2da3d530546',
      },
      {
        name: 'Samuel 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/sam.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Samuel-Jimenez-e7cb34e9158243e79c0cc335be5365cd',
      },
      {
        name: 'Tamo 🇫🇷',
        position: 'Software Engineer',
        image: '/images/teamMembers/tamo.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Tamo-41f6efcf8234424bb37e1addf3487b9f',
      },
      {
        name: 'Thomas 🇷🇪',
        position: 'Co-founder & COO',
        image: '/images/teamMembers/thomas.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Thomas-Payet-ac2c60b1e79e4eff91321450aedaf80e',
      },
      {
        name: 'Tommy 🇫🇷',
        position: 'Documentation Team Manager',
        image: '/images/teamMembers/tommy.png',
        linkToPublicNotionPage:
          'https://www.notion.so/meilisearch/Tommy-Melvin-ca8f49a658fd4c89ae16b8274f433b62',
      },
    ],
  },
}

export default aboutUsData

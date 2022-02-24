const getPricingPageData = (t = () => {}) => ({
  hero: {
    preTitle: t('hero.preTitle'),
    title: t('hero.title'),
    description: t('hero.description'),
  },
  pricing: {
    openSource: {
      title: t('pricing.openSource'),
      plan: t('pricing.free'),
      planDescription: t('pricing.freeDescription'),
      cta: {
        title: t('pricing.download'),
        href: '/',
      },
    },
    cloud: {
      title: t('pricing.cloud'),
      description: t('pricing.cloudDescription'),
      plans: [
        {
          title: t('pricing.basic'),
          resources: [
            {
              title: t('pricing.resource1Description'),
              price: t('pricing.resource1Pricing'),
            },
            {
              title: t('pricing.resource2Description'),
              price: t('pricing.resource2Pricing'),
            },
            {
              title: t('pricing.resource3Description'),
              price: t('pricing.resource3Pricing'),
            },
            {
              title: t('pricing.resource4Description'),
              price: t('pricing.resource4Pricing'),
            },
          ],
          cta: {
            title: t('pricing.startNow'),
            href: '/',
          },
        },
        {
          title: t('pricing.enterprise'),
          description: t('pricing.enterpriseDescription'),
          keypoints: [
            t('pricing.premierSupport'),
            t('pricing.premiumSLA'),
            t('pricing.dedicatedServer'),
            t('pricing.customTerms'),
          ],
          cta: {
            title: t('pricing.contactSales'),
            href: '/',
          },
        },
      ],
    },
  },
  table: {
    title: t('table.title'),
    tables: [
      {
        thead: [
          t('table.searchCapabilities'),
          t('table.openSource'),
          t('table.cloud'),
        ],
        tbody: [
          {
            title: t('table.customizableRelevency'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.typoTolerance'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.geosearchCapacity'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.sortingResults'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.automaticLanguageDetection'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.synonyms'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.stopWords'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.apiKeyManagement'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.tenantTokens'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.multiIndexSearch'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.filtering'),
            openSource: true,
            cloud: true,
          },
          {
            title: t('table.facetedSearch'),
            openSource: true,
            cloud: true,
          },
        ],
      },
      {
        thead: [
          t('table.projectManagement'),
          t('table.openSource'),
          t('table.cloud'),
        ],
        tbody: [
          {
            title: t('table.interfaceToBrowseDocuments'),
            openSource: t('table.miniDashboard'),
            cloud: true,
          },
          {
            title: t('table.interfaceToConfigureSearch'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.interfaceToManageApiKeys'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.interfaceToViewLogs'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.interfaceToViewTasks'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.searchAnalytics'),
            openSource: false,
            cloud: true,
          },
        ],
      },
      {
        thead: [
          t('table.operationalManagement'),
          t('table.openSource'),
          t('table.cloud'),
        ],
        tbody: [
          {
            title: t('table.provider'),
            openSource: t('table.yourInfrastructure'),
            cloud: t('table.digitalOceanAwsGcpAzure'),
          },
          {
            title: t('table.highAvailability'),
            openSource: t('table.manual'),
            cloud: t('table.automatic'),
          },
          {
            title: t('table.serverScaling'),
            openSource: t('table.manual'),
            cloud: t('table.automatic'),
          },
          {
            title: t('table.zeroDowntimeUpgrades'),
            openSource: t('table.manual'),
            cloud: t('table.automatic'),
          },
          {
            title: t('table.continuousBackupRecovery'),
            openSource: t('table.manual'),
            cloud: t('table.automatic'),
          },
          {
            title: t('table.serviceMonitoring'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.httpsSslDefault'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.dedicatedServer'),
            openSource: t('table.yourInfrastructure'),
            cloud: t('table.contactSales'),
          },
          {
            title: t('table.customServerSize'),
            openSource: t('table.yourInfrastructure'),
            cloud: t('table.contactSales'),
          },
        ],
      },
      {
        thead: [t('table.support'), t('table.openSource'), t('table.cloud')],
        tbody: [
          {
            title: t('table.emailSupport'),
            openSource: false,
            cloud: true,
          },
          {
            title: t('table.emailSupportSla'),
            openSource: false,
            cloud: t('table.contactSales'),
          },
          {
            title: t('table.SlaForUptime'),
            openSource: false,
            cloud: t('table.contactSales'),
          },
          {
            title: t('table.onBoardingSupport'),
            openSource: false,
            cloud: t('table.contactSales'),
          },
          {
            title: t('table.dedicatedCustomerSuccessEngineed'),
            openSource: false,
            cloud: t('table.contactSales'),
          },
        ],
      },
    ],
  },
  faq: {
    title: t('faq.title'),
    questions: [
      {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
      },
      {
        question: t('faq.question2'),
        answer: t('faq.answer2'),
      },
      {
        question: t('faq.question3'),
        answer: t('faq.answer3'),
      },
      {
        question: t('faq.question4'),
        answer: t('faq.answer4'),
      },
      {
        question: t('faq.question5'),
        answer: t('faq.answer5'),
      },
      {
        question: t('faq.question6'),
        answer: t('faq.answer6'),
      },
      {
        question: t('faq.question7'),
        answer: t('faq.answer7'),
      },
      {
        question: t('faq.question8'),
        answer: t('faq.answer8'),
      },
    ],
  },
})

export default getPricingPageData

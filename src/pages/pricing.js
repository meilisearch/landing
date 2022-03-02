import Head from 'next/head'
import styled from 'styled-components'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import getPricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import {
  Header,
  PricingHero,
  Footer,
  FAQ,
  Table,
  Pricing as BasePricingBlock,
} from 'blocks'
import get from 'utils/get'

const HeroBlock = styled(PricingHero)`
  margin-top: 72px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 46px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 98px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 92px;
  }
`

const PricingBlock = styled(BasePricingBlock)`
  margin-top: 72px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 82px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 64px;
  }
`

const Pricing = ({ stargazers_count }) => {
  const { t } = useTranslation('pricing')
  const { hero, faq, table, pricing } = getPricingPageData(t)
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
      </Head>
      <div style={{ backgroundColor: get('colors.valhalla.800') }}>
        <Header
          stargazers_count={formatStargazers(stargazers_count)}
          style={{ backgroundColor: get('colors.valhalla.800') }}
        />
        <PageContent>
          <HeroBlock hero={hero} />
          <PricingBlock pricing={pricing} />
          <Table table={table} />
          <FAQ faq={faq} />
        </PageContent>
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
        ...(await serverSideTranslations(locale, [
          'pricing',
          'header',
          'footer',
        ])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Pricing

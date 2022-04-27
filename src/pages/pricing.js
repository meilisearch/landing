import Head from 'next/head'
import styled from 'styled-components'
import getPricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import { PricingHero, FAQ, Table, Pricing as BasePricingBlock } from 'blocks'
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

const Pricing = () => {
  const { meta, hero, faq, table, pricing } = getPricingPageData()
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div style={{ backgroundColor: get('colors.valhalla.800') }}>
        <PageContent>
          <HeroBlock hero={hero} />
          <PricingBlock pricing={pricing} />
          <Table table={table} />
          <FAQ faq={faq} />
        </PageContent>
      </div>
    </>
  )
}

export default Pricing

import Head from 'components/Head'
import styled from 'styled-components'
import pricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import {
  PricingHero,
  FAQ,
  ComparativeTable,
  PricingPlans as BasePricingBlock,
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
  margin-top: 68px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 56px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 68px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 128px;
  }
`

const Pricing = () => {
  const { meta, hero, faq, table, pricing } = pricingPageData
  return (
    <>
      <Head meta={meta} />
      <PageContent>
        <HeroBlock hero={hero} data-cy="pricingHero" />
        <PricingBlock pricing={pricing} data-cy="pricingPlans" />
        <ComparativeTable table={table} data-cy="comparativeTable" />
        <FAQ faq={faq} data-cy="pricingFaq" />
      </PageContent>
    </>
  )
}

export default Pricing

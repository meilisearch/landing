import Head from 'components/Head'
import styled from 'styled-components'
import getPricingPageData from '../../data/pricing'
import PageContent from 'components/PageContent'
import {
  PricingHero,
  FAQ,
  Table,
  Pricing as BasePricingBlock,
  PricingAssistant,
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

const Pricing = () => {
  const { meta, hero, faq, table, pricingAssistant, pricing } =
    getPricingPageData()
  return (
    <>
      <Head meta={meta} />
      <div style={{ backgroundColor: get('colors.valhalla.800') }}>
        <PageContent>
          <HeroBlock hero={hero} data-cy="pricingHero" />
          <PricingBlock pricing={pricing} data-cy="pricingCards" />
          <Table table={table} data-cy="pricingTable" />
          <PricingAssistant
            pricingAssistant={pricingAssistant}
            color={get('colors.dodgerBlue')}
            data-cy="pricingAssistant"
          />
          <FAQ faq={faq} data-cy="pricingFaq" />
        </PageContent>
      </div>
    </>
  )
}

export default Pricing

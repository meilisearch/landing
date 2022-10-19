import Grid from 'components/Grid'
import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import get from 'utils/get'
import styled from 'styled-components'

const Section = styled.section`
  background-color: ${get('colors.valhalla.700')};
  padding: 80px 0 118px;
  margin: 0 -16px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
  }
`

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
`

const PricingAssistant = ({
  pricingAssistant,
  color = get('colors.dodgerBlue'),
  ...props
}) => {
  return (
    <Section {...props}>
      <Anchor id="pricing-assistant" />
      <Grid>
        <LeftColumn pricingAssistant={pricingAssistant} color={color} />
        <RightColumn pricingAssistant={pricingAssistant} color={color} />
      </Grid>
    </Section>
  )
}

export default PricingAssistant

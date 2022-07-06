import Grid from 'components/Grid'
import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import get from 'utils/get'
import styled from 'styled-components'

const Section = styled.section`
  background-color: ${get('colors.valhalla.800')};
  padding: 80px 0 118px;
`

const PricingAssistant = ({
  pricingAssistant,
  color = get('colors.dodgerBlue'),
  ...props
}) => {
  return (
    <Section {...props}>
      <Grid>
        <LeftColumn pricingAssistant={pricingAssistant} color={color} />
        <RightColumn pricingAssistant={pricingAssistant} color={color} />
      </Grid>
    </Section>
  )
}

export default PricingAssistant

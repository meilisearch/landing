import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import PayingPlans from './PayingPlans'
import OpenSource from './OpenSource'

const Section = styled.section`
  z-index: 2;
  margin-bottom: 70px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-bottom: 56px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-bottom: 106px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-bottom: 120px;
  }
`

const Pricing = ({ pricing, ...props }) => {
  return (
    <Section {...props}>
      <PayingPlans payingPlans={pricing.payingPlans} />
      <OpenSource openSource={pricing.freePlan} />
    </Section>
  )
}

export default Pricing

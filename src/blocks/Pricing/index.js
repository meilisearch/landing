import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import PayingPlans from './PayingPlans'
// import OpenSource from './OpenSource'

const Section = styled.section`
  z-index: 2;
  margin-bottom: 58px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-bottom: 82px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-bottom: 142px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-bottom: 120px;
  }
`

const Pricing = ({ pricing, ...props }) => {
  return (
    <Section {...props}>
      <PayingPlans payingPlans={pricing.payingPlans} />
      {/* <OpenSource openSource={pricing.openSource} /> */}
    </Section>
  )
}

export default Pricing

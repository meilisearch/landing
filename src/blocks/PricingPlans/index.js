import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import BaseGrid from 'components/Grid'
import BasePlan from './Plan'

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

const Grid = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const Plan = styled(BasePlan)`
  grid-column: span 1;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: ${p => (p.plan.fullWidth ? '1 / -1' : 'span 4')};
  }
`

const PricingPlans = ({ pricing, ...props }) => {
  return (
    <Section {...props}>
      <Grid {...props}>
        {pricing.plans?.map(plan => (
          <Plan plan={plan} key={plan.title} />
        ))}
      </Grid>
    </Section>
  )
}

export default PricingPlans

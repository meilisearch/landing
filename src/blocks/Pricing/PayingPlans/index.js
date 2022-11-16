import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import BaseGrid from 'components/Grid'
import BasePlan from './Plan'

const Grid = styled(BaseGrid)`
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(12, 1fr);
  }
`

const Plan = styled(BasePlan)`
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: span 4;
  }
`

const PayingPlans = ({ payingPlans, ...props }) => {
  return (
    <Grid {...props}>
      {payingPlans?.map(plan => (
        <Plan plan={plan} key={plan.title} />
      ))}
    </Grid>
  )
}

export default PayingPlans

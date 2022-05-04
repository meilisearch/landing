import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Dedicated from './Dedicated'
import Enterprise from './Enterprise'
import Column from '../Column'

const DesktopPlansWrapper = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const FirstColumn = styled(Column)`
  padding-right: 24px;
  background-color: ${get('colors.valhalla.700')};
`

const SecondColumn = styled(Column)`
  flex: 1;
  background-color: ${get('colors.valhalla.600')};
`

const DesktopPlans = ({ cloud }) => {
  return (
    <DesktopPlansWrapper>
      <FirstColumn>
        <Dedicated dedicatedPlan={cloud.plans[0]} />
      </FirstColumn>
      <SecondColumn>
        <Enterprise enterprisePlan={cloud.plans[1]} />
      </SecondColumn>
    </DesktopPlansWrapper>
  )
}

export default DesktopPlans

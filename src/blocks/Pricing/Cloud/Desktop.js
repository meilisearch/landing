import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Basic from './Basic'
import Enterprise from './Enterprise'
import Typography from 'components/Typography'

const DesktopPlansWrapper = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: flex;
    flex-direction: row;
  }
`

const FirstColumn = styled.div`
  width: 60%;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding-right: 30px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding-right: 60px;
  }
`

const SecondColumn = styled.div`
  width: 40%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: ${get('breakpoints.lg')}) {
    background-color: ${get('colors.valhalla.600')};
    margin: -24px -26px -24px 0;
    padding: 24px 26px 24px 30px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    background-color: ${get('colors.valhalla.600')};
    margin: -32px -32px -28px -30px;
    padding: 28px 26px 24px 30px;
  }
`

const DesktopPlans = ({ cloud }) => {
  return (
    <DesktopPlansWrapper>
      <FirstColumn>
        <Typography variant="title3">{cloud.plans[0].title}</Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}
        >
          <Basic basicPlan={cloud.plans[0]} />
        </div>
      </FirstColumn>
      <SecondColumn>
        <Typography variant="title3">{cloud.plans[1].title}</Typography>
        <Enterprise enterprisePlan={cloud.plans[1]} />
      </SecondColumn>
    </DesktopPlansWrapper>
  )
}

export default DesktopPlans

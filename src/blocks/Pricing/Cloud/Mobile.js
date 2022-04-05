import React from 'react'
import styled from 'styled-components'
import { useTabState } from 'reakit/Tab'
import get from 'utils/get'
import Basic from './Basic'
import Enterprise from './Enterprise'
import Tab from 'components/Tab'
import Typography from 'components/Typography'

const MobilePlansWrapper = styled.div`
  display: block;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const Tabs = ({ tab, cloud }) => {
  return (
    <Tab.TabList
      {...tab}
      aria-label="cloud plans"
      style={{ textAlign: 'center' }}
    >
      <Tab.Tab {...tab}>
        <Typography variant="title3">{cloud.plans[0].title}</Typography>
      </Tab.Tab>
      <Tab.Tab {...tab}>
        <Typography variant="title3">{cloud.plans[1].title}</Typography>
      </Tab.Tab>
    </Tab.TabList>
  )
}

const MobilePlans = ({ cloud }) => {
  const tab = useTabState()

  return (
    <MobilePlansWrapper>
      <Tabs tab={tab} cloud={cloud} />
      <Tab.TabPanel
        {...tab}
        style={{ opacity: 0.9, color: get('colors.ashes') }}
      >
        <Basic basicPlan={cloud.plans[0]} />
      </Tab.TabPanel>
      <Tab.TabPanel
        {...tab}
        style={{
          opacity: 0.9,
          color: get('colors.ashes.100'),
        }}
      >
        <Enterprise tab={tab} enterprisePlan={cloud.plans[1]} />
      </Tab.TabPanel>
    </MobilePlansWrapper>
  )
}

export default MobilePlans

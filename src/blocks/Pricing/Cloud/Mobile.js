import React from 'react'
import styled from 'styled-components'
import { useTabState } from 'reakit/Tab'
import get from 'utils/get'
import Dedicated from './Dedicated'
import Enterprise from './Enterprise'
import Tab from 'components/Tab'
import Typography from 'components/Typography'
import Column from '../Column'

const MobilePlansWrapper = styled(Column)`
  display: block;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const TabElement = styled(Tab.Tab)`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  &[aria-selected='true'] {
    border-bottom-color: ${get('colors.white')};
  }
`

const Tabs = ({ tab, cloud }) => {
  return (
    <Tab.TabList
      {...tab}
      aria-label="cloud plans"
      style={{ textAlign: 'center' }}
    >
      <TabElement {...tab}>
        <Typography variant="title.xs">{cloud.plans[0].title}</Typography>
      </TabElement>
      <TabElement {...tab}>
        <Typography variant="title.xs">{cloud.plans[1].title}</Typography>
      </TabElement>
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
        <Dedicated dedicatedPlan={cloud.plans[0]} />
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

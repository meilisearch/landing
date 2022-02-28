import React from 'react'
import Typography from '../components/Typography'
import { useTabState } from 'reakit/Tab'
import Tab from 'components/Tab'

export default {
  title: 'Components/Tab',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Default = () => {
  const tab = useTabState()

  return (
    <>
      <Tab.TabList {...tab} aria-label="My tabs">
        <Tab.Tab {...tab}>
          <Typography>Basic</Typography>
        </Tab.Tab>
        <Tab.Tab {...tab}>
          <Typography>Enterprise</Typography>
        </Tab.Tab>
      </Tab.TabList>
      <Tab.TabPanel {...tab}>
        <Typography>Basic plan</Typography>
      </Tab.TabPanel>
      <Tab.TabPanel {...tab}>
        <Typography>Enterprise plan</Typography>
      </Tab.TabPanel>
    </>
  )
}

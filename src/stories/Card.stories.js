import React from 'react'
import Card from 'components/Card'
import Typography from 'components/Typography'

export default {
  title: 'Components/Card',
  component: Card,
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

const Template = args => (
  <div style={{ maxWidth: 600 }}>
    <Card {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: <Typography>I am a Card component</Typography>,
}

import React from 'react'
import PricingCard from 'components/PricingCard'
import Typography from 'components/Typography'

export default {
  title: 'Components/PricingCard',
  component: PricingCard,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 250,
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

const Template = args => <PricingCard {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <Typography>Hover me</Typography>,
}

export const OtherColor = Template.bind({})
OtherColor.args = {
  children: <Typography>Hover me</Typography>,
  color: 'colors.hotPink',
}

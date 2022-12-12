import React from 'react'
import Tag from 'components/Tag'

export default {
  title: 'Components/Tag',
  parameters: {
    layout: 'padded',
  },
}

const Template = args => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  children: '$0.042/hr',
}

export const ShortText = Template.bind({})
ShortText.args = {
  children: '$1/hr',
}

export const LongText = Template.bind({})
LongText.args = {
  children: '$0.0000000000042/hr',
}

export const OtherColor = Template.bind({})
OtherColor.args = {
  children: '$0.042/hr',
  color: 'colors.hotPink',
}

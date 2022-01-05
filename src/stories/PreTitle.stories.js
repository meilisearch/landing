import React from 'react'
import PreTitle from 'components/PreTitle'
import get from 'utils/get'

export default {
  title: 'Components/PreTitle',
  component: PreTitle,
  parameters: {
    layout: 'padded',
  },
}

const Template = args => <PreTitle {...args} />

export const Default = Template.bind({})
Default.args = {
  preTitle: 'I’m the default preTitle',
}

export const OtherColor = Template.bind({})
OtherColor.args = {
  preTitle: 'I’m a preTitle with an other color',
  color: get('colors.hotPink'),
}

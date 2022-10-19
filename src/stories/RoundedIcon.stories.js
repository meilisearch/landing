import React from 'react'
import RoundedIcon from 'components/RoundedIcon'
import { Puzzle } from 'components/icons'

export default {
  title: 'Components/RoundedIcon',
  parameters: {
    layout: 'padded',
  },
}

const Template = args => <RoundedIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: Puzzle,
}

export const DifferentColor = Template.bind({})
DifferentColor.args = {
  icon: Puzzle,
  color: 'colors.dodgerBlue',
}

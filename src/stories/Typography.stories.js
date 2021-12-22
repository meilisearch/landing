import React from 'react'
import Typography from 'components/Typography'

export default {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'white' },
  },
  argTypes: {
    variant: {
      options: ['default', 'preTitle', 'navigation', 'smallText', 'ctaBig'],
      control: {
        type: 'select',
      },
    },
  },
}

const Template = args => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'I’m the default variant',
}

export const PreTitle = Template.bind({})
PreTitle.args = {
  variant: 'preTitle',
  children: 'I’m the preTitle variant',
}

export const Navigation = Template.bind({})
Navigation.args = {
  variant: 'navigation',
  children: 'I’m the navigation variant',
}

export const SmallText = Template.bind({})
SmallText.args = {
  variant: 'smallText',
  children: 'I’m the smallText variant',
}

export const CtaBig = Template.bind({})
CtaBig.args = {
  variant: 'ctaBig',
  children: 'I’m the ctaBig variant',
}

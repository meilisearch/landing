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
      options: [
        'default',
        'body',
        'title1',
        'title2',
        'title3',
        'title4',
        'preTitle',
        'navigation',
        'small',
        'ctaBig',
        'typo1',
      ],
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

export const Body = Template.bind({})
Body.args = {
  variant: 'body',
  children: 'I’m the body variant',
}

export const Title1 = Template.bind({})
Title1.args = {
  variant: 'title1',
  children: 'I’m the title1 variant',
}

export const Title2 = Template.bind({})
Title2.args = {
  variant: 'title2',
  children: 'I’m the title2 variant',
}

export const Title3 = Template.bind({})
Title3.args = {
  variant: 'title3',
  children: 'I’m the title3 variant',
}

export const Title4 = Template.bind({})
Title4.args = {
  variant: 'title4',
  children: 'I’m the title4 variant',
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

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  children: 'I’m the small variant',
}

export const CtaBig = Template.bind({})
CtaBig.args = {
  variant: 'ctaBig',
  children: 'I’m the ctaBig variant',
}

export const Typo1 = Template.bind({})
Typo1.args = {
  variant: 'typo1',
  children: 'I’m the typo1 variant',
}

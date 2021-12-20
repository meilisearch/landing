import React from 'react'
import GithubButton from 'components/GithubButton'

export default {
  title: 'Components/GithubButton',
  component: GithubButton,
  parameters: {
    layout: 'padded',
  },
}

const Template = args => <GithubButton {...args} />

export const Default = Template.bind({})
Default.args = {
  count: '20.5K',
  href: '/',
}

import React from 'react'
import Header from 'blocks/Header'

export default {
  title: 'blocks/Header',
  component: Header,
  parameters: {
    backgrounds: { default: 'white' },
  },
}

const Template = args => {
  return <Header {...args} stargazers_count="20.4K" />
}

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'white' },
}

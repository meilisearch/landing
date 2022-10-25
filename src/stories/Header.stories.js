import React from 'react'
import { Header } from 'blocks'

export default {
  title: 'blocks/Header',
  component: Header,
  parameters: {
    backgrounds: { default: 'white' },
  },
}

const Template = args => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'white' },
}

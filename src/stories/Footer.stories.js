import React from 'react'
import { Footer } from 'blocks'

export default {
  title: 'blocks/Footer',
  component: Footer,
  parameters: {
    backgrounds: { default: 'white' },
  },
}

const Template = args => {
  return <Footer {...args} />
}

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'white' },
}

import React from 'react'
import Accordion from 'components/Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
}

const Template = args => (
  <div style={{ maxWidth: 600 }}>
    <Accordion {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  question: 'Do you offer custom invoicing?',
  answer:
    'Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.',
}

export const WithLink = Template.bind({})
WithLink.args = {
  question: 'Do you offer custom invoicing?',
  answer:
    'Yes, we offer custom invoicing for <a href="/">Enterprise customers</a>. Contact our sales team to learn more.',
}

export const WithLongQuestion = Template.bind({})
WithLongQuestion.args = {
  question:
    'Do you offer custom invoicing? Do you offer custom invoicing? Do you offer custom invoicing?',
  answer:
    'Yes, we offer custom invoicing for <a href="/">Enterprise customers</a>. Contact our sales team to learn more.',
}

export const WithLongAnswer = Template.bind({})
WithLongAnswer.args = {
  question: 'Do you offer custom invoicing?',
  answer:
    'Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.<br/>Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more. Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.',
}

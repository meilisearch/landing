import React from 'react'
import Input from 'components/Input'
import footerData from '../../data/footer'

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const [email, setEmail] = React.useState('')
  const { newsletter: newsletterProps } = footerData

  return (
    <Input
      type="email"
      placeholder={newsletterProps.placeholder}
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
  )
}

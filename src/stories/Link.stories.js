import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Typography from 'components/Typography'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'padded',
  },
}

const StyledLink = styled(Link)`
  color: white;
`

const Template = args => <StyledLink {...args} />

export const Default = Template.bind({})
Default.args = {
  href: '/',
  children: <Typography>I’m a Link</Typography>,
}

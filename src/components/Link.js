import React from 'react'
import styled from 'styled-components'
import NextLink from 'next/link'
import get from 'utils/get'

const StyledLink = styled.a`
  color: inherit;
  transition: color 300ms;
  outline: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    &:hover,
    &:focus {
      color: ${get('colors.hotPink')};
    }
  }
`

const Link = React.forwardRef(({ href, ...props }, ref) => (
  <NextLink href={href} passHref>
    <StyledLink ref={ref} {...props} />
  </NextLink>
))

Link.displayName = 'Link'

Link.propTypes = {}

Link.defaultProps = {}

export default Link

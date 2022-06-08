import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Link from 'components/Link'
import get from 'utils/get'

const Container = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 68px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 62px;
  }
`

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  > a + a {
    margin-left: 16px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
  }
`

const Social = ({ social }) => {
  const Icon = social.icon
  return (
    <Link href={social.href} target={social.target} title={social.title}>
      <Icon height={24} />
    </Link>
  )
}

const Copyright = styled(Typography)`
  color: ${get('colors.ashes.600')};
  opacity: 0.9;
  margin-top: 24px;
  text-align: center;
  width: 100%;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 0;
    width: auto;
  }
`

const BottomSection = ({ footerProps }) => {
  return (
    <Container>
      <Socials>
        {footerProps.socials?.map((social, index) => (
          <Social social={social} key={index} />
        ))}
      </Socials>
      <Copyright variant="body.s.default">{footerProps.copyright}</Copyright>
    </Container>
  )
}

export default BottomSection

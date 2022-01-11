import React from 'react'
import styled from 'styled-components'
import GithubButton from 'components/GithubButton'
import get from 'utils/get'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import Ctas from './Ctas'

const Grid = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0 auto;
    max-width: 1328px;
  }
`

const DesktopHeader = ({ headerProps, stargazers_count }) => {
  return (
    <Grid>
      <Logo />
      <MenuLinks headerProps={headerProps} />
      <GithubButton count={stargazers_count} />
      <Ctas headerProps={headerProps} />
    </Grid>
  )
}

export default DesktopHeader

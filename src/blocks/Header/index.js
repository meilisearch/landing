import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import getHeaderData from '../../../data/header'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { useRouter } from 'next/router'

const Wrapper = styled.header`
  height: 98px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;

  @media (min-width: ${get('breakpoints.lg')}) {
    height: 88px;
  }
`

const Header = props => {
  const headerProps = getHeaderData()
  const router = useRouter()

  const darkBgPages = ['/pricing', '/privacy-policy', '/terms-of-use']
  const hasDarkBgColor = darkBgPages.includes(router.asPath)

  return (
    <Wrapper
      style={{
        backgroundColor: hasDarkBgColor
          ? get('colors.valhalla.800')
          : get('colors.valhalla'),
      }}
      className="header"
      {...props}
    >
      <DesktopHeader headerProps={headerProps} />
      <MobileHeader headerProps={headerProps} />
    </Wrapper>
  )
}

export default Header

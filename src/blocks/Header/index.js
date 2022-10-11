import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import getHeaderData from '../../../data/header'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { useRouter } from 'next/router'
import Banner from 'components/Banner'

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${p =>
    p.$hasDarkBgColor ? get('colors.valhalla.800') : get('colors.valhalla')};
  height: 98px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 88px;
  }
`

const Header = props => {
  const headerProps = getHeaderData()
  const router = useRouter()

  const darkBgPages = ['/pricing', '/privacy-policy', '/terms-of-use']
  const hasDarkBgColor = darkBgPages.includes(router.asPath)
  const banner = headerProps?.banner?.title

  return (
    <Wrapper data-cy="header" {...props}>
      {banner && <Banner title={banner} />}
      <HeaderWrapper $hasDarkBgColor={hasDarkBgColor}>
        <DesktopHeader headerProps={headerProps} />
        <MobileHeader headerProps={headerProps} hasBanner={banner} />
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import headerData from '../../../data/header'
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
  height: var(--header-height-mobile);
  @media (min-width: ${get('breakpoints.lg')}) {
    height: var(--header-height-desktop);
  }
`

const Header = props => {
  const router = useRouter()

  const darkBgPages = ['/privacy-policy', '/terms-of-use']
  const hasDarkBgColor = darkBgPages.includes(router.asPath)
  const banner = headerData?.banner?.title

  return (
    <Wrapper data-cy="header" {...props}>
      {banner && <Banner title={banner} />}
      <HeaderWrapper $hasDarkBgColor={hasDarkBgColor}>
        <DesktopHeader headerProps={headerData} />
        <MobileHeader headerProps={headerData} hasBanner={banner} />
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header

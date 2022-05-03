import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import get from 'utils/get'
import getHeaderData from '../../../data/header'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Wrapper = styled.header`
  height: 98px;
  background-color: ${get('colors.valhalla')};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0 16px;

  @media (min-width: ${get('breakpoints.lg')}) {
    height: 88px;
  }
`

const Header = props => {
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)

  return (
    <Wrapper {...props}>
      <DesktopHeader headerProps={headerProps} />
      <MobileHeader headerProps={headerProps} />
    </Wrapper>
  )
}

export default Header

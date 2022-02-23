import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import get from 'utils/get'
import getHeaderData from '../../../data/header'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Wrapper = styled.header`
  height: 113px;
  background-color: ${get('colors.valhalla')};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0 16px;

  @media (min-width: ${get('breakpoints.lg')}) {
    height: 118px;
    padding-top: 40px;
    padding-bottom: 32px;
  }
`

const Header = ({ stargazers_count, ...props }) => {
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)
  return (
    <Wrapper {...props}>
      <DesktopHeader
        headerProps={headerProps}
        stargazers_count={stargazers_count}
      />
      <MobileHeader
        headerProps={headerProps}
        stargazers_count={stargazers_count}
      />
    </Wrapper>
  )
}

export default Header

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'next-i18next'
import get from 'utils/get'
import getHeaderData from '../../../data/header'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Wrapper = styled.header`
  height: 148px;
  background-color: ${get('colors.valhalla')};
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 50;
`

const Header = ({ stargazers_count }) => {
  const { t } = useTranslation('header')
  const headerProps = getHeaderData(t)
  return (
    <Wrapper>
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

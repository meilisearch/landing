import React from 'react'
import styled from 'styled-components'
import { useTabState } from 'reakit/Tab'
import get from 'utils/get'
import Grid from 'components/Grid'
import Head from './Head'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const StyledGrid = styled(Grid)`
  color: ${get('colors.white')};
  margin-top: -124px;
  background-color ${get('colors.valhalla.700')};
  border-radius: 16px;
  border: 2px solid ${get('colors.valhalla.100')};
  overflow: hidden;
  grid-gap: 0 16px;
  grid-template-columns: 1fr;

`

const TerminalBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const Terminal = ({ developerProps, code_samples }) => {
  const tab = useTabState({ orientation: 'vertical' })

  const sdkList = code_samples.map(sdk => ({
    ...sdk,
    logo: developerProps.sdkList.find(
      currentSdk => currentSdk.pkgName === sdk.pkgName
    ).logo,
  }))

  return (
    <StyledGrid>
      <Head />
      <TerminalBody>
        <LeftColumn tab={tab} sdkList={sdkList} />
        <RightColumn
          tab={tab}
          sdkList={sdkList}
          developerProps={developerProps}
        />
      </TerminalBody>
    </StyledGrid>
  )
}

export default Terminal

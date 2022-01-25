import React from 'react'
import styled from 'styled-components'
import GithubButton from 'components/GithubButton'
import BaseGrid from 'components/Grid'
import { Hamburger, Cross } from 'components/icons'
import get from 'utils/get'
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import Ctas from './Ctas'
import { useDialogState } from 'reakit/Dialog'
import {
  DialogDisclosure,
  DialogBackdrop,
  DialogContent,
} from 'components/Dialog'

const Grid = styled(BaseGrid)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 56px 0 28px;

  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const Backdrop = styled(DialogBackdrop)`
  padding: 24px 24px 0;
  color: ${get('colors.white')};
  background-color: ${get('colors.valhalla')};
  z-index: 50;
  inset: 106px 0 0 0;
  padding-top: 64px;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: none;
  }
`

const DialogFooter = styled(Grid)`
  position: sticky;
  bottom: 0;
  height: 128px;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${get('colors.valhalla')};
`

const Content = styled(DialogContent)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Scrollable = styled(Grid)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const MobileHeader = ({ headerProps, stargazers_count }) => {
  const dialog = useDialogState({
    animated: true,
    unstable_initialFocusRef: null,
  })
  return (
    <Grid as="nav">
      <Logo />
      <DialogDisclosure {...dialog} style={{ color: 'white' }}>
        {dialog.visible ? <Cross height={15} /> : <Hamburger height={24} />}
      </DialogDisclosure>
      <Backdrop {...dialog}>
        <Content {...dialog} aria-label="Menu">
          <Scrollable>
            <MenuLinks headerProps={headerProps} />
            <GithubButton count={stargazers_count} style={{ marginTop: 44 }} />
          </Scrollable>
          <DialogFooter>
            <Ctas headerProps={headerProps} />
          </DialogFooter>
        </Content>
      </Backdrop>
    </Grid>
  )
}

export default MobileHeader

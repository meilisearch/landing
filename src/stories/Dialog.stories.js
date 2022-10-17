import React from 'react'
import { useDialogState } from 'reakit/Dialog'
import {
  DialogDisclosure,
  DialogBackdrop,
  DialogContent,
} from 'components/Dialog'
import get from 'utils/get'

import Button from 'components/Button'
import Typography from 'components/Typography'
import Lottie from 'components/Lottie'
import hamburgerMenuAnimation from '../lotties/hamburgerMenu.json'

export default {
  title: 'Components/Dialog',
  parameters: {
    layout: 'padded',
  },
}

const backdropStyle = {
  padding: 24,
  color: 'white',
  backgroundColor: get('colors.valhalla'),
  inset: '0',
  zIndex: 50,
}

const textStyle = {
  display: 'block',
  marginBottom: 24,
}

export const Default = () => {
  const dialog = useDialogState()
  return (
    <>
      <DialogDisclosure
        {...dialog}
        style={{ color: 'white', width: 40, height: 40 }}
      >
        <Lottie
          direction={dialog.visible ? 1 : -1}
          animation={hamburgerMenuAnimation}
          options={{
            loop: false,
            autoplay: false,
          }}
          ariaLabel="Hamburger Menu"
        />
      </DialogDisclosure>
      <DialogBackdrop {...dialog} style={backdropStyle}>
        <DialogContent {...dialog} aria-label="Welcome">
          <Typography style={textStyle}>I’m the content !</Typography>
          <Button onClick={dialog.hide}>
            <Typography>Close</Typography>
          </Button>
        </DialogContent>
      </DialogBackdrop>
    </>
  )
}

export const Animated = () => {
  const dialog = useDialogState({ animated: true })
  return (
    <>
      <DialogDisclosure
        {...dialog}
        style={{ color: 'white', width: 40, height: 40 }}
      >
        <Lottie
          direction={dialog.visible ? 1 : -1}
          animation={hamburgerMenuAnimation}
          options={{
            loop: false,
            autoplay: false,
          }}
          ariaLabel="Hamburger Menu"
        />
      </DialogDisclosure>
      <DialogBackdrop {...dialog} style={backdropStyle}>
        <DialogContent {...dialog} aria-label="Welcome">
          <Typography style={textStyle}>I’m the content !</Typography>
          <Button onClick={dialog.hide}>
            <Typography>Close</Typography>
          </Button>
        </DialogContent>
      </DialogBackdrop>
    </>
  )
}

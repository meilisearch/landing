import React from 'react'
import { useDisclosureState } from 'reakit/Disclosure'
import { Disclosure, DisclosureContent } from '../components/Disclosure'
import Typography from '../components/Typography'
import get from 'utils/get'

export default {
  title: 'Components/Disclosure',
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div
        style={{
          color: 'white',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

const DisclosureComponent = ({ disclosure }) => (
  <>
    <Disclosure {...disclosure}>
      <Typography>Toggle</Typography>
    </Disclosure>
    <DisclosureContent {...disclosure} aria-label="Welcome">
      <Typography style={{ display: 'block', marginBottom: get('spacing.8') }}>
        I’m the content !
      </Typography>
    </DisclosureContent>
  </>
)

export const Default = () => {
  const disclosure = useDisclosureState()
  return <DisclosureComponent disclosure={disclosure} />
}

export const Animated = () => {
  const disclosure = useDisclosureState({ animated: true })
  return <DisclosureComponent disclosure={disclosure} />
}

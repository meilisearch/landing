import React from 'react'
import Checkbox from 'components/Checkbox'
import { useCheckboxState } from 'reakit/Checkbox'
import { Rust, Python, React as ReactIcon } from 'components/icons'
import Typography from 'components/Typography'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
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

export const Default = () => {
  const checkboxState = useCheckboxState({ state: [] })
  return (
    <>
      <Typography>Choices: {checkboxState.state.join(', ')}</Typography>
      <Checkbox
        checkboxState={checkboxState}
        value="apple"
        title="Apple"
        icon={Rust}
      />
      <Checkbox
        checkboxState={checkboxState}
        value="orange"
        title="Orange"
        icon={Python}
      />
      <Checkbox
        checkboxState={checkboxState}
        value="banana"
        title="Banana"
        icon={ReactIcon}
      />
    </>
  )
}

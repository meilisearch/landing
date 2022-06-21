import React from 'react'
import Radio from 'components/Radio'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import { Rust, Python, React as ReactIcon } from 'components/icons'

export default {
  title: 'Components/Radio',
  component: Radio,
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
  const radioState = useRadioState()

  return (
    <RadioGroup aria-label="fruits">
      <Radio radioState={radioState} title="orange" value="orange" />
      <Radio radioState={radioState} title="apple" value="apple" />
      <Radio radioState={radioState} title="banana" value="banana" />
    </RadioGroup>
  )
}

export const WithIcon = () => {
  const radioState = useRadioState()

  return (
    <RadioGroup aria-label="fruits">
      <Radio radioState={radioState} title="apple" value="apple" icon={Rust} />
      <Radio
        radioState={radioState}
        title="orange"
        value="orange"
        icon={Python}
      />
      <Radio
        radioState={radioState}
        title="banana"
        value="banana"
        icon={ReactIcon}
      />
    </RadioGroup>
  )
}

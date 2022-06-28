import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import Radio from 'components/Radio'
import get from 'utils/get'

const Options = styled(Grid)`
  grid-template-columns: ${p => (p.$hasIcon ? 'repeat(2, 1fr)' : '1fr')};
  grid-gap: 12px;
  padding: 0 55px;
  margin: 0;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: ${p => (p.$hasIcon ? 'repeat(3, 1fr)' : '1fr')};
    grid-gap: ${p => (p.$hasIcon ? '20px' : '12px')};
    padding: ${p => (p.$hasIcon ? 0 : '0 80px')};
  }
`

const RadioList = ({ currentStepData, form, setForm, color }) => {
  const radioState = useRadioState({
    state: form[currentStepData.name] || null,
  })

  React.useEffect(() => {
    setForm({ ...form, [currentStepData.name]: radioState.state })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioState.state])

  return (
    <RadioGroup
      aria-label={currentStepData.name}
      as={Options}
      $hasIcon={!!currentStepData.options[0].icon}
    >
      {currentStepData.options.map(option => (
        <Radio
          key={option.title}
          radioState={radioState}
          color={color}
          {...option}
        />
      ))}
    </RadioGroup>
  )
}

export default RadioList

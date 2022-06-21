import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import Radio from 'components/Radio'

const Options = styled(Grid)`
  grid-template-columns: ${p => (p.$hasIcon ? 'repeat(3, 1fr)' : '1fr')};
  grid-gap: 20px;
  margin: 48px 0;
`

const RadioList = ({ content, form, setForm, color }) => {
  const radioState = useRadioState()

  React.useEffect(() => {
    setForm({ ...form, [content.name]: radioState.state })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioState.state])

  return (
    <RadioGroup
      aria-label={content.name}
      as={Options}
      $hasIcon={!!content.options[0].icon}
    >
      {content.options.map((option, index) => (
        <Radio
          key={option.title}
          radioState={radioState}
          color={color}
          index={index}
          {...option}
        />
      ))}
    </RadioGroup>
  )
}

export default RadioList

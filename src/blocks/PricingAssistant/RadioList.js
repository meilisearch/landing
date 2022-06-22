import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import { useRadioState, RadioGroup } from 'reakit/Radio'
import Radio from 'components/Radio'

const Options = styled(Grid)`
  grid-template-columns: ${p => (p.$hasIcon ? 'repeat(3, 1fr)' : '1fr')};
  grid-gap: ${p => (p.$hasIcon ? '20px' : '12px')};
  margin: 0;
`

const RadioList = ({ content, form, setForm, color }) => {
  const radioState = useRadioState({ state: form[content.name] || null })

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
      {content.options.map(option => (
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
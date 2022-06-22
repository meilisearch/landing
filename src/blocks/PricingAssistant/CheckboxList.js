import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Checkbox from 'components/Checkbox'
import { useCheckboxState } from 'reakit/Checkbox'

const Options = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 48px 0;
`

const CheckboxList = ({ content, form, setForm, color }) => {
  const checkboxState = useCheckboxState({ state: [] })

  React.useEffect(() => {
    setForm({ ...form, [content.name]: checkboxState.state })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxState.state])

  return (
    <Options>
      {content.options.map(option => (
        <Checkbox
          key={option.value}
          {...option}
          color={color}
          checkboxState={checkboxState}
        />
      ))}
    </Options>
  )
}

export default CheckboxList

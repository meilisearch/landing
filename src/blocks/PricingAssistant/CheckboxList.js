import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Checkbox from 'components/Checkbox'
import { useCheckboxState } from 'reakit/Checkbox'
import get from 'utils/get'

const Options = styled(Grid)`
  grid-template-columns: repeat(${p => p.$nbColumns}, 1fr);
  grid-gap: 12px;
  padding: 0 89px;
  margin: 0;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 48px 0;
    grid-gap: 20px;
    padding: 0;
  }
`

const CheckboxList = ({ currentStepData, form, setForm, color }) => {
  const checkboxState = useCheckboxState({
    state: form[currentStepData.name],
  })

  React.useEffect(() => {
    setForm({ ...form, [currentStepData.name]: checkboxState.state })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxState.state])

  return (
    <Options $nbColumns={currentStepData.options.length % 2 === 0 ? 2 : 1}>
      {currentStepData.options.map(option => (
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

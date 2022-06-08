import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import hexToRgb from 'utils/hexToRgb'

const StyledInput = styled.input`
  height: 38px;
  border-radius: 8px;
  border: 1px solid ${get('colors.ashes.900')};
  padding: 10px 16px;
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: ${get('colors.ashes.900')};
  }
  &:hover {
    border: 1px solid ${get('colors.dodgerBlue')};
  }
  &:focus-within {
    border: 1px solid ${get('colors.dodgerBlue')};
    box-shadow: 0px 0px 0px 4px ${hexToRgb(get('colors.ashes.900'), 0.2)};
  }
`

const Input = props => {
  return <StyledInput {...props} />
}

export default Input

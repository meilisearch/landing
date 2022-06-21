import React from 'react'
import { Radio as ReakitRadio } from 'reakit/Radio'
import styled from 'styled-components'

const StyledRadio = styled(ReakitRadio)`
  opacity: 0;
  height: 0;
  width: 0;
  display: block;
`

const Radio = ({ checked, onChange, value, ...props }) => {
  return (
    <StyledRadio
      checked={checked}
      onChange={onChange}
      value={value}
      {...props}
    />
  )
}

export default Radio

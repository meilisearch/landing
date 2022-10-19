import React from 'react'
import styled from 'styled-components'
import hexToRgb from 'utils/hexToRgb'
import get from 'utils/get'

const IconWrapper = styled.div`
  background-color: ${p => hexToRgb(get(p.$color || 'colors.hotPink'), 0.2)};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${p => get(p.$color || 'colors.hotPink')};
  padding: 8px;
`

const RoundedIcon = ({ icon, color, ...props }) => {
  const Icon = icon
  return (
    <IconWrapper $color={color} {...props}>
      <Icon />
    </IconWrapper>
  )
}

export default RoundedIcon

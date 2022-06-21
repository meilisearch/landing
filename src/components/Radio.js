import React from 'react'
import styled from 'styled-components'
import { Radio as ReakitRadio } from 'reakit/Radio'
import IconCard from 'components/IconCard'
import FullWidthCard from 'components/FullWidthCard'
import hexToRgb from 'utils/hexToRgb'
import get from 'utils/get'
import getColorName from 'utils/getColorName'

const HiddenRadio = styled(ReakitRadio)`
  opacity: 0;
  height: 0;
  width: 0;
  display: block;
`

const CardRadio = styled.div`
  cursor: pointer;
  &:hover,
  &:focus-within {
    border: 1px solid ${get('colors.white')};
  }
  border: 1px solid ${get('colors.valhalla.100')};
  border-radius: 8px;
  transition: border 300ms, background-color 300ms;

  ${HiddenRadio}:focus + & {
    border: 1px solid ${get('colors.white')};
  }
  ${HiddenRadio}[aria-checked="true"] + & {
    border: 1px solid ${p => get(`colors.${getColorName(p.$color)}`)};
    background-color: ${p =>
      hexToRgb(get(`colors.${getColorName(p.$color)}`), 0.2)};
  }
`

const Radio = ({
  icon,
  title,
  radioState,
  color = get('colors.dodgerBlue'),
  index,
  value,
  ...props
}) => (
  <label {...props}>
    <HiddenRadio {...radioState} value={value} autoFocus={index === 0} />
    <CardRadio
      icon={icon}
      title={title}
      as={icon ? IconCard : FullWidthCard}
      $color={color}
    />
  </label>
)

export default Radio

import React from 'react'
import { Checkbox as ReakitCheckbox } from 'reakit/Checkbox'
import styled from 'styled-components'
import get from 'utils/get'
import IconCard from 'components/IconCard'
import hexToRgb from 'utils/hexToRgb'
import getColorName from 'utils/getColorName'

const HiddenCheckBox = styled(ReakitCheckbox)`
  opacity: 0;
  height: 0;
  width: 0;
  display: block;
`

const VisibleCheckBox = styled(IconCard)`
  cursor: pointer;
  &:hover,
  &:focus-within {
    border: 1px solid ${get('colors.white')};
  }
  border: 1px solid ${get('colors.valhalla.100')};
  border-radius: 8px;
  transition: border 300ms, background-color 300ms;

  ${HiddenCheckBox}:focus + & {
    border: 1px solid ${get('colors.white')};
  }
  ${HiddenCheckBox}[aria-checked="true"] + & {
    border: 1px solid ${p => get(`colors.${getColorName(p.$color)}`)};
    background-color: ${p =>
      hexToRgb(get(`colors.${getColorName(p.$color)}`), 0.2)};
  }
`

const Checkbox = ({
  value,
  title,
  icon,
  color = get('colors.dodgerBlue'),
  autoFocus,
  checkboxState,
}) => {
  return (
    <label>
      <HiddenCheckBox value={value} autoFocus={autoFocus} {...checkboxState} />
      <VisibleCheckBox $color={color} icon={icon} title={title} />
    </label>
  )
}

export default Checkbox

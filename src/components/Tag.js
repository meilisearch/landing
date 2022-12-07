import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import hexToRgb from 'utils/hexToRgb'
import Typography from './Typography'

const TagWrapper = styled.div`
  color: ${get('colors.ashes')};
  border: 1px solid ${p => get(p.$color)};
  border-radius: 8px;
  padding: 4px 7px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => hexToRgb(get(p.$color), 0.2)};
  min-width: 70px;
`

const Tag = ({ children, color = 'colors.dodgerBlue', ...props }) => {
  return (
    <TagWrapper $color={color} {...props}>
      <Typography variant="body.s.default">{children}</Typography>
    </TagWrapper>
  )
}

export default Tag

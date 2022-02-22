import React from 'react'
import styled from 'styled-components'
import Typography from './Typography'
import get from 'utils/get'

const TagWrapper = styled.div`
  color: ${get('colors.ashes')};
  border: 1px solid ${get('colors.dodgerBlue')};
  border-radius: 8px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${get('colors.luckyPoint')};
  height: 30px;
  min-width: 70px;
`

const Tag = ({ children, ...props }) => {
  return (
    <TagWrapper {...props}>
      <Typography variant="typo1">{children}</Typography>
    </TagWrapper>
  )
}

export default Tag

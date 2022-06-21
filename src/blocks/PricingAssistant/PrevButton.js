import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Button from 'components/Button'
import { RightArrow } from 'components/icons'

const Prev = styled(Button)`
  display: flex;
  margin-right: auto;
  border-width: 1px;
  svg {
    color: inherit;
  }
`

const PrevButton = ({ step, setStep, buttonText, ...props }) => {
  if (step > 0) {
    return (
      <Prev onClick={() => setStep(step - 1)} variant="secondary" {...props}>
        <RightArrow
          width={22}
          style={{ marginRight: 12, transform: 'rotate(180deg)' }}
        />
        <Typography variant="body.s.bold">{buttonText}</Typography>
      </Prev>
    )
  }
  return null
}

export default PrevButton

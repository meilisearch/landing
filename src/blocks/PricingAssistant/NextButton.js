import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import Button from 'components/Button'
import { RightArrow } from 'components/icons'

const Next = styled(Button)`
  display: flex;
  margin-left: auto;
`

const NextButton = ({ step, setStep, nbSteps, buttonText, ...props }) => {
  if (step < nbSteps) {
    return (
      <Next onClick={() => setStep(step + 1)} {...props}>
        <Typography variant="body.s.bold">{buttonText}</Typography>
        <RightArrow width={22} style={{ marginLeft: 12 }} />
      </Next>
    )
  }
  return null
}

export default NextButton

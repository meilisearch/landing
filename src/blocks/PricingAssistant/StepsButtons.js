import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import { RightArrow } from 'components/icons'
import Button from 'components/Button'
import get from 'utils/get'

const BaseButton = styled(Button)`
  height: 38px;
  padding: 0 20px;
  svg {
    width: 13px;
  }

  @media (min-width: ${get('breakpoints.md')}) {
    height: 46px;
    padding: 24px;
    svg {
      width: 22px;
    }
  }
`

const Prev = styled(BaseButton)`
  display: flex;
  margin-right: auto;
  border-width: 1px;
  svg {
    color: inherit;
  }
`

const Next = styled(BaseButton)`
  display: flex;
  margin-left: auto;
`

const PrevButton = ({ onClick, color, text }) => (
  <Prev variant="secondary" onClick={onClick} color={color}>
    <RightArrow style={{ marginRight: 12, transform: 'rotate(180deg)' }} />
    <Typography variant="body.s.bold">{text}</Typography>
  </Prev>
)

const NextButton = ({ onClick, color, disabled, text }) => {
  return (
    <Next onClick={onClick} color={color} disabled={disabled}>
      <Typography variant="body.s.bold">{text}</Typography>
      <RightArrow style={{ marginLeft: 12 }} />
    </Next>
  )
}

const StepsButtonsContainer = styled.div`
  display: flex;
`

const StepsButtons = ({
  buttonsTexts,
  currentStep,
  setStep,
  nbSteps,
  color,
  currentFormField,
}) => {
  const { previous, next } = buttonsTexts
  return (
    <StepsButtonsContainer style={{ display: 'flex' }}>
      {currentStep > 0 && (
        <PrevButton
          onClick={() => setStep(currentStep - 1)}
          color={color}
          text={previous}
        />
      )}
      {currentStep < nbSteps && (
        <NextButton
          onClick={() => setStep(currentStep + 1)}
          color={color}
          disabled={!(currentFormField || currentFormField?.length > 0)}
          text={next}
        />
      )}
    </StepsButtonsContainer>
  )
}

export default StepsButtons

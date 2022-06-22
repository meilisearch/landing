import React from 'react'
import styled, { css } from 'styled-components'
import get from 'utils/get'
import Grid from 'components/Grid'
import StepsButtons from './StepsButtons'
import { useTransition, animated } from 'react-spring'
import BaseBullets from 'components/Bullets'
import CurrentStep from './CurrentStep'

const Card = styled(Grid)`
  padding: 42px 0;
  grid-template-columns: repeat(7, 1fr);
  min-height: 486px;
`

const Content = styled.div`
  grid-column: 2 / 7;
  color: ${get('colors.ashes.900')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PricingAssistantStepContainer = styled.div`
  position: relative;
  grid-column: 6 / -1;
  min-height: 486px;
  border: 1px solid ${get('colors.valhalla.200')};
  border-radius: 8px;
`

const Bullets = styled(BaseBullets)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 42px;
  display: flex;
  flex-direction: column;
  div + div {
    margin-top: 16px;
  }
  ${p =>
    p.$hasCompletedForm &&
    css`
      div {
        background-color: ${p.color};
      }
    `};
`

const Results = () => {
  return <p>test</p>
}

const RightColumn = ({ pricingAssistant, color }) => {
  const [step, setStep] = React.useState(0)
  const [form, setForm] = React.useState({})
  const nbSteps = pricingAssistant.steps.length

  const transitions = useTransition(step, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  console.log(form)

  return (
    <PricingAssistantStepContainer>
      <Bullets
        currentIndex={step}
        nbBullets={nbSteps}
        color={color}
        $hasCompletedForm={step === nbSteps}
      />
      {transitions((styles, item) => {
        const { steps } = pricingAssistant
        const currentStepData = steps[item]
        const currentFormField = form[currentStepData.name] || null
        return (
          <animated.div style={{ position: 'absolute', inset: 0, ...styles }}>
            <Card>
              <Content>
                {step < nbSteps ? (
                  <CurrentStep
                    currentStepData={currentStepData}
                    form={form}
                    setForm={setForm}
                    color={color}
                  />
                ) : (
                  <Results />
                )}
                <StepsButtons
                  buttonsTexts={pricingAssistant.buttons}
                  currentStep={item}
                  setStep={setStep}
                  nbSteps={steps.length}
                  color={color}
                  currentFormField={currentFormField}
                />
              </Content>
            </Card>
          </animated.div>
        )
      })}
    </PricingAssistantStepContainer>
  )
}

export default RightColumn

import React from 'react'
import styled, { css } from 'styled-components'
import get from 'utils/get'
import Grid from 'components/Grid'
import StepsButtons from './StepsButtons'
import { useTransition, animated } from 'react-spring'
import BaseBullets from 'components/Bullets'
import CurrentStep from './CurrentStep'
import Results from './Results'

const PricingAssistantStepContainer = styled.div`
  grid-column: 1 / -1;
  margin-top: 32px;
  position: relative;
  min-height: 450px;
  border: 1px solid ${get('colors.valhalla.200')};
  border-radius: 8px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 6 / -1;
    margin-top: 0;
    min-height: 486px;
  }
`

const Card = styled(Grid)`
  grid-template-columns: repeat(5, 1fr);
  padding: 32px 0 20px;
  min-height: 450px;
  grid-gap: 0 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    min-height: 486px;
    padding: 42px 0;
    grid-template-columns: repeat(7, 1fr);
  }
`

const Content = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  color: ${get('colors.ashes.900')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 2 / 7;
  }
`

const Bullets = styled(BaseBullets)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
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

  @media (min-width: ${get('breakpoints.md')}) {
    left: 42px;
  }
`

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
      {transitions((styles, currentStep) => {
        const { steps, recommandations, buttons } = pricingAssistant
        const currentStepData = steps[currentStep]
        const currentFormField = form[currentStepData?.name] || null
        const isQuestion = currentStep < nbSteps
        return (
          <animated.div style={{ position: 'absolute', inset: 0, ...styles }}>
            <Card>
              <Content>
                {isQuestion ? (
                  <>
                    <CurrentStep
                      currentStepData={currentStepData}
                      form={form}
                      setForm={setForm}
                      color={color}
                    />
                    <StepsButtons
                      buttonsTexts={buttons}
                      currentStep={currentStep}
                      setStep={setStep}
                      nbSteps={steps.length}
                      color={color}
                      currentFormField={currentFormField}
                    />
                  </>
                ) : (
                  <Results
                    form={form}
                    recommandations={recommandations}
                    color={color}
                    onReset={() => {
                      setForm({})
                      setStep(0)
                    }}
                  />
                )}
              </Content>
            </Card>
          </animated.div>
        )
      })}
    </PricingAssistantStepContainer>
  )
}

export default RightColumn

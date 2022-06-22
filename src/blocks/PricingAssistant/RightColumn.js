import React from 'react'
import styled, { css } from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Grid from 'components/Grid'
import RadioList from './RadioList'
import CheckboxList from './CheckboxList'
import NextButton from './NextButton'
import PrevButton from './PrevButton'
import { useTransition, animated } from 'react-spring'
import BaseBullets from 'components/Bullets'

const Card = styled(Grid)`
  padding: 42px 0;
  grid-template-columns: repeat(7, 1fr);
  min-height: 486px;
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  display: block;
  text-align: center;
`

const Subtitle = styled(Typography)`
  color: ${get('colors.ashes.900')};
  display: block;
  text-align: center;
  font-size: 12px;
`

const Content = styled.div`
  grid-column: 2 / 7;
  color: ${get('colors.ashes.900')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Buttons = styled.div`
  display: flex;
`

const Step = ({ pricingAssistant, form, setForm, step, setStep, color }) => {
  if (step < pricingAssistant.steps.length) {
    const content = pricingAssistant.steps[step]
    return (
      <Card>
        <Content>
          <div>
            <Title
              variant="body.l.default"
              dangerouslySetInnerHTML={{ __html: content.title }}
            />
            {content.subtitle && (
              <Subtitle
                variant="body.l.default"
                dangerouslySetInnerHTML={{ __html: content.subtitle }}
              />
            )}
          </div>
          {content.multipleChoices ? (
            <CheckboxList
              content={content}
              setForm={setForm}
              form={form}
              color={color}
            />
          ) : (
            <RadioList
              content={content}
              setForm={setForm}
              form={form}
              color={color}
            />
          )}
          <Buttons>
            <PrevButton
              step={step}
              setStep={setStep}
              buttonText={pricingAssistant.previous}
              color={color}
            />
            <NextButton
              step={step}
              setStep={setStep}
              nbSteps={pricingAssistant.steps.length}
              buttonText={pricingAssistant.next}
              disabled={
                form[content.name] && form[content.name].length > 0
                  ? false
                  : true
              }
              color={color}
            />
          </Buttons>
        </Content>
      </Card>
    )
  }
  return (
    <>
      <p>test</p>
    </>
  )
}

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
  button + button {
    margin-top: 16px;
  }
  ${p =>
    p.$hasCompletedForm &&
    css`
      button {
        background-color: ${p.color};
      }
    `};
`

const RightColumn = ({ pricingAssistant, color }) => {
  const [step, setStep] = React.useState(0)
  const [form, setForm] = React.useState({})

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
        nbBullets={pricingAssistant.steps.length}
        color={color}
        $hasCompletedForm={step === pricingAssistant.steps.length}
      />
      {transitions((styles, item) => (
        <animated.div style={{ position: 'absolute', inset: 0, ...styles }}>
          <Step
            pricingAssistant={pricingAssistant}
            step={item}
            setStep={setStep}
            setForm={setForm}
            form={form}
            color={color}
          />
        </animated.div>
      ))}
    </PricingAssistantStepContainer>
  )
}

export default RightColumn

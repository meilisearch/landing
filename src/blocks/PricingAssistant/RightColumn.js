import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Grid from 'components/Grid'
import RadioList from './RadioList'
import CheckboxList from './CheckboxList'
import NextButton from './NextButton'
import PrevButton from './PrevButton'

const Card = styled(Grid)`
  border: 1px solid ${get('colors.valhalla.200')};
  border-radius: 8px;
  padding: 42px 0;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
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
  grid-column: 6 / -1;
  min-height: 486px;
`

const RightColumn = ({ pricingAssistant, color }) => {
  const [step, setStep] = React.useState(0)
  const [form, setForm] = React.useState({})

  console.log(form)

  return (
    <PricingAssistantStepContainer has>
      <Step
        pricingAssistant={pricingAssistant}
        step={step}
        setStep={setStep}
        setForm={setForm}
        form={form}
        color={color}
      />
    </PricingAssistantStepContainer>
  )
}

export default RightColumn

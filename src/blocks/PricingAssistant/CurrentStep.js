import React from 'react'
import styled from 'styled-components'
import RadioList from './RadioList'
import CheckboxList from './CheckboxList'
import get from 'utils/get'
import Typography from 'components/Typography'

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

const StepTitle = styled.div`
  padding: 0 36px;
`

const CurrentStep = ({ currentStepData, form, setForm, color }) => {
  if (!currentStepData) return null
  return (
    <>
      <StepTitle>
        <Title
          variant="body.l.default"
          dangerouslySetInnerHTML={{ __html: currentStepData.title }}
        />
        {currentStepData.subtitle && (
          <Subtitle
            variant="body.l.default"
            dangerouslySetInnerHTML={{ __html: currentStepData.subtitle }}
          />
        )}
      </StepTitle>
      {currentStepData.multipleChoices ? (
        <CheckboxList
          currentStepData={currentStepData}
          setForm={setForm}
          form={form}
          color={color}
        />
      ) : (
        <RadioList
          currentStepData={currentStepData}
          setForm={setForm}
          form={form}
          color={color}
        />
      )}
    </>
  )
}

export default CurrentStep

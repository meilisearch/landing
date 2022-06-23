import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import RadioList from './RadioList'
import CheckboxList from './CheckboxList'

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

const CurrentStep = ({ currentStepData, form, setForm, color }) => {
  if (!currentStepData) return null
  return (
    <>
      <div>
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
      </div>
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

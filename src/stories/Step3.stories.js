import React from 'react'
import { useTranslation } from 'next-i18next'
import { Step3 } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Step3',
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { steps: stepsProps } = getHomepageData(t)

  return (
    <Step3
      step3Props={stepsProps[2]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
    />
  )
}

export const OtherColor = () => {
  const { t } = useTranslation('homepage')
  const { steps: stepsProps } = getHomepageData(t)

  return (
    <Step3
      step3Props={stepsProps[2]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
      color={get('colors.hotPink')}
    />
  )
}

import React from 'react'
import { Step1 } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Step1',
}

export const Default = () => {
  const { steps: stepsProps } = getHomepageData()

  return (
    <Step1
      step1Props={stepsProps[0]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
    />
  )
}

export const OtherColor = () => {
  const { steps: stepsProps } = getHomepageData()

  return (
    <Step1
      step1Props={stepsProps[0]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
      color={get('colors.hotPink')}
    />
  )
}

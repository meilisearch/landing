import React from 'react'
import { Demo } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Demo',
}

export const Default = () => {
  const { demo: demoProps } = getHomepageData()

  return <Demo demoProps={demoProps} color={get('colors.lila')} />
}

export const OtherColor = () => {
  const { demo: demoProps } = getHomepageData()

  return <Demo demoProps={demoProps} color={get('colors.hotPink')} />
}

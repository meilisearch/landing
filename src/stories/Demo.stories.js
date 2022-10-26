import React from 'react'
import { Demo } from 'blocks'
import homepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Demo',
}

export const Default = () => {
  const { demo: demoProps } = homepageData

  return <Demo demoProps={demoProps} color={get('colors.lila')} />
}

export const OtherColor = () => {
  const { demo: demoProps } = homepageData

  return <Demo demoProps={demoProps} color={get('colors.hotPink')} />
}

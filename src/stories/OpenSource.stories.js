import React from 'react'
import { OpenSource } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/OpenSource',
}

export const Default = () => {
  const { openSource: openSourceProps } = getHomepageData()

  return <OpenSource openSourceProps={openSourceProps} />
}

export const OtherColor = () => {
  const { openSource: openSourceProps } = getHomepageData()

  return (
    <OpenSource openSourceProps={openSourceProps} color={get('colors.lila')} />
  )
}

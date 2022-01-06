import React from 'react'
import { useTranslation } from 'next-i18next'
import { OpenSource } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/OpenSource',
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { openSource: openSourceProps } = getHomepageData(t)

  return <OpenSource openSourceProps={openSourceProps} />
}

export const OtherColor = () => {
  const { t } = useTranslation('homepage')
  const { openSource: openSourceProps } = getHomepageData(t)

  return (
    <OpenSource openSourceProps={openSourceProps} color={get('colors.lila')} />
  )
}

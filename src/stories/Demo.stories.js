import React from 'react'
import { useTranslation } from 'next-i18next'
import { Demo } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Demo',
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { demo: demoProps } = getHomepageData(t)

  return <Demo demoProps={demoProps} color={get('colors.lila')} />
}

export const OtherColor = () => {
  const { t } = useTranslation('homepage')
  const { demo: demoProps } = getHomepageData(t)

  return <Demo demoProps={demoProps} color={get('colors.hotPink')} />
}

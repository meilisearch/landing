import React from 'react'
import { useTranslation } from 'next-i18next'
import { Hero } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Hero',
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { hero: heroProps } = getHomepageData(t)

  return <Hero heroProps={heroProps} />
}

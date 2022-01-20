import React from 'react'
import { useTranslation } from 'next-i18next'
import { Cards } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Cards',
  parameters: {
    backgrounds: { default: 'white' },
  },
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { cards: cardsProps } = getHomepageData(t)

  return <Cards cardsProps={cardsProps} />
}

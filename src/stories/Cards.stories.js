import React from 'react'
import { Cards } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Cards',
  parameters: {
    backgrounds: { default: 'white' },
  },
}

export const Default = () => {
  const { cards: cardsProps } = getHomepageData()

  return <Cards cardsProps={cardsProps} />
}

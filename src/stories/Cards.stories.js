import React from 'react'
import { Cards } from 'blocks'
import homepageData from '../../data/homepage'

export default {
  title: 'Blocks/Cards',
  parameters: {
    backgrounds: { default: 'white' },
  },
}

export const Default = () => {
  const { cards: cardsProps } = homepageData

  return <Cards cardsProps={cardsProps} />
}

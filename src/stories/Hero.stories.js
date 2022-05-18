import React from 'react'
import { Hero } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Hero',
}

export const Default = () => {
  const { hero: heroProps } = getHomepageData()

  return <Hero heroProps={heroProps} />
}

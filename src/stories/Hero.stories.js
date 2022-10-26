import React from 'react'
import { Hero } from 'blocks'
import homepageData from '../../data/homepage'

export default {
  title: 'Blocks/Hero',
}

export const Default = () => {
  const { hero: heroProps } = homepageData

  return <Hero heroProps={heroProps} />
}

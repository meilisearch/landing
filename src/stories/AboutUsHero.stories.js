import React from 'react'
import { AboutUsHero } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/AboutUsHero',
}

export const Default = () => {
  const { hero } = aboutUsData

  return <AboutUsHero hero={hero} />
}

import React from 'react'
import { AboutUsHero } from 'blocks'
import getAboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/AboutUsHero',
}

export const Default = () => {
  const { hero } = getAboutUsData()
  console.log(hero)

  return <AboutUsHero hero={hero} />
}

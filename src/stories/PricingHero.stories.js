import React from 'react'
import { PricingHero as Hero } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/PricingHero',
}

export const Default = () => {
  const { hero } = getPricingPageData()

  return <Hero hero={hero} />
}

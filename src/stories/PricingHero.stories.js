import React from 'react'
import { PricingHero as Hero } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/PricingHero',
}

export const Default = () => {
  const { hero } = pricingPageData

  return <Hero hero={hero} />
}

import React from 'react'
import { useTranslation } from 'next-i18next'
import { PricingHero as Hero } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/PricingHero',
}

export const Default = () => {
  const { t } = useTranslation('pricing')
  const { hero } = getPricingPageData(t)

  return <Hero hero={hero} />
}

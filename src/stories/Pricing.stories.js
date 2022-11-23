import React from 'react'
import { PricingPlans } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/PricingPlans',
}

export const Default = () => {
  const { pricing } = pricingPageData

  return <PricingPlans pricing={pricing} />
}

import React from 'react'
import { Pricing } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Pricing',
}

export const Default = () => {
  const { pricing } = pricingPageData

  return <Pricing pricing={pricing} />
}

import React from 'react'
import { Pricing } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Pricing',
}

export const Default = () => {
  const { pricing } = getPricingPageData()

  return <Pricing pricing={pricing} />
}

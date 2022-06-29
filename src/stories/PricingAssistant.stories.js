import React from 'react'
import { PricingAssistant } from 'blocks'
import getPricingPageData from '../../data/pricing'
import get from 'utils/get'

export default {
  title: 'Blocks/PricingAssistant',
}

export const Default = () => {
  const { pricingAssistant } = getPricingPageData()

  return (
    <PricingAssistant
      pricingAssistant={pricingAssistant}
      data-cy="pricingAssistant"
    />
  )
}

export const HotPink = () => {
  const { pricingAssistant } = getPricingPageData()

  return (
    <PricingAssistant
      pricingAssistant={pricingAssistant}
      color={get('colors.hotPink')}
      data-cy="pricingAssistant"
    />
  )
}

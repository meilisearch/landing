import React from 'react'
import { PricingAssistant } from 'blocks'
import pricingPageData from '../../data/pricing'
import get from 'utils/get'

export default {
  title: 'Blocks/PricingAssistant',
}

export const Default = () => {
  const { pricingAssistant } = pricingPageData

  return (
    <PricingAssistant
      pricingAssistant={pricingAssistant}
      data-cy="pricingAssistant"
    />
  )
}

export const HotPink = () => {
  const { pricingAssistant } = pricingPageData

  return (
    <PricingAssistant
      pricingAssistant={pricingAssistant}
      color={get('colors.hotPink')}
      data-cy="pricingAssistant"
    />
  )
}

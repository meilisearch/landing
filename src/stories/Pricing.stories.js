import React from 'react'
import { useTranslation } from 'next-i18next'
import { Pricing } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Pricing',
}

export const Default = () => {
  const { t } = useTranslation('pricing')
  const { pricing } = getPricingPageData(t)

  return <Pricing pricing={pricing} />
}

import React from 'react'
import { useTranslation } from 'next-i18next'
import { FAQ } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/FAQ',
}

export const Default = () => {
  const { t } = useTranslation('pricing')
  const { faq } = getPricingPageData(t)

  return <FAQ faq={faq} />
}

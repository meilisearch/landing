import React from 'react'
import { FAQ } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/FAQ',
}

export const Default = () => {
  const { faq } = pricingPageData

  return <FAQ faq={faq} />
}

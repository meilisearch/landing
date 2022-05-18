import React from 'react'
import { FAQ } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/FAQ',
}

export const Default = () => {
  const { faq } = getPricingPageData()

  return <FAQ faq={faq} />
}

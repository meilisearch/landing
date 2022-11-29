import React from 'react'
import { ComparativeTable } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Table',
}

export const Default = () => {
  const { table } = pricingPageData

  return <ComparativeTable table={table} />
}

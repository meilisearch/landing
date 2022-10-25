import React from 'react'
import { Table } from 'blocks'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Table',
}

export const Default = () => {
  const { table } = pricingPageData

  return <Table table={table} />
}

import React from 'react'
import { Table } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Table',
}

export const Default = () => {
  const { table } = getPricingPageData()

  return <Table table={table} />
}

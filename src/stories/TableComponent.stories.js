import React from 'react'
import Table from 'components/Table'
import pricingPageData from '../../data/pricing'

export default {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { table } = pricingPageData

  return <Table table={table.tables[2]} />
}

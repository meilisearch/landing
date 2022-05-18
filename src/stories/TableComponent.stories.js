import React from 'react'
import Table from 'components/Table'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { table } = getPricingPageData()

  return <Table table={table.tables[2]} />
}

import React from 'react'
import Table from 'components/Table'
import { useTranslation } from 'next-i18next'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { t } = useTranslation('pricing')
  const { table } = getPricingPageData(t)

  return <Table table={table.tables[2]} />
}

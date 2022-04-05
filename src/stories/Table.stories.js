import React from 'react'
import { useTranslation } from 'next-i18next'
import { Table } from 'blocks'
import getPricingPageData from '../../data/pricing'

export default {
  title: 'Blocks/Table',
}

export const Default = () => {
  const { t } = useTranslation('pricing')
  const { table } = getPricingPageData(t)

  return <Table table={table} />
}

import React from 'react'
import { PerksAndBenefits } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/PerksAndBenefits',
}

export const Default = () => {
  const { perksAndBenefits } = aboutUsData

  return <PerksAndBenefits perksAndBenefits={perksAndBenefits} />
}

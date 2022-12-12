import React from 'react'
import { JobOffers } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/JobOffers',
}

export const Default = () => {
  const { jobOffers } = aboutUsData

  return <JobOffers jobOffers={jobOffers} />
}

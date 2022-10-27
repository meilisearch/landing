import React from 'react'
import { Investors } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/Investors',
}

export const Default = () => {
  const { investors } = aboutUsData

  return <Investors investors={investors} />
}

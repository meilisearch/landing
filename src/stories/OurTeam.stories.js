import React from 'react'
import { OurTeam } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/OurTeam',
}

export const Default = () => {
  const { ourTeam } = aboutUsData

  return <OurTeam ourTeam={ourTeam} />
}

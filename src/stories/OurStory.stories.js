import React from 'react'
import { OurStory } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/OurStory',
}

export const Default = () => {
  const { ourStory } = aboutUsData

  return <OurStory ourStory={ourStory} />
}

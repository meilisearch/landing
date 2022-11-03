import React from 'react'
import { Values } from 'blocks'
import aboutUsData from '../../data/about-us'

export default {
  title: 'Blocks/Values',
}

export const Default = () => {
  const { values } = aboutUsData

  return <Values values={values} />
}

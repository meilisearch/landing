import React from 'react'
import { Testimonials } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Testimonials',
}

export const Default = () => {
  const { testimonials: testimonialsProps } = getHomepageData()

  return <Testimonials testimonialsProps={testimonialsProps} />
}

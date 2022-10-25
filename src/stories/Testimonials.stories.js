import React from 'react'
import { Testimonials } from 'blocks'
import homepageData from '../../data/homepage'

export default {
  title: 'Blocks/Testimonials',
}

export const Default = () => {
  const { testimonials: testimonialsProps } = homepageData

  return <Testimonials testimonialsProps={testimonialsProps} />
}

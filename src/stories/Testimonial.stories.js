import React from 'react'
import Testimonial from 'components/Testimonial'
import homepageData from '../../data/homepage'

export default {
  title: 'Components/Testimonial',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { testimonials } = homepageData

  return <Testimonial testimonial={testimonials.list[0]} />
}

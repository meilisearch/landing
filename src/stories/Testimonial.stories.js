import React from 'react'
import Testimonial from 'components/Testimonial'
import { useTranslation } from 'next-i18next'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Components/Testimonial',
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { testimonials } = getHomepageData(t)

  return <Testimonial testimonial={testimonials.list[0]} />
}

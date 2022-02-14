import React from 'react'
import { useTranslation } from 'next-i18next'
import { Testimonials } from 'blocks'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Blocks/Testimonials',
}

export const Default = () => {
  const { t } = useTranslation('homepage')
  const { testimonials: testimonialsProps } = getHomepageData(t)

  return <Testimonials testimonialsProps={testimonialsProps} />
}

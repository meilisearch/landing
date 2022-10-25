import React from 'react'
import { Companies } from 'blocks'
import homepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Companies',
}

export const Default = () => {
  const { companies: companiesProps } = homepageData

  return (
    <Companies companiesProps={companiesProps} color={get('colors.lila')} />
  )
}

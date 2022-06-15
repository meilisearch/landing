import React from 'react'
import { Companies } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Companies',
}

export const Default = () => {
  const { companies: companiesProps } = getHomepageData()

  return (
    <Companies companiesProps={companiesProps} color={get('colors.lila')} />
  )
}

import React from 'react'
import InteractiveSearch from 'components/InteractiveSearch'
import getHomepageData from '../../data/homepage'

export default {
  title: 'Components/InteractiveSearch',
  component: InteractiveSearch,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { demo: demoProps } = getHomepageData()

  return (
    <InteractiveSearch
      searchStats={demoProps.searchStats}
      placeholderSearch={demoProps.placeholderSearch}
    />
  )
}

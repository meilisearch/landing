import React from 'react'
import InteractiveSearch from 'components/InteractiveSearch'
import homepageData from '../../data/homepage'

export default {
  title: 'Components/InteractiveSearch',
  component: InteractiveSearch,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const { demo: demoProps } = homepageData

  return (
    <InteractiveSearch
      searchStats={demoProps.searchStats}
      placeholderSearch={demoProps.placeholderSearch}
    />
  )
}

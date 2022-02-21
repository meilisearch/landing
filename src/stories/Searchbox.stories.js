import React from 'react'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import Searchbox from 'components/Searchbox'
import { InstantSearch } from 'react-instantsearch-dom'

export default {
  title: 'Components/Searchbox',
  component: Searchbox,
  parameters: {
    layout: 'padded',
  },
}

export const Default = () => {
  const searchClient = React.useMemo(
    () =>
      instantMeiliSearch(
        process.env.NEXT_PUBLIC_DEMO_MOVIES_HOST,
        process.env.NEXT_PUBLIC_DEMO_MOVIES_API_KEY,
        {
          paginationTotalHits: 4,
          primaryKey: 'id',
        }
      ),
    []
  )
  return (
    <InstantSearch indexName="movies" searchClient={searchClient}>
      <Searchbox />
    </InstantSearch>
  )
}

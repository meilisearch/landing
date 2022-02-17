import React from 'react'
import styled from 'styled-components'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch, Hits as ISHits } from 'react-instantsearch-dom'
import Searchbox from 'components/Searchbox'
import get from 'utils/get'
import Image from 'next/image'
import Typography from 'components/Typography'

const Card = styled.div`
  background-color: ${get('colors.white')};
  border-radius: 12px;
  height: 88px;
  padding: 14px;
  display: flex;
  align-items: center;
`

const Hits = styled(ISHits)`
  ul {
    padding-left: 0;
    margin-top: 12px;
  }
  li {
    list-style-type: none;
    margin-top: 12px;
  }
`

const Poster = styled.div`
  margin: 0 12px 0 0px;
  display: flex;
  img {
    border-radius: 8px;
    object-fit: cover;
  }
`

const MovieTitle = styled(Typography)`
  color: ${get('colors.valhalla')};
  ais-highlight-0000000000 {
    color: ${get('colors.lila')};
  }
`

const MovieYear = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: ${get('colors.valhalla.300')};
`

const Hit = ({ hit }) => (
  <Card>
    <Poster>
      <Image
        width={49}
        height={59}
        layout="fixed"
        src={hit.poster_path}
        alt={hit.title}
      />
    </Poster>
    <div>
      <MovieTitle
        variant="title4"
        dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }}
      />
      <MovieYear>{new Date(hit.release_date).getFullYear()}</MovieYear>
    </div>
  </Card>
)

const InteractiveSearch = props => {
  // if (
  //   !process.env?.NEXT_PUBLIC_DEMO_MOVIES_HOST ||
  //   !process.env?.NEXT_PUBLIC_DEMO_MOVIES_API_KEY
  // )
  //   return null

  const searchClient = instantMeiliSearch(
    process.env?.NEXT_PUBLIC_DEMO_MOVIES_HOST,
    process.env?.NEXT_PUBLIC_DEMO_MOVIES_API_KEY,
    {
      paginationTotalHits: 4,
      primaryKey: 'id',
    }
  )
  return (
    <div {...props}>
      <InstantSearch indexName="movies" searchClient={searchClient}>
        <Searchbox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  )
}

export default InteractiveSearch

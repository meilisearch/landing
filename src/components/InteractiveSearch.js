import React from 'react'
import styled from 'styled-components'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import { InstantSearch, Hits as ISHits, Stats } from 'react-instantsearch-dom'
import Searchbox from 'components/Searchbox'
import get from 'utils/get'
import Image from 'next/image'
import Typography from 'components/Typography'
import Lottie from 'components/Lottie'
import { useInView } from 'react-intersection-observer'

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
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  li + li {
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
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 21.1092px;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: ${get('colors.valhalla')};
  text-align: left;
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

const MovieInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
    <MovieInfos>
      <MovieTitle
        dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }}
      />
      <MovieYear>{new Date(hit.release_date).getFullYear()}</MovieYear>
    </MovieInfos>
  </Card>
)

const StatsText = styled(Typography)`
  color: ${get('colors.white')};
  font-family: Inter;
  font-weight: ${get('fontWeight.normal')};
  font-size: 12px;
  line-height: 150%;
  margin: 6px 0;
  text-align: right;
  display: block;
  strong {
    font-weight: ${get('fontWeight.bold')};
  }
`

const Animation = styled.div`
  position: absolute;
  width: 150px;
  height: 216px;
  left: -62px;
  top: -101px;
`

const InteractiveSearch = ({
  searchStats,
  placeholderSearch,
  lottie,
  ...props
}) => {
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
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  return (
    <Container ref={ref} {...props}>
      <Animation>
        <Lottie
          animation={lottie}
          options={{ loop: false }}
          isPaused={!inView}
          ariaLabel="animated arrows"
        />
      </Animation>
      <InstantSearch indexName="movies" searchClient={searchClient}>
        <Searchbox placeholderSearch={placeholderSearch} />
        <Stats
          translations={{
            stats(nbHits, processingTimeMS) {
              return (
                <StatsText
                  dangerouslySetInnerHTML={{
                    __html: searchStats(nbHits, processingTimeMS),
                  }}
                />
              )
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </Container>
  )
}

export default InteractiveSearch

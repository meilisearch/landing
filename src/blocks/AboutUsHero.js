import Grid from 'components/Grid'
import Typography from 'components/Typography'
import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'

const AboutUsHeroGrid = styled(Grid)`
  height: calc(100vh - 160px);
  align-items: center;
`

const Title = styled(Typography)`
  color: white;
  strong {
    color: ${get('colors.hotPink')};
  }

  grid-column: 1 / -1;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 11;
  }

  @media (min-width: ${get('breakpoints.md')}) and (max-width: calc(${get(
      'breakpoints.lg'
    )} - 1px)) {
    font-size: 32px;
  }
`

const AboutUsHero = ({ hero }) => {
  return (
    <AboutUsHeroGrid>
      <Title
        variant="title.l"
        dangerouslySetInnerHTML={{ __html: hero.title }}
      />
    </AboutUsHeroGrid>
  )
}

export default AboutUsHero

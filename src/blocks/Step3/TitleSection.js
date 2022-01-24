import React from 'react'
import styled from 'styled-components'
import AnchorTitles from 'components/AnchorTitles'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import get from 'utils/get'

// Tricks the scroll behaviour in order to not have the top of the block appearing below the header
const Title = styled(Typography)`
  margin-top: 6px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: -160px;
    padding-top: calc(160px + 44px);
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: -160px;
    padding-top: calc(160px + 32px);
  }
`

const TitlesColumn = styled.div`
  grid-column: 1 / 3;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 6;
  }
`

const TitleSection = ({ steps, step, color }) => {
  return (
    <Grid style={{ zIndex: 2, position: 'relative' }}>
      <TitlesColumn>
        <AnchorTitles links={steps} current={step.preTitle} color={color} />
        <Title variant="title1" forwardedAs="h2" id={step.title} color={color}>
          {step.title}
        </Title>
      </TitlesColumn>
    </Grid>
  )
}

export default TitleSection

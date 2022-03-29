import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import get from 'utils/get'

const Container = styled.div`
  background-color: ${get('colors.dodgerBlue')};

  svg {
    color: ${get('colors.white')};
    opacity: 0.3;
  }

  padding: 40px 0 110px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 40px 0 158px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 106px 0 276px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 118px 0 242px;
  }
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  margin-top: 23px;
`

const TitleContent = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`

const TitleSection = ({ developerProps }) => {
  const PreTitle = developerProps.preTitle

  return (
    <Container>
      <Grid>
        <TitleContent>
          <PreTitle width={48} />
          <Title
            variant="title1"
            forwardedAs="h2"
            dangerouslySetInnerHTML={{ __html: developerProps.title }}
          />
        </TitleContent>
      </Grid>
    </Container>
  )
}

export default TitleSection

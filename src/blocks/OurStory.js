import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import Image from 'components/Image'

const SpecificGrid = styled(Grid)`
@media (max-width: ${get('breakpoints.md')}) {
  max-width: unset;
`

const Section = styled.section`
  padding: 72px 0;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 88px 0;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const Content = styled.div`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`

const Title = styled(Typography)`
  color: white;
  margin-top: 4px;
`

const ImageContainer = styled.div`
  grid-column: 1/-1;
  overflow: scroll;
  margin: 24px -16px 0;
  padding: 24px;

  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    margin: 48px 0 0;
    overflow: initial;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin: 72px 0 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin: 96px 0 0;
  }
`

const ImageResponsiveness = styled.div`
  width: 700px;
  @media (min-width: ${get('breakpoints.md')}) {
    width: 100%;
  }
`

const OurStory = ({ ourStory, ...props }) => {
  return (
    <Section {...props}>
      <Grid>
        <Content>
          <PreTitle
            preTitle={ourStory.preTitle}
            color={get('colors.hotPink')}
          />
          <Title variant="title.m" forwardedAs="h2">
            {ourStory.title}
          </Title>
        </Content>
      </Grid>
      <SpecificGrid>
        <ImageContainer>
          <ImageResponsiveness>
            <Image
              src={ourStory.image}
              alt="timeline"
              width={702}
              height={222}
              layout="responsive"
            />
          </ImageResponsiveness>
        </ImageContainer>
      </SpecificGrid>
    </Section>
  )
}

export default OurStory

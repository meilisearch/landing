import React from 'react'
import styled from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import shuffle from 'utils/shuffle'
import TeamMemberList from './TeamMemberList'

const Section = styled.section`
  background-color: ${get('colors.valhalla.700')};
  margin: 0 -16px;
  padding: 72px 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin: 0 -32px;
    padding: 88px 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 128px 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 168px 0;
  }
`

const Content = styled.div`
  grid-column: 1 / -1;
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  margin-top: 4px;
`

const Carousel1 = styled(TeamMemberList)`
  margin-top: 48px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 56px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 96px;
  }
`

const Carousel2 = styled(TeamMemberList)`
  margin-top: margin-top: 42px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 56px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 80px;
  }
`

const OurTeam = ({ ourTeam }) => {
  const [carousel1, setCarousel1] = React.useState([])
  const [carousel2, setCarousel2] = React.useState([])

  React.useEffect(() => {
    const shuffledPeople = shuffle(ourTeam.teamMembers)
    const personsPerCarousel = Math.ceil(ourTeam.teamMembers.length / 2)
    const tempCarousel1 = shuffledPeople.slice(0, personsPerCarousel)
    const tempCarousel2 = shuffledPeople.slice(
      personsPerCarousel,
      ourTeam.teamMembers.length
    )
    setCarousel1([...tempCarousel1, ...tempCarousel1])
    setCarousel2([...tempCarousel2, ...tempCarousel2])
  }, [ourTeam.teamMembers])

  return (
    <Section>
      <Grid>
        <Content>
          <PreTitle color={get('colors.hotPink')} preTitle={ourTeam.preTitle} />
          <Title variant="title.m">{ourTeam.title}</Title>
        </Content>
      </Grid>
      <Carousel1 carousel={carousel1} dir="rtl" />
      <Carousel2 carousel={carousel2} dir="ltr" />
    </Section>
  )
}

export default OurTeam

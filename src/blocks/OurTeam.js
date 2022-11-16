import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import PreTitle from 'components/PreTitle'
import Grid from 'components/Grid'
import get from 'utils/get'
import Typography from 'components/Typography'
import BaseLink from 'components/Link'
import shuffle from 'utils/shuffle'
import Image from 'next/image'

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

const scrollRightToLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-50%);
}
`

const scrollLeftToRight = keyframes`
0% {
  transform: translateX(-50%);
}
100% {
  transform: translateX(0);
}
`

const Carousel = styled.div`
  z-index: 2;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${p => p.$nbSlides}, 1fr);
  grid-gap: 0 26px;
  justify-content: center;
  align-items: center;
  &:hover {
    animation-play-state: paused;
  }

  ${p =>
    p.$dir === 'ltr' &&
    css`
      animation: ${scrollLeftToRight} 10s linear infinite;
    `}
  ${p =>
    p.$dir === 'rtl' &&
    css`
      animation: ${scrollRightToLeft} 10s linear infinite;
    `}

  // Number of cards * width + gutter
  width: calc(${p => p.$nbSlides} * 112px + ${p => p.$nbSlides - 1} * 26px);
  @media (min-width: ${get('breakpoints.md')}) {
    width: calc(${p => p.$nbSlides} * 152px + ${p => p.$nbSlides - 1} * 26px);
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: calc(${p => p.$nbSlides} * 190px + ${p => p.$nbSlides - 1} * 26px);
  }
`

const ImageContainer = styled(BaseLink)`
  display: block;
  position: relative;
  border-width: 5px;
  border-style: solid;
  border-color: transparent;
  border-radius: 9px;
  transition: border-color 300ms;
  &:hover,
  &:focus {
    border-color: ${get('colors.ashes.900')};
  }

  width: 112px;
  height: 112px;
  @media (min-width: ${get('breakpoints.md')}) {
    width: 152px;
    height: 152px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 190px;
    height: 190px;
  }
`

const TeamMemberInfos = styled.div`
  padding: 0 5px;
  display: flex;
  flex-direction: column;
`

const Name = styled(Typography)`
  color: ${get('colors.white')};
`

const Position = styled(Typography)`
  color: ${get('colors.ashes.900')};
`

const TeamMemberCard = ({ teamMember }) => (
  <div>
    <ImageContainer href={teamMember.linkToPublicNotionPage} target="_blank">
      <Image
        src={teamMember.image}
        layout="fill"
        alt={`${teamMember.firstName} - ${teamMember.position}`}
      />
    </ImageContainer>
    <TeamMemberInfos>
      <Name variant="body.m.bold">{teamMember.name}</Name>
      <Position variant="body.xs.default">{teamMember.position}</Position>
    </TeamMemberInfos>
  </div>
)

const TeamMemberList = ({ carousel, dir, ...props }) => (
  <Carousel $nbSlides={carousel.length} $dir={dir} {...props}>
    {carousel.map((teamMember, index) => (
      <TeamMemberCard
        teamMember={teamMember}
        key={index}
        // Trick to use the GPU for rendering
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
    ))}
  </Carousel>
)

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
  const personsPerCarousel = Math.ceil(ourTeam.teamMembers.length / 2)
  const shuffledPeople = shuffle(ourTeam.teamMembers)
  const carousel1 = shuffledPeople.slice(0, personsPerCarousel)
  const carousel2 = shuffledPeople.slice(
    personsPerCarousel,
    ourTeam.teamMembers.length
  )

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

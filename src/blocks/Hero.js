import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Lottie from 'components/Lottie'
import Typography from 'components/Typography'
import get from 'utils/get'

const Content = styled.div`
  color: ${get('colors.white')};
  grid-column: 1 / 7;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 8;
  }
`

const Title = styled(Typography)`
  display: block;
  max-width: 321px;
  strong:first-child {
    color: ${get('colors.dodgerBlue')};
  }
  strong:nth-child(2) {
    color: ${get('colors.hotPink')};
  }

  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    max-width: 344px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: unset;
  }
`

const Description = styled(Typography)`
  display: block;
  text-align: center;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    text-align: left;
    margin-top: 28px;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 440px;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    max-width: 547px;
  }
`

const Buttons = styled.div`
  margin-top: 44px;
  > * + * {
    margin-left: 11px;
  }

  display: flex;
  justify-content: center;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    justify-content: flex-start;
  }
`

const RightColumn = styled.div`
  grid-column: 7 / -1;
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 8 / -1;
  }
  position: relative;
`

const DesktopAnimation = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.md')}) {
    display: block;
    position: absolute;
    left: 16px;
    background-size: contain;
    width: 368px;
    height: 322px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 450px;
    height: 394px;
    top: 16px;
    left: 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    width: 644px;
    height: 564px;
    top: -16px;
  }
`

const MobileAnimation = styled.div`
  width: 403px;
  height: 481px;
  margin: -32px 16px 0 auto;

  @media (min-width: ${get('breakpoints.md')}) {
    display: none;
  }
`

const Section = styled.section`
  position: relative;
`

const Hero = ({ heroProps, ...props }) => (
  <Section {...props}>
    <Grid>
      <Content>
        <Title
          variant="h1"
          dangerouslySetInnerHTML={{ __html: heroProps.title }}
        />
        <MobileAnimation>
          <Lottie animation={heroProps.lottie.mobile} />
        </MobileAnimation>
        <Description variant="body">{heroProps.description}</Description>
        <Buttons>
          <Button
            href={heroProps.cta1.url}
            target={heroProps.cta1.target}
            color={get('colors.hotPink')}
            variant="secondary"
          >
            <Typography>{heroProps.cta1.title}</Typography>
          </Button>
          <Button
            href={heroProps.cta2.url}
            target={heroProps.cta2.target}
            color={get('colors.hotPink')}
          >
            <Typography>{heroProps.cta2.title}</Typography>
          </Button>
        </Buttons>
      </Content>
      <RightColumn>
        <DesktopAnimation>
          <Lottie animation={heroProps.lottie.desktop} />
        </DesktopAnimation>
      </RightColumn>
    </Grid>
  </Section>
)

export default Hero

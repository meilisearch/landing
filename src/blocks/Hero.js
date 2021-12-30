import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Lottie from 'components/Lottie'
import Typography from 'components/Typography'
import get from 'utils/get'

const Content = styled.div`
  grid-column: 1 / 8;
  overflow: hidden;
  color: ${get('colors.white')};
`

const Title = styled(Typography)`
  padding: 0 16px;
  display: block;
  strong:first-child {
    color: ${get('colors.dodgerBlue')};
  }
  strong:nth-child(2) {
    color: ${get('colors.hotPink')};
  }

  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 0;
  }
`

const Description = styled(Typography)`
  padding: 0 16px;
  margin-top: 28px;
  display: block;
  text-align: center;
  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 0;
    text-align: left;
  }
`

const Buttons = styled.div`
  padding: 0 16px;
  margin-top: 44px;
  > * + * {
    margin-left: 11px;
  }

  display: flex;
  justify-content: space-between;
  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 0;
    justify-content: flex-start;
  }
`

const DesktopAnimation = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.tablet')}) {
    display: block;
    position: absolute;
    right: -8px;
    transform: translateY(-50%);
    background-size: contain;
    width: 450px;
    height: 394px;
    top: 63%;
  }
  @media (min-width: ${get('breakpoints.desktop')}) {
    width: 644px;
    height: 564px;
    top: 66%;
  }
`

const MobileAnimation = styled.div`
  width: 444px;
  height: 481px;
  margin: 0 -68px 0 auto;

  @media (min-width: ${get('breakpoints.tablet')}) {
    display: none;
  }
`

const Hero = ({ heroProps, ...props }) => (
  <section style={{ position: 'relative' }} {...props}>
    <Grid>
      <Content>
        <Title
          variant="h1"
          dangerouslySetInnerHTML={{ __html: heroProps.title }}
        />
        <MobileAnimation>
          <Lottie animation={heroProps.lottie.mobile} />
        </MobileAnimation>
        <Description>{heroProps.description}</Description>
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
    </Grid>
    <DesktopAnimation>
      <Lottie animation={heroProps.lottie.desktop} />
    </DesktopAnimation>
  </section>
)

export default Hero

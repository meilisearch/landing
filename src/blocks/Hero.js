import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Typography from 'components/Typography'
import get from 'utils/get'

const Content = styled.div`
  grid-column: 1 / 8;
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

const RightImage = styled.div`
  background: url('${p => p.$mobileImage}') center right no-repeat;
  width: 100%;
  height: 481px;

  @media (min-width: ${get('breakpoints.tablet')}) {
    position: absolute;
    right: 0;
    transform: translateY(-50%);
    background: url('${p => p.$desktopImage}') center right no-repeat;
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

const Hero = ({ heroProps, ...props }) => (
  <section style={{ position: 'relative' }} {...props}>
    <Grid>
      <Content>
        <Title
          variant="h1"
          dangerouslySetInnerHTML={{ __html: heroProps.title }}
        />
        <RightImage
          $mobileImage={heroProps.mobileBackground}
          $desktopImage={heroProps.desktopBackground}
        />
        <Description>{heroProps.description}</Description>
        <Buttons>
          <Button
            href={heroProps.cta1.url}
            color={get('colors.hotPink')}
            variant="secondary"
          >
            <Typography>{heroProps.cta1.title}</Typography>
          </Button>
          <Button href={heroProps.cta2.url} color={get('colors.hotPink')}>
            <Typography>{heroProps.cta2.title}</Typography>
          </Button>
        </Buttons>
      </Content>
    </Grid>
  </section>
)

export default Hero

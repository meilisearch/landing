import React from 'react'
import styled from 'styled-components'
import BaseGrid from 'components/Grid'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'

const Grid = styled(BaseGrid)`
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 72px;
    position: relative;
  }
`

const Decorator = styled.div`
  display: none;
  @media (min-width: ${get('breakpoints.lg')}) {
    display: block;
    position: absolute;
    background: url('/images/decorator5.svg') no-repeat;
    background-size: 472px 600px;
    width: 472px;
    height: 600px;
    top: -174px;
    left: -228px;
    z-index: 1;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    top: -182px;
    left: -234px;
  }
`

const Illustration = styled.div`
  display: block;
  background: url(${p => p.$mobileImage}) no-repeat;
  background-size: 480px 385px;
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: -106px;
  width: 480px;
  height: 385px;
  @media (min-width: ${get('breakpoints.md')}) {
    left: -18px;
    top: 0;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    background: url(${p => p.$image}) no-repeat;
    background-size: 606px 491px;
    width: 606px;
    height: 491px;
    left: -32px;
    top: -86px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    background-size: 852px 690px;
    width: 852px;
    height: 690px;
    left: 12px;
    top: -216px;
  }
`

const IllustrationColumn = styled.div`
  z-index: 3;
  order: 1;
  grid-column: 3 / -1;
  height: 248px;
  position: relative;
  @media (min-width: ${get('breakpoints.md')}) {
    order: 2;
    grid-column: 8 / -1;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 7 / -1;
  }
`

const ContentColumn = styled.div`
  z-index: 2;
  order: 2;
  grid-column: 1 / -1;
  padding: 64px 32px 32px;
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    order: 1;
    grid-column: 1 / 7;
    padding: 32px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    grid-column: 1 / 6;
  }
`

const Description = styled(Typography)`
  margin-top: 26px;
  color: ${get('colors.ashes.100')};
  opacity: 0.9;
`

const Cta = styled(Button)`
  z-index: 2;
  margin-top: 26px;
`

const FirstSection = ({ section, color }) => {
  return (
    <Grid>
      <Decorator />
      <IllustrationColumn>
        <Illustration
          $image={section.image}
          $mobileImage={section.mobileImage}
        />
      </IllustrationColumn>
      <ContentColumn>
        <Typography variant="title2" forwardedAs="h3">
          {section.title}
        </Typography>
        <Description
          dangerouslySetInnerHTML={{ __html: section.description }}
        />
        <Cta color={color} href={section.cta.url}>
          <Typography variant="ctaBig">{section.cta.title}</Typography>
        </Cta>
      </ContentColumn>
    </Grid>
  )
}

export default FirstSection

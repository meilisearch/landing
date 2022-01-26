import React from 'react'
import styled from 'styled-components'
import BaseGrid from 'components/Grid'
import get from 'utils/get'
import Button from 'components/Button'
import Typography from 'components/Typography'

const Grid = styled(BaseGrid)`
  margin-top: 256px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 96px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 148px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 351px;
  }
`

const Illustration = styled.div`
  display: block;
  background: url(${p => p.$mobileImage}) no-repeat;
  background-size: 340px 263px;
  position: absolute;
  top: -208px;
  right: 0;
  bottom: 0;
  left: -98px;
  width: 340px;
  height: 263px;

  @media (min-width: ${get('breakpoints.md')}) {
    top: auto;
    right: 8px;
    left: auto;
    bottom: 34px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    background: url(${p => p.$image}) no-repeat;
    background-size: 482px 418px;
    width: 482px;
    height: 418px;
    top: auto;
    right: -20px;
    left: auto;
    bottom: -30px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    background-size: 677px 588px;
    width: 677px;
    height: 588px;
    top: auto;
    right: -38px;
    left: auto;
    bottom: -16px;
  }
`

const IllustrationColumn = styled.div`
  order: 1;
  grid-column: 3 / -1;
  position: relative;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 6;
  }
`

const ContentColumn = styled.div`
  order: 2;
  grid-column: 1 / -1;
  padding: 64px 32px 32px;
  background-color: ${get('colors.valhalla.700')};
  border-radius: 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 7 / -1;
    padding: 32px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 8 / -1;
  }
`

const Description = styled(Typography)`
  margin-top: 26px;
  color: ${get('colors.ashes.100')};
  opacity: 0.9;
`

const Cta = styled(Button)`
  margin-top: 26px;
`

const Second = ({ section, color }) => {
  return (
    <Grid>
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

export default Second

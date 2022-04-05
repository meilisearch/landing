import React from 'react'
import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import Cloud from './Cloud'
import OpenSource from './OpenSource'

const Section = styled.section`
  z-index: 2;
  margin-bottom: 58px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-bottom: 82px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-bottom: 142px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-bottom: 120px;
  }
`

const Pricing = ({ pricing, ...props }) => {
  return (
    <Section {...props}>
      <Grid>
        <Cloud cloud={pricing.cloud} />
        <OpenSource openSource={pricing.openSource} />
      </Grid>
    </Section>
  )
}

export default Pricing

import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'

const Section = styled.section`
  color: ${get('colors.white')};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const PreTitle = styled(Typography)`
  color: ${get('colors.hotPink')};
  text-transform: uppercase;
`

const Title = styled(Typography)`
  margin-top: 32px;
  padding: 0 42px;
  max-width: 420px;
  -index: 2;
  strong {
    color: ${get('colors.hotPink')};
  }
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    max-width: 374px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 24px;
    max-width: 542px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 16px;
    max-width: 714px;
  }
`

const Description = styled(Typography)`
  ${get('colors.ashes.100')};
  -index: 2;
  margin-top: 45px;
  padding: 0 16px;
  max-width: 380px;
  opacity: 0.9;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0;
    max-width: 340px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 42px;
    max-width: 370px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 32px;
  }
`

const StarsLeft = styled.div`
  background: url(/images/pricing-hero-stars-left.svg) no-repeat;
  background-size: contain;
  position: absolute;
  width: 48px;
  height: 135px;
  top: 12px;
  left: -12px;
  right: auto;
  bottom: auto;
  z-index: 1;
  @media (min-width: ${get('breakpoints.md')}) {
    width: 103px;
    height: 185px;
    top: 0;
    left: -70px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 85px;
    height: 235px;
    top: 0;
    left: -120px;
  }
`
const StarsRight = styled.div`
  background: url(/images/pricing-hero-stars-right.svg) no-repeat;
  background-size: contain;
  position: absolute;
  width: 41px;
  height: 136px;
  top: 0;
  right: -8px;
  left: auto;
  bottom: auto;
  z-index: 1;
  @media (min-width: ${get('breakpoints.md')}) {
    width: 63px;
    height: 186px;
    top: 0;
    right: -66px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    width: 85px;
    height: 235px;
    top: 0;
    right: -116px;
  }
`

const PricingHero = ({ hero, ...props }) => (
  <Section {...props}>
    <PreTitle variant="preTitle">{hero.preTitle}</PreTitle>
    <div style={{ position: 'relative' }}>
      <Title
        variant="title1"
        forwardedAs="h1"
        dangerouslySetInnerHTML={{ __html: hero.title }}
      />
      <StarsLeft />
      <StarsRight />
    </div>
    <Description>{hero.description}</Description>
  </Section>
)

export default PricingHero

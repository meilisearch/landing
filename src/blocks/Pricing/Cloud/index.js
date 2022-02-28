import React from 'react'
import styled from 'styled-components'
import Typography from 'components/Typography'
import PricingCard from 'components/PricingCard'
import get from 'utils/get'
import Mobile from './Mobile'
import Desktop from './Desktop'

const CloudSection = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    order: 2;
    grid-column: 5 / -1;
  }
`

const HeaderContainer = styled.div`
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 472px;
  }
`
const PricingCardHeader = styled(PricingCard.Header)`
  @media (min-width: ${get('breakpoints.xl')}) {
    .decorator {
      right: 124px;
      top: -28px;
    }
  }
`
const Cloud = ({ cloud, ...props }) => {
  return (
    <CloudSection {...props}>
      <PricingCard>
        <PricingCardHeader>
          <HeaderContainer>
            <Typography variant="title2">{cloud.title}</Typography>
            <Typography style={{ marginTop: 16 }}>
              {cloud.description}
            </Typography>
          </HeaderContainer>
        </PricingCardHeader>
        <PricingCard.Body $bgColor={get('colors.valhalla.700')}>
          <Mobile cloud={cloud} />
          <Desktop cloud={cloud} />
        </PricingCard.Body>
      </PricingCard>
    </CloudSection>
  )
}

export default Cloud

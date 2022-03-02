import React from 'react'
import styled from 'styled-components'
import PricingCard from 'components/PricingCard'
import get from 'utils/get'
import { darken } from 'utils/colors'
import Typography from 'components/Typography'
import Button from 'components/Button'

const OpenSourcePlanWrapper = styled.div`
  grid-column: 1 / -1;
  @media (min-width: ${get('breakpoints.md')}) {
    order: 1;
    grid-column: 1 / 5;
  }
`

const PlanDescription = styled(Typography)`
  opacity: 0.9;
  color: ${get('colors.ashes.100')};
  margin-top: 12px;
`

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`

const OpenSource = ({ openSource }) => {
  return (
    <OpenSourcePlanWrapper>
      <PricingCard>
        <PricingCard.Header $bgColor={darken(get('colors.dodgerBlue'), 60)}>
          <Typography variant="title2" style={{ color: get('colors.white') }}>
            {openSource.title}
          </Typography>
        </PricingCard.Header>
        <PricingCard.Body $bgColor={get('colors.valhalla.600')}>
          <Infos>
            <div>
              <Typography variant="title3">{openSource.plan}</Typography>
              <PlanDescription>{openSource.planDescription}</PlanDescription>
            </div>
            <Button
              href={openSource.cta.href}
              target={openSource.cta.target}
              style={{ marginTop: 28 }}
              variant="secondary"
            >
              <Typography variant="ctaBig">{openSource.cta.title}</Typography>
            </Button>
          </Infos>
        </PricingCard.Body>
      </PricingCard>
    </OpenSourcePlanWrapper>
  )
}

export default OpenSource

import React from 'react'
import styled from 'styled-components'
import PricingCard from 'components/PricingCard'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Column from './Column'

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

const Infos = styled(Column)`
  height: 100%;
`

const OpenSource = ({ openSource }) => {
  return (
    <OpenSourcePlanWrapper>
      <PricingCard>
        <PricingCard.Header $bgColor={get('colors.dodgerBlue.800')}>
          <Typography variant="title.m" style={{ color: get('colors.white') }}>
            {openSource.title}
          </Typography>
        </PricingCard.Header>
        <PricingCard.Body $bgColor={get('colors.valhalla.600')}>
          <Infos>
            <div>
              <Typography variant="title.xs">{openSource.plan}</Typography>
              <PlanDescription>{openSource.planDescription}</PlanDescription>
            </div>
            <Button
              href={openSource.cta.href}
              target={openSource.cta.target}
              style={{ marginTop: 28 }}
              variant="secondary"
            >
              <Typography variant="body.s.bold">
                {openSource.cta.title}
              </Typography>
            </Button>
          </Infos>
        </PricingCard.Body>
      </PricingCard>
    </OpenSourcePlanWrapper>
  )
}

export default OpenSource

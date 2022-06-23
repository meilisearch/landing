import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Grid from 'components/Grid'
import Button from 'components/Button'
import BaseList from 'components/List'
import Typography from 'components/Typography'
import BasePricingCard from 'components/PricingCard'
import { Button as ReakitButton } from 'reakit/Button'

const SUGGESTIONS = {
  CUSTOM: 'CUSTOM',
  LOW: 0,
  MIDDLE: 1,
  HIGH: 2,
}

const getPricingAssistantSuggestion = form => {
  const {
    // useCase,
    // searchesPerMonth,
    feature,
    documentsNumber,
    documentsTotalSize,
    frequency,
  } = form
  if (
    frequency === 'continuously' ||
    parseInt(documentsTotalSize > 100) ||
    parseInt(documentsNumber > 5000000)
  )
    return SUGGESTIONS.CUSTOM
  const dbSize =
    (parseInt(documentsNumber) *
      parseInt(documentsTotalSize) *
      (feature === 'geo' ? 1 : 10)) /
    1000000
  if (dbSize <= 1) return SUGGESTIONS.LOW
  if (dbSize <= 4) return SUGGESTIONS.MIDDLE
  if (dbSize <= 16) return SUGGESTIONS.HIGH
  if (dbSize > 16) return SUGGESTIONS.CUSTOM
}

const PricingCard = styled(BasePricingCard)`
  border-width: 1px;
  width: 100%;
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  text-align: center;
  display: block;
`

const Description = styled(Typography)`
  color: ${get('colors.ashes.900')};
  text-align: center;
  margin-top: 8px;
  margin-bottom: 12px;
`

const ResetButton = styled(ReakitButton)`
  all: initial;
  cursor: pointer;
  display: inline-block;
  margin-left: 8px;
`

const TryAgain = styled(Typography)`
  color: ${p => p.$color};
  text-decoration: underline;
`

const PricingCardHeader = styled.div`
  min-height: auto;
  justify-content: flex-start;
  > div {
    align-items: flex-start;
    text-align: initial;
  }
`

const PricingCardBody = styled.div`
  padding: 20px;
  align-items: flex-start;
`

const CardDescription = styled(Typography)`
  opacity: 0.8;
`

const CustomPlan = ({ data, color }) => {
  return (
    <PricingCard $color={color}>
      <PricingCard.Header
        as={PricingCardHeader}
        hasDecorator={false}
        $color={color}
        style={{ padding: '28px 20px 24px' }}
      >
        <Typography variant="title.capsXs">{data.preTitle}</Typography>
        <Typography variant="body.l.default" style={{ marginTop: 4 }}>
          {data.title}
        </Typography>
      </PricingCard.Header>
      <PricingCard.Body as={PricingCardBody} style={{ padding: '24px 16px' }}>
        <CardDescription
          variant="body.s.default"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        {/* eslint-disable-next-line no-undef */}
        <Button color={color} onClick={() => $crisp.push(['do', 'chat:open'])}>
          <Typography variant="body.s.bold">{data.cta.title}</Typography>
        </Button>
      </PricingCard.Body>
    </PricingCard>
  )
}

const Price = styled.div`
  display: flex;
  align-items: baseline;
`

const List = styled(BaseList)`
  li + li {
    margin-top: 12px;
  }
`

const Plans = ({ data, planIndex, color }) => {
  const planInfos = data.list[planIndex]
  return (
    <PricingCard $color={color}>
      <PricingCard.Header
        as={PricingCardHeader}
        hasDecorator={false}
        $color={color}
        style={{ padding: '28px 20px 24px' }}
      >
        <Typography variant="title.capsXs">{data.preTitle}</Typography>
        <Price>
          <Typography variant="title.s">
            {`$${planInfos.monthlyPrice}`}
          </Typography>
          <Typography variant="body.l.default">{data.perMonth}</Typography>
        </Price>
        <Typography variant="body.xs.default">
          {data.estimation(planInfos.hourPrice)}
        </Typography>
      </PricingCard.Header>
      <PricingCard.Body as={PricingCardBody} style={{ padding: '24px 16px' }}>
        <List>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.ram(planInfos.ram)}
            </Typography>
          </List.Element>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.cpu(planInfos.cpu)}
            </Typography>
          </List.Element>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.disk(planInfos.disk)}
            </Typography>
          </List.Element>
        </List>
        <Button color={color} href={data.cta.href} target={data.cta.target}>
          <Typography variant="body.s.bold">{data.cta.title}</Typography>
        </Button>
      </PricingCard.Body>
    </PricingCard>
  )
}

const Results = ({ form, recommandations, color, onReset }) => {
  const resultToDisplay = getPricingAssistantSuggestion(form)

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Title variant="body.l.default">{recommandations.title}</Title>
      <Description variant="body.m.default">
        {recommandations.description}
        <ResetButton onClick={onReset}>
          <TryAgain variant="body.m.default" $color={color}>
            {recommandations.tryAgain}
          </TryAgain>
        </ResetButton>
      </Description>
      <Grid
        style={{
          gridTemplateColumns: 'repeat(5, 1fr)',
          margin: '0 -24px',
          width: '100%',
        }}
      >
        <div style={{ gridColumn: '2 / 5', margin: '0 -16px' }}>
          {resultToDisplay === SUGGESTIONS.CUSTOM ? (
            <CustomPlan data={recommandations.customOption} color={color} />
          ) : (
            <Plans
              data={recommandations.options}
              planIndex={resultToDisplay}
              color={color}
            />
          )}
        </div>
      </Grid>
    </div>
  )
}

export default Results

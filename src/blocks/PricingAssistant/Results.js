import React from 'react'
import styled from 'styled-components'
import get from 'utils/get'
import Button from 'components/Button'
import BaseList from 'components/List'
import Typography from 'components/Typography'
import BaseResultCard from './ResultCard'
import { Button as ReakitButton } from 'reakit/Button'
import getPricingAssistantSuggestion, {
  SUGGESTIONS,
} from 'utils/getPricingAssistantSuggestion'
import hexToRgb from 'utils/hexToRgb'
import getColorName from 'utils/getColorName'
import { AnalyticsBrowser } from '@segment/analytics-next'

const ResultCard = styled(BaseResultCard)`
  border-width: 1px;
  width: 100%;
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
  color: ${p => p.$color};
  transition: color 300ms;

  &:hover,
  &:focus {
    color: ${p => get(`colors.${getColorName(p.$color)}.400`)};
  }
`

const TryAgain = styled(Typography)`
  text-decoration: underline;
`

const PricingCardHeader = styled.div`
  min-height: auto;
  justify-content: flex-start;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 28px 20px 12px;
  }

  > div {
    align-items: flex-start;
    text-align: initial;
  }
`

const PricingCardBody = styled.div`
  padding: 20px;
  align-items: flex-start;
  height: auto;
`

const CardDescription = styled(Typography)`
  opacity: 0.8;
`

const CustomPlan = ({ data, color, analytics }) => {
  return (
    <ResultCard $color={color}>
      <ResultCard.Header
        as={PricingCardHeader}
        hasDecorator={false}
        $color={color}
      >
        <Typography variant="title.capsXs">{data.preTitle}</Typography>
        <Typography variant="body.l.default" style={{ marginTop: 4 }}>
          {data.title}
        </Typography>
      </ResultCard.Header>
      <ResultCard.Body
        as={PricingCardBody}
        style={{ padding: '24px 16px' }}
        $color={hexToRgb(get(`colors.${getColorName(color)}`), 0.2)}
      >
        <CardDescription
          variant="body.s.default"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <Button
          color={color}
          onClick={() => {
            // eslint-disable-next-line no-undef
            $crisp.push(['do', 'chat:open'])
            analytics?.track('pricing-assistant-cta-click')
          }}
          style={{ marginTop: 28 }}
        >
          <Typography variant="body.s.bold">{data.cta.title}</Typography>
        </Button>
      </ResultCard.Body>
    </ResultCard>
  )
}

const Price = styled.div`
  display: flex;
  align-items: baseline;
`

const List = styled(BaseList)`
  @media (min-width: ${get('breakpoints.md')}) {
    li + li {
      margin-top: 12px;
    }
  }
`

const Plans = ({ data, plan, color, analytics }) => {
  return (
    <ResultCard $color={color}>
      <ResultCard.Header
        as={PricingCardHeader}
        hasDecorator={false}
        $color={color}
      >
        <Typography variant="title.capsXs">{data.preTitle}</Typography>
        <Price>
          <Typography variant="title.s">{`$${plan.monthlyPrice}`}</Typography>
          <Typography variant="body.l.default">{data.perMonth}</Typography>
        </Price>
        <Typography variant="body.xs.default">
          {data.estimation(plan.hourPrice)}
        </Typography>
      </ResultCard.Header>
      <ResultCard.Body
        as={PricingCardBody}
        style={{ padding: '24px 16px' }}
        $color={hexToRgb(get(`colors.${getColorName(color)}`), 0.2)}
      >
        <List>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.ram(plan.ram)}
            </Typography>
          </List.Element>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.cpu(plan.cpu)}
            </Typography>
          </List.Element>
          <List.Element bulletColor={color}>
            <Typography variant="body.s.default">
              {data.disk(plan.disk)}
            </Typography>
          </List.Element>
        </List>
        <Button
          color={color}
          href={data.cta.href}
          target={data.cta.target}
          style={{ marginTop: 16 }}
          onClick={() => analytics?.track('pricing-assistant-cta-click')}
        >
          <Typography variant="body.s.bold">{data.cta.title}</Typography>
        </Button>
      </ResultCard.Body>
    </ResultCard>
  )
}

const Plan = styled.div`
  width: 100%;
  color: ${get('colors.ashes.900')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 26px;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 0 38px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 0 78px;
  }
`

const Title = styled(Typography)`
  color: ${get('colors.white')};
  display: block;
  text-align: center;
`

const ResultsTitle = styled.div`
  margin: 0 -24px;
  @media (min-width: ${get('breakpoints.lg')}) {
    margin: 0;
    padding: 0 38px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 0 50px;
  }
`

const Results = ({ form, recommandations, color, onReset }) => {
  const [reset, setReset] = React.useState(false)
  const suggestedPlan = getPricingAssistantSuggestion(form)
  const analytics = AnalyticsBrowser.load({
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_KEY,
  })

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      analytics?.track('pricing-assistant', {
        form,
        suggestion:
          suggestedPlan === SUGGESTIONS.CUSTOM
            ? 'custom quote'
            : `${suggestedPlan.ram}GB Ram, ${suggestedPlan.cpu} CPU, ${suggestedPlan.disk}GB Disk`,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (reset) return null
  return (
    <>
      <ResultsTitle>
        <Title
          variant="body.l.default"
          dangerouslySetInnerHTML={{ __html: recommandations.title }}
        />
        <Description variant="body.m.default">
          {recommandations.description}
          <ResetButton
            $color={color}
            onClick={() => {
              onReset()
              setReset(true)
            }}
          >
            <TryAgain variant="body.m.default">
              {recommandations.tryAgain}
            </TryAgain>
          </ResetButton>
        </Description>
      </ResultsTitle>
      <Plan>
        {suggestedPlan === SUGGESTIONS.CUSTOM ? (
          <CustomPlan
            data={recommandations.customOption}
            color={color}
            analytics={analytics}
          />
        ) : (
          <Plans
            data={recommandations.options}
            plan={suggestedPlan}
            color={color}
            analytics={analytics}
          />
        )}
      </Plan>
    </>
  )
}

export default Results

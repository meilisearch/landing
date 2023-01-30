import styled, { css } from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import RoundedIcon from 'components/RoundedIcon'
import BasePricingCard from 'components/PricingCard'

const Pricing = styled(Typography)`
  margin-top: 4px;
  margin-bottom: 22px;
  white-space: pre;
  color: ${get('colors.ashes.900')};
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 12px;
  font-weight: ${get('fontWeight.normal')};
  line-height: 150%;

  strong {
    color: white;
    font-family: 'Poppins';
    font-weight: ${get('fontWeight.medium')};
    font-size: 18px;
    line-height: 140%;
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 13px;
    strong {
      font-size: 22px;
    }
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    margin-bottom: ${p => (p.$fullWidth ? '0px' : '32px')};
    font-size: 14px;
    strong {
      font-size: 26px;
    }
  }
`

const PricingCard = styled(BasePricingCard)`
  justify-content: flex-start;
  ${p =>
    p.$fullWidth &&
    css`
      @media (min-width: ${get('breakpoints.md')}) {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        > * + * {
          margin-left: 32px;
        }
      }
    `}
`

const Title = styled(Typography)`
  color: ${p => get(p.$color || 'colors.hotPink')};
  margin-top: 8px;
`

const PlanDescription = styled(Typography)`
  color: ${get('colors.ashes.600')};
  font-weight: ${get('fontWeight.normal')};
  margin-bottom: ${p => (p.$fullWidth ? '0px' : '16px')};

  strong {
    color: ${get('colors.white')};
    font-weight: ${get('fontWeight.semibold')};
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  li + li {
    margin-top: 12px;
  }
  a {
    color: ${p => get(p.$color)};
    text-decoration: underline;
  }

  @media (min-width: ${get('breakpoints.xl')}) {
    margin-bottom: ${p => (p.$fullWidth ? '0px' : '20px')};

    li + li {
      margin-top: 16px;
    }
  }
`

const Cta = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;
  height: 38px;

  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: ${p => (p.$fullWidth ? '0px' : '20px')};
  }

  @media (min-width: ${get('breakpoints.lg')}) {
    height: 45px;
  }
`

const UsageBasedPricing = styled(Typography)`
  color: ${get('colors.ashes.900')};
  font-size: 11px;
  margin: auto 0;
  strong {
    color: ${get('colors.hotPink')};
  }
`

const Plan = ({ plan, ...props }) => (
  <PricingCard
    $fullWidth={plan.fullWidth}
    color={plan.color}
    active={plan.active}
    {...props}
  >
    <div>
      <RoundedIcon color={plan.color} icon={plan.icon}></RoundedIcon>
      <Title $color={plan.color} variant="body.m.bold">
        {plan.title}
      </Title>
      <Pricing
        $fullWidth={plan.fullWidth}
        dangerouslySetInnerHTML={{ __html: plan.pricing }}
      />
    </div>
    <PlanDescription
      $fullWidth={plan.fullWidth}
      $color={plan.color}
      variant="body.xs.bold"
      dangerouslySetInnerHTML={{ __html: plan.planDescription }}
    />
    {plan.ubp && (
      <UsageBasedPricing dangerouslySetInnerHTML={{ __html: plan.ubp }} />
    )}
    <Cta
      variant="secondary"
      color={get(plan.color)}
      href={plan.cta.href}
      target={plan.cta.target}
      $fullWidth={plan.fullWidth}
    >
      <Typography variant="body.s.bold">{plan.cta.title}</Typography>
    </Cta>
  </PricingCard>
)

export default Plan

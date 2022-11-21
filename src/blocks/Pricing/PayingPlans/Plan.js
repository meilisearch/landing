import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import RoundedIcon from 'components/RoundedIcon'
import PricingCard from 'components/PricingCard'
import Pricing from '../CardPricingTypography'

const Title = styled(Typography)`
  color: ${get('colors.hotPink')};
  margin-top: 8px;
`

const Specification = styled(Typography)`
  display: block;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  color: ${get('colors.ashes.600')};
  margin-top: 7px;

  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 11px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    font-size: 12px;
    margin-top: 12px;
  }
`

const PlanDescription = styled(Typography)`
  color: white;
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 32px;
  }
`

const Cta = styled(Button)`
  margin-top: 16px;
  padding: 10px 20px;
  height: 38px;
  @media (min-width: ${get('breakpoints.lg')}) {
    height: 45px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 32px;
  }
`

const Plan = ({ plan, ...props }) => (
  <PricingCard color="colors.hotPink" selected={plan.default} {...props}>
    <div>
      <RoundedIcon icon={plan.icon}></RoundedIcon>
      <Title variant="body.m.bold">{plan.title}</Title>
      <Pricing dangerouslySetInnerHTML={{ __html: plan.pricing }} />
      <PlanDescription variant="body.xs.bold">
        {plan.planDescription}
      </PlanDescription>
      <div>
        {plan.specifications?.map(specification => (
          <Specification key={specification}>{specification}</Specification>
        ))}
      </div>
    </div>
    <Cta
      variant="secondary"
      color={get('colors.hotPink')}
      href={plan.cta.href}
      target={plan.cta.target}
    >
      <Typography variant="body.s.bold">{plan.cta.title}</Typography>
    </Cta>
  </PricingCard>
)

export default Plan

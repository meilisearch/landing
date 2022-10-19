import styled from 'styled-components'
import get from 'utils/get'
import Typography from 'components/Typography'
import Button from 'components/Button'
import RoundedIcon from 'components/RoundedIcon'
import BaseCard from 'components/Card'

const Card = styled(BaseCard)`
  padding: 16px;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 24px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 32px;
  }
`

const Title = styled(Typography)`
  color: ${get('colors.hotPink')};
  margin-top: 4px;
`

const Pricing = styled(Typography)`
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
    font-size: 14px;
    strong {
      font-size: 26px;
    }
  }
`

const Specification = styled(Typography)`
  display: block;
  font-weight: 400;
  font-size: 10px;
  line-height: 150%;
  @media (min-width: ${get('breakpoints.lg')}) {
    font-size: 11px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    font-size: 12px;
  }
`

const Specifications = styled.div`
  color: ${get('colors.ashes.600')};
  margin-top: 16px;
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 30px;
  }

  ${Specification} + ${Specification} {
    margin-top: 7px;
    @media (min-width: ${get('breakpoints.xl')}) {
      margin-top: 12px;
    }
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

const PricingCard = ({ plan, ...props }) => (
  <Card $bgColor="colors.valhalla.600" {...props}>
    <div>
      <RoundedIcon icon={plan.icon}></RoundedIcon>
      <Title variant="body.m.bold">{plan.title}</Title>
      <Pricing dangerouslySetInnerHTML={{ __html: plan.pricing }} />
      <Specifications>
        {plan.specifications?.map(specification => (
          <Specification key={specification}>{specification}</Specification>
        ))}
      </Specifications>
    </div>
    <Cta
      variant="secondary"
      color={get('colors.white')}
      href={plan.cta.href}
      target={plan.cta.target}
    >
      <Typography variant="body.s.bold">{plan.cta.title}</Typography>
    </Cta>
  </Card>
)

export default PricingCard

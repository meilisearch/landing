import styled from 'styled-components'
import get from 'utils/get'
import hexToRgb from 'utils/hexToRgb'
import Typography from 'components/Typography'
import Button from 'components/Button'

const PricingCardWrapper = styled.div`
  background-color: ${get('colors.valhalla.600')};
  border-radius: 16px;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 24px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 26px 32px 40px;
  }
`

const PlanIcon = styled.div`
  background-color: ${hexToRgb(get('colors.hotPink'), 0.2)};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${get('colors.hotPink')};
  padding: 8px;
`

const Title = styled(Typography)`
  color: ${get('colors.hotPink')};
  margin-top: 4px;
`

const Pricing = styled(Typography)`
  color: ${get('colors.ashes.900')};
  display: block;

  strong {
    color: white;
    font-family: 'Poppins';
    font-size: 26px;
    line-height: 140%;
  }
`

const Specification = styled(Typography)`
  display: block;
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
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 32px;
  }
`

const PricingCard = ({ plan, ...props }) => {
  const Icon = plan.icon
  return (
    <PricingCardWrapper {...props}>
      <div>
        <PlanIcon>
          <Icon />
        </PlanIcon>
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
    </PricingCardWrapper>
  )
}
export default PricingCard

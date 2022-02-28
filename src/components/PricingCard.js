import styled from 'styled-components'
import get from 'utils/get'

const PricingCard = styled.div`
  border: 2px solid ${get('colors.dodgerBlue')};
  border-radius: 16px;
  overflow: hidden;
`

const PricingCardHeaderWrapper = styled.div`
  background-color: ${p => p.$bgColor || get('colors.dodgerBlue')};
  color: ${get('colors.white')};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  min-height: 164px;
`

const Decorator = styled.div`
  background: url(images/decorator6.svg) no-repeat;
  background-size: 209px 180px;
  position: absolute;
  top: -11px;
  right: -9px;
  width: 209px;
  height: 180px;
  z-index: 1;
`

const PricingCardHeader = ({ children, ...props }) => (
  <PricingCardHeaderWrapper {...props}>
    <div style={{ ZIndex: 2 }}>{children}</div>
    <Decorator />
  </PricingCardHeaderWrapper>
)

const PricingCardBody = styled.div`
  background-color: transparent;
  color: ${get('colors.ashes.100')};
  padding: 28px 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    padding: 28px 24px;
  }
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 28px 32px;
  }
`

PricingCard.Header = PricingCardHeader
PricingCard.Body = PricingCardBody

export default PricingCard

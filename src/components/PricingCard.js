import styled from 'styled-components'
import get from 'utils/get'

const PricingCard = styled.div`
  border: 2px solid ${p => p.$color || get('colors.dodgerBlue')};
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const PricingCardHeaderWrapper = styled.div`
  background-color: ${p => p.$color || get('colors.dodgerBlue')};
  color: ${get('colors.white')};
  padding: 16px;
  position: relative;
  overflow: hidden;
  min-height: 164px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
  position: relative;
  text-align: center;
`

const PricingCardHeader = ({ children, hasDecorator = true, ...props }) => (
  <PricingCardHeaderWrapper {...props}>
    <HeaderContent>{children}</HeaderContent>
    {hasDecorator && <Decorator className="decorator" />}
  </PricingCardHeaderWrapper>
)

const PricingCardBody = styled.div`
  color: ${get('colors.ashes.100')};
  background-color: ${p => p.$color || get('colors.valhalla')};
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

PricingCard.Header = PricingCardHeader
PricingCard.Body = PricingCardBody

export default PricingCard

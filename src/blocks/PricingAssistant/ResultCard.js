import styled from 'styled-components'
import get from 'utils/get'

const ResultCard = styled.div`
  border: 2px solid ${p => p.$color || get('colors.dodgerBlue')};
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ResultCardHeaderWrapper = styled.div`
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

const ResultCardHeader = ({ children, hasDecorator = true, ...props }) => (
  <ResultCardHeaderWrapper {...props}>
    <HeaderContent>{children}</HeaderContent>
    {hasDecorator && <Decorator className="decorator" />}
  </ResultCardHeaderWrapper>
)

const ResultCardBody = styled.div`
  color: ${get('colors.ashes.100')};
  background-color: ${p => p.$color || get('colors.valhalla')};
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

ResultCard.Header = ResultCardHeader
ResultCard.Body = ResultCardBody

export default ResultCard

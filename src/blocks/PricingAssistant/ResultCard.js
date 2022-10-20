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

const ResultCardHeader = styled.div`
  background-color: ${p => p.$color || get('colors.dodgerBlue')};
  color: ${get('colors.white')};
  padding: 28px 16px 14px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 2;
`

const ResultCardBody = styled.div`
  color: ${get('colors.ashes.100')};
  background-color: ${get('colors.valhalla')};
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
`

ResultCard.Header = ResultCardHeader
ResultCard.Body = ResultCardBody

export default ResultCard

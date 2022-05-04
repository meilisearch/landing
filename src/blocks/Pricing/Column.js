import styled from 'styled-components'
import get from 'utils/get'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 28px 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    padding: 28px 24px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    padding: 24px 26px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    padding: 28px 32px;
  }
`

export default Column

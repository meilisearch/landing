import styled from 'styled-components'
import get from 'utils/get'

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  max-width: 504px;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 896px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 1136px;
  }
`

export default Grid

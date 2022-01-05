import styled from 'styled-components'
import get from 'utils/get'

const Grid = styled.div`
  @media (min-width: ${get('breakpoints.tablet')}) {
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 16px;
    max-width: 896px;
  }
  @media (min-width: ${get('breakpoints.tablet')}) {
    max-width: 1136px;
  }
`

export default Grid

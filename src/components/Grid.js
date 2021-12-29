import styled from 'styled-components'
import get from 'utils/get'

const Grid = styled.div`
  @media (min-width: ${get('breakpoints.tablet')}) {
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 8px;
    max-width: 1080px;
  }
`

export default Grid

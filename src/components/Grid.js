import styled from 'styled-components'
import get from 'utils/get'

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  max-width: 504px;
  max-width: calc((88px * 5) + (16px * 4));

  @media (min-width: ${get('breakpoints.md')}) {
    grid-template-columns: repeat(12, 1fr);
    max-width: calc((44px * 12) + (16px * 11));
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: calc((60px * 12) + (16px * 11));
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    max-width: calc((80px * 12) + (16px * 11));
  }
`

export default Grid

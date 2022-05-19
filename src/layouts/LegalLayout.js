import styled from 'styled-components'
import Grid from 'components/Grid'
import get from 'utils/get'
import hexToRgb from 'utils/hexToRgb'

const ResourceCenter = styled(Grid)`
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 1328px;
    padding: 0 24px;
  }
`

const LeftColumn = styled.div`
  grid-column: 1 / -1;
  position: sticky;
  top: 98px;
  height: 50px;
  margin: 0 -200px;
  padding: 0 216px;
  border-color: ${hexToRgb(get('colors.ashes.900'), 0.2)};
  border-style: solid;
  border-width: 1px 0px 1px 0px;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 1 / 4;
    position: initial;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
  }
`

const MiddleColumn = styled.div`
  grid-column: 1 / -1;
  padding: 0 16px;

  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 4 / 12;
    padding: 0;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 4 / 10;
  }
`

const RightColumn = styled.div`
  @media (min-width: ${get('breakpoints.md')}) {
    grid-column: 12 / -1;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    grid-column: 10 / -1;
  }
`

ResourceCenter.LeftColumn = LeftColumn
ResourceCenter.MiddleColumn = MiddleColumn
ResourceCenter.RightColumn = RightColumn

export default ResourceCenter

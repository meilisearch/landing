import styled from 'styled-components'
import Grid from 'components/Grid'

const ResourceCenter = styled(Grid)``

const LeftColumn = styled.div`
  grid-column: 1 / 4;
`

const MiddleColumn = styled.div`
  grid-column: 4 / 10;
`

const RightColumn = styled.div`
  grid-column: 10 / -1;
`

ResourceCenter.LeftColumn = LeftColumn
ResourceCenter.MiddleColumn = MiddleColumn
ResourceCenter.RightColumn = RightColumn

export default ResourceCenter

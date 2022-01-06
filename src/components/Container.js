import styled from 'styled-components'
import get from 'utils/get'

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 100%;
  @media (min-width: ${get('breakpoints.lg')}) {
    max-width: 1328px;
  }
`

export default Container

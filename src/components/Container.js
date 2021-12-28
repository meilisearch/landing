import styled from 'styled-components'
import get from 'utils/get'

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  width: 100%;
  padding: 0 16px;
  @media (min-width: ${get('breakpoints.tablet')}) {
    padding: 0 26px;
  }
  @media (min-width: ${get('breakpoints.desktop')}) {
    width: 1328px;
  }
`

export default Container

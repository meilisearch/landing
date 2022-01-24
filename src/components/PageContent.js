import styled from 'styled-components'
import get from 'utils/get'

const PageContent = styled.main`
  overflow: hidden;
  padding: 0 16px;
  @media (min-width: ${get('breakpoints.md')}) {
    padding: 0 32px;
  }
`

export default PageContent

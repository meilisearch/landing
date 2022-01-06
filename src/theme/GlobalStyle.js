import { createGlobalStyle } from 'styled-components'
import get from 'utils/get'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: ${get('colors.valhalla')};
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  #__next {
    overflow: hidden;
    padding: 0 16px;
    @media (min-width: ${get('breakpoints.md')}) {
      padding: 0 32px;
    }
  }
`

export default GlobalStyle

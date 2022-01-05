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
`

export default GlobalStyle

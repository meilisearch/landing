import { createGlobalStyle } from 'styled-components'
import get from 'utils/get'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    background-color: ${get('colors.valhalla')};
    scroll-behavior: smooth;
    font-smooth: auto;
    -webkit-font-smoothing: antialiased;
    --header-height-mobile: 98px;
    --header-height-desktop: 88px;
    --banner-height: 72px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`

export default GlobalStyle

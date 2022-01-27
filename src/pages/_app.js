import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import Script from 'next/script'
import theme from 'theme'
import { appWithTranslation } from 'next-i18next'

// Template for every page
export function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Script
        id="crisp-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="38a71dd2-729c-4970-b061-3e1db1c1eb20";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
      />
      <Script
        id="fathom-script"
        strategy="afterInteractive"
        src="https://cdn.usefathom.com/script.js"
        data-site="QNBPJXIV"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)

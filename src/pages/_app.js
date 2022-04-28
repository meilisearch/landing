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
        dangerouslySetInnerHTML={{
          __html: `window.$crisp=[];window.CRISP_WEBSITE_ID="38a71dd2-729c-4970-b061-3e1db1c1eb20";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`,
        }}
      />
      <Script
        id="fathom-script"
        src="https://cdn.usefathom.com/script.js"
        data-site="QNBPJXIV"
      />
      <Script
        id="hotjar-script"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1035453,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
      <Script
        id="segment"
        dangerouslySetInnerHTML={{
          __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="KIC0Lcb5C9ssRY79dUKPOK8Wq6wLHiUP";;analytics.SNIPPET_VERSION="4.15.3";
          analytics.load("KIC0Lcb5C9ssRY79dUKPOK8Wq6wLHiUP");
          analytics.page();
          }}();
          `,
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)

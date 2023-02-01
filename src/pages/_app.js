import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import Script from 'next/script'
import theme from 'theme'
import BaseLayout from 'layouts/BaseLayout'

const Scripts = () => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
    return null
  }
  return (
    <>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/0ec5a8e516eccaa724a461f6/script.js"
      />
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
        id="amplitude-script"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){"use strict";!function(e,t){var r=e.amplitude||{_q:[],_iq:[]};if(r.invoked)e.console&&console.error&&console.error("Amplitude snippet has been loaded.");else{var n=function(e,t){e.prototype[t]=function(){return this._q.push({name:t,args:Array.prototype.slice.call(arguments,0)}),this}},s=function(e,t,r){return function(n){e._q.push({name:t,args:Array.prototype.slice.call(r,0),resolve:n})}},o=function(e,t,r){e[t]=function(){if(r)return{promise:new Promise(s(e,t,Array.prototype.slice.call(arguments)))}}},i=function(e){for(var t=0;t<y.length;t++)o(e,y[t],!1);for(var r=0;r<g.length;r++)o(e,g[r],!0)};r.invoked=!0;var c=t.createElement("script");c.type="text/javascript",c.integrity="sha384-lyGcqRAilM5YOiZT3ktByF3Mv52pltOelJ66zwfcAZ/4s8cB1sSo7yMF2XWh+bzX",c.crossOrigin="anonymous",c.async=!0,c.src="https://cdn.amplitude.com/libs/analytics-browser-1.6.8-min.js.gz",c.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var a=t.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a);for(var u=function(){return this._q=[],this},l=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove","getUserProperties"],p=0;p<l.length;p++)n(u,l[p]);r.Identify=u;for(var d=function(){return this._q=[],this},v=["getEventProperties","setProductId","setQuantity","setPrice","setRevenue","setRevenueType","setEventProperties"],f=0;f<v.length;f++)n(d,v[f]);r.Revenue=d;var y=["getDeviceId","setDeviceId","getSessionId","setSessionId","getUserId","setUserId","setOptOut","setTransport","reset"],g=["init","add","remove","track","logEvent","identify","groupIdentify","setGroup","revenue","flush"];i(r),r.createInstance=function(){var e=r._iq.push({_q:[]})-1;return i(r._iq[e]),r._iq[e]},e.amplitude=r}}(window,document)}();
            amplitude.init("c823626ba80dd6aafb16601a74e0f603");
          `,
        }}
      />
    </>
  )
}

// Template for every page
export function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Scripts />
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  )
}

export default App

import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-JEYE1RNNJV"/>
<Script id="my-script" strategy="lazyOnload">
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JEYE1RNNJV', {
    page_path: window.location.pathname,
    });
  `}
</Script>

      <body 
    //   className="bg-white"
      >
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGQ35MD"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
// ./pages/_document.js
import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="Description"
            content="Chestionare DRPCIV, permise, școli de șoferi. Tot ce ai nevoie pentru șofat"
          />

          <meta name="application-name" content="SoferOnline - App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta
            name="description"
            content="SoferOnline - Chestionare DRPCIV, permise, școli de șoferi. Tot ce ai nevoie pentru șofat"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="theme-color" content="#000000" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SoferOnline" />
          <meta
            property="og:description"
            content="Chestionare DRPCIV, permise, școli de șoferi. Tot ce ai nevoie pentru șofat."
          />
          <meta property="og:site_name" content="SoferOnline.ro" />
          <meta property="og:url" content="https://web.soferonline.ro" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <script async src="https://app.insignal.co/pixel/qhkBh1dA0Cy4AP46"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Empty script tag as chrome bug fix, see https://stackoverflow.com/a/42969608/943337 */}
          <script> </script>
        </body>
      </Html>
    )
  }
}

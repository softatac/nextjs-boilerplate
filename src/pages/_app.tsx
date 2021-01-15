import Head from 'next/head'
import Router from 'next/router'
import {ToastContainer} from 'react-toastify'
import getConfig from 'next/config'
import {RewriteFrames, Debug} from '@sentry/integrations'
import * as Sentry from '@sentry/node'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-toastify/dist/ReactToastify.css'

import ProvideAuth from '@context/auth'
import Layout from '@organism/Layout'
import {ServerSideProps} from '@lib/ssr'
import ProvideModal from '@context/modal'
import '../styles/global.css'

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  const config = getConfig()
  const distDir = `${config.serverRuntimeConfig.rootDir}/.next`
  const sentryOptions = {
    enabled: process.env.NODE_ENV === 'production',
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          frame.filename = frame.filename.replace(distDir, 'app:///_next')
          return frame
        },
      }),
    ],
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  } as Sentry.NodeOptions

  if (process.env.NODE_ENV !== 'production') {
    // Don't actually send the errors to Sentry
    sentryOptions.beforeSend = (event) => {
      console.warn('@sentryEvent', event)
      return event
    }

    // Instead, dump the errors to the console
    sentryOptions.integrations = [
      new Debug({
        // Trigger DevTools debugger instead of using console.log
        debugger: false,
      }),
    ]
  }
  Sentry.init(sentryOptions)
}
interface AppProps {
  Component: React.FC<ServerSideProps>
  pageProps: ServerSideProps
}

const getLayout = (Component) => Component.getLayout || Layout // (({children}) => <>{children}</>)

export default function App({Component, pageProps}: AppProps) {
  const PageLayout = getLayout(Component)
  const {initialAuthState} = pageProps

  return (
    <>
      <Head>
        <title>SoferOnline - Cu șoferi, pentru șoferi</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <ProvideAuth initialValue={initialAuthState}>
        <ProvideModal>
          <PageLayout router={Router}>
            <Component {...pageProps} />
          </PageLayout>
        </ProvideModal>
      </ProvideAuth>

      <ToastContainer />
    </>
  )
}

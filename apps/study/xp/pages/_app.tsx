import { AppProps } from 'next/app'
import Head from 'next/head'
import '../global.css'
import { ToastNotification } from '@kira/ui'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to xp!</title>
      </Head>
      <main className="app">
        <ToastNotification />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp

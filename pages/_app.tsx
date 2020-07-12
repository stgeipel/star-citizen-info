import '../assets/style.css'
import Head from '../components/Head'
import React from 'react'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  )
}

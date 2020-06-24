import '../assets/style.css'
import Head from '../components/Head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  )
}

import '../assets/style.css';
import Head from '../components/Head';
import React, { useState, useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  const [key, setKey] = useState(undefined);

  useEffect(() => {
    setKey(localStorage.getItem('theme'));
  }, []);

  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
}

import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

const Home = () => {
  const { data, error } = useSWR('/api/places', fetcher)

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data && data.places.map((d) => <span>{d.name}</span>)}
      <main></main>
    </div>
  )
}

export default Home

import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'

const Home = () => {
  const { data, error } = useSWR(
    `{
      Movie(title: "Inception") {
        releaseDate
        actors {
          name
        }
      }
    }`,
    fetcher
  )

  return (
    <div className="container">
      <Head>
        <title>Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  )
}

export default Home

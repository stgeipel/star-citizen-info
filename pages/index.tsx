import Head from 'next/head'
import { useState } from 'react'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const Home = () => {
  const { data, error } = useSWR(
    `{
      ship {
        name
        pirce
        company {
          name
          short_name
        }
        classification {
          shiptype
        }
        cargo_capacity
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
      {data && data.ship.map((s) => <span>{s.name}</span>)}
      <main></main>
    </div>
  )
}

export default Home

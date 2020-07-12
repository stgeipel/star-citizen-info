import Head from 'next/head'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import ShipCard from '../components/ShipCard'
import { IShip } from '../types/Ship'

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
        develop_status {
          value
        }
      }
    }
    `,
    fetcher
  )

  return (
    <>
      <div>
        <Head>
          <title>Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {data && data.ship.map((s) => <ShipCard data={s}></ShipCard>)}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .max-w-7xl {
            max-width: 80rem;
          }
        `}
      </style>
    </>
  )
}

export default Home

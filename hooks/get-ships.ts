import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { IShip } from '../types/Ship'

function getShips(): IShip[] {
  const { data: { ship } = {} } = useSWR<{ ship: IShip[] }>(
    `{
      ship {
        name
        price
        company {
          name
          short_name
        }
        classification {
          shiptype
        }
        cargo_capacity
        ship_develop_status {
          value
        }
      }
    }
    `,
    fetcher
  )
  return ship
}
export default getShips

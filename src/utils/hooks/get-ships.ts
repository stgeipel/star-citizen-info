import useSWR from 'swr';
import fetcher from '../fetcher';
import { Ship } from '../../types/Ship';

function GetShips(): Ship[] {
  const { data: { ship } = {} } = useSWR<{ ship: Ship[] }>(
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
  );
  return ship;
}
export default GetShips;

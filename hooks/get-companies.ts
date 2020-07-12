import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { ICompany } from '../types/Ship'

function getCompanies(): ICompany[] {
  const { data: { company } = {} } = useSWR<{ company: ICompany[] }>(
    `{
        company (order_by: {name:asc}) {
          name
          short_name
        }
      }      
    `,
    fetcher
  )
  return company
}
export default getCompanies

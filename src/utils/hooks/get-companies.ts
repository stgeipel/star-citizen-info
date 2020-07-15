import useSWR from 'swr';
import fetcher from '../fetcher';
import { Company } from '../../types/Ship';

function GetCompanies(): Company[] {
  const { data: { company } = {} } = useSWR<{ company: Company[] }>(
    `{
        company (order_by: {name:asc}) {
          name
          short_name
        }
      }      
    `,
    fetcher
  );
  return company;
}
export default GetCompanies;

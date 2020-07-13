import Head from 'next/head';

import ShipCard from '../components/ShipCard';
import { useState } from 'react';
import getShips from '../hooks/get-ships';
import getCompanies from '../hooks/get-companies';
import { ICompany } from '../types/Ship';

const Home = () => {
  const [filter, setFilter] = useState<ICompany>();
  const ships = getShips();
  const companies = getCompanies();

  return (
    <>
      <div>
        <Head>
          <title>Info</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative bg-gray-100 pt-8 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div>
            {companies &&
              companies.map((c) => (
                <div role="button" onClick={(e) => setFilter(c)}>
                  {c.name}
                </div>
              ))}
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
              {ships &&
                (filter == null
                  ? ships.map((s) => (
                      <ShipCard key={s.name} data={s}></ShipCard>
                    ))
                  : ships
                      .filter((s) => s.company.short_name == filter.short_name)
                      .map((s) => <ShipCard key={s.name} data={s}></ShipCard>))}
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
  );
};

export default Home;

import React from 'react';
import Shipstatus from './Shipstatus';
import { Ship } from '../types/Ship';
import { formatNumber } from '../utils/fotmattings';

export interface Props {
  data: Ship;
}

const ShipCard: React.FC<Props> = ({ data: ship }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-1 dark:bg-gray-800 p-6 flex flex-col justify-between bg-white">
      <div className="flex-1">
        <a href="#" className="text-base text-gray-500">
          {ship.company.name}
        </a>
        <div className="float-right">
          <Shipstatus status={ship.ship_develop_status}></Shipstatus>
        </div>
        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-white">
          {ship.name}
        </h3>
        <div className="mt-3 sm:mx-6">
          <dl className="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">
                Cargokapatzität
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-300">
                {ship.cargo_capacity}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500 ">
                Preis
              </dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900 dark:text-gray-300">
                {formatNumber(ship.price)} aUEC
              </dd>
            </div>
            {/* <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">Email address</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">margotfoster@example.com</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm leading-5 font-medium text-gray-500">Salary expectation</dt>
              <dd className="mt-1 text-sm leading-5 text-gray-900">$120,000</dd>
            </div> */}
          </dl>
        </div>
      </div>
    </div>
  </div>
);

export default ShipCard;

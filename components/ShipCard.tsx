import Shipstatus from './Shipstatus'
import { IShip } from '../types/Ship'

const ShipCard = ({ data: ship }: { data: IShip }) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <a href="#" className="text-base text-gray-500">
          {ship.company.name}
        </a>
        <div className="float-right">
          <Shipstatus status={ship.develop_status}></Shipstatus>
        </div>
        <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">{ship.name}</h3>
        <p className="mt-3 text-base leading-6 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
          praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
        </p>
      </div>
    </div>
  </div>
)

export default ShipCard

import { IStatus } from '../types/Ship'

const Shipstatus = ({ status }: { status: IStatus }) => {
  if (status.value == 'Flight Ready') {
    return (
      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800">
        {status.value}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800">
      {status.value}
    </span>
  )
}

export default Shipstatus

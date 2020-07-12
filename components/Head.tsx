import React from 'react'

const Head = () => (
  <nav className="flex items-center justify-between flex-wrap bg-black p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">Star Citizen Info</span>
      <div className="hidden md:ml-6 md:flex md:items-center">
        <a
          href="#"
          className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Team
        </a>
        <a
          href="#"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Projects
        </a>
        <a
          href="#"
          className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        >
          Calendar
        </a>
      </div>
    </div>
  </nav>
)

export default Head

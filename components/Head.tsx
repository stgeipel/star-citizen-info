import React, { useState } from 'react';
import Transition from '../lib/transition';

const Head = (theme, setTheme) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-background-primary p-4 shadow-xl">
        <div className="flex items-center flex-shrink-0  mr-6">
          <span className="font-semibold text-xl tracking-tight text-copy-primary">
            Star Citizen Info
          </span>

          {/* <div className="hidden md:ml-6 md:flex md:items-center">
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
      </div> */}
        </div>
        {/* <!-- right side of nav --> */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="ml-3 relative">
            <div>
              <div className="flex items-center justify-center">
                <label
                  htmlFor="toogleA"
                  className="flex items-center cursor-pointer"
                >
                  <div className="relative">
                    <input id="toogleA" type="checkbox" className="hidden" />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
                  </div>
                  <div className="ml-3 text-gray-700 font-medium"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .toggle__dot {
          top: -0.25rem;
          left: -0.25rem;
          transition: all 0.3s ease-in-out;
        }

        input:checked ~ .toggle__dot {
          transform: translateX(100%);
          background-color: #48bb78;
        }
      `}</style>
    </>
  );
};

export default Head;

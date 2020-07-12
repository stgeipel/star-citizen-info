const Ship = (ship) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img
        className="h-48 w-full object-cover"
        src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
        alt=""
      />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm leading-5 font-medium text-indigo-600">
          <a href="#" className="hover:underline">
            Blog
          </a>
        </p>
        <a href="#" className="block">
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
            Boost your conversion rate
          </h3>
          <p className="mt-3 text-base leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium
            praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
          </p>
        </a>
      </div>
    </div>
  </div>
)

export default Ship

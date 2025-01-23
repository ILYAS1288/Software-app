import React, { useState } from "react";

const Order = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="  right-0 top-24 w-auto sm:w-32 lg:w-72 bg-gray-100 p-6 h-auto border-l">
      {/* Toggle Button for Small Screens */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {isDropdownOpen ? "Close Order" : "View Order"}
        </button>
      </div>



      {/* Order Content */}
      {(isDropdownOpen || window.innerWidth >= 640) && ( // Show dropdown if open or on larger screens
        <div className=" border border-gray-300 rounded-md ">
        <h1 className="text-xl mb-2">ORDER #</h1>
        <div className="flex space-x-1 items-center">
          <img
            src="/photos/7.png"
            alt="Order Image"
            className="w-5 h-5 rounded-md"
          />
          <p className="">Guess:</p>
          <h2 className="text-justify pl-5">Table:</h2>
        </div>
      </div>
      )}
    </div>
  );
};

export default Order;

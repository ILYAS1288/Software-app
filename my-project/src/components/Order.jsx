import React, { useState } from "react";

const Order = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="absolute right-0 top-0 w-auto sm:w-32 lg:w-1/3 bg-gray-100 p-6 h-full border-l">
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
        <div className="mt-4">
          <h1 className="text-xl font-bold mb-4">ORDER #</h1>
          <div className="flex-block">
            <img
              src="/photos/7.png"
              alt="Order Image"
              className="w-10 h-10 rounded-md"
            />
            <div className="flex space-x-4 justify-between">
              <p className="text-lg sm:text-xl font-medium">Guess:</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Table
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;

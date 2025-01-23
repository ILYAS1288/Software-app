import React, { useState } from "react";

const Tablelist = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="m-3 bg-slate-50 md:w-11/12 justify-center p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">TABLELIST</h1>

        {/* Toggle Button for Small Screens */}
        <div className="sm:hidden mt-4">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          >
            {isDropdownOpen ? "Close Tables" : "View Tables"}
          </button>
        </div>

        {/* Buttons for Larger Screens or Dropdown for Small Screens */}
        {(isDropdownOpen || window.innerWidth >= 640) && ( // Show dropdown if open or on larger screens
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="px-6 py-2 bg-blue-500 text-white shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
              First Floor
            </button>
            <button className="px-6 py-2 bg-green-500 text-white shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none">
              Second Floor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tablelist;

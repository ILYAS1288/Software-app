import React from 'react';

const Header = () => {
  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="p-4 bg-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        {/* Logo */}
        
        <h1 className="text-2xl font-bold flex space-x-1">
          <span className="text-blue-500">P</span>
          <span className="text-green-500">O</span>
          <span className="text-red-500">S</span>
        </h1>

        {/* Search Bar */}
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            className="w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search..."
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>

        {/* Time and Date Button */}
        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600">
          {currentDateTime}
        </button>

        {/* Table Button */}
        <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600">
          Add Table
        </button>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

const Footer = ({ selectedTable, handleContinue }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Display  Selected Table */}
      <h1 className="text-lg font-bold">
        Table: {selectedTable || 'None'}
      </h1>


      {/* Select and Continue Button */}
      <div className="flex items-center space-x-4">
        <img
          src="/photos/7.png"
          alt="Order Image"
          className="w-8 h-8 object-cover"
        />
        <p className="text-gray-700 font-medium">Guests:</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={handleContinue}
        >
          Select and Continue
        </button>
      </div>
    </div>
  );
};

export default Footer;

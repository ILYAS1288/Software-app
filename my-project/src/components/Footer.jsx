import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-inline  items-center ml-2 bg-gray-100">
      <h1 className="text-lg font-bold ">Table:</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-md space-y-4 sm:space-y-0">
        <img
          src="/photos/7.png"
          alt="Order Image"
          className="w-8 h-8 object-cover ml-8 "
        />
        <p className="text-center  text-gray-700 font-medium">Guess:</p>
        <button className="px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-auto">
          Select and Continue
        </button>
      </div>
    </div>
  );
};

export default Footer;

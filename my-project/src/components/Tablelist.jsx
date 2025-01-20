import React from "react";

const Tablelist = () => {
  return (
    <div className="ml-8 lg:ml-32 md:ml-32 vs:ml-48 sm:ml-32 mt-8">
      <div className="flex items-center   space-x-80">
        {/* Heading */}
        <h1 className="lg:text-2xl  font-bold text-gray-800">TABLELIST</h1>

        {/* Buttons */}
        <div className="flex flex-col  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
  <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none">
    First Floor
  </button>
  <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none">
    Second Floor
  </button>
</div>

      </div>
    </div>
  );
};

export default Tablelist;

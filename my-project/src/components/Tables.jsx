import React from 'react';

const Tables = () => {
  return (
    <div className="p-9">
      {/* First Row */}
      <div className="flex flex-wrap gap-8">
        {[...Array(4)].map((_, index) => (
          <div className="relative" key={`table-${index + 1}`}>
            {/* Image */}
            <img
              src="/photos/6.png"
              alt={`Table ${index + 1}`}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
            />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-lg md:text-xl lg:text-2xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110">
                T {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap gap-8 mt-4">
        {[...Array(4)].map((_, index) => (
          <div className="relative" key={`table-${index + 5}`}>
            {/* Image */}
            <img
              src="/photos/6.png"
              alt={`Table ${index + 5}`}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
            />

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-lg md:text-xl lg:text-2xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110">
                T {index + 5}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;

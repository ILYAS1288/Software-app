import React from 'react';

const Tables = () => {
  return (
    <div className="p-4 md:ml-32">
      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-6">
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
        <img
          src="/photos/6.png"
          alt="Table"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
        />
      </div>
    </div>
  );
};

export default Tables;

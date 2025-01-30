import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Tables = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const navigate = useNavigate();

  // Handle Table Selection
  const handleTableClick = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  // Handle Continue Button Click
  const handleContinue = () => {
    if (selectedTable) {
      navigate('/menu', { state: { table: selectedTable } }); // Navigate with table data
    } else {
      alert('Please select a table before continuing.');
    }
  };

  return (
    <div className="p-9">
      {/* Table Grid */}
      <div className="flex flex-wrap gap-8">
        {[...Array(10)].map((_, index) => (
          <div
            className={`relative cursor-pointer ${
              selectedTable === `T ${index + 1}` ? 'ring-4 ring-blue-500' : ''
            }`}
            key={`table-${index + 1}`}
            onClick={() => handleTableClick(`T ${index + 1}`)}
          >
            {/* Table Image */}
            <img
              src="/photos/6.png"
              alt={`Table ${index + 1}`}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
            />

            {/* Centered Table Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-lg md:text-xl lg:text-2xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110">
                T {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
      <br />
      
      {/* Footer Component */}
      <Footer selectedTable={selectedTable} handleContinue={handleContinue} />
    </div>
  );
};

export default Tables;

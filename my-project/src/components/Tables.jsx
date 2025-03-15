import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Tables = ({ tables, setTables }) => {
  const [selectedTable, setSelectedTable] = useState(null);
  const navigate = useNavigate();

  const handleTableClick = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const handleContinue = () => {
    if (selectedTable) {
      navigate('/menu', { state: { table: selectedTable } });
    } else {
      alert('Please select a table before continuing.');
    }
  };

  return (
    <div className="p-9">
      <div className="flex flex-wrap gap-8 mt-4">
        {tables.map((tableNumber) => (
          <div
            key={tableNumber}
            className={`relative cursor-pointer ${
              selectedTable === `T ${tableNumber}` ? 'ring-4 ring-blue-500' : ''
            }`}
            onClick={() => handleTableClick(`T ${tableNumber}`)}
          >
            <img
              src="/photos/6.png"
              alt={`Table ${tableNumber}`}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-lg md:text-xl lg:text-2xl font-bold transition duration-300 ease-in-out hover:text-blue-500 hover:scale-110">
                T {tableNumber}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer selectedTable={selectedTable} handleContinue={handleContinue} />
    </div>
  );
};

export default Tables;

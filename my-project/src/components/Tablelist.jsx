import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import Tables from './Tables';
import '../styles/Tablelist.css';
function Tablelist({ onGoMenu }) {
  const { tables } = useContext(OrderContext);

  return (
    <div className="tablelist-container">
      <h2>Restaurant Tables</h2>
      <div className="tables-grid">
        {tables.map((table) => (
          <Tables key={table._id} table={table} onGoMenu={onGoMenu} />
        ))}
      </div>
    </div>
  );
}


export default Tablelist;

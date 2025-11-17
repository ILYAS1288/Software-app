import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import '../styles/Tables.css';

function Tables({ table }) {
  const { setCurrentOrder, createOrder } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  const handleTableClick = async () => {
    if (table.status === 'available') {
      try {
        const order = await createOrder(table._id, [], '', user.id);
        setCurrentOrder(order);
      } catch (error) {
        console.error('Error creating order:', error);
      }
    } else {
      setCurrentOrder(table.currentOrder);
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      available: '#4caf50',
      occupied: '#ff9800',
      reserved: '#2196f3',
      cleaning: '#f44336'
    };
    return colors[status] || '#666';
  };

  return (
    <div
      className="table-card"
      onClick={handleTableClick}
      style={{ borderColor: getStatusColor(table.status) }}
    >
      <div className="table-number">Table {table.tableNumber}</div>
      <div className="table-capacity">Capacity: {table.capacity}</div>
      <div className={`table-status ${table.status}`}>{table.status}</div>
    </div>
  );
}

export default Tables;

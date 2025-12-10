import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import '../styles/Tables.css';

function Tables({ table, onGoMenu }) {
  const { setCurrentOrder, createOrder } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleTableClick = async () => {
    try {
      setLoading(true);
      if (table.status === 'available') {
        const order = await createOrder(table._id, [], '', user.id);
        setCurrentOrder(order);
      } else {
        setCurrentOrder(table.currentOrder);
      }
      // After selecting or creating the order, move to menu view
      if (onGoMenu) onGoMenu();
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Could not start order for this table. Please try again.');
    } finally {
      setLoading(false);
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
    <div className="table-card" style={{ borderColor: getStatusColor(table.status) }}>
      <div onClick={handleTableClick}>
        <div className="table-number">Table {table.tableNumber}</div>
        <div className="table-capacity">Capacity: {table.capacity}</div>
        <div className={`table-status ${table.status}`}>{table.status}</div>
      </div>

      <button
        className="go-menu-btn"
        onClick={() => {
          if (onGoMenu) onGoMenu();
        }}
        disabled={loading}
      >
        {loading ? 'Opening...' : 'Go to Menu'}
      </button>
    </div>
  );
}

export default Tables;

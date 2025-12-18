import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import { orderAPI } from '../services/api';
import '../styles/Tables.css';

function Tables({ table, onGoMenu }) {
  const { setCurrentOrder, createOrder, setSelectedTableId } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleTableClick = async () => {
    try {
      setLoading(true);

      // 1 Always set selected table id in context and localStorage 
      setSelectedTableId(table._id);
    
      if (table.currentOrder) {
        const orderId =
          typeof table.currentOrder === 'string'
            ? table.currentOrder
            : table.currentOrder._id; 

        const { data } = await orderAPI.getOrderById(orderId);    
        setCurrentOrder(data);
      } else {
        // 3 Otherwise create a new order   
        const order = await createOrder(
          table._id,
          [],
          '',
          user?.id || user?._id
        );          
        setCurrentOrder(order);
      }

      // 4 Go to menu
      if (onGoMenu) onGoMenu();
    } catch (error) {
      console.error('Error selecting table:', error);
      alert('Could not open table. Please try again.');
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

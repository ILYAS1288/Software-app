import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import { orderAPI } from '../services/api';
import '../styles/Tables.css';

function Tables({ table, onGoMenu }) {
  const { setCurrentOrder, createOrder, setSelectedTableId } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const isValidObjectId = (id) =>
    typeof id === 'string' && /^[a-f\d]{24}$/i.test(id);

  const handleTableClick = async () => {
    try {
      setLoading(true);
      const current = table.currentOrder;
      if (table.status === 'available' || !current || !isValidObjectId(String(current._id || current))) {
        setSelectedTableId(table._id);
        const order = await createOrder(table._id, [], '', user.id);
        setCurrentOrder(order);
      } else {
        // If table.currentOrder is an id or an unpopulated ObjectId, fetch the full order
        if (current) {
          if (typeof current === 'string') {
            const { data } = await orderAPI.getOrderById(current);
            setCurrentOrder(data);
          } else if (typeof current === 'object' && !current._id) {
            const { data } = await orderAPI.getOrderById(String(current));
            setCurrentOrder(data);
          } else {
            setCurrentOrder(current);
          }
          setSelectedTableId(table._id);
        }
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

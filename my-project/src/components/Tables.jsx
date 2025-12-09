import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Tables.css';

function Tables({ table }) {
  const { setCurrentOrder, createOrder } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleTableClick = async () => {
    try {
      if (table.status === 'available') {
        const order = await createOrder(table._id, [], '', user.id);
        setCurrentOrder(order);
      } else {
        setCurrentOrder(table.currentOrder);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const goToMenu = () => {
    navigate('/Menu');
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

      <button className="go-menu-btn" onClick={goToMenu}>
        Go to Menu
      </button>
    </div>
  );
}

export default Tables;

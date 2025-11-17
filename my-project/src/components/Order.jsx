import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import AddButton from './AddButton';
import CancelOrder from './CancelOrder';
import '../styles/Order.css';

function Order() {
  const { currentOrder, removeItemFromOrder, updateOrder, completeOrder } = useContext(OrderContext);
  const [subtotal, setSubtotal] = useState(0);

  React.useEffect(() => {
    if (currentOrder?.items) {
      const total = currentOrder.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      setSubtotal(total);
    }
  }, [currentOrder]);

  if (!currentOrder) {
    return <div className="order-container"><p>Select a table to start an order</p></div>;
  }

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="order-container">
      <h2>Order #{currentOrder.orderNumber}</h2>
      
      <div className="order-items">
        <h3>Items</h3>
        {currentOrder.items && currentOrder.items.length > 0 ? (
          <table className="items-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.items.map(item => (
                <tr key={item._id}>
                  <td>{item.menuItem?.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button 
                      className="remove-btn"
                      onClick={() => removeItemFromOrder(currentOrder._id, item._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No items in order</p>
        )}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (5%):</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="order-actions">
        <AddButton />
        <button className="complete-btn" onClick={() => completeOrder(currentOrder._id)}>
          Complete Order
        </button>
        <CancelOrder />
      </div>
    </div>
  );
}

export default Order;

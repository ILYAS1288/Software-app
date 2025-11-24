import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
// import AddButton from './AddButton';
// import CancelOrder from './CancelOrder';
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
    return (
      <div className="order-container">
        <div className="empty-state">
          <p className="text-lg text-gray-500">Select a table to start an order</p>
        </div>
      </div>
    );
  }

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="order-container">
      <h2 className="order-title">Order #{currentOrder.orderNumber}</h2>
      
      <div className="order-items">
        <h3 className="items-heading">Items</h3>
        {currentOrder.items && currentOrder.items.length > 0 ? (
          <div className="table-wrapper">
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
                    <td className="item-name">{item.menuItem?.name || 'Unknown Item'}</td>
                    <td className="qty">{item.quantity}</td>
                    <td className="price">₹{item.price}</td>
                    <td className="total">₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="action">
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
          </div>
        ) : (
          <p className="no-items">No items in order</p>
        )}
      </div>

      <div className="order-summary">
        <div className="summary-row">
          <span className="label">Subtotal:</span>
          <span className="value">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span className="label">Tax (5%):</span>
          <span className="value">₹{tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span className="label">Total:</span>
          <span className="value total-amount">₹{total.toFixed(2)}</span>
        </div>
      </div>

      {/* <div className="order-actions">
        <AddButton />
        <button className="complete-btn" onClick={() => completeOrder(currentOrder._id)}>
          Complete Order
        </button>
        <CancelOrder />
      </div> */}
    </div>
  );
}

export default Order;

import React, { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { paymentAPI } from "../services/api";
import "../styles/Payment.css";
// Payment Component
function Payment() {
  const { currentOrder } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [tip, setTip] = useState(0);
  const [loading, setLoading] = useState(false);

  const total = currentOrder?.total || 0;

  const handlePayment = async () => {
    if (!currentOrder) {
      alert("No order to pay");
      return;
    }

    setLoading(true);
    try {
      await paymentAPI.processPayment({
        orderId: currentOrder._id,
        amount: total,
        method: paymentMethod,
        tip: parseFloat(tip),
      });
      alert("Payment processed successfully");
      setTip(0);
    } catch (error) {
      alert("Payment failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!currentOrder) {
    return (
      <div className="payment-container">
        <p>No order selected</p>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Payment</h2>

      <div className="payment-summary">
        <h3>Order #{currentOrder.orderNumber}</h3>
        <p>Total Amount: ₹{total.toFixed(2)}</p>
      </div>

      <div className="payment-methods">
        <h3>Payment Method</h3>
        {["cash", "card", "upi", "check"].map((method) => (
          <label key={method}>
            <input
              type="radio"
              name="method"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {method.toUpperCase()}
          </label>
        ))}
      </div>

      <div className="tip-section">
        <label>Tip Amount:</label>
        <input
          type="number"
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          placeholder="0"
          min="0"
        />
      </div>

      <div className="payment-total">
        <p>
          Total with Tip: ₹{(total + parseFloat(tip || 0)).toFixed(2)}
        </p>
      </div>

      <button
        className="pay-btn"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading ? "Processing..." : "Process Payment"}
      </button>
    </div>
  );
}

export default Payment;
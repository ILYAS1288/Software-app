import React, { useState } from "react";

const Order = ({ selectedTable, orderItems = [], setOrderItems }) => { 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculate total bill safely
  const totalBill = orderItems.reduce((total, item) => total + item.price, 0);

  // Handle order submission
  const handleSendOrder = () => {
    if (orderItems.length === 0) {
      alert("No items in the order to send!");
      return;
    }
    
    alert(`Order for Table ${selectedTable} has been sent!`);
    setOrderItems([]); // Clear order after sending
  };

  // Handle order cancellation
  const handleCancelOrder = () => {
    if (orderItems.length === 0) {
      alert("No items to cancel!");
      return;
    }
    
    if (window.confirm("Are you sure you want to cancel the order?")) {
      setOrderItems([]); 
    }
  };

  return (
    <div className="right-0 top-24 w-auto sm:w-32 lg:w-72 bg-gray-100 p-6 h-auto border-l">
      {/* Toggle Button Small Screens */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {isDropdownOpen ? "Close Order" : "View Order"}
        </button>
      </div>

      {/* Order Content */}
      {(isDropdownOpen || window.innerWidth >= 640) && (
        <div className="border border-gray-300 rounded-md p-4">
          <h1 className="text-xl mb-2">ORDER SUMMARY</h1>
          <p className="mb-2 text-gray-700">Table: {selectedTable || "None"}</p>

          {/* Order Items */}
          <div className="space-y-2">
            {orderItems.length > 0 ? (
              orderItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-white p-2 rounded shadow">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md" />
                  <p className="text-gray-800">{item.name}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No items added.</p>
            )}
          </div>

          {/* Total Bill */}
          <div className="mt-4 border-t pt-2 flex justify-between items-center">
            <h2 className="text-lg font-bold">Total:</h2>
            <h2 className="text-lg font-semibold text-blue-600">${totalBill.toFixed(2)}</h2>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex justify-between gap-2">
            <button
              onClick={handleCancelOrder}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition"
            >
              Cancel Order
            </button>
            <button
              onClick={handleSendOrder}
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
            >
              Send Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;

import React, { useState } from "react";
import CancelOrder from "./CancelOrder";
import SendOrder from "./SendOrder";

const Order = ({ selectedTable, orderItems = [], setOrderItems }) => { 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculate total bill
  const totalBill = orderItems.reduce((total, item) => total + item.price, 0);

  // Function to handle sending order
  const handleSendOrder = () => {
    if (orderItems.length === 0) {
      alert("No items in the order!");
      return;
    }

    console.log("Order Sent:", { selectedTable, orderItems, totalBill });

    //  Ensure this function is defined before calling it
    if (typeof setOrderItems === "function") {
      setOrderItems([]); // Clear the order after sending
    } else {
      console.error("setOrderItems is not defined!");
    }

    alert("Order successfully sent!");
  };

  return (
    <div className="right-0 top-24 w-auto sm:w-32 lg:w-72 bg-gray-100 p-6 h-auto border-l">
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {isDropdownOpen ? "Close Order" : "View Order"}
        </button>
      </div>

      {(isDropdownOpen || window.innerWidth >= 640) && (
        <div className="border border-gray-300 rounded-md p-4">
          <h1 className="text-xl mb-2">ORDER SUMMARY</h1>
          <p className="mb-2 text-gray-700">Table: {selectedTable || "None"}</p>

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

          <div className="mt-4 border-t pt-2 flex justify-between items-center">
            <h2 className="text-lg font-bold">Total:</h2>
            <h2 className="text-lg font-semibold text-blue-600">${totalBill.toFixed(2)}</h2>
          </div>

          <div className="mt-4 flex justify-between gap-2">
            <CancelOrder />
            <SendOrder handleSendOrder={handleSendOrder} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;

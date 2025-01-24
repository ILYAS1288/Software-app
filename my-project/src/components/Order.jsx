import React, { useState } from "react";

const Order = ({ selectedTable, orderItems = [] }) => { // ✅ Ensures orderItems is always an array
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ✅ Ensure totalBill calculation doesn't break
  const totalBill = orderItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="right-0 top-24 w-auto sm:w-32 lg:w-72 bg-gray-100 p-6 h-auto border-l">
      {/* Toggle Button for Small Screens */}
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
        </div>
      )}
    </div>
  );
};

export default Order;

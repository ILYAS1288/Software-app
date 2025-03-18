import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Tablelist from "./Tablelist";
import Footer from "./Footer";
import Order from "./Order";

const Item = () => {
  const [orderItems, setOrderItems] = useState([]); // State for order items
  const [selectedTable, setSelectedTable] = useState(null); // Add selected table state

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid lg:grid-cols-1 gap-6">
            {/* Tablelist Component */}
            <Tablelist setSelectedTable={setSelectedTable} /> 
          </div>

          {/* Display Order Summary in the Main Content */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Current Order</h2>
            {orderItems.length > 0 ? (
              <div className="border p-4 bg-white rounded-lg shadow">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md" />
                    <p className="text-gray-800">{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                ))}
                <hr className="my-2" />
                <p className="text-lg font-semibold">
                  Total: ${orderItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </p>
              </div>
            ) : (
              <p className="text-gray-500">No items added to order.</p>
            )}
          </div>

          {/* Footer */}
          <Footer />
        </main>

        {/* Right Sidebar (Order Component) */}
        <Order selectedTable={selectedTable} orderItems={orderItems} setOrderItems={setOrderItems} />
      </div>
    </div>
  );
};

export default Item;

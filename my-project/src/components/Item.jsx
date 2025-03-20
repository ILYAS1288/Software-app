import { useEffect, useState } from "react";
import Order from "./Order";
import Tablelist from "./Tablelist";
import Header from "./Header"
import Sidebar from "./Sidebar"
const Item = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [selectedTable, setSelectedTable] = useState();
  const [sentOrder, setSentOrder] = useState(null);

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("sentOrder"));
    if (storedOrder) {
      setSentOrder(storedOrder);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-1">
      <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

      <div className="flex-1 p-6">
        <Tablelist setSelectedTable={setSelectedTable} />

        <h2 className="text-xl font-bold mt-6">Current Order</h2>
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

        {/* Show Sent Order */}
        {sentOrder && (
          <div className="border p-4 bg-yellow-100 rounded-lg shadow mt-4">
            <h2 className="text-xl font-bold">Sent Order</h2>
            <p>Table: {sentOrder.selectedTable}</p>
            {sentOrder.orderItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md" />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}
            <p className="font-bold mt-2">Total: ${sentOrder.totalBill.toFixed(2)}</p>
          </div>
        )}
      </div>

      <Order selectedTable={selectedTable} orderItems={orderItems} setOrderItems={setOrderItems} />
      </div>
    </div>
  );
};

export default Item;

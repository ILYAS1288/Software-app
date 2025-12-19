import React, { useContext, useState, useEffect } from 'react';
import { OrderContext } from '../context/OrderContext';

function Admin() {
  const { orders } = useContext(OrderContext);
  const [totalSales, setTotalSales] = useState(0);
  const [completedOrders, setCompletedOrders] = useState(0);
  const [todaySales, setTodaySales] = useState(0);

  useEffect(() => {
    if (orders && orders.length > 0) {
      // Calculate total sales
      const total = orders.reduce((sum, order) => sum + (order.totalAmount || 0), 0);
      setTotalSales(total);

      // Count completed orders
      const completed = orders.filter(order => order.status === 'completed').length;
      setCompletedOrders(completed);

      // Calculate today's sales
      const today = new Date().toDateString();
      const todaySalesTotal = orders
        .filter(order => new Date(order.createdAt).toDateString() === today && order.status === 'completed')
        .reduce((sum, order) => sum + (order.totalAmount || 0), 0);
      setTodaySales(todaySalesTotal);
    }
  }, [orders]);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-8 py-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Sales Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Sales</h3>
          <p className="text-3xl font-bold text-blue-600">RS{totalSales.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-2">All time</p>
        </div>

        {/* Today's Sales Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">Today's Sales</h3>
          <p className="text-3xl font-bold text-green-600">RS{todaySales.toFixed(2)}</p>
          <p className="text-xs text-gray-500 mt-2">Current date</p>
        </div>

        {/* Completed Orders Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
          <h3 className="text-gray-600 text-sm font-semibold mb-2">Completed Orders</h3>
          <p className="text-3xl font-bold text-purple-600">{completedOrders}</p>
          <p className="text-xs text-gray-500 mt-2">Total orders</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Orders</h3>
        
        {orders && orders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Table</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.slice(0, 10).map(order => (
                  <tr key={order._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-700">{order._id?.substring(0, 8)}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Table {order.tableNumber || 'N/A'}</td>
                    <td className="px-4 py-2 text-sm font-semibold text-gray-900">₹{order.totalAmount?.toFixed(2) || '0.00'}</td>
                    <td className="px-4 py-2 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status || 'pending'}
                      </span>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">No orders yet</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
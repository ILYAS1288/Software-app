import React, { createContext, useState, useEffect } from 'react';
import { orderAPI, tableAPI, menuAPI } from '../services/api';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [tables, setTables] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [currentOrder, setCurrentOrderState] = useState(null);
  const [selectedTableId, setSelectedTableIdState] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidObjectId = (id) => typeof id === 'string' && /^[a-f\d]{24}$/i.test(id);

  // Keep current order id in localStorage so buttons work after reload
  const setCurrentOrder = (order) => {
    setCurrentOrderState(order);
    if (order?._id && isValidObjectId(order._id)) {
      localStorage.setItem('currentOrderId', order._id);
    } else {
      localStorage.removeItem('currentOrderId');
    }
  };

  // Track selected table id in localStorage
  const setSelectedTableId = (tableId) => {
    setSelectedTableIdState(tableId);
    if (tableId) {
      localStorage.setItem('selectedTableId', tableId);
    } else {
      localStorage.removeItem('selectedTableId');
    }
  };

  // Fetch all orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await orderAPI.getAllOrders();
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all tables
  const fetchTables = async () => {
    try {
      const response = await tableAPI.getAllTables();
      setTables(response.data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  // Fetch menu items
  const fetchMenuItems = async () => {
    try {
      const response = await menuAPI.getAllItems();
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  // Create new order
  const createOrder = async (tableId, items, notes, userId) => {
    try {
      const response = await orderAPI.createOrder({
        tableId,
        items,
        notes,
        createdBy: userId
      });
      setOrders(prev => [...prev, response.data]);
      setCurrentOrder(response.data);
      setSelectedTableId(tableId);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  // Add item to order
  const addItemToOrder = async (orderId, menuItemId, price, quantity = 1) => {
    try {
      const id = typeof orderId === 'string' ? orderId : orderId?._id;
      if (!id) throw new Error('No order selected');
      if (!isValidObjectId(id)) {
        localStorage.removeItem('currentOrderId');
        throw new Error('Invalid order id');
      }

      const response = await orderAPI.addItemToOrder(id, {
        menuItem: menuItemId,
        quantity,
        price
      });

      setCurrentOrder(response.data);
      setOrders(prev => prev.map(o => o._id === id ? response.data : o));

      return response.data;
    } catch (error) {
      console.error('Error adding item to order:', error);
      throw error;
    }
  };

  // Remove item from order
  const removeItemFromOrder = async (orderId, itemId) => {
    try {
      const response = await orderAPI.removeItemFromOrder(orderId, itemId);
      setCurrentOrder(response.data);
      setOrders(orders.map(o => o._id === orderId ? response.data : o));
      return response.data;
    } catch (error) {
      console.error('Error removing item:', error);
      throw error;
    }
  };

  // Update order
  const updateOrder = async (orderId, data) => {
    try {
      const response = await orderAPI.updateOrder(orderId, data);
      setOrders(orders.map(o => o._id === orderId ? response.data : o));
      setCurrentOrder(response.data);
      return response.data;
    } catch (error) {
      console.error('Error updating order:', error);
      throw error;
    }
  };

  // Complete order
  const completeOrder = async (orderId) => {
    try {
      const response = await orderAPI.completeOrder(orderId);
      setOrders(orders.map(o => o._id === orderId ? response.data : o));
      return response.data;
    } catch (error) {
      console.error('Error completing order:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchOrders();
    fetchTables();
    fetchMenuItems();
    // Restore selected table
    const savedTableId = localStorage.getItem('selectedTableId');
    if (savedTableId) setSelectedTableIdState(savedTableId);
    // Restore current order if present and valid
    const savedOrderId = localStorage.getItem('currentOrderId');
    if (savedOrderId && isValidObjectId(savedOrderId)) {
      orderAPI.getOrderById(savedOrderId)
        .then(({ data }) => setCurrentOrder(data))
        .catch(() => localStorage.removeItem('currentOrderId'));
    } else {
      localStorage.removeItem('currentOrderId');
    }
  }, []);

  return (
    <OrderContext.Provider value={{
      orders,
      tables,
      menuItems,
      currentOrder,
      selectedTableId,
      loading,
      fetchOrders,
      fetchTables,
      fetchMenuItems,
      createOrder,
      addItemToOrder,
      removeItemFromOrder,
      updateOrder,
      completeOrder,
      setCurrentOrder,
      setSelectedTableId
    }}>
      {children}
    </OrderContext.Provider>
  );
};
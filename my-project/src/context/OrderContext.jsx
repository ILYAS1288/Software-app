import React, { createContext, useState, useEffect } from 'react';
import { orderAPI, tableAPI, menuAPI } from '../services/api';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [tables, setTables] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [loading, setLoading] = useState(false);

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
      setOrders([...orders, response.data]);
      setCurrentOrder(response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  // Add item to order
  const addItemToOrder = async (orderId, menuItemId, quantity, specialRequests = '') => {
    try {
      const response = await orderAPI.addItemToOrder(orderId, {
        menuItem: menuItemId,
        quantity,
        specialRequests
      });
      setCurrentOrder(response.data);
      setOrders(orders.map(o => o._id === orderId ? response.data : o));
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
  }, []);

  return (
    <OrderContext.Provider value={{
      orders,
      tables,
      menuItems,
      currentOrder,
      loading,
      fetchOrders,
      fetchTables,
      fetchMenuItems,
      createOrder,
      addItemToOrder,
      removeItemFromOrder,
      updateOrder,
      completeOrder,
      setCurrentOrder
    }}>
      {children}
    </OrderContext.Provider>
  );
};
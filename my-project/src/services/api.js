import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

// Menu APIs
export const menuAPI = {
  getAllItems: () => api.get('/menu'),
  getByCategory: (category) => api.get(`/menu/category/${category}`),
  createItem: (data) => api.post('/menu', data),
  updateItem: (id, data) => api.put(`/menu/${id}`, data),
  deleteItem: (id) => api.delete(`/menu/${id}`),
};

// Table APIs
export const tableAPI = {
  getAllTables: () => api.get('/tables'),
  createTable: (data) => api.post('/tables', data),
  updateTable: (id, data) => api.put(`/tables/${id}`, data),
};

// Order APIs
export const orderAPI = {
  getAllOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  createOrder: (data) => api.post('/orders', data),
  updateOrder: (id, data) => api.put(`/orders/${id}`, data),
  addItemToOrder: (id, item) => api.post(`/orders/${id}/items`, item),
  removeItemFromOrder: (orderId, itemId) =>
    api.delete(`/orders/${orderId}/items/${itemId}`),
  completeOrder: (id) => api.put(`/orders/${id}/complete`),
};

// Payment APIs
export const paymentAPI = {
  processPayment: (data) => api.post('/payments', data),
  getPaymentHistory: () => api.get('/payments'),
};

// Reports APIs
export const reportAPI = {
  getDailySales: () => api.get('/reports/sales/daily'),
  getPaymentMethods: () => api.get('/reports/payments/methods'),
};

export default api;

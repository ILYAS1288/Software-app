import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========== AUTH ==========
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};

// ========== MENU ==========
export const menuAPI = {
  getAllItems: () => api.get('/menu'),
  getByCategory: (category) => api.get(`/menu/category/${category}`),
  createItem: (data) => api.post('/menu', data),
  updateItem: (id, data) => api.put(`/menu/${id}`, data),
  deleteItem: (id) => api.delete(`/menu/${id}`),
};

// ========== TABLE ==========
export const tableAPI = {
  getAllTables: () => api.get('/tables'),
  createTable: (data) => api.post('/tables', data),
  updateTable: (id, data) => api.put(`/tables/${id}`, data),
};

// ========== ORDER ==========
export const orderAPI = {
  getAllOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  createOrder: (data) => api.post('/orders', data),
  updateOrder: (id, data) => api.put(`/orders/${id}`, data),

  // ✅ THIS IS CORRECT
  addItemToOrder: (orderId, item) =>
    api.post(`/orders/${orderId}/items`, item),

  removeItemFromOrder: (orderId, itemId) =>
    api.delete(`/orders/${orderId}/items/${itemId}`),

  completeOrder: (id) => api.put(`/orders/${id}/complete`),
};

// ========== PAYMENT ==========
export const paymentAPI = {
  processPayment: (data) => api.post('/payments', data),
  getPaymentHistory: () => api.get('/payments'),
};

// ========== REPORT ==========
export const reportAPI = {
  getDailySales: () => api.get('/reports/sales/daily'),
  getPaymentMethods: () => api.get('/reports/payments/methods'),
};

export default api;

const express = require('express');
const Order = require('../models/Order');
const Payment = require('../models/Payment');
const router = express.Router();

// Daily sales report
router.get('/sales/daily', async (req, res) => {
  try {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    const orders = await Order.find({
      createdAt: { $gte: startOfDay },
      status: 'paid'
    });
    
    const totalSales = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const totalOrders = orders.length;
    const avgOrder = totalOrders > 0 ? totalSales / totalOrders : 0;
    
    res.json({ totalSales, totalOrders, avgOrder, orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Payment methods report
router.get('/payments/methods', async (req, res) => {
  try {
    const payments = await Payment.aggregate([
      { $group: { _id: '$method', total: { $sum: '$amount' }, count: { $sum: 1 } } }
    ]);
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
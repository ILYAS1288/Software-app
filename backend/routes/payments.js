const express = require('express');
const Payment = require('../models/Payment');
const Order = require('../models/Order');
const Table = require('../models/Table');
const router = express.Router();

// Process payment
router.post('/', async (req, res) => {
  try {
    const { orderId, amount, method, tip } = req.body;
    
    const payment = new Payment({ orderId, amount, method, tip, status: 'completed' });
    await payment.save();
    
    const order = await Order.findById(orderId);
    await Order.findByIdAndUpdate(orderId, { status: 'paid' });
    
    // Free up table
    if (order.tableId) {
      await Table.findByIdAndUpdate(order.tableId, { status: 'available', currentOrder: null });
    }
    
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get payment history
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find().populate('orderId');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
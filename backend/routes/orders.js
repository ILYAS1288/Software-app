const express = require('express');
const Order = require('../models/Order');
const Table = require('../models/Table');
const router = express.Router();

// Create order
router.post('/', async (req, res) => {
  try {
    const { tableId, items, notes, createdBy } = req.body;
    
    const orderNumber = 'ORD' + Date.now();
    const order = new Order({ orderNumber, tableId, items, notes, createdBy });
    await order.save();
    
    await Table.findByIdAndUpdate(tableId, { status: 'occupied', currentOrder: order._id });
    
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('tableId')
      .populate('items.menuItem')
      .populate('createdBy', 'name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('tableId')
      .populate('items.menuItem');
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update order
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add item to order
router.post('/:id/items', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { $push: { items: req.body } },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove item from order
router.delete('/:id/items/:itemId', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { $pull: { 'items': { _id: req.params.itemId } } },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Complete order
router.put('/:id/complete', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'completed', completedAt: new Date() },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
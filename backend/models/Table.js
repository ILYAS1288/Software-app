const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  status: { type: String, enum: ['available', 'occupied', 'reserved', 'cleaning'], default: 'available' },
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  location: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Table', tableSchema);
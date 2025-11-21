const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },

  tableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },

  items: [
    {
      menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      specialRequests: String,
      status: {
        type: String,
        enum: ['pending', 'cooking', 'ready', 'served'],
        default: 'pending'
      }
    }
  ],

  status: {
    type: String,
    enum: ['open', 'completed', 'paid', 'cancelled'],
    default: 'open'
  },

  subtotal: Number,
  tax: Number,
  discount: Number,
  total: Number,
  paymentMethod: String,
  notes: String,

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  completedAt: Date
});

module.exports = mongoose.model('Order', orderSchema);

const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const user = await User.findOne({ email: 'admin@example.com' });
  if (!user) { console.log('No user found'); process.exit(1); }
  const newHash = await bcrypt.hash('123456', 10);
  user.password = newHash;
  await user.save();
  console.log('Updated admin password hash to new bcrypt hash');
  process.exit(0);
}
run().catch(e => { console.error(e); process.exit(1); });

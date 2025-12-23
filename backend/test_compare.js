const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const user = await User.findOne({ email: 'admin@example.com' }).lean();
  if (!user) { console.log('No user found'); process.exit(0); }
  console.log('DB user:', { email: user.email, role: user.role, password: user.password });
  const match = await bcrypt.compare('123456', user.password);
  console.log('bcrypt.compare returned:', match);
  process.exit(0);
}
run().catch(e => { console.error(e); process.exit(1); });

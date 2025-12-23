const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const user = await User.findOne({ email: 'admin@example.com' });
  if (!user) { console.log('No user found'); process.exit(1); }
  user.password = '123456';
  await user.save();
  console.log('Set admin password to plain "123456" and saved (pre-save will hash it)');
  process.exit(0);
}
run().catch(e => { console.error(e); process.exit(1); });

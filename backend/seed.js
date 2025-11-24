const mongoose = require("mongoose");
require("dotenv").config();

// Import Models
const Admin = require("./models/User");
const MenuItem = require("./models/MenuItem");
const Table = require("./models/Table");
const Order = require("./models/Order");
const Payment = require("./models/Payment");

// Connect DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected…"))
  .catch((err) => console.error("Connection Error:", err));

// Sample Data
const admins = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: "$2b$10$W7UTwT.8dIfwzk5NQ9V3S.9MoyM4gkZHyPShOcK8FQpZHYjmvunOe" // 123456
  }
];

const menuItems = [
  { name: "Chicken Burger", price: 250, category: "Fast Food" },
  { name: "Zinger Burger", price: 300, category: "Fast Food" },
  { name: "Fries", price: 120, category: "Fast Food" },
  { name: "Shawarma", price: 180, category: "Fast Food" },
  { name: "Tea", price: 50, category: "Drinks" },
  { name: "Coffee", price: 150, category: "Drinks" },
  { name: "Cold Drink", price: 80, category: "Drinks" },
  { name: "Chicken Biryani", price: 200, category: "Desi" },
  { name: "Beef Karahi", price: 850, category: "Desi" },
  { name: "Naan", price: 30, category: "Desi" }
];

const tables = [
  { tableNumber: "T1", capacity: 4, status: "available" },
  { tableNumber: "T2", capacity: 4, status: "occupied" },
  { tableNumber: "T3", capacity: 2, status: "available" },
  { tableNumber: "T4", capacity: 6, status: "reserved" },
  { tableNumber: "T5", capacity: 4, status: "cleaning" },
  { tableNumber: "T6", capacity: 8, status: "available" },
  { tableNumber: "T7", capacity: 2, status: "occupied" }
];

// Seeder
async function seedDatabase() {
  try {
    console.log("\n⛔ Clearing old data...");
    await Admin.deleteMany({});
    await MenuItem.deleteMany({});
    await Table.deleteMany({});
    await Order.deleteMany({});
    await Payment.deleteMany({});

    console.log("✔ Old data removed.\n📥 Inserting sample data...");

    await Admin.insertMany(admins);
    console.log("✔ Admin inserted.");

    const insertedMenu = await MenuItem.insertMany(menuItems);
    console.log("✔ Menu items inserted.");

    await Table.insertMany(tables);
    console.log("✔ Tables inserted.");

    // Pick real table
    const table = await Table.findOne({ tableNumber: "T3" });

    // Create Order
    const sampleOrder = {
      tableId: table._id,
      items: [
        {
          menuItem: insertedMenu[0]._id,
          quantity: 2,
          price: insertedMenu[0].price
        },
        {
          menuItem: insertedMenu[3]._id,
          quantity: 1,
          price: insertedMenu[3].price
        }
      ],
      subtotal: insertedMenu[0].price * 2 + insertedMenu[3].price,
      tax: 0,
      discount: 0,
      total: insertedMenu[0].price * 2 + insertedMenu[3].price,
      status: "open"
    };

    const order = await Order.create(sampleOrder);
    console.log("✔ Order inserted.");

    // Create Payment (✔ FIXED STATUS)
    await Payment.create({
      orderId: order._id,
      amount: order.total,
      method: "cash",
      status: "completed"   // FIXED
    });

    console.log("✔ Payment inserted.");
    console.log("\n🎉 SEEDING COMPLETED SUCCESSFULLY!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding Error:", err);
    process.exit(1);
  }
}

seedDatabase();

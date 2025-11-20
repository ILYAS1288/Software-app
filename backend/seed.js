const mongoose = require("mongoose");
require("dotenv").config();

// Import Models
const Admin = require("./models/User");
const MenuItem = require("./models/MenuItem");
const Table = require("./models/Table");
const Order = require("./models/Order");
const Payment = require("./models/Payment");

// MongoDB Connection
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
  { number: 1, status: "available" },
  { number: 2, status: "available" },
  { number: 3, status: "occupied" },
  { number: 4, status: "available" },
  { number: 5, status: "reserved" },
  { number: 6, status: "available" },
  { number: 7, status: "available" },
  { number: 8, status: "occupied" },
  { number: 9, status: "available" },
  { number: 10, status: "available" }
];

async function seedDatabase() {
  try {
    console.log("\n⛔ Clearing old data...");
    await Admin.deleteMany({});
    await MenuItem.deleteMany({});
    await Table.deleteMany({});
    await Order.deleteMany({});
    await Payment.deleteMany({});

    console.log("✔ Old data removed.");

    console.log("\n📥 Inserting sample data...");

    await Admin.insertMany(admins);
    console.log("✔ Admin inserted.");

    const insertedMenu = await MenuItem.insertMany(menuItems);
    console.log("✔ Menu items inserted.");

    await Table.insertMany(tables);
    console.log("✔ Tables inserted.");

    // Create sample order with real menu item IDs
    const sampleOrder = {
      table: 3,
      status: "pending",
      items: [
        { item: insertedMenu[0]._id, qty: 2 },
        { item: insertedMenu[3]._id, qty: 1 }
      ],
      total: insertedMenu[0].price * 2 + insertedMenu[3].price
    };

    const order = await Order.create(sampleOrder);
    console.log("✔ Order inserted.");

    await Payment.create({
      orderId: order._id,
      amount: order.total,
      method: "cash",
      status: "paid"
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

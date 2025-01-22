import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      category: "Appetizers",
      items: [
        { name: "Spring Rolls", price: "$5.99" },
        { name: "Garlic Bread", price: "$4.99" },
        { name: "Stuffed Mushrooms", price: "$6.99" },
        { name: "Bruschetta", price: "$5.49" },
      ],
    },
    {
      category: "Main Courses",
      items: [
        { name: "Grilled Chicken", price: "$12.99" },
        { name: "Vegetarian Pasta", price: "$10.99" },
        { name: "Beef Steak", price: "$18.99" },
        { name: "Seafood Platter", price: "$22.99" },
        { name: "Vegan Burger", price: "$11.49" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Chocolate Cake", price: "$6.99" },
        { name: "Ice Cream", price: "$3.99" },
        { name: "Cheesecake", price: "$5.99" },
        { name: "Fruit Salad", price: "$4.99" },
      ],
    },
    {
      category: "Drinks",
      items: [
        { name: "Coca-Cola", price: "$1.99" },
        { name: "Orange Juice", price: "$2.49" },
        { name: "Coffee", price: "$2.99" },
        { name: "Iced Tea", price: "$2.49" },
        { name: "Smoothie", price: "$4.99" },
      ],
    },
    {
      category: "Sides",
      items: [
        { name: "French Fries", price: "$3.49" },
        { name: "Onion Rings", price: "$4.49" },
        { name: "Side Salad", price: "$3.99" },
        { name: "Mashed Potatoes", price: "$4.49" },
      ],
    },
    {
      category: "Specials",
      items: [
        { name: "Chef's Special Pizza", price: "$14.99" },
        { name: "Lobster Bisque", price: "$19.99" },
        { name: "Rack of Lamb", price: "$24.99" },
        { name: "Duck Confit", price: "$21.99" },
      ],
    },
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Restaurant Menu</h1>
      {menuItems.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">{category.category}</h2>
          <ul className="space-y-3">
            {category.items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center border-b border-gray-200 pb-2"
              >
                <span className="text-gray-800">{item.name}</span>
                <span className="text-gray-600">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;

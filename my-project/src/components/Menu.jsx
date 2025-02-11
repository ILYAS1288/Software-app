import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Order from './Order';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();
  const selectedTable = location.state?.table || 'None';
  const [orderItems, setOrderItems] = useState([]);

  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Spring Rolls', price: 5.99, image: '/photos/9.png' },
        { name: 'Garlic Bread', price: 4.99, image: '/photos/8.png' },
        { name: 'Vegetarian Pasta', price: 16.99, image: '/photos/9.png' },
        { name: 'Vegetarian Pasta', price: 19.99, image: '/photos/8.png' },
      ],
    },


    
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Chicken', price: 12.99, image: '/photos/8.png' },
        { name: 'Vegetarian Pasta', price: 10.99, image: '/photos/9.png' },
        { name: 'Vegetarian Pasta', price: 14.99, image: '/photos/8.png' },
        { name: 'Vegetarian Pasta', price: 15.99, image: '/photos/9.png' },
      ],
    },
  ];

  const addToOrder = (item) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  const filteredMenu =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((menu) => menu.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      <Header />

      <div className="flex flex-1 pb-16">
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

        <main className="flex-1 p-6">
          <div className="grid gap-6">
            {filteredMenu.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative group"
                    >
                      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 mt-2">${item.price.toFixed(2)}</p>
                      </div>

                      <button
                        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => addToOrder(item)}
                      >
                        Add Order
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Bottom Fixed Button */}
       
        <div className="fixed bottom-0 ml-24 md:w-9/12 bg-gray-200 shadow-md p-4 flex justify-center gap-2 md:gap-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {menuItems.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.category
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
              onClick={() => setSelectedCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Order Summary  */}
        <Order selectedTable={selectedTable} orderItems={orderItems} />
      </div>
    </div>
  );
};

export default Menu;

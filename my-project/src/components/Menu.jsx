import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import Item from './Item';

function Menu() {
  const { menuItems, currentOrder, addItemToOrder } = useContext(OrderContext);
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-8 py-6">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Menu</h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
            ${selectedCategory === cat
              ? 'bg-blue-600 text-white shadow'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <Item
                item={item}
                onAddToOrder={() => {
                  if (!currentOrder) return alert('Select a table first');
                  addItemToOrder(currentOrder._id, item._id, 1);
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 py-10">
            No menu items found in this category.
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;

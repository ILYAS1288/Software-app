import React, { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/Menu.css';

function Menu({ onGoOrders }) {
  const { menuItems, currentOrder, addItemToOrder } = useContext(OrderContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addingId, setAddingId] = useState(null);

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-8 py-6">

      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Menu Items
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
              ${selectedCategory === cat
                ? 'bg-blue-600 text-white shadow'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-200'
              }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Show menu items only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => {
            const disabled = !currentOrder || !item.available;
            const isAdding = addingId === item._id;
            return (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <p className="text-gray-700 font-bold">PKR {item.price}</p>
                </div>

                {item.description && (
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  {item.available ? (
                    <span className="text-green-600 text-sm font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-500 text-sm font-semibold">
                      Not Available
                    </span>
                  )}

                  <button
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition ${
                      disabled
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={disabled || isAdding}
                    onClick={async () => {
                      if (!currentOrder) {
                        alert('Select a table first to start an order.');
                        return;
                      }
                      setAddingId(item._id);
                      try {
                        await addItemToOrder(currentOrder._id, item._id, item.price, 1, '');
                        if (onGoOrders) onGoOrders();
                      } catch (err) {
                        alert('Could not add item: ' + (err.response?.data?.message || err.message));
                      } finally {
                        setAddingId(null);
                      }
                    }}
                  >
                    {isAdding ? 'Adding...' : 'Add to Order'}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No menu items found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Menu;

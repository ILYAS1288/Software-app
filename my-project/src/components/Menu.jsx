import React, { useContext, useMemo, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';
import Item from './Item';
import '../styles/Menu.css';

function Menu({ onGoOrders }) {
  const { menuItems, currentOrder, addItemToOrder, createOrder, selectedTableId, setCurrentOrder } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [addingId, setAddingId] = useState(null);
  const currentOrderId = currentOrder?._id;
  const hasOrder = Boolean(currentOrderId);
  const hasTable = Boolean(selectedTableId);

  // Stable categories list to avoid redefinition
  const categories = useMemo(() => {
    const set = new Set(menuItems.map(item => item.category));
    return ['all', ...set];
  }, [menuItems]);

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter(item => item.category === selectedCategory);

  const handleAddItem = async (itemId) => {
    if (!currentOrder) {
      alert('Please select a table first');
      return;
    }

    try {
      await addItemToOrder(currentOrder._id, itemId, 1);
      alert('Item added to order!');
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  console.log('Current Order:', currentOrder);
  console.log('addItemToOrder function:', addItemToOrder);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-8 py-6">

      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Menu Items
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
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
        <span className="text-sm text-gray-600">
          {hasTable ? `Table selected: ${selectedTableId}` : 'Select a table first'}
        </span>
      </div>

      {/* Show menu items only */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => {
            // Disable only when the item is unavailable or no table is selected
            const disabled = !item.available || (!hasTable && !hasOrder);
            const isAdding = addingId === item._id;
            return (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col gap-3"
              >
                <Item
                  item={item}
                  onAddToOrder={() => handleAddItem(item._id)}
                />
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

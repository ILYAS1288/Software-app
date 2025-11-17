import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import Item from './Item';
import '../styles/Menu.css';

function Menu() {
  const { menuItems, currentOrder, addItemToOrder } = useContext(OrderContext);
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = ['all', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredItems.map(item => (
          <Item 
            key={item._id} 
            item={item}
            onAddToOrder={() => {
              if (currentOrder) {
                addItemToOrder(currentOrder._id, item._id, 1);
              } else {
                alert('Please select a table first');
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;

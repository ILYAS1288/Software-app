import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Menu from './Menu';
import Tablelist from './Tablelist';
import Order from './Order';
import Payment from './Payment';
import Settings from './Settings';
import '../styles/Home.css';

function Home() {
  const [currentView, setCurrentView] = useState('home');
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="sidebar">
        <div className="user-info">
          <h3>{user?.name}</h3>
          <p>{user?.role}</p>
        </div>

        <nav className="menu">
          <button
            className={currentView === 'home' ? 'active' : ''}
            onClick={() => setCurrentView('home')}
          >
            Tables
          </button>
          <button
            className={currentView === 'menu' ? 'active' : ''}
            onClick={() => setCurrentView('menu')}
          >
            Menu
          </button>
          <button
            className={currentView === 'orders' ? 'active' : ''}
            onClick={() => setCurrentView('orders')}
          >
            Orders
          </button>
          <button
            className={currentView === 'payment' ? 'active' : ''}
            onClick={() => setCurrentView('payment')}
          >
            Payment
          </button>
          {user?.role === 'admin' && (
            <button
              className={currentView === 'settings' ? 'active' : ''}
              onClick={() => setCurrentView('settings')}
            >
              Settings
            </button>
          )}
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </nav>
      </div>

      <div className="main-content">
        {currentView === 'home' && (
          <Tablelist onGoMenu={() => setCurrentView('menu')} />
        )}
        {currentView === 'menu' && (
          <Menu onGoOrders={() => setCurrentView('orders')} />
        )}
        {currentView === 'orders' && (
          <Order onGoPayment={() => setCurrentView('payment')} />
        )}
        {currentView === 'payment' && <Payment />}
        {currentView === 'settings' && <Settings />}
      </div>
    </div>
  );
}

export default Home;

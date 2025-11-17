import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Header.css';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">
        <h1>🍽️ Restaurant POS</h1>
      </div>
      <div className="user-section">
        <span>Welcome, {user?.name}</span>
      </div>
    </header>
  );
}

export default Header;

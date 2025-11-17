import React, { useContext, useEffect } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';


function AppContent() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <AppContent />
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;

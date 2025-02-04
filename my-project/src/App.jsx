import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <div >
   
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        
       
          
        

      </div>
    </Router>
  );
};

export default App;

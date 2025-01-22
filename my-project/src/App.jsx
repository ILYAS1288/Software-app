import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tablelist from "./components/Tablelist";

import Order from "./components/Order";
import Tables from "./components/Tables";
const App = () => {
  return (
    <Router>
      <div className="">
        <Header />
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />

          </Routes>
          <Tablelist />
          <Tables />


          <Footer /></div>
          <Order />
        

      </div>
    </Router>
  );
};

export default App;

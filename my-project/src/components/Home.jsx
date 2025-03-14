import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Tablelist from './Tablelist';
import Tables from './Tables';
import Order from './Order';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {


  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        
        <Sidebar className="w-1/4 hidden md:block bg-gray-100" />
        {/* Main Section */}
        <main className="flex-1 p-4">
          <Tablelist />
          <Tables />
          {/* <Footer button /> */}
        </main>
        {/* Right bar */}
        <Order className="w-1/4 hidden lg:block bg-gray-100" />
      </div>
    </div>
  );
};

export default Home;

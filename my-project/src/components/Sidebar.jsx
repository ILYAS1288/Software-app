import React, { useState } from "react";

// Sidebar Component
const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Menu");

  const handleLinkClick = (Menu) => {
    setActiveLink(Menu); // Set active link to highlight
  };

  return (
    <div className="left-0 top-24 h-screen w-24 border-r bg-gray-100 flex flex-col items-center">
      {/* Sidebar Content */}
      <div className="flex flex-col h-full justify-between py-6">
        {/* Navigation Links */}
        <div className="space-y-8 flex-grow">
          {/* Home */}
          <div
            className={`flex flex-col items-center cursor-pointer ${activeLink === "home" ? "text-blue-500" : ""}`}
            onClick={() => handleLinkClick("home")}
          >
            <img
              src="/photos/1.png"
              alt="Home Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Home</h2>
          </div>

          {/* Menu */}
          <div
            className={`flex flex-col items-center cursor-pointer ${activeLink === "Menu" ? "text-blue-500" : ""}`}
            onClick={() => handleLinkClick("Menu")}
          >
            <img
              src="/photos/2.png"
              alt="Menu Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Menu</h2>
          </div>

          {/* Payment */}
          <div
            className={`flex flex-col items-center cursor-pointer ${activeLink === "payment" ? "text-blue-500" : ""}`}
            onClick={() => handleLinkClick("payment")}
          >
            <img
              src="/photos/3.png"
              alt="Payment Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Payment</h2>
          </div>

          {/* Orders */}
          <div
            className={`flex flex-col items-center cursor-pointer ${activeLink === "orders" ? "text-blue-500" : ""}`}
            onClick={() => handleLinkClick("orders")}
          >
            <img
              src="/photos/5.png"
              alt="Orders Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Orders</h2>
          </div>

          {/* Settings */}
          <div
            className={`flex flex-col items-center cursor-pointer ${activeLink === "settings" ? "text-blue-500" : ""}`}
            onClick={() => handleLinkClick("settings")}
          >
            <img
              src="/photos/4.png"
              alt="Settings Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Settings</h2>
          </div>
        </div>

        {/* Version Section */}
        <div className="text-center">
          <h1 className="text-xs sm:text-sm text-gray-600">V.2.1</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

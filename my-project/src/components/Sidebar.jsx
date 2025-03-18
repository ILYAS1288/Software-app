import React from "react";
import { NavLink } from "react-router-dom";

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="left-0 top-24 h-auto w-24 border-r bg-gray-100 flex flex-col items-center">
      {/* Sidebar Content */}
      <div className="flex flex-col h-full justify-between py-6">
        {/* Navigation Links */}
        <div className="space-y-8 flex-grow">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            <img
              src="/photos/1.png"
              alt="Home Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Home</h2>
          </NavLink>

          {/* Menu */}
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              `flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            <img
              src="/photos/2.png"
              alt="Menu Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Menu</h2>
          </NavLink>

          {/* Payment */}
          <NavLink
            to="/payment"
            className={({ isActive }) =>
              `flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            <img
              src="/photos/3.png"
              alt="Payment Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Payment</h2>
          </NavLink>

          {/* Orders */}
          <NavLink
            to="/item"
            className={({ isActive }) =>
              `flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            <img
              src="/photos/5.png"
              alt="Orders Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Orders</h2>
          </NavLink>

          {/* Settings */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex flex-col items-center cursor-pointer ${
                isActive ? "text-blue-500" : ""
              }`
            }
          >
            <img
              src="/photos/4.png"
              alt="Settings Icon"
              className="h-10 w-10 mb-2"
            />
            <h2 className="text-xs sm:text-sm font-medium text-center">Settings</h2>
          </NavLink>
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

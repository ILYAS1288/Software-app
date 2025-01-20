import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top- h-screen w-32 border">
      {/* Sidebar Content */}
      <div className="flex flex-col h-full">
        <div className="flex-grow py-6">
          {/* Navigation Links */}
          <div className="space-y-8 px-6">
            {/* Home */}
            <div className="flex-block items-center ">
              <img
                src="/photos/1.png"
                alt="Home Icon"
                className="h-8 w-8"
              />
              <h2 className="text-lg ">Home</h2>
            </div>

            {/* Menu */}
            <div className="flex-block items-center ">
              <img
                src="/photos/2.png"
                alt="Menu Icon"
                className="h-8 w-8"
              />
              <h2 className="text-lg ">Menu</h2>
            </div>

            {/* Payment */}
            <div className="flex-block items-center ">
              <img
                src="/photos/3.png"
                alt="Payment Icon"
                className="h-8 w-8"
              />
              <h2 className="text-lg ">Payment</h2>
            </div>

            {/* Orders */}
            <div className="flex-block items-center ">
              <img
                src="/photos/5.png"
                alt="Orders Icon"
                className="h-8 w-8"
              />
              <h2 className="text-lg ">Orders</h2>
            </div>

            {/* Settings */}
            <div className="flex-block items-end ">
              <img
                src="/photos/4.png"
                alt="Settings Icon"
                className="h-8 w-8"
              />
              <h2 className="text-lg ">Settings</h2>
            </div>
             {/* Version Section */}
          <div className="">
          <h1 className="text-sm">V.2.1</h1>
        </div>
          </div>
          
         
        </div>

        
      </div>
      
    </div>
  );
};

export default Sidebar;

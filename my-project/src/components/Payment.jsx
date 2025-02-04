import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import { FaCreditCard, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";
import Sidebarpay from "./Sidebarpay";

const Payment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content  */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center">
          <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Complete Your Payment
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              Please select a payment method
            </p>


            {/* Payment Options */}
            <div className="space-y-4">
              <button className="flex items-center justify-between w-full p-4 border rounded-xl shadow-md hover:shadow-lg transition bg-blue-100 hover:bg-blue-200">
                <FaCreditCard className="text-blue-600 text-2xl" />
                <span className="text-lg font-medium text-gray-800">
                  Pay with Card
                </span>
              </button>

              <button className="flex items-center justify-between w-full p-4 border rounded-xl shadow-md hover:shadow-lg transition bg-green-100 hover:bg-green-200">
                <FaMoneyBillWave className="text-green-600 text-2xl" />
                <span className="text-lg font-medium text-gray-800">
                  Pay with Cash
                </span>
              </button>

              <button className="flex items-center justify-between w-full p-4 border rounded-xl shadow-md hover:shadow-lg transition bg-purple-100 hover:bg-purple-200">
                <FaMobileAlt className="text-purple-600 text-2xl" />
                <span className="text-lg font-medium text-gray-800">
                  Pay with Mobile
                </span>
              </button>
            </div>

            {/* Confirm Payment */}
            <button className="w-full mt-6 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              Confirm Payment
            </button>
          </div>
        </main>

        {/* Right Sidebar */}
        {/* <Order className="hidden lg:block w-1/4 bg-gray-100 p-4" /> */}
        <Sidebarpay/>
      </div>
    </div>
  );
};

export default Payment;

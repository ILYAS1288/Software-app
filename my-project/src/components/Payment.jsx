import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Sidebarpay from "./Sidebarpay";
import { FaCreditCard, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <Sidebar className="hidden md:block w-1/4 bg-gray-100 p-4" />

        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Secure Your Payment
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Choose a payment method to proceed
            </p>

            {/* Payment Options */}
            <div className="space-y-4">
              {[ 
                { icon: <FaCreditCard className="text-blue-600 text-2xl" />, text: "Pay with Card", color: "bg-blue-100 hover:bg-blue-200" },
                { icon: <FaMoneyBillWave className="text-green-600 text-2xl" />, text: "Pay with Cash", color: "bg-green-100 hover:bg-green-200" },
                { icon: <FaMobileAlt className="text-purple-600 text-2xl" />, text: "Pay with Mobile", color: "bg-purple-100 hover:bg-purple-200" }
              ].map(({ icon, text, color }, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-between w-full p-4 border rounded-xl shadow-md transition ${color}`}
                >
                  {icon}
                  <span className="text-lg font-medium text-gray-800">{text}</span>
                </motion.button>
              ))}
            </div>

            {/* Confirm Payment */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
            >
              Confirm Payment
            </motion.button>
          </motion.div>
        </main>

        {/* Right Sidebar */}
        
        <Sidebarpay />
      </div>
    </div>
  );
};

export default Payment;

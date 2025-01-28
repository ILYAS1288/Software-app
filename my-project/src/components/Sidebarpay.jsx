import React from 'react';
import { FaCreditCard, FaDollarSign, FaTimes } from "react-icons/fa";

const Sidebarpay = () => {
  const handlePayment = () => {
    alert("You have successfully made a payment. Thank you!");
    window.location.reload();
  };

  return (
    <div className="top-0 right-0 h-auto w-32 bg-white shadow-lg p-6 flex flex-col gap-4 transform transition-transform translate-x-0 sm:w-96">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Make a Payment</h2>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FaTimes size={20} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Card Number</span>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="**** **** **** ****" />
        </label>

        <div className="flex gap-2">
          <label className="flex-1 flex flex-col gap-1">
            <span className="text-sm font-medium">Expiry Date</span>
            <input type="text" className="border rounded-lg p-2" placeholder="MM/YY" />
          </label>
          <label className="flex-1 flex flex-col gap-1">
            <span className="text-sm font-medium">CVV</span>
            <input type="password" className="border rounded-lg p-2" placeholder="***" />
          </label>
        </div>

        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Amount</span>
          <div className="relative">
            <span className="absolute left-2 top-2 text-gray-500">
              <FaDollarSign size={16} />
            </span>
            <input type="text" className="border rounded-lg p-2 pl-8 w-full" placeholder="Enter amount" />
          </div>
        </label>
      </div>

      <button onClick={handlePayment} className="bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
        <FaCreditCard size={20} /> Pay Now
      </button>
    </div>
  );
};

export default Sidebarpay;

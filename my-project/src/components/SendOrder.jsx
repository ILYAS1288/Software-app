import React from "react";

function SendOrder({ handleSendOrder }) {
  return (
    <div className="mt-4 flex justify-between gap-2">
      <button
        onClick={handleSendOrder} 
        className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition"
      >
        Send Order
      </button>
    </div>
  );
}

export default SendOrder;

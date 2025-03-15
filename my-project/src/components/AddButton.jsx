import React from 'react';

function AddButton({ onAddTable }) {
  return (
    <div>
      <button
        className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-sm hover:bg-green-600"
        onClick={onAddTable}
      >
        Add Table
      </button>
    </div>
  );
}

export default AddButton;

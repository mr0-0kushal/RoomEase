// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 shadow-md mb-4 p-4 rounded-lg">
      <div>
        <h3 className="font-semibold">{item.hotel}</h3>
        <p>{item.roomType} - {item.nights} night(s)</p>
      </div>
      <div>
        <p className="font-semibold text-lg">${item.price}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 mt-2 px-4 py-2 rounded-lg text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

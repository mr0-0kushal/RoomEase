// src/components/CartTotal.jsx
import React from 'react';

const CartTotal = ({ totalPrice, confirmBooking }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h3 className="mb-4 font-semibold text-xl">Booking Summary</h3>
      <p className="text-lg">Total: ${totalPrice}</p>
      <button
        onClick={confirmBooking}
        className="bg-green-500 mt-4 px-6 py-2 rounded-lg w-full text-white"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default CartTotal;

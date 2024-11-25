// src/components/MyStayPage.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CartItem from './MyStay';
import CartTotal from './StayTotal';

const MyStayPage = () => {
  // Sample data for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, hotel: "Hotel Paradise", roomType: "Deluxe", nights: 3, price: 450 },
    { id: 2, hotel: "Luxury Resort", roomType: "Suite", nights: 2, price: 400 },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const confirmBooking = () => {
    alert("Booking Confirmed!");
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Cart Area */}
      <div className="flex-1 p-8">
        <h2 className="mb-8 font-semibold text-3xl">My Stay</h2>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
          ))}
        </div>

        <CartTotal totalPrice={totalPrice} confirmBooking={confirmBooking} />
      </div>
    </div>
  );
};

export default MyStayPage;

// src/components/Sidebar.jsx
import React from 'react';
import customerDetails  from '../../assets/data/customerDetails';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 p-4 w-1/4 h-full text-white">
      <div className="flex items-center mb-6">
        <img
          src={customerDetails.profilePicture}
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover"
        />
        <div className="ml-4">
          <h3 className="font-semibold text-xl">{customerDetails.name}</h3>
s      <p className="text-sm">{customerDetails.email}</p>
        </div>
      </div>
      <h4 className="mb-2 font-semibold text-lg">Booking History</h4>
      <ul className="space-y-2">
        {customerDetails.bookingHistory.map((booking, index) => (
          <li key={index} className="text-sm">
            <strong>{booking.hotel}</strong> - {booking.date} - ${booking.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

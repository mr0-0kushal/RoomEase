import React from "react";

const RoomCard = () => {
  return (
    <div className="flex flex-row border rounded-lg shadow-lg overflow-hidden m-4">
      {/* Room Image */}
      <div>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Room"
        className="w-72 h-48 object-cover"
      />
      </div>

      {/* Room Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Room Title */}
        <h2 className="text-2xl font-bold mb-2">Business</h2>

        {/* Room Info */}
        <div className="flex text-sm text-gray-600 space-x-4 mb-4">
          <p>👥 up to 2 places</p>
          <p>📏 25 sq. m.</p>
          <p>🚪 1 room</p>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap text-sm text-gray-600 space-x-3 mb-4">
          <span className="flex items-center">🍸 Mini-bar</span>
          <span className="flex items-center">📶 Free Wi-Fi</span>
          <span className="flex items-center">❄️ Air Conditioner</span>
          <span className="flex items-center">🔒 Safe</span>
          <span className="flex items-center text-pink-500">➕ View All</span>
        </div>

        {/* Room Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-2">
          Cozy rooms of Business category with the total area of 25m² will
          pleasantly surprise you with design interior and the number of windows
          in the room. Even the most demanding guests can enjoy their rest.
          There is a bed, TV, mini fridge, kettle, telephone, safe, blackout
          curtains, tea station, separate bathroom with shower, toiletries,
          mirrors...
        </p>
        <p className="text-pink-500 cursor-pointer hover:underline">Read More</p>

        {/* Bottom Section: Pricing & Booking */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-gray-800">
            from $109 <span className="text-sm text-gray-500">1 night</span>
          </p>
          <button className="px-6 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700">
            Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

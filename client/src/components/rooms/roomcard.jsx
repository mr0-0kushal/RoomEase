import React from "react";

const RoomCard = ({roomType,price,specifications,availabilityStatus,description,features,image}) => {
  return (
    <div className="flex flex-row border rounded-lg shadow-lg overflow-hidden m-4">
      {/* Room Image */}
      <div>
      <img
        src={image}
        alt={roomType}
        className="w-72 h-48 object-cover"
      />
      </div>

      {/* Room Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Room Title */}
        <h2 className="text-2xl font-bold mb-2">{roomType}</h2>

        {/* Room Info */}
        <div className="flex text-sm text-gray-600 space-x-4 mb-4">
          {specifications.map((specs,index)=>(
            <div key={index} >
               {specs}
              </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap text-sm text-gray-600 space-x-3 mb-4">
        {features.map((feature,index)=>(
            <div key={index} className="flex items-center">
              {feature}
              </div>
  ))}
  </div>

        {/* Room Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-2">
          {description}
        </p>
        <p className="text-pink-500 cursor-pointer hover:underline">
        <div className="relative">
          {availabilityStatus ? (
            <span className="text-green-500 font-bold">Available</span>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">Booked</span>
            </div>)}
            </div>
        </p>

        {/* Bottom Section: Pricing & Booking */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold">
            Only <span className="text-green-600 underline ml-2 text-xl hover:text-red-700 cursor-pointer">{price}<span>&#8377;</span>
            </span>
           
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

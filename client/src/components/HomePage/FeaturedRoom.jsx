import React from 'react';

function FeaturedRooms() {
  const rooms = [
    {
      id: 1,
      image: 'room1.jpg',
      title: 'Deluxe Room',
      description: 'Spacious and luxurious room with a king-size bed.',
      price: '₹10,000',
    },
    // ... other rooms
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map(room => (
            <div key={room.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={room.image} alt={room.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{room.title}</h3>
              <p className="text-gray-700">{room.description}</p>
              <p className="text-2xl font-bold text-blue-500 mt-4">Starting from ₹{room.price}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
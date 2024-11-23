import React from 'react';

function HotelAmenities() {
  const amenities = [
    {
      icon: 'fa-wifi',
      title: 'Free Wi-Fi',
      description: 'Stay connected throughout your stay.',
    },
    // ... other amenities
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hotel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map(amenity => (
            <div key={amenity.id} className="flex flex-col items-center">
              <i className={`fa ${amenity.icon} text-4xl text-blue-500 mb-4`}></i>
              <h3 className="text-xl font-bold">{amenity.title}</h3>
              <p className="text-gray-700">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotelAmenities;
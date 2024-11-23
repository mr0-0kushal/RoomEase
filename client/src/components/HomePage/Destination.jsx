import React from 'react';

function DestinationHighlights() {
  const destinations = [
    {
      image: 'destination1.jpg',
      title: 'Explore the City',
      description: 'Discover the vibrant culture and history of the city.',
    },
    // ... other destinations
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Destination Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(destination => (
            <div key={destination.id} className="bg-white rounded-lg shadow-md p-6">
              <img src={destination.image} alt={destination.title} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-bold mt-4">{destination.title}</h3>
              <p className="text-gray-700">{destination.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Explore More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationHighlights;
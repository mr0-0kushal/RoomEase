import React from 'react';

function SpecialOffers() {
  const offers = [
    {
      title: 'Early Bird Discount',
      description: 'Book early and save 10% on your stay.',
      expiryDate: '2023-12-31',
    },
    // ... other offers
  ];

  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map(offer => (
            <div key={offer.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
              <p className="text-gray-300">Expires on {new Date(offer.expiryDate).toLocaleDateString()}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
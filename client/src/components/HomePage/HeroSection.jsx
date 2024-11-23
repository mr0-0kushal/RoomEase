import React from 'react';

function HeroSection() {
  return (
    <section className="h-full w-full bg-gray-400">
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white">Luxurious Stays, Unforgettable Experiences</h1>
        <p className="text-lg text-white mt-4">Discover elegance and comfort.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">Book Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
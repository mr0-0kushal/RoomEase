import React from 'react';
import Hero from '../../assets/images/Hero.jpg'
import { FaLocationArrow } from "react-icons/fa";


function HeroSection() {
  return (
    <section className="h-[70vh] w-full relative hero overflow-hidden">
      <img src={Hero} className='background max-w-full overflow-hidden' />
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white">Luxurious Stays, Unforgettable Experiences</h1>
        <p className="text-lg text-white mt-4">Discover elegance and comfort.</p>
        <div className="text-white font-bold py-2 px-4 text-2xl mt-8 flex gap-2 items-center rounded-3xl herobtn transition-all duration-150"><span>Book Now</span><span><FaLocationArrow /></span></div>
      </div>
    </section>
  );
}

export default HeroSection;
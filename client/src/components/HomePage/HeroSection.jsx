import React from 'react';
import Hero from '../../assets/images/Hero.jpg'
import { FaLocationArrow } from "react-icons/fa";
import Button from '../others/Button'


function HeroSection() {
  return (
    <section className="h-[80vh] w-full relative hero overflow-hidden">
      <img src={Hero} className='background max-w-full overflow-hidden' />
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-white">Luxurious Stays, Unforgettable Experiences</h1>
        <p className="text-lg text-white mt-4">Discover elegance and comfort.</p>
        <Button className = {'herobtn'} title={"Book Now"} />
      </div>
    </section>
  );
}

export default HeroSection;
import React from 'react'
import IntroSec from '../components/HomePage/IntroSec';
import HeroSection from '../components/HomePage/HeroSection';
import HotelAmenities from '../components/HomePage/HotelAmenitis';
import FeaturedRooms from '../components/HomePage/FeaturedRoom';
import Testimonials from '../components/HomePage/Testimonials';
import GallerySec from '../components/HomePage/GallerySec';

const HomePage = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='relative'>
        <IntroSec />
      </div>
      <div className=''>
        <HeroSection />
      </div>
      <div className=''>
        <FeaturedRooms />
      </div>
      <div className=''>
        <HotelAmenities />
      </div>
      <div className=''>
        <Testimonials />
      </div>
      <div className='p-5'>
        <GallerySec />
      </div>
    </div>
  )
}

export default HomePage

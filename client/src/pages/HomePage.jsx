import React from 'react'
import IntroSec from '../components/HomePage/IntroSec';
import HeroSection from '../components/HomePage/HeroSection';
import HotelAmenities from '../components/HomePage/HotelAmenitis';
import FeaturedRooms from '../components/HomePage/FeaturedRoom';
import Testimonials from '../components/HomePage/Testimonials';
import GallerySec from '../components/HomePage/GallerySec';
import {img1 , img2 , img3 , img4 } from '../assets/data/gallery'

const images = [
  { src: img1, alt: "Image 1", caption: "Artwork 1" },
  { src: img2, alt: "Image 2", caption: "Artwork 2" },
  { src: img3 , alt: "Image 3", caption: "Artwork 3" },
  { src: img4 , alt: "Image 4", caption: "Artwork 4" },
];  

const HomePage = () => {
  return (
    <div className='flex flex-col -my-20 overflow-hidden'>
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
      <div className=''>
        <GallerySec images={images}/>
      </div>
    </div>
  )
}

export default HomePage

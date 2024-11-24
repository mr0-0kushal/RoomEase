import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from '../components/HomePage/Navbar';
import IntroSec from '../components/HomePage/IntroSec';
import { useScrollPosition } from '../hooks/useScroll';
import Logo from '/Logo.svg'
import LogoWName from '../assets/LogoWName.svg'
import NavbarMini from '../components/HomePage/NavbarMini';
import HeroSection from '../components/HomePage/HeroSection';
import HotelAmenities from '../components/HomePage/HotelAmenitis';
import FeaturedRooms from '../components/HomePage/FeaturedRoom';
import Testimonials from '../components/HomePage/Testimonials';
import GallerySec from '../components/HomePage/GallerySec';
import Footer from '../components/HomePage/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true); // Set mobile if screen width is <= 768px
    } else {
      setIsMobile(false); // Set desktop if screen width is > 768px
    }
  };
  useEffect(() => {
    checkMobile(); // Check screen size on load
    // Add event listener for window resize to handle dynamic changes
    const handleResize = () => checkMobile();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup the event listener
    };
  }, []);
  const scrollPosition = useScrollPosition();
  return (
    <div className='min-w-screen min-h-screen overflow-hidden flex flex-col'>
      <div className={`header flex items-center justify-between rounded-b-xl z-10 px-4 py-3 md:px-10 md:py-3 fixed z-2 w-full overflow-hidden top-0 transition-all duration-500 ${scrollPosition > 0 ? 'bg-[#29171cd0] shadow-lg' : 'bg-transparent'}`} >
        <img src={isMobile ? Logo : LogoWName} width={isMobile ? "50px" : "70px"} alt="Logo" />
        {isMobile ? <NavbarMini /> : <Navbar />}
      </div>
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
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage

import React from 'react'
import Navbar from '../components/HomePage/Navbar';
import IntroSec from '../components/HomePage/IntroSec';
import { useScrollPosition } from '../hooks/useScroll';
import LogoWName from '../assets/LogoWName.svg'

const HomePage = () => {
    const scrollPosition = useScrollPosition();
    return (
        <div className='min-w-screen min-h-screen overflow-hidden '>
            <div className={`header flex items-center justify-between rounded-b-xl px-10 py-3 fixed z-20 w-full overflow-hidden top-0 transition-all duration-500 ${scrollPosition > 0 ? 'bg-[#29171cd0] shadow-lg' : 'bg-transparent'}`} >
                <div className='text-center flex items-center'><img src={LogoWName} alt="Logo" className='md:w-[7%]' /></div>
                <Navbar />
            </div>
            <div className='relative'>
                <IntroSec />
            </div>
            <div>
                hi
            </div>
        </div>
    )
}

export default HomePage

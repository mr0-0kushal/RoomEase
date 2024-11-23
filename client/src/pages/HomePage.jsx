import React from 'react'
import Logo from '../assets/LogoWName.svg';
import Navbar from '../components/HomePage/Navbar.';

const HomePage = () => {
    return (
        <div className='p-4 w-screen min-h-screen'>
            <img src={Logo} alt="" width={100} />
            <h1 className='text-l font-thin'>Effortless Room Booking for All</h1>
        </div>
    )
}

export default HomePage

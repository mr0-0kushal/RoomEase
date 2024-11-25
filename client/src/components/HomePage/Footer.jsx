import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoWName.svg'


const Footer = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#1A1117] px-10 py-5 w-full text-white'>
            <div className='flex justify-start items-center gap-10 w-full'>
                <img src={logo} height={100} width={100} alt="" />
                <div classname="flex gap-10 items-center justify-center w-full">
                    <Link to={'/'}>About Us</Link>
                    <Link to={'/contact'}>Contact Us</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link to={'/about'}></Link>
                    <Link to={'/about'}></Link>
                    <Link to={'/about'}></Link>
                </div>
            </div>
            <div class="flex justify-evenly items-center w-[70%]">
                <a href="#" class="hover:text-gray-200">Privacy Policy</a>
                <a href="#" class="hover:text-gray-200">Payment terms</a>
                <a href="#" class="hover:text-gray-200">Organization Detils </a>
            </div>
        </div>
    )
}

export default Footer;
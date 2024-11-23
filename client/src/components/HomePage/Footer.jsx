import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoWName.svg'


const Footer = () => {
    return (
        <div className='py-5 px-10 bg-[#1A1117] text-white flex flex-col items-center justify-center'>
            <div className='flex justify-start items-center w-full gap-10'>
                <img src={logo} height={100} width={100} alt="" />
                <div classname="grid grid-cols-2 grid-rows-3 gap-2 items-center justify-evenly">
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/about'}>About Us</Link>
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
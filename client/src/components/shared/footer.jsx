import React from 'react'
import logo from '../../../public/logoWName.svg'


const footer = () => {
    return (
        <div className='p-10 bg-[#1A1117] text-white mt-10'>
            <div className='mb-10 flex justify-center'>
                    <img src={logo} height={100} width={100} alt="" />
                </div>
            <div classname=" py-8 ">
                
                <div classname="container mx-auto flex flex-col items-center">
                    <div class="flex flex-col md:flex-row justify-center space-x-8">
                        <a href="#" class="hover:text-gray-200">ABOUT THE HOTEL</a>
                        <a href="#" class="hover:text-gray-200">NUMBERS</a>
                        <a href="#" class="hover:text-gray-200">GALLERY</a>
                    </div>
                    <div class="flex flex-col md:flex-row justify-center space-x-8 mt-7">
                        <a href="#" class="hover:text-gray-200">DOCUMENTS</a>
                        <a href="#" class="hover:text-gray-200">RESTAURANT</a>
                        <a href="#" class="hover:text-gray-200">CONTACTS</a>
                    </div>
                    <div class="flex space-x-4 mt-6">
                        <a href="#" class="hover:text-gray-200"><i class="fab fa-vk"></i></a>
                        <a href="#" class="hover:text-gray-200"><i class="fas fa-envelope"></i></a>
                        <a href="#" class="hover:text-gray-200"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <div class="text-center mt-8 space-x-52">
                        <a href="#" class="hover:text-gray-200">Privacy Policy</a>
                        <a href="#" class="hover:text-gray-200">Payment terms</a>
                        <a href="#" class="hover:text-gray-200">Organization Detils </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
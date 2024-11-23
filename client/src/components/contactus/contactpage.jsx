import React from 'react'
import IntroSec from '../HomePage/IntroSec'
import logo from '../../../public/logo.svg'
import Footer from '../shared/footer'

const contactpage = () => {
    return (
        <div>
            <IntroSec />
            <div>
                <div className='flex  items-center justify-center w-[70%] mx-auto font-serif'>
                    <div className='p-10 text-xl w-[30%] bg-white border border-black shadow-md mx-5'>
                        <div className='mb-10 flex justify-center'>
                            <img src={logo} height={100} width={100} alt="" />
                        </div>
                        <div className='text-sm'>
                            <div className='mb-6'>
                                <h1 className='text-lg font-bold'>Phone number</h1>
                                <p className='font-thin'>+7 (950) 996-4007</p>
                            </div>
                            <div className='mt-6'>
                                <h1 className='text-lg font-bold'>Address</h1>
                                <p className='font-thin'>Krasnoyarsk, Bograda, 106</p>
                            </div>
                            <div className='mt-6'>
                                <h1 className='text-lg font-bold'>E-mail</h1>
                                <p className='font-thin'>hotel@email.com</p>
                            </div>
                        </div>
                    </div>
                    {/* second Div */}
                    <div className='p-8 text-xl w-[70%] bg-white border border-black shadow-md'>
                        <div class="container mx-auto p-4">
                            <h1 class="text-xl  mb-4 text-[#555555]">IF YOU HAVE ANY QUESTIONS, WRITE TO US</h1>

                            <div class="flex items-center mb-4">
                                <div class="w-1/2">
                                    <input type="text" placeholder="your name" class="w-full bg-[#F0F3F1] text-sm px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div class="w-1/2 ml-4">
                                    <input type="email" placeholder="Your e-mail" class="w-full  bg-[#F0F3F1] text-sm px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <textarea placeholder="Question / Comment" class="w-full  bg-[#F0F3F1] text-sm p-3  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows="3"></textarea>

                            <div class="flex items-center mt-4">
                                <input type="checkbox" id="consent" class="mr-2" />
                                <label for="consent" class="text-[11px] text-[#555555] ">By clicking the "Submit" button, you consent to the processing of <a href="#" class="underline">personal data</a>.</label>
                            </div>

                            <button type="submit" class="bg-[#1A3C27] hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full">SEND</button>
                        </div>
                    </div>
                </div>
                {/* GOOGLE IFRAME */}
                <div class="flex items-center mt-24">
                    <div class="flex-grow border-t border-gray-400"></div>
                    <span class="px-4 text-3xl text-gray-500">Our Location</span>
                    <div class="flex-grow border-t border-gray-400"></div>
                </div>
                <div className='flex items-center justify-center w-[70%] mx-auto font-serif mt-10'>
                    <div className="w-full h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55625.31600546627!2d79.41407059612277!3d29.382518659382036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1732355208302!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default contactpage
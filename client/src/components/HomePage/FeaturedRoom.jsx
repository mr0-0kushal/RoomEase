import React from 'react';
import first from '../../assets/Galleryimg/img3.webp'
import feature from '../../assets/images/Feature.png'
import { FaLocationArrow } from "react-icons/fa";

function FeaturedRooms() {
  const rooms = [
    {
      id: 1,
      image: first,
      title: 'Deluxe Room',
      description: 'Spacious and luxurious room with a king-size bed.',
      price: '₹10,000',
    },
    {
      id: 2,
      image: first,
      title: 'Standard Room',
      description: 'Spacious and luxurious room with a king-size bed.',
      price: '₹5,000',
    },
    {
      id: 3,
      image: first,
      title: 'Family Room',
      description: 'Spacious and luxurious room with a king-size bed.',
      price: '₹15,000',
    },

  ];

  return (
    <section className="feature py-10 relative overflow-hidden">
      <img src={feature} alt="" className='background'/>
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-4xl font-bold text-center mb-6 text-white ">Featured Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-center justify-center">
          {rooms.map(room => (
            <div key={room.id} className="rounded-xl h-[65vh] w-[50vh] relative overflow-hidden flex flex-col items-center justify-end">
              <img src={room.image} alt={room.title} className="w-full h-full object-cover absolut" />
              <div className='flex flex-col z-1 absolute bottom-[-180px] hover:bottom-[0] text-white bg-[#49372d69] px-3 pt-4 pb-5 transition-all duration-200'>
                <h3 className="text-xl font-bold mb-6 text-center ">{room.title}</h3>
                <p className="">{room.description}</p>
                <p className="text-2xl font-bold text-[#e7bda6] mt-4">Starting from {room.price}</p>
                <button className="bg-[#e7bda6] text-[#49372d] hover:bg-[#49372d] hover:text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-white justify-center font-bold py-2 px-4 text-2xl mt-8 flex gap-2 items-center rounded-3xl bg-[#101008a1] fbtn transition-all duration-150"><span>View More</span><span><FaLocationArrow /></span></div>
      </div>
    </section>
  );
}

export default FeaturedRooms;
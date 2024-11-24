import React from 'react';
import { amenitiesData } from '../../assets/data/roomsData'

function HotelAmenities() {
  return (
    <section className="bg-[#354239] p-8 text-white w-full h-[80vh]">
      <div className="flex flex-col gap-14 items-center justify-center">
        <h2 className="text-4xl font-bold text-center mb-8">Hotel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenitiesData.map( (amenity,index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3">
              <span className='w-[81px] h-[81px] rounded-[50%] bg-[#8dad96] mb-4 items-center relative'><img src={amenity.images}  className='absolute top-2 left-1 w-20 hover:-top-4 transition-all duration-500 '  /></span>
              <h3 className="text-xl font-bold text-center">{amenity.name}</h3>
              <p className="text-white text-center">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotelAmenities;
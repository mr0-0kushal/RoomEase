import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';
import gallery from '../../assets/images/Gallery.png'

const GallerySec = ({ images }) => {
  return (
    <section className="relative px-8 py-10 overflow-hidden gallery">
      <img src={gallery} alt="" className='background'/>
      <div className='tint'/>
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="mb-8 font-bold text-3xl text-center text-white">Gallery</h2>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative shadow-lg hover:shadow-xl rounded-lg transition-shadow duration-300 overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt || `Gallery Image ${index + 1}`}
                className="group-hover:scale-110 w-full h-full transition-transform duration-300 object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium text-sm text-white">{image.caption || "Untitled"}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to={'/gallery'} className="flex justify-center items-center gap-2 bg-[#101008a1] mt-8 px-4 py-2 rounded-3xl font-bold text-2xl text-white transition-all duration-150 fbtn"><span>View More</span><span><FaLocationArrow /></span></Link>
      </div>
    </section>
  );
};

export default GallerySec;

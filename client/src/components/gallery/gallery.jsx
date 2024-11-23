import React, { useState } from 'react';

const images = [
  { src: 'https://via.placeholder.com/600x400', alt: 'Image 1' },
  { src: 'https://via.placeholder.com/800x600', alt: 'Image 2' },
  { src: 'https://via.placeholder.com/500x500', alt: 'Image 3' },
  { src: 'https://via.placeholder.com/1200x800', alt: 'Image 4' },
  // Add more images as needed
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='mx-24 font-serif'>
        <div className='mb-12'>
            <h1 className='text-[70px] text-green-800 font-thin'>Gallery</h1>
            <p className='text-2xl text-[#616161] '>OUR HOTEL</p>
        </div>

        <div className='text-lg mb-3 text-[#616161]'>
            All
            <div className='border-t border-gray-700 w-8'></div>
        </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full cursor-pointer"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-0 left-0 p-4 text-white text-3xl z-10"
              onClick={closeLightbox}
            >
              &times;
            </button>

            {/* Image */}
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />

            {/* Navigation Buttons */}
            <button
              className="absolute right-[800px] top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
              onClick={prevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute left-[800px] top-1/2 transform -translate-y-1/2 text-white text-3xl z-10"
              onClick={nextImage}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

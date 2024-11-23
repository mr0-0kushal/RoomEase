import React, { useState } from 'react';
import images from '../../assets/data/gallery';


const Gallery = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setIsOpen(true);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation(); // Prevent closing when clicking on buttons
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation(); // Prevent closing when clicking on buttons
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleOverlayClick = (e) => {
    // Close lightbox only when clicked on the overlay (not the image or buttons)
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevImage(e);
    if (e.key === "ArrowRight") nextImage(e);
    if (e.key === "Escape") closeLightbox();
  };
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeLightbox();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup listener on unmount or when the lightbox is closed
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div>

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
            <div key={index} className="relative overflow-hidden group">

              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full cursor-pointer"
                onClick={() => openLightbox(index)}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none"></div>

            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleOverlayClick}>
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
                src={images[currentImageIndex]}
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
      < Footer />
    </div>
  );
};

export default Gallery;

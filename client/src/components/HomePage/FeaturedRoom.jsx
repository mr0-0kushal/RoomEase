import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import first from '../../assets/Galleryimg/img3.webp';
import feature from '../../assets/images/Feature.png';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

  // Set up Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0 },  // Fully visible
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.section
      ref={ref}
      className="relative py-10 overflow-hidden feature"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Static Background */}
      <img src={feature} alt="" className="background" />

      {/* Section Content */}
      <motion.div
        className="flex flex-col justify-center items-center gap-5"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {/* Title */}
        <motion.h2
          className="mb-6 font-bold text-4xl text-center text-white"
          transition={{ delay: 0.2 }}
        >
          Featured Rooms
        </motion.h2>

        {/* Room Cards */}
        <div className="justify-center items-center gap-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              className="relative flex flex-col justify-end items-center rounded-xl w-[50vh] h-[65vh] overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            >
              <img
                src={room.image}
                alt={room.title}
                className="absolute w-full h-full object-cover"
              />
              <div className="bottom-[-180px] hover:bottom-[0] z-1 absolute flex flex-col bg-[#49372d69] px-3 pt-4 pb-5 text-white transition-all duration-200">
                <h3 className="mb-6 font-bold text-center text-xl">
                  {room.title}
                </h3>
                <p>{room.description}</p>
                <p className="mt-4 font-bold text-[#e7bda6] text-2xl">
                  Starting from {room.price}
                </p>
                <button className="bg-[#e7bda6] hover:bg-[#49372d] mt-4 px-4 py-2 rounded font-bold text-[#49372d] hover:text-white">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="mt-8"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            to="/rooms"
            className="flex justify-center items-center gap-2 bg-[#101008a1] px-4 py-2 rounded-3xl font-bold text-2xl text-white transition-all duration-150 fbtn"
          >
            <span>View More</span>
            <span>
              <FaLocationArrow />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default FeaturedRooms;

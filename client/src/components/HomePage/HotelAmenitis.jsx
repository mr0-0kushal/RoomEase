import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { amenitiesData } from '../../assets/data/roomsData';

function HotelAmenities() {
  // Set up Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="p-8 w-full h-auto text-[#354239]"
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-col justify-center items-center gap-14">
        {/* Title Animation */}
        <motion.h2
          className="mb-8 font-bold text-4xl text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        >
          Hotel Amenities
        </motion.h2>

        {/* Amenities Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {amenitiesData.map((amenity, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center items-center gap-3"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                duration: 0.7,
                delay: index * 0.1, // Staggered delay for smooth sequence
                ease: "easeInOut",
              }}
            >
              {/* Icon with Hover Effect */}
              <span className="relative items-center bg-[#8dad96] mb-4 rounded-[50%] w-[81px] h-[81px]">
                <img
                  src={amenity.images}
                  className="top-2 hover:-top-4 left-1 absolute w-20 transition-transform duration-500"
                  alt={amenity.name}
                />
              </span>
              {/* Amenity Details */}
              <h3 className="font-bold text-center text-xl">{amenity.name}</h3>
              <p className="text-black text-center">{amenity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default HotelAmenities;

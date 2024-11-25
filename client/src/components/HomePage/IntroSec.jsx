import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lobby from '../../assets/images/introSec.jpg';
import Slogan from '../../assets/images/slogan.svg';

const IntroSec = () => {
  // Set up Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation Variants
  const sloganVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 }, // Start off-screen
    visible: { opacity: 1, y: 0, scale: 1 },  // Fully visible
  };

  return (
    <div ref={ref} className="relative flex justify-center items-center w-full h-[110vh] imgC">
      {/* Background Image (Static) */}
      <img
        src={Lobby}
        alt="Lobby"
        className="absolute w-full h-full bgk"
      />

      {/* Tint Overlay (Static) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 tint"></div>

      {/* Animated Slogan */}
      <motion.div
        className="z-10 flex justify-center items-center text-white"
        variants={sloganVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={Slogan}
          alt="Slogan"
          className="md:w-[60%] md:h-[50%]"
        />
      </motion.div>
    </div>
  );
};

export default IntroSec;

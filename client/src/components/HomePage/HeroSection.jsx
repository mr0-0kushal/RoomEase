import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../../assets/images/Hero.jpg';
import Button from '../others/Button';

const HeroSection = () => {
  // Set up Intersection Observer
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[80vh] overflow-hidden hero"
    >
      {/* Static Background */}
      <img src='' className="absolute background" />

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col justify-center items-center mx-auto h-full text-center container">
        <motion.h1
          className="font-bold text- text-[#C28940] text-5xl"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Luxurious Stays, Unforgettable Experiences
        </motion.h1>
        <motion.p
          className="mt-4 text-black text-lg"
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        >
          Discover elegance and comfort.
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        >
          <Button className="" title="Book Now" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

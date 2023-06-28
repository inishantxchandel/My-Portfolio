import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
const ProfileCard = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const leftcardVariants = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  };
  const rightcardVariants = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      ref={ref}
      className="max-w-4xl bg-portfolio-blue pt-4 md:pt-0 md:bg-transparent mx-auto px-2 md:px-0 grid md:grid-cols-2 text-portfolio-blue"
    >
      <motion.div
        variants={leftcardVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        <Image
          src="/grey-gradient-background-designify.png"
          width={1000}
          height={1000}
          className="w-full h-full brightness-75"
          alt="cover"
        />
      </motion.div>
      <motion.div
        variants={rightcardVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-10 pl-10 md:pl-20 bg-white"
      >
        <h1 className="text-3xl tracking-wide">Nishant Chandel</h1>
        <p className="text-lg font-light">Web Developer</p>
        <h1 className="font-medium mt-4 md:mt-8">Phone:</h1>
        <p className="font-light text-sm">7347298215</p>
        <h1 className="font-medium mt-4 md:mt-8">Email:</h1>
        <p className="font-light text-sm">nishantxchandel@gmail.com</p>
        <h1 className="font-medium mt-4 md:mt-8">Address:</h1>
        <p className="font-light text-sm">Nangal, Punjab, India</p>
        <h1 className="font-medium mt-4 md:mt-8">Date of Birth:</h1>
        <p className="font-light text-sm">November 9th, 2002</p>
      </motion.div>
    </div>
  );
};

export default ProfileCard;

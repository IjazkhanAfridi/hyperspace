'use client';
import React from 'react';
import { motion } from 'framer-motion';
import EarthCanvas from '../canvas/EarthCanvas';
import { slideIn } from '../utils/SlideIn';

const Earth = () => {
  return (
    <div className={`flex items-center justify-center overflow-hidden w-full`}>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='h-[350px] md:h-[650px] xl:min-h-[750px] w-full'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Earth;

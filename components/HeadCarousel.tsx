'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = ['/images/bg1.png', '/images/bg2.png', '/images/bg3.png','/images/bg4.png'];

export default function HeaderCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="relative w-full h-[100dvh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top Branding */}
     <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10 px-4">
  <div className="flex items-center space-x-2">
    <span className="text-white font-semibold text-2xl sm:text-5xl">Anand Dessert</span>
  </div>
</div>

      {/* Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
  key={images[index]}
  initial={{ opacity: 0, scale: 0.97 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.97 }}
  transition={{ duration: 0.6 }}
  className="absolute inset-0"
>
  <Image
    src={images[index]}
    alt={`Slide ${index}`}
    fill
    className="object-cover"
    priority
    sizes="100vw"
  />
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none"></div>
</motion.div>
      </AnimatePresence>

      {/* Bottom Menu CTA */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 text-black font-medium py-2 px-6 rounded-full shadow-xl backdrop-blur-md text-sm"
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        ⬇ Menu
      </motion.button>
    </div>
  );
}

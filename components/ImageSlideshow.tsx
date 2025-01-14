"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define a custom type for the images
interface SlideImage {
  url: string;
  alt: string;
}

const images: SlideImage[] = [
  { url: "/rhino.jpeg", alt: "Live trading chart" },
  { url: "/hello.png", alt: "Smart money signals" },
  { url: "/grad1.jpg", alt: "Momentum detection" }
];

const ImageSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-gray-800">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlideshow;

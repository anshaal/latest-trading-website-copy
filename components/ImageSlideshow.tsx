import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideImage {
  url: string;
  alt: string;
}

interface ImageSlideshowProps {
  cardId: number;
}

const imageSets: { [key: number]: SlideImage[] } = {
  1: [
    { url: "/card1-1.png", alt: "Live trading chart" },
    { url: "/card1-2.png", alt: "Smart money signals" },
    { url: "/card1-3.png", alt: "Momentum detection" },
  ],
  2: [
    { url: "/card2-1.png", alt: "Card 2 Image 1" },
    { url: "/card2-2.png", alt: "Card 2 Image 2" },
    { url: "/card2-3.png", alt: "Card 2 Image 3" },
  ],
  3: [
    { url: "/card3-1.png", alt: "Card 3 Image 1" },
    { url: "/card3-2.png", alt: "Card 3 Image 2" },
    { url: "/card3-3.png", alt: "Card 3 Image 3" },
  ],
  4: [
    { url: "/card4-1.jpg", alt: "Card 3 Image 1" },
    { url: "/card4-2.png", alt: "Card 3 Image 2" },
  ]
};

const displayDurations: { [key: number]: number } = {
  1: 4000,
  2: 5000,
  3: 3000,
  4: 4000
};

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({ cardId }) => {
  const images = imageSets[cardId] || imageSets[1];
  const displayDuration = displayDurations[cardId] || 4000;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, displayDuration);

    return () => clearInterval(timer);
  }, [images, displayDuration]);

  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 aspect ratio container */}
      <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-gray-800 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.7,
              ease: "easeInOut"
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSlideshow;
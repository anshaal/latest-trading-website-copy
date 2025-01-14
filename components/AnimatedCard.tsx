"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCardProps } from "./types";

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl p-6 md:py-16 md:px-12 ring-1 bg-[url('/sample2.svg')] bg-no-repeat bg-cover ring-white/10 hover:ring-white/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 w-full max-w-6xl mx-auto mb-8"
      >
      {children}
    </motion.section>
  );
};

export default AnimatedCard;
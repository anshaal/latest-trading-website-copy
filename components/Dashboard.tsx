"use client";
import React, { ReactNode, useRef } from "react";import { motion } from "framer-motion";
import { useInView } from "framer-motion";
// import { useRef } from "react";
interface AnimatedCardProps {
  children: ReactNode;
}
const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border border-gray-800 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {children}
    </motion.section>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center mx-auto">
          {/* Top Section */}
          <AnimatedCard>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-sm text-gray-400">Live Tracking</div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  Advanced insights in{" "}
                  <span className="text-cyan-400">real-time</span>
                </h1>
                <p className="text-gray-400 max-w-xl">
                  Track all markets in real-time with proprietary buy & sell
                  points, multi-timeframe support & resistance zones, auto golden
                  pocket, & more.
                </p>
              </div>
              <div className="relative h-[200px] md:h-[300px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Live trading chart"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </AnimatedCard>

          {/* Bottom Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Bottom Left Section */}
            <AnimatedCard>
              <h2 className="text-xl md:text-2xl font-bold">
                Trade like{" "}
                <span className="text-cyan-400">smart money</span>
              </h2>
              <p className="text-gray-400">
                Easily identify key areas on your chart where the big players are
                likely going to enter. Now introducing Artificial Intelligence (AI)
                Signals.
              </p>
              <div className="relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Smart money trading chart"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedCard>

            {/* Bottom Right Section */}
            <AnimatedCard>
              <h2 className="text-xl md:text-2xl font-bold">
                Identify key{" "}
                <span className="text-cyan-400">momentum shifts</span>
              </h2>
              <p className="text-gray-400">
                Find hidden and regular momentum shifts before they happen for
                maximum confidence.
              </p>
              <div className="relative h-[200px] md:h-[250px] w-full rounded-lg overflow-hidden border border-gray-800">
                <img
                  src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                  alt="Momentum shifts chart"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";
import React, { ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

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
      className="flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl p-12 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 w-full max-w-6xl mx-auto mb-8"
    >
      {children}
    </motion.section>
  );
};

const Dashboard = () => {
  return (
    <div className="relative isolate bg-[#000] min-h-screen overflow-hidden">
      {/* Top-left gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
        />
      </div>

      {/* Center gradient blob */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] bg-gradient-to-tr from-[#00ffff] to-[#7f00ff] opacity-50"
        />
      </div>

      {/* Bottom-right gradient blob */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] translate-x-1/3 rotate-[210deg] bg-gradient-to-tr from-[#0ff] to-[#ff1493] opacity-50"
        />
      </div>

      <div className="min-h-screen text-white py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-sm text-cyan-400 mb-2">Pro Toolkits</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            State of the art<br />trading indicators
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Trade automated price action, advanced signals, and spot reversals with money flow. 
            Our world renowned toolkits replace indicators with simple workflows for your charts.
          </p>
        </div>

        <div className="space-y-8">
          <AnimatedCard>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Live Market <span className="text-cyan-400">Analysis</span>
                </h2>
                <p className="text-gray-400">
                  Track all markets in real-time with proprietary buy & sell points, 
                  multi-timeframe support & resistance zones, auto golden pocket, & more.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-800">
                  <img
                    src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                    alt="Live trading chart"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-800">
                  <img
                    src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                    alt="Smart money signals"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Smart Money <span className="text-cyan-400">Signals</span>
                </h2>
                <p className="text-gray-400">
                  Easily identify key areas on your chart where the big players are likely going to enter. 
                  Now introducing Artificial Intelligence (AI) Signals.
                </p>
              </div>
            </div>
          </AnimatedCard>

          <AnimatedCard>
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Momentum <span className="text-cyan-400">Detection</span>
                </h2>
                <p className="text-gray-400">
                  Find hidden and regular momentum shifts before they happen for maximum confidence. 
                  Advanced algorithms detect potential market moves.
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative h-[300px] rounded-xl overflow-hidden border border-gray-800">
                  <img
                    src="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
                    alt="Momentum detection"
                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
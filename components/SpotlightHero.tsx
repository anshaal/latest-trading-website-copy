"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";
import { Cover } from "@/components/ui/cover";
import Navbar from "@/components/Navbar";

const SpotlightHero = () => {
  return (
    <div className="min-h-screen bg-[url('/6Titan--0.svg')] bg-contain bg-no-repeat  flex items-center justify-center  bg-[#11141a] antialiased bg-grid-white/[0.02]  overflow-hidden">
      
      <div className="w-full flex items-center justify-center  bg-cover bg-center bg-no-repeat ">
        {/* Sparkle effect */}
        <div className="absolute inset-0 flex justify-center items-end">
          
          {/* <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={40}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                /> */}
        </div>

        {/* <Spotlight 
                className="hidden md:block md:-top-20 md:left-60" 
                fill="white" 
            /> */}
        
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full py-12 md:py-20">
          <div className="flex flex-col items-center justify-center overflow-hidden rounded-md relative z-20 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-white tracking-tight">
              Stop Guessing <br /> Start Earning
            </h1>

            <div className="flex items-center justify-center group rounded font-semibold p-0.5 w-fit mt-4">
              <div className="bg-transparent w-fit h-full p-1.5 flex flex-col justify-center items-center">
                <h1 className="boujee-text font-extrabold text-center">
                  Monthly Profits,
                  <span className="inline sm:hidden">
                    <br />
                  </span>
                  Guaranteed!
                </h1>

                <style jsx global>{`
                  .boujee-text {
                    --bg-size: 400%;
                    font-size: clamp(3rem, 8vmin, 2rem);
                    background: linear-gradient(
                        90deg,
                        #3b82f6,
                        #9333ea,
                        #ec4899,
                        #3b82f6
                      )
                      0 0 / var(--bg-size) 100%;
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                  }

                  @media (prefers-reduced-motion: no-preference) {
                    .boujee-text {
                      animation: move-bg 15s linear infinite;
                    }
                  }

                  @keyframes move-bg {
                    to {
                      background-position: var(--bg-size) 0;
                    }
                  }

                  @media screen and (max-width: 600px) {
                    .boujee-text {
                      font-size: clamp(1.5rem, 5vmin, 3rem);
                    }
                  }
                `}</style>
              </div>
            </div>

            <div className="w-full max-w-2xl px-4 md:w-[40rem] h-40 relative mt-6">
              {/* Gradients - adjusted for mobile */}
              <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[90%] md:w-3/4 blur-sm" />
              <div className="absolute inset-x-4 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[90%] md:w-3/4" />
              <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/2 md:w-1/4 blur-sm" />
              <div className="absolute inset-x-20 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/2 md:w-1/4" />

              <div className="absolute inset-0 w-full h-full opacity-90 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

              <div className="flex justify-center">
                <p className="font-normal text-base md:text-xl lg:text-2xl text-neutral-300 max-w-lg text-center mx-auto mt-8">
                  The Ultimate TradingView indicator helps you acheive gains
                  effortlessly, even with zero trading experience!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://discord.gg/kZzNjXH5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="group inline-flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  <span>Join Discord</span>
                </button>
              </a>

              <a href="#pricing" className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r bg-white hover:opacity-90 text-black px-6 py-3 rounded-full transition-all duration-200 text-sm sm:text-base">
                <span>Get Started</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightHero;

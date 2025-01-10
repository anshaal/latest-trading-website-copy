"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";
import { Cover } from "@/components/ui/cover";
import Navbar from "@/components/Navbar";

const SpotlightHero = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
            {/* <Navbar/> */}
            {/* Sparkle effect */}
            <div className="absolute inset-0 flex justify-center items-end">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={40}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                {/* Title Section */}
                <div className="flex flex-col items-center justify-center overflow-hidden rounded-md relative z-20">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold text-center text-white">
                        Supercharge you
                    </h1>
                    <div className="flex items-center justify-center group rounded text-sm sm:text-base md:text-lg font-semibold from-pink-300 via-purple-300 to-indigo-400 p-0.5 w-fit">
                        <div className="bg-transparent w-fit h-full p-1.5 flex flex-col justify-center items-center">
                            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl lg:text-7xl h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                trading strategy  <br />
                            </h1>
                        </div>
                    </div>

                    <div className="w-[40rem] h-40 relative">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full opacity-90 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        <div className="flex justify-center">
                            <p className="font-normal text-xs sm:text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-lg text-center mx-auto mt-7 sm:mt-8 md:mt-10 lg:mt-12">
                                Unlock the most powerful trading tools and AI platform used by 100,000+ traders globally.
                                Get 30 Days Risk Free
                            </p>
                        </div>
                    </div>
                    <button className="group inline-flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-800 text-white px-6 py-3 rounded-full transition-all duration-200 mt-6">
                        <span>Get 30 Days Risk Free</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
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
                    </button>
                    {/* <Cover>Get 30 Days Risk Free</Cover> */}
                </div>
            </div>
        </div>
    );
}

export default SpotlightHero;

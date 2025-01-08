"use client";
import React from "react";
import { Spotlight } from "./ui/spotlight";
import { SparklesCore } from "./ui/sparkles";
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";
const SpotlightHero = () => {
  // return (
  //     <>
  //     <div
  //         className="h-screen w-full rounded-md bg-[#0B0B0F] flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  //         {/* Sparkle effect */}
  //         <div className="absolute inset-0 flex justify-center items-end">
  //             <SparklesCore
  //                 id="tsparticlesfullpage"
  //                 background="transparent"
  //                 minSize={0.6}
  //                 maxSize={1.4}
  //                 particleDensity={100}
  //                 className="w-full h-full"
  //                 particleColor="#FFFFFF"
  //             />
  //         </div>
  //         <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
  //         <div className=" p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
  //             {/* Title Section */}

  //             <div className="flex flex-col items-center justify-center overflow-hidden rounded-md relative z-20">

  //                 <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white">
  //                     Algotitan
  //                 </h1>

  //                 <div className="w-[40rem] h-40 relative">
  //                     {/* Gradients */}
  //                     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
  //                     <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
  //                     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
  //                     <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />



  //                     {/* Radial Gradient to prevent sharp edges
  //                     <div className="absolute inset-0 w-full h-full opacity-90 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
  //                     <div className="flex justify-center">
  //                         <p className="font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mt-7">
  //                             Spotlight effect is a great way to draw attention to a specific part
  //                             of the page. Here, we are drawing the attention towards the text
  //                             section of the page. I don&apos;t know why but I&apos;m running out of
  //                             copy.
  //                         </p>
  //                     </div> */}
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //     </>
  // );
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-slate-900 antialiased relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  "></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Your Trading Revolution  <br />  <Cover>Starts Here</Cover>
        </h1>
        
        {/* <div className="w-[40rem] h-40 relative ">

        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div> */}
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
          Automate success with the future of trading
        </p>
      </div>
    </div>
  );
}

export default SpotlightHero;
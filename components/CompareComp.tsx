import React from "react";
import { Compare } from "@/components/ui/compare";

const CompareComp = () => {
  return (
    <div className="relative isolate flex flex-col items-center justify-center min-h-screen p-4 bg-[#11141a]">
      {/* Top gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -top-100 -left-10 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50"
        />
      </div>

      {/* Middle gradient blob */}
      {/* <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] -translate-x-1/2 -translate-y-1/2 rotate-[120deg] bg-gradient-to-tr from-[#00ffff] to-[#7f00ff] opacity-50"
        />
      </div> */}

      {/* Bottom gradient blob */}
      <div
        aria-hidden="true"
        className="absolute -bottom-60 right-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative w-[68.125rem] h-[68.125rem] translate-x-1/3 rotate-[210deg] bg-gradient-to-tr from-[#0ff] to-[#ff1493] opacity-50"
        />
      </div>

      {/* Compare component */}
      <div className="p-4 rounded-3xl">
        <Compare
          firstImage="https://cdn.prod.website-files.com/62f11b068296f36584c1ec32/6606172379d796e7b5845114_rdsfasd34.png"
          secondImage="https://cdn.prod.website-files.com/62f11b068296f36584c1ec32/660617245e1b01c5af3b20de_gdsasdfg342.png"
          firstImageClassName="object-fill object-left-top"
          secondImageClassname="object-fill object-left-top"
          className="h-[250px] w-[400px] sm:h-[350px] sm:w-[600px] md:h-[500px] md:w-[900px]"
          slideMode="hover"
        />
      </div>
      <div className="mt-4">
        <p className="text-center text-sm sm:text-base md:text-lg font-medium px-3 py-1 rounded-md text-white">
          Titans Algo Daily Sureshot Indicator v1.0 
        </p>
      </div>
    </div>
  );
};

export default CompareComp;
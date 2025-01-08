"use client"

import React, { useEffect, useState } from "react";
import { InfiniteSlider } from '@/components/ui/infinite-slider';

const MarqueeSlider = () => {
  return (
    <div className="mt-5 bg-black text-white">
      <InfiniteSlider gap={24} reverse>
        <img
          src='/ddchrome_logo.svg'
          alt='Apple Music logo'
          className='h-auto w-auto'
        />
        <img
          src='/chrome_logo.svg'
          alt='Chrome logo'
          className='h-[120px] w-auto'
        />
        <img
          src='/strava_logo.svg'
          alt='Strava logo'
          className='h-[120px] w-auto'
        />
        <img
          src='/nintendo_logo.svg'
          alt='Nintendo logo'
          className='h-[120px] w-auto'
        />
        <img
          src='/jquery_logo.svg'
          alt='Jquery logo'
          className='h-[120px] w-auto'
        />
        <img
          src='/prada_logo.svg'
          alt='Prada logo'
          className='h-[120px] w-auto'
        />
      </InfiniteSlider>
    </div>
  );
}


export default MarqueeSlider;

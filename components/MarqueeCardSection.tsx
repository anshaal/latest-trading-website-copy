"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MarqueeCardSection = () => {
  return (
    <div id="testimonials" className="h-[60rem] rounded-md flex flex-col antialiased bg-[#11141a] dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* Heading section */}
      <div className="text-center mb-16">
        <h2 className="text-base font-semibold text-gray-300">Testimonials</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          What our traders say
        </p>
      </div>

      <InfiniteMovingCards
        items={logoTestimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={featuresTestimonials}
        direction="left"
        speed="slow"
      />
      <InfiniteMovingCards
        items={resultsTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default MarqueeCardSection;
const logoTestimonials = [
  {
    quote:
      "I was skeptical at first, but Titans Algo proved me wrong! In just two months, I've been making consistent monthly profits, and I can finally say trading feels less stressful and way more rewarding. The Discord group is like a family!",
    name: "Rohit M.",
    title: "Engineer, India",
  },
  {
    quote:
      "Titans Algo is worth every penny! Last month, I made over $2,000 in profits, and I’m not even spending hours analyzing charts anymore. The expert advice in the community is icing on the cake!",
    name: "Jessica H.",
    title: "Entrepreneur, USA",
  },
  {
    quote:
      "I started small with Titans Algo, and within three months, my profits have tripled. The signals are spot on, and the Discord community has been so welcoming. It’s like trading with a team of friends.",
    name: "Igor S.",
    title: "Full-Time Trader, Russia",
  },
  {
    quote:
      "This tool is a blessing for busy people like me. I’ve been consistently making an extra $1,500 a month with Titans Algo, and it’s so easy to use. Plus, the support team is super friendly!",
    name: "Ahmed N.",
    title: "Investor, UAE",
  },
  {
    quote:
      "I never imagined trading could be this simple. Titans Algo’s clear signals and monthly tips have helped me earn steady profits while learning so much along the way. Highly recommend!",
    name: "Lena F.",
    title: "Analyst, Germany",
  },
  {
    quote:
      "I’ve added over $2,500 to my trading account last month, thanks to Titans Algo. It feels amazing to have such a reliable tool. And the Discord group? It’s like trading with friends worldwide.",
    name: "Daniel K.",
    title: "Freelance Trader, Canada",
  },]
  const featuresTestimonials = [
    {
      quote:
        "With Titans Algo, I finally feel in control of my trades. The momentum feature has helped me catch trends early, and my monthly profits keep growing. This tool is pure gold!",
      name: "Priya S.",
      title: "Stock Trader, India",
    },
    {
      quote:
        "I’ve been consistently making $1,000–$1,500 every month since I started using Titans Algo. The no-repaint signals are a lifesaver for a day trader like me!",
      name: "Michael T.",
      title: "Day Trader, USA",
    },
    {
      quote:
        "The customization options in Titans Algo are perfect for my style of swing trading. Last month alone, I earned $1,800 in profits. The best part? It feels effortless.",
      name: "Hans W.",
      title: "Swing Trader, Germany",
    },
    {
      quote:
        "As someone with a packed schedule, Titans Algo has been a game-changer. I made $2,000 in profits last month without spending hours glued to charts. It’s truly a lifesaver!",
      name: "Fatima R.",
      title: "Busy Professional, UAE",
    },
    {
      quote:
        "Being a complete beginner, I never thought I’d make $500 in my first month of trading! Titans Algo’s signals are so easy to follow, and the support in Discord is amazing.",
      name: "Ivan K.",
      title: "Beginner, Russia",
    },
    {
      quote:
        "With Titans Algo, trading finally feels rewarding. I made $3,000 in profits last month and feel confident in every trade I take. The guidance and tools are unmatched!",
      name: "Emily J.",
      title: "Investor, Australia",
    },
    ];
    const resultsTestimonials = [
      {
        quote:
          "I’ve been using Titans Algo for six months now, and my monthly profits have steadily climbed to $2,500. It’s a tool I can’t trade without!",
        name: "Rajesh T.",
        title: "Full-Time Trader, India",
      },
      {
        quote:
          "Last month, I earned $3,000 with Titans Algo’s incredible accuracy. Trading feels so much simpler and way more fun now!",
        name: "Sophia R.",
        title: "Investor, UK",
      },
      {
        quote:
          "I’ve gone from making random trades to consistently earning $1,000–$1,200 a month. Titans Algo is a true game-changer, especially for someone like me who’s new to trading.",
        name: "Omar H.",
        title: "New Trader, UAE",
      },
      {
        quote:
          "Thanks to Titans Algo, I’ve added $1,500 to my trading account every month. The signals are clear, and the community support is phenomenal!",
        name: "Elena V.",
        title: "Part-Time Trader, Russia",
      },
      {
        quote:
          "Before Titans Algo, I struggled to find consistency in my trades. Now, I’m making over $2,000 monthly, and trading has become a lot less overwhelming.",
        name: "William L.",
        title: "Freelance Trader, USA",
      },
      {
        quote:
          "As someone with years of experience, I can confidently say Titans Algo has taken my trading to the next level. I’ve been making $3,500 a month, and it’s all thanks to this amazing tool.",
        name: "Ahmed K.",
        title: "Experienced Trader, Egypt",
      },
      ];

      const testimonials = [
        {
          quote:
            "I used to dread trading, but Titans Algo turned it into something I look forward to! With $2,000 in profits last month, I feel like I’ve finally cracked the code.",
          name: "Neha R.",
          title: "Software Developer, India",
        },
        {
          quote:
            "I’m blown away by the results! Last month, I earned $1,800 using Titans Algo, and the private Discord community is like having a team of mentors. It’s priceless.",
          name: "James W.",
          title: "Business Owner, USA",
        },
        {
          quote:
            "Titans Algo has made trading so approachable. I earned $1,500 last month and couldn’t be happier. The global community in Discord is just amazing.",
          name: "Monica L.",
          title: "Teacher, Germany",
        },
        {
          quote:
            "As a busy professional, I never thought I’d have time to trade. Titans Algo changed that! I made $1,200 last month with minimal effort, and the support team is wonderful.",
          name: "Ali Z.",
          title: "Architect, UAE",
        },
        {
          quote:
            "I’ve finally found a trading tool that works. Titans Algo has helped me consistently earn $2,000–$2,500 a month, and the learning experience has been fantastic!",
          name: "Dmitry K.",
          title: "Engineer, Russia",
        },
        ];

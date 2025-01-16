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
      "I started with no experience, and thanks to Titans Algo's indicator, I'm now consistently making profitable trades. The simplicity is mind-blowing!",
    name: "Alex M.",
    title: "New Trader",
  },
  {
    quote:
      "The best trading tool I’ve used. No more guesswork, just clear signals and consistent profits every month!",
    name: "Laura S.",
    title: "Professional Trader",
  },
  {
    quote:
      "Titan's Algo has completely changed the way I approach trading. The indicator is reliable and easy to use, even for beginners!",
    name: "James B.",
    title: "Novice Trader",
  },
  {
    quote:
      "I’ve tried other indicators, but none compare to Titans Algo. I’m earning more with less effort, and it’s made a huge difference in my trading success.",
    name: "Mark T.",
    title: "Experienced Trader",
  },
  {
    quote:
      "Titan’s Algo has been a game-changer for me. Their easy-to-understand trading signals have helped me increase my returns and reduce my risks.",
    name: "Sophie W.",
    title: "Full-Time Trader",
  },
  {
    quote:
      "The simplicity and high accuracy of Titans Algo's indicator have made it a must-have tool in my trading arsenal. Highly recommend!",
    name: "David K.",
    title: "Investor",
  },
];
const featuresTestimonials = [
  {
    quote:
      "Titans Algo's high win rate and easy-to-use features make it a perfect fit for traders of all skill levels. I’ve seen consistent profits since using it.",
    name: "Cathy R.",
    title: "Advanced Trader",
  },
  {
    quote:
      "The Momentum detection feature is amazing! It helps me catch profitable trends early and execute trades effortlessly.",
    name: "Tom H.",
    title: "Day Trader",
  },
  {
    quote:
      "I love the no repaint feature and clear entry points. This tool takes the guesswork out of trading and makes my decisions more confident.",
    name: "Ethan G.",
    title: "Swing Trader",
  },
  {
    quote:
      "The automatic signals and copy trading features have saved me countless hours of analysis. It’s like having a team of experts by my side 24/7!",
    name: "Nina P.",
    title: "Busy Professional",
  },
  {
    quote:
      "The customizable settings allow me to tailor the indicator to my unique style of trading, which has boosted my success significantly.",
    name: "Jake L.",
    title: "Freelance Trader",
  },
  {
    quote:
      "Being a complete newbie, I was amazed at how easy Titans Algo made trading. The guide, the signals, and the support are incredible.",
    name: "Grace F.",
    title: "Beginner",
  },
];
const resultsTestimonials = [
  {
    quote:
      "I’ve been using Titans Algo for a few months now, and my monthly profits have been consistently higher. I’m no longer just guessing the market.",
    name: "Ryan D.",
    title: "Full-Time Trader",
  },
  {
    quote:
      "With over 85% accuracy, my trading profits have been through the roof. Titans Algo makes it easy to trade with confidence and earn.",
    name: "Sophia L.",
    title: "Investor",
  },
  {
    quote:
      "I started trading just last year, and now I’m making consistent gains every month. I can’t believe how quickly I’ve seen results.",
    name: "Samuel W.",
    title: "New Trader",
  },
  {
    quote:
      "Thanks to Titans Algo, my account has seen consistent growth month after month. The results speak for themselves.",
    name: "Olivia B.",
    title: "Part-Time Trader",
  },
  {
    quote:
      "I no longer feel overwhelmed when trading. With Titans Algo, I’m making profits each month and learning the strategies behind the signals.",
    name: "David A.",
    title: "Freelance Trader",
  },
  {
    quote:
      "I’ve been trading for years, but with Titans Algo, I’m now able to maximize my monthly earnings with minimal effort. This tool is a game-changer.",
    name: "Ellen P.",
    title: "Experienced Trader",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

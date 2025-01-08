"use client"
import React, { useState } from 'react';

const tiers = [
  {
    name: "Pro Plan",
    monthlyPrice: "$29",
    description: "For an experience without limits",
    features: [
      "Access to the best AI models *",
      "Quick search and write",
      "Quick summary with PDF, website and YouTube videos",
      "Unlimited file uploads up to 50Mb",
      "Access to data analysis and insight",
      "Creation and use of custom bots",
      "Access to library of quick prompts",
      "Craftsmanship to visualize artifacts",
      "Projects for knowledge-based bots",
      "AI image generation",
      "Support for larger chat inputs *",
      "Early access to new features",
      "Priority customer support"
    ]
  },
  {
    name: "Teams Plan",
    monthlyPrice: "$19",
    minSeats: "Minimum 5 seats",
    description: "Everything in Pro plus",
    features: [
      "More use than Pro",
      "Manage team from dashboard (invite team, revoke access, etc.)",
      "Budget-friendly for large teams",
      "Centralized billing and administration",
      "Early access to collaborative features",
      "Enterprise-level security with SOC2, ISO, GDPR compliance"
    ]
  }
];

const Pricing = () => {
  const [billingType, setBillingType] = useState('monthly');

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-base font-semibold text-indigo-300">Pricing</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Choose the right plan for you
            </p>
          </div>
          
          <div className="w-full max-w-sm mb-16">
            <div className="bg-gray-800 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingType('monthly')}
                className={`flex-1 py-2 px-4 rounded ${
                  billingType === 'monthly' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingType('annual')}
                className={`flex-1 py-2 px-4 rounded flex items-center justify-center ${
                  billingType === 'annual' ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`}
              >
                Annual
                <span className="ml-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded">
                  35% off
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-lg bg-gray-900 p-8 ring-1 ring-gray-800 hover:ring-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  {tier.minSeats && (
                    <span className="ml-auto text-sm text-gray-400">{tier.minSeats}</span>
                  )}
                </div>

                <div className="mt-6">
                  <p className="text-4xl font-bold text-white">{tier.monthlyPrice}</p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>

                <p className="mt-6 text-gray-300">{tier.description}</p>

                <button className="mt-8 w-full rounded-lg bg-white py-2 text-gray-900 hover:bg-gray-100">
                  Buy
                </button>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <svg className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
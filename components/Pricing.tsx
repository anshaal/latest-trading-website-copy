"use client";
import React, { useState } from "react";

type Tier = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  yearlyDiscount: number;
  description: string;
  features: string[];
  monthlyLink: string;
  yearlyLink: string;
};

const tiers: Tier[] = [
  {
    name: "Titans Algo Pro",
    monthlyPrice: 99,
    yearlyPrice: 690,
    yearlyDiscount: 43,
    description: "For an experience without limits",
    features: [
      "Monthly profits with Premium Indicator and personal guidance",
      "Quick search and writeGet access to Daily High Winrate Signals",
      "Learn Market Analysis by Pro Traders",
      "Quick support for every member",
    ],
    monthlyLink: "https://whop.com/checkout/plan_3rKocQWXgM3JA?d2c=true",
    yearlyLink: "https://whop.com/checkout/plan_TAOGLIObc6dVK?d2c=true",
  },
  {
    name: "Titans Algo Pro+",
    monthlyPrice: 189,
    yearlyPrice: 690,
    yearlyDiscount: 70,
    description: "Everything in Pro plus",
    features: [
      "Monthly profits with Premium Indicator and personal guidance in every session",
      "Daily High Winrate Signals and access to Market Analysis by Pro Traders",
      "Get access to Personal Account Management Service at your ease",
      "Get access Algo Trading Setups",
    ],
    monthlyLink: "https://whop.com/checkout/plan_xkWisN8GDUDM9?d2c=true",
    yearlyLink: "https://whop.com/checkout/plan_qoNfECSq0hK7o?d2c=true",
  },
];

const Pricing: React.FC = () => {
  const [billingType, setBillingType] = useState<"monthly" | "annual">("annual");

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  const getDisplayPrice = (
    tier: Tier
  ): { price: string; period: string } => {
    if (billingType === "annual") {
      return {
        price: formatPrice(tier.yearlyPrice),
        period: "per year",
      };
    }
    return {
      price: formatPrice(tier.monthlyPrice),
      period: "per month",
    };
  };

  const handlePurchase = (tier: Tier): void => {
    const link = billingType === "annual" ? tier.yearlyLink : tier.monthlyLink;
    window.location.href = link;
  };

  return (
    <div id="pricing" className="relative isolate bg-black min-h-screen">
      {/* Background gradient effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-base font-semibold text-gray-300">Pricing</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Choose the right plan for you
            </p>
          </div>

          <div className="w-full max-w-sm mb-16">
            <div className="bg-white/10 rounded-2xl p-1 flex">
              <button
                onClick={() => setBillingType("monthly")}
                className={`flex-1 py-2 px-4 rounded-2xl ${
                  billingType === "monthly" ? "bg-white text-black" : "text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingType("annual")}
                className={`flex-1 py-2 px-4 rounded-2xl flex items-center justify-center ${
                  billingType === "annual" ? "bg-white text-black" : "text-white"
                }`}
              >
                Annual
                <span className="ml-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                  Save up to 70%
                </span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                </div>

                <div className="mt-6">
                  <p className="text-4xl font-bold text-white">{getDisplayPrice(tier).price}</p>
                  <p className="text-sm text-gray-400">{getDisplayPrice(tier).period}</p>
                  {billingType === "annual" && (
                    <p className="mt-2 text-sm text-gray-300">
                      Save {tier.yearlyDiscount}% with annual billing
                    </p>
                  )}
                </div>

                <p className="mt-6 text-gray-300">{tier.description}</p>

                <button
                  onClick={() => handlePurchase(tier)}
                  className="mt-8 w-full rounded-lg bg-white py-2 text-black hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </button>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
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
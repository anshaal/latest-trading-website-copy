"use client";

import React, { useState } from "react";

// Define the FAQ type
interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Function to toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQs array
  const faqs: FAQ[] = [
    {
      question: "What services does Titans Algo provide?",
      answer:
        "Custom TradingView indicator subscriptions and exclusive access to our Discord channel.",
    },
    {
      question: "How do I access my TradingView indicator subscription?",
      answer:
        "Once your subscription is activated, connect your discord account and from there you'll be given access to premium indicator.",
    },
    {
      question: "Does Titans Algo guarantee monthly profits?",
      answer:
        "No. Market is highly dynamic and unpredictable. The context used is for promotional purposes only.",
    },
    {
      question: "Is there a free trial available for your services?",
      answer:
        "Currently, we do not offer free trials. All subscriptions are paid and provide immediate access to our premium services.",
    },
    {
      question: "Are refunds available if I am unsatisfied with the service?",
      answer:
        "All sales are final. As our products are digital, refunds cannot be provided once your subscription is activated.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10">
          <p className="font-inter mb-2 text-center text-sm font-medium text-gray-400">FAQs</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          {/* <p className="font-inter mt-4 max-w-xl px-5 text-base font-light text-gray-400 lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna.
          </p> */}
        </div>
        <div className="mt-10 flex w-full flex-col">
          {faqs.map((faq, index) => (
            <React.Fragment key={index}>
              <div className="relative my-3 w-full rounded-md bg-[#18181B] border-[#2F2F32] border px-12 py-8">
                <div className="max-w-2xl">
                  <h2
                    className="text-xl font-bold text-white cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </h2>
                  {openFAQ === index && (
                    <p className="font-inter mt-4 text-base font-light text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <button
                  className="absolute right-5 top-9 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white"></circle>
                    <path
                      d="M7.04688 11.9999H16.9469"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    {openFAQ !== index && (
                      <path
                        d="M12 7.05005V16.95"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    )}
                  </svg>
                </button>
              </div>
              {/* <div className="mr-4 ml-8 border border-gray-700"></div> */}
            </React.Fragment>
          ))}
        </div>
        <p className="font-inter mx-auto mt-12 text-center text-base text-gray-400">
          Can't find the answer you're looking for? Reach out to our
          <a href="#" className="text-white font-bold">
            {" "}
            customer support team.
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQs;

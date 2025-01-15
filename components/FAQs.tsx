"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

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
    <section className="bg-[#11141a] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10"
        >
          <p className="font-inter mb-2 text-center text-sm font-medium text-gray-400">
            FAQs
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex w-full flex-col"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="relative my-3 w-full rounded-md bg-[rgb(25 25 37] border-[#2F2F32] border px-12 py-8 cursor-pointer hover:bg-[rgba(25 25 37] transition-colors duration-300"
              >
                <div className="max-w-2xl">
                  <h2 className="text-xl font-semibold text-white">
                    {faq.question}
                  </h2>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p className="font-inter mt-4 text-base font-light text-gray-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <motion.div
                  className="absolute right-5 top-9 pointer-events-none"
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;

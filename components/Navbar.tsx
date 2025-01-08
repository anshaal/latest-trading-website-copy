"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true); // Add the effect when scrolled past 50px
      } else {
        setHasScrolled(false); // Remove the effect when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all "bg-white/20 backdrop-blur-md duration-300 `}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-6 lg:px-10 lg:py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white">
                        <img className="h-20" src="/titansalgo_Logo.PNG" alt="" />

                    </a>

        {/* Navbar Links */}
        <div
          className={`lg:flex space-x-6 ${isOpen ? "flex-col space-y-4" : "hidden"} lg:space-y-0 lg:flex-row`}
        >
          <a
            href="#"
            className="text-white font-semibold px-6 py-4 rounded-lg hover:text-gray-200"
          >
            Features
          </a>
          <a
            href="#"
            className="text-white font-semibold px-6 py-4 rounded-lg hover:text-gray-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-white font-semibold px-6 py-4 rounded-lg hover:text-gray-200"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-white font-semibold px-6 py-4 rounded-lg hover:text-gray-200"
          >
            Free Indicator
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#0f172a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

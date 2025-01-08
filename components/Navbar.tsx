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
                        <svg width="50%" height="80%" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg" fill="#0f172a"><g clipPath="url(#clip0_308_946)" fill="currentColor"><path d="M46.234 5.729h5.854V26.02h11.459v5.007H46.234zm36.214 25.298H77.23v-2.539h-.352c-1.34 2.046-3.068 3.068-5.254 3.068-4.09 0-6.805-3.173-6.805-7.51V12.974h5.219v10.331c0 2.222 1.27 3.774 3.384 3.774 2.08 0 3.808-1.657 3.808-3.95V12.974h5.22zm41.904 0h6.081L115.941 5.729l-14.48 25.298h6.055l8.425-14.693z"></path><path d="M101.461 12.974H96.52l-3.996 7.012-3.997-7.012h-4.941l5.144 9.027-5.144 9.026h4.879l4.06-7.122 4.057 7.122h4.879l-5.144-9.026zm30.049-8.11h5.219v26.163h-5.219zm7.083 28.491 5.043-.988c.669 1.975 2.328 3.174 4.584 3.174 2.892 0 4.761-1.904 4.761-4.867v-2.01h-.353c-1.445 1.657-3.279 2.61-5.712 2.61-5.006 0-8.533-3.702-8.533-9.273 0-5.817 3.492-9.555 8.498-9.555 2.61 0 4.478 1.059 5.889 2.821h.353v-2.291h5.077v17.84c0 5.57-3.808 8.885-9.838 8.885-5.255 0-8.887-2.291-9.769-6.346M153.156 22c0-2.962-1.975-5.112-4.761-5.112S143.6 19.039 143.6 22c0 2.892 2.009 5.007 4.795 5.007s4.761-2.117 4.761-5.007m6.815.001c0-5.817 3.984-9.59 10.014-9.59C175.98 12.41 180 16.183 180 22c0 5.854-4.019 9.591-10.015 9.591-6.03-.001-10.014-3.773-10.014-9.59m14.774 0c0-2.997-1.975-5.112-4.761-5.112-2.821 0-4.795 2.115-4.795 5.112s1.974 5.148 4.795 5.148c2.786 0 4.761-2.15 4.761-5.148M36.217 34.646l4.139-7.231L25.868 2.108 11.381 27.415h8.279l6.209-10.845z"></path><path d="M31.042 29.224 8.267 29.22 24.833.3h-8.277L0 29.216l4.137 7.237h31.045z"></path></g></svg>

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

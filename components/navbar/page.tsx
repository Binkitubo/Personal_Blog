'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#491A75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-15" src="avila-logo.png" alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white px-3 py-2 rounded-md text-xl/5 font-medium transition duration-500 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white px-3 py-2 rounded-md text-xl/5 font-medium transition duration-500 ease-in-out"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white px-3 py-2 rounded-md text-xl/5 font-medium transition duration-500 ease-in-out"
                >
                  Services
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out animate-shake"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out animate-shake"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#EE7DDC] hover:bg-[#EE7DDC] hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-500 ease-in-out animate-shake"
            >
              Services
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

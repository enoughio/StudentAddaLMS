'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = ['Home', 'About Us', 'Library Listing', 'Contact Us'];

  return (
    <nav className="w-full bg-[#ECE3DA] font-urbanist top-2 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
        
        {/* Left: Hamburger Menu Button (Mobile) */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-0 sm:p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#435058]"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={24} className="text-[#435058]" />
            ) : (
              <Image
                src="/home/hamburger.png"
                width={24}
                height={24}
                alt="Menu"
                className="object-cover"
                
              />
            )}
          </button>
        </div>

        {/* Left: Logo */}
        <div className="flex items-center">
          {/* Desktop Logo */}
          <div className="hidden md:block">
            <Image
              src="/home/logo.png"
              width={158}
              height={28}
              alt="StudentAdda Logo"
              className="object-cover"
             
            />
          </div>
          
          {/* Mobile Logo */}
          <div className="flex flex-col items-center md:hidden">
            <Image
              src="/home/responsive_logo.png"
              alt="StudentAdda Logo"
              width={32}
              height={32}
              className="object-cover"
            />
            <span className="text-xs text-[#435058] font-bold mt-0.5">
              StudentAdda
            </span>
          </div>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-4">
          <div className="flex items-center gap-2 lg:gap-4 font-urbanist font-bold text-[#435058] text-sm lg:text-base">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Sign In Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="flex items-center gap-2 bg-[#435058] text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full transition hover:bg-[#36424a]"
          >
            <span className="font-urbanist font-bold text-sm lg:text-base">
              {isLoggedIn ? 'Sign Out' : 'Sign In'}
            </span>
            <Image
              src="/home/signin.png"
              alt="Sign In Icon"
              width={16}
              height={16}
              className="lg:w-5 lg:h-5"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Absolute positioning prevents content shifting */}
      {isOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-white shadow-lg z-50 border-t border-gray-200">
          <div className="px-3 py-2 flex flex-col gap-2 sm:gap-3">
            {navItems.map((item, i) => (
              <a
                key={i}
                href="#"
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-md font-semibold text-[#435058] transition hover:bg-[#f5f0ea]"
              >
                {item}
              </a>
            ))}

<button
  onClick={() => setIsLoggedIn(!isLoggedIn)}
  className="flex items-center justify-center gap-1 text-white bg-[#435058] rounded-md transition hover:bg-[#36424a] text-xs px-2 py-1 sm:px-1  md:text-sm md:px-2 md:py-1.5 lg:text-base lg:px-4 lg:py-2"
>
  <span className="font-medium">{isLoggedIn ? 'Sign Out' : 'Sign In'}</span>
  <Image
    src="/home/signin.png"
    alt="Sign"
    width={14}
    height={14}
    className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5"
  />
</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
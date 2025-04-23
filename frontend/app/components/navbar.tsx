'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full bg-[#ECE3DA] font-urbanist shadow-md sticky top-0 z-50">
      <div className="w-full mx-auto px-8 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/image.png" alt="Logo" className="w-32 h-8 object-contain" />
        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-4 font-semibold text-[#435058]">
          {['Home', 'About Us', 'Library Listing', 'Contact Us'].map((item, i) => (
            <a
              key={i}
              href="#"
              className="px-4 py-2 rounded-full transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1]"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Sign In */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="flex items-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full"
          >
            <span>Sign In</span>
            <img
              src="/image.png"
              alt="User"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color='black' /> : <Menu size={24} color='black'/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-semibold text-[#435058] bg-white">
          {['Home', 'About Us', 'Library Listing', 'Contact Us'].map((item, i) => (
            <a
              key={i}
              href="#"
              className="px-4 py-2 rounded-full transition duration-200 hover:bg-[#435058] hover:text-[#FEEDC1]"
            >
              {item}
            </a>
          ))}

          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className="flex items-center gap-2 bg-[#435058] text-white px-4 py-2 rounded-full "
          >
            <span>Sign In</span>
            <img
              src="/image.png"
              alt="User Icon"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

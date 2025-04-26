'use client';


import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="w-full bg-[#ECE3DA] font-urbanist  top-0 z-50">
      <div className="w-full mx-auto px-8 py-3  flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
        <Image
            src="/home/logo.png"
            width={158}
            height={28}
            alt="Logo"
          />


        {/* // <img src=" alt="Logo" className="w-32 h-8 object-contain" /> */}

        </div>

        {/* Center: Nav links */}
        <div className="hidden md:flex items-center gap-4 font-urbanist font-bold text-[#435058] text-[14.19px] leading-[14.19px] tracking-[0.14px]">
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
              <span className="font-urbanist font-bold text-[15.61px] leading-[22.71px] tracking-[0.14px]">
                Sign In
              </span>
              <Image
                src="/home/signin.png"
                alt="Sign In Icon"
                width={20}
                height={20}
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

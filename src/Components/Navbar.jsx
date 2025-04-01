import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; 
import DBM from '../assets/DBM.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FBF9F0] flex items-center justify-between px-6 py-2 sticky top-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center md:pl-14">
        <img src={DBM} alt="School Logo" className="w-14 h-14 md:w-17 md:h-17" />
        <h1 className="text-2xl md:text-3xl font-bold pl-4 text-[#081646] tracking-wider">
          DBM Vidya Mandir
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">
        <a href="/" className="text-xl hover:text-gray-600 transition">Home</a>
        <a href="/admission" className="text-xl hover:text-gray-600 transition">Admission</a>
        <a href="/about" className="text-xl hover:text-gray-600 transition">About</a>
        <a href="/contact" className="text-xl hover:text-gray-600 transition">Contact</a>
      </div>

      {/* Book a Tour Button - Desktop */}
      <div className="hidden lg:block md:pr-14">
        <a href="/contact" className="px-6 py-2 border border-black text-[#081646] hover:bg-gray-200 transition rounded-lg text-xl font-semibold">
          Book a Tour
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#FBF9F0] shadow-lg py-4 flex flex-col items-center space-y-4 lg:hidden">
          <a href="/" className="text-lg py-2 hover:text-gray-600 transition">Home</a>
          <a href="/admission" className="text-lg py-2 hover:text-gray-600 transition">Admission</a>
          <a href="/about" className="text-lg py-2 hover:text-gray-600 transition">About</a>
          <a href="/contact" className="text-lg py-2 hover:text-gray-600 transition">Contact</a>
          <a href="/contact" className="w-3/4 text-center py-3 border border-black text-[#081646] hover:bg-gray-200 transition rounded-lg text-lg font-semibold">
            Book a Tour
          </a>
        </div>
      )}
    </nav>
  );
}
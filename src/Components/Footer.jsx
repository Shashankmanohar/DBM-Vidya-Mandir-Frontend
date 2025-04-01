import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#10148c] w-full text-white flex flex-col items-center px-20 py-10">
      {/* Main Content - Flex for Desktop */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
        
        {/* Left Section - School Name & Description */}
        <div className="lg:w-2/5 w-full text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="md:text-6xl text-4xl font-bold text-white tracking-wider">
            DBM Vidya Mandir
          </h1>
          <p className="md:text-lg text-sm mt-2">
            Every moment in your child’s early years is crucial for their growth and development.
          </p>
          <p className="text-2xl font-semibold">Follow Us!</p>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-3 justify-center lg:justify-start">
            {/* Instagram Icon (Image) */}
            
            <a
              href="https://www.instagram.com/dbm_vidya_mandir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8"
                loading="lazy"
              />
            </a>
            
            <a
              href="https://www.facebook.com/dbmvidyamandir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="w-8 h-8"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="lg:w-1/5 w-full text-center lg:text-left mb-6 lg:mb-0">
          <h3 className="text-lg font-bold text-white mb-3">Home</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/" className="hover:underline">Programs</a></li>
            <li><a href="/admission" className="hover:underline">Admissions</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section - Other Services */}
        <div className="lg:w-1/5 w-full text-center lg:text-left">
          <h3 className="text-lg font-bold text-white mb-3">Other Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/admission" className="hover:underline">Fees</a></li>
            <li><a href="/" className="hover:underline">Gallery</a></li>
            <li>Contact : 9801785849, 7004386572</li>
            <li>Email: dbmvidyamandir1@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Copyright (Always Full Width & Centered) */}
      <div className="w-full text-center mt-6 border-t border-white pt-4 text-sm">
        <p>&copy; {new Date().getFullYear()} DBM Vidya Mandir. All rights reserved.</p>
         <p className="py-2">Build & Maintain by - <a href="https://www.webfloratechnologies.com/">Webflora Technologies</a></p>
      </div>
    </footer>
  );
}

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DBM from '../assets/DBM.png';

export default function WelcomeSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      x: "-100%", // Moves one full width to the left
      duration: 150, // Speed (adjust as needed)
      ease: "linear",
      repeat: -1, // Infinite loop
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 100), // Ensures a seamless loop
      },
    });
  }, []);

  return (
    <div className="w-full bg-[#FBF9F0] overflow-hidden pt-5">
      {/* Marquee Section */}
      <div className="relative w-full bg-[#F85555] md:rounded-t-[100px] rounded-t-[40px] text-white overflow-hidden whitespace-nowrap">
        <div ref={marqueeRef} className="flex space-x-10 min-w-max py-7 font-bold text-lg tracking-wide">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center gap-10">
              <span className="md:text-4xl text-2xl">ART COMPETITION FOR ALL THE STUDENTS</span>
              <img src={DBM} alt="School Logo" className="md:w-13 w-10 md:h-13 h-10" />
              <span className="md:text-4xl text-2xl">LIMITED SEAT AVAILABLE</span>
              <img src={DBM} alt="School Logo" className="md:w-13 w-10 md:h-13 h-10" />
              <span className="md:text-4xl text-2xl">ADMISSION OPEN FOR 2025-2026</span>
              <img src={DBM} alt="School Logo" className="md:w-13 w-10 md:h-13 h-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-5 lg:px-20 py-10 gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img src={DBM} alt="Teacher" className="w-80 h-auto rounded-lg shadow-lg" />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 bg-[#ffcf55] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold">Welcome to</h2>
          <h1 className="text-4xl font-bold text-[#081646]">DBM Vidya Mandir !!</h1>
          <p className="mt-4 text-lg text-gray-800">
            Where we believe in nurturing young minds and fostering a love for learning from an early age. At DBM Vidya Mandir, we are dedicated to providing a safe, supportive, and stimulating environment where children can grow.
          </p>
          <a href="#" className="mt-4 inline-block text-blue-600 font-semibold">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}

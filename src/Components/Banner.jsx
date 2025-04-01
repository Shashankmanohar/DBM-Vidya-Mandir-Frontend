import React from 'react';
import BannerImg from '../assets/BannerImg.png';
import bookSVG from '../assets/bookSVG.svg';
import peopleSVG from '../assets/peopleSVG.svg';

export default function Banner() {
  return (
    <div className="w-full h-auto min-h-[85vh] bg-[#FBF9F0] flex flex-col-reverse lg:flex-row items-center justify-center overflow-hidden px-5 lg:px-20">
      
      {/* Left Content */}
      <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start justify-center text-center lg:text-left lg:pl-16">
        <h1 className="text-4xl text-[#081646] sm:text-5xl md:text-6xl font-bold mt-5">
          Inspiring Curiosity,
        </h1>
        <h1 className="text-4xl text-[#081646] sm:text-5xl md:text-6xl font-bold mt-3">
          Cultivating Success.
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl mt-5 w-4/5">
          We love to inspire children to explore and discover through play and learning.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-7 w-full sm:w-auto">
          <a href="/contact" className="py-4 px-8 text-lg md:text-2xl rounded-lg bg-[#0f148b] text-white text-center transition duration-300 hover:bg-[#081646]">
            Contact Us!
          </a>
          <a href="/admission" className="py-4 px-8 text-lg md:text-2xl border rounded-lg text-center transition duration-300 hover:bg-[#ffffff] hover:border-[#0f148b]">
            Apply for Admission
          </a>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full sm:w-auto">
          <div className="flex items-center gap-3">
            <img src={bookSVG} alt="BookSVG" className="w-12 h-12" />
            <div className='ml-3'>
              <p className="text-2xl font-bold">Play School - STD - 8</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img src={peopleSVG} alt="PeopleSVG" className="w-12 h-12" />
            <div className='ml-3'>
              <p className="text-2xl font-bold">300+</p>
              <p className="text-lg text-gray-600">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <img src={BannerImg} alt="Banner" className="w-[80%] max-w-[500px] md:max-w-[650px]" />
      </div>
      
    </div>
  );
}

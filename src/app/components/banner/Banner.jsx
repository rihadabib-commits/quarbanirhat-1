import Image from "next/image";
import React from "react";
import {
  FaRegCalendarAlt,
  FaUserShield,
} from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoPricetagSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="relative w-full bg-gray-50 overflow-hidden">

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500] max-w-[1400] mx-auto px-6 md:px-12 items-center">

        {/* Left Text */}
        <div className="space-y-5 py-10 md:py-0">

          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
            Find Your Perfect <br />
            <span className="text-emerald-700">Qurbani Animal</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600">
            Healthy, well-fed and verified animals for your Qurbani.
          </p>

          <button className="px-6 md:px-10 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-full text-sm md:text-lg shadow-lg transition">
            Browse All Animals
          </button>
        </div>

        {/* Right Image (FIXED) */}
        <div className="flex justify-center md:justify-end items-center">
          <img
            src="/image/pngtree-holstein-cow-png-image_20610191.png"
            alt="cow"
            className="w-[300] md:w-[500] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="relative z-20 w-full max-w-5xl mx-auto -mt-8 md:-mt-16 bg-white px-4 md:px-8 py-6 rounded-2xl shadow-2xl">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-emerald-50 rounded-full">
              <FaUserShield className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-800">
              Trusted Sellers
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-emerald-50 rounded-full">
              <FaHeart className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-800">
              Healthy Animals
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-emerald-50 rounded-full">
              <IoPricetagSharp className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-800">
              Best Price
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-emerald-50 rounded-full">
              <FaRegCalendarAlt className="w-6 md:w-8 h-6 md:h-8 text-emerald-600" />
            </div>
            <span className="text-sm md:text-base font-semibold text-slate-800">
              Easy Booking
            </span>
          </div>
   
        </div>
        
      </div>
      <br></br>
          <h2 className="text-black font-bold text-3xl pl-40">Feautured Animeal</h2>
          <br></br>
    </div>
  );
};

export default Banner;
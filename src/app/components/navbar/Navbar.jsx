

"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { FaCow } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("animal");
  const [open, setOpen] = useState(false);

  const handleClick = (value) => {
    setActive(value);
    setOpen(false); // mobile menu close after click
  };

  return (
    <div className="bg-white shadow-sm border-b">
  
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 text-black rounded-full flex items-center justify-center border border-green-500">
            <FaCow  size="30"/>
          </div>
          <span className="text-green-600 font-semibold text-sm">
            Quarbani Bazaar
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            onClick={() => handleClick("animal")}
            className={`font-bold text-lg ${
              active === "animal" ? "text-green-600" : "text-gray-800"
            }`}
          >
            Home
          </Link>

          <Link
            href="/animeal"
            onClick={() => handleClick("allAnimal")}
            className={`font-bold text-lg ${
              active === "allAnimal" ? "text-green-600" : "text-gray-800"
            }`}
          >
            All Animal
          </Link>
        </div>

        {/* Desktop Right Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link href="/profile">
            <div
              onClick={() => handleClick("profile")}
              className={`flex items-center gap-1 cursor-pointer ${
                active === "profile" ? "text-green-600" : "text-gray-600"
              }`}
            >
              <ImProfile />
              Profile
            </div>
          </Link>

          <Link href="/login">
            <div
              onClick={() => handleClick("logout")}
              className="flex items-center gap-1 cursor-pointer text-gray-600"
            >
              <CiLogout />
              Logout
            </div>
          </Link>

        </div>

        {/* Mobile Button */}
        <div className="  text-green-500 md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 border-t bg-white space-y-3">

          <Link href="/" onClick={() => handleClick("animal")} className="block text-green-500 py-2">
            Home
          </Link>

          <Link href="/animeal" onClick={() => handleClick("allAnimal")} className=" text-green-500 block py-2">
            All Animal
          </Link>

          <Link href="/profile" onClick={() => handleClick("profile")} className=" py-2 flex text-green-500 items-center gap-2">
            <ImProfile /> Profile
          </Link>

          <Link href="/login" onClick={() => handleClick("logout")} className="py-2 flex text-green-500 items-center gap-2">
            <CiLogout /> Logout
          </Link>

        </div>
      )}

    
  );
};

export default Navbar;




"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Animal = () => {
  const [animals, setAnimals] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-black">
          All Animals
        </h1>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-emerald-500 cursor-pointer shadow-sm"
          >
            <option value="">Sort by Price</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAnimals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow border hover:shadow-lg transition overflow-hidden"
          >
            
            {/* Image FIXED */}
            <div className="w-full  overflow-hidden">
            
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl text-black font-bold">
                {item.name}
              </h2>

              <p className="text-gray-500">
                {item.type}
              </p>

              <p className="text-emerald-600 font-bold text-xl mt-2">
                ৳ {item.price.toLocaleString()}
              </p>

              <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
                <span>📍</span> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading */}
      {animals.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          Loading animals...
        </div>
      )}
    </div>
  );
};

export default Animal;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <div className="bg-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">

        {animals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              

              <p className="text-gray-500 text-sm mb-3">
                {item.type}
              </p>

              <div className="text-2xl font-extrabold text-emerald-700 mb-4">
                ৳ {item.price.toLocaleString()}
              </div>

              <hr className="mb-4 border-gray-100" />

              <div className="flex items-center justify-between">

                <Link href={`/deteals/${item.id}`}>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm transition">
                    View Details
                  </button>
                </Link>

                <p className="text-sm text-gray-600">
                  📍 {item.location}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Card;
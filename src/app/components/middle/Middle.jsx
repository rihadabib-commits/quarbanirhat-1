


import React from "react";

const animals = [
  {
    id: 1,
    name: "Deshi Shahi Cow",
    breed: "Local Deshi",
    image: "https://i.ibb.co.com/R4SH5mpJ/pngtree-holstein-cow-png-image-20610191.png",
  },
  {
    id: 2,
    name: "Premium Black Goat",
    breed: "Jamunapari Mix",
    image: "https://i.ibb.co.com/1GpJzTyn/images-1.jpg",
  },
  {
    id: 3,
    name: "White Beauty Cow",
    breed: "Friesian Mix",
    image: "https://i.ibb.co.com/39hgjfMM/images-2.jpg",
  },
  {
    id: 4,
    name: "Golden Goat",
    breed: "Boer Mix",
    image: "https://i.ibb.co.com/7xF4MDkp/images-3.jpg",
  },
];

const Middle = () => {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto p-6 space-y-12 bg-gray-50 rounded-xl">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Tips */}
          <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-6">
                Qurbani Tips
              </h2>

              <ul className="space-y-4 text-gray-700 font-medium">
                <li>✔️ সুস্থ পশু নির্বাচন করুন</li>
                <li>✔️ পশুর দাঁত ও চোখ ভালোভাবে দেখুন</li>
                <li>✔️ পর্যাপ্ত খাবার ও পানি দিন</li>
                <li>✔️ পরিষ্কার পরিবেশ নিশ্চিত করুন</li>
              </ul>
            </div>

            <button className="mt-6 border border-gray-200 text-emerald-800 font-bold py-2 px-6 rounded-lg hover:bg-emerald-50 transition">
              Read More Tips
            </button>
          </div>

          {/* Animals */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6">
              Top Animals
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {animals.map((item) => (
                <div key={item.id} className="text-center group">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-xl mb-3 border border-gray-100 group-hover:scale-105 transition duration-300"
                  />

                  <h3 className="font-bold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.breed}
                  </p>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROMISE SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">
            Our Promise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

            {/* 1 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21s-7-4.35-7-10a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1 9 0c0 5.65-7 10-7 10z" />
              </svg>
              <span className="text-sm font-bold text-gray-700">
                100% Healthy Animals
              </span>
            </div>

            {/* 2 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1z" />
              </svg>
              <span className="text-sm font-bold text-gray-700">
                Fair Price Guarantee
              </span>
            </div>

            {/* 3 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l8 4v6c0 5-3.5 9.7-8 10-4.5-.3-8-5-8-10V6l8-4z" />
              </svg>
              <span className="text-sm font-bold text-gray-700">
                Trusted Sellers
              </span>
            </div>

            {/* 4 */}
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-10 10v3a4 4 0 0 0 4 4h1v-8H6a6 6 0 1 1 12 0h-1v8h1a4 4 0 0 0 4-4v-3A10 10 0 0 0 12 2z" />
              </svg>
              <span className="text-sm font-bold text-gray-700">
                After Sales Support
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Middle;
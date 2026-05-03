


"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AnimalDetails = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => {
        const foundAnimal = data.find(
          (item) => item.id === parseInt(id)
        );
        setAnimal(foundAnimal);
      });
  }, [id]);

  const handleBooking = () => {
    
    if (!name || !email || !phone || !address) {
      toast.error("Booking failed! Please fill all fields.");
      return;
    }

    toast.success("Booking successful!");

  
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  if (!animal)
    return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6 min-h-screen">

        
        <div className="text-sm mb-6">
          <span className="text-emerald-700 font-bold">
            {animal.name}
          </span>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-[400] object-cover rounded-xl border"
          />

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {animal.name}
            </h1>

            <div className="border-t pt-4 grid grid-cols-2 gap-y-3 text-gray-700">

              <p className="font-semibold">Type:</p>
              <p>{animal.type}</p>

              <p className="font-semibold">Breed:</p>
              <p>{animal.breed}</p>

              <p className="font-semibold">Price:</p>
              <p className="text-emerald-700 font-bold">
                ৳ {animal.price.toLocaleString()}
              </p>

              <p className="font-semibold">Weight:</p>
              <p>{animal.weight} kg</p>

              <p className="font-semibold">Age:</p>
              <p>{animal.age} Years</p>

              <p className="font-semibold">Location:</p>
              <p>{animal.location}</p>

            </div>
          </div>
        </div>

      
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-2">Description</h3>
          <p className="text-gray-600">
            {animal.description}
          </p>
        </div>

    
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        
          <div className="lg:col-span-2 bg-gray-50 p-6 rounded-xl border">

            <h3 className="text-lg font-bold mb-4 text-black">
              Booking Form
            </h3>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border text-black rounded"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border text-black rounded"
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border text-black rounded"
              />

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border text-black rounded"
              />

              <button
                onClick={handleBooking}
                className="w-full bg-[#052c15] text-white py-3 rounded-lg font-bold"
              >
                Book This Animal
              </button>

            </div>
          </div>

          
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 flex flex-col items-center justify-center text-center">
            <p className="mb-4 text-gray-700">
              Please login to book this animal.
            </p>
            <button className="bg-[#052c15] text-white px-8 py-2 rounded-lg font-bold">
              Login
            </button>
          </div>

        </div>
      </div>

      
      <ToastContainer />
    </div>
  );
};

// export default AnimalDetails;
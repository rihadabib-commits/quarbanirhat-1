"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const defaultImage = "/default-user.png";

const Page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await authClient.getSession();

      if (error || !data?.user) {
        router.push("/login");
        return;
      }

      setUser(data.user);
    };

    loadUser();
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading profile...</p>
      </div>
    );
  }

  const imageSrc =
    user?.image && user.image.startsWith("http")
      ? user.image
      : defaultImage;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-gray-100 p-4">

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
          My Profile
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col items-center w-full md:w-1/3">

            {/* AVATAR */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-green-200 shadow-lg mb-4 bg-white flex items-center justify-center">

              {user?.image ? (
                <Image
                  src={imageSrc}
                  alt="profile"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              ) : (
                <CgProfile size={110} className="text-gray-500" />
              )}

            </div>

            {/* NAME */}
            <h3 className="text-xl font-bold text-slate-800">
              {user?.name || "No Name"}
            </h3>

            {/* EMAIL */}
            <p className="text-gray-500 text-sm mb-6">
              {user?.email || "No Email"}
            </p>

            {/* BUTTON */}
            <Link href="/update">
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition-all">
                Update Profile
              </button>
            </Link>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-2/3 space-y-4">

            <div className="bg-white border rounded-xl p-4 flex justify-between">
              <span className="font-semibold text-gray-700">Name</span>
              <span className="text-gray-600">{user?.name || "N/A"}</span>
            </div>

            <div className="bg-white border rounded-xl p-4 flex justify-between">
              <span className="font-semibold text-gray-700">Email</span>
              <span className="text-gray-600">{user?.email || "N/A"}</span>
            </div>

            <div className="bg-white border rounded-xl p-4 flex justify-between">
              <span className="font-semibold text-gray-700">Photo URL</span>
              <span className="text-gray-600 truncate max-w-[200px]">
                {user?.image || "No Image"}
              </span>
            </div>

            <div className="bg-white border rounded-xl p-4 flex justify-between">
              <span className="font-semibold text-gray-700">Member Since</span>
              <span className="text-gray-600">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
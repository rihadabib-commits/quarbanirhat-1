"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert("Fill all required fields ❌");
      return;
    }

    try {
      setLoading(true);

      // ONLY SIGNUP (NO updateUser here)
      const { data, error } = await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
        redirectTo: "/login",
      });

      if (error) {
        console.log(error);
        toast(error.message || "Signup failed ");
        return;
      }

      toast("Account created successfully ");

      router.push("/login");
    } catch (err) {
      console.log("ERROR:", err);
      toast("Internal Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        redirectTo: "/",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[350px]"
      >
        <h2 className="text-2xl font-bold text-center mb-5 text-black">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded text-black"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional - use later)"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded text-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded text-black"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded text-black"
        />

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full border p-2 mb-3 rounded flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-xl" /> Google
        </button>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          {loading ? "Loading..." : "Register"}
        </button>

        <ToastContainer />

        <p className="text-center mt-3 text-black">
          Already have account?{" "}
          <Link href="/login" className="text-green-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
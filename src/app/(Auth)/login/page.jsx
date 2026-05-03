

"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Email Login (STRICT)
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast("Email & Password দে ⚠️");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      // ❌ wrong credentials
      if (error) {
        console.log(error);
        toast("Invalid email or password ❌");
        return;
      }

      // ❌ extra safety
      if (!data) {
        alert("Login failed ❌");
        return;
      }

      // ✅ success
      toast("Login successful ✅");
      router.push("/");

    } catch (err) {
      console.error(err);
      toast("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login (STRICT)
  const handleGoogleLogin = async () => {
    try {
      const res = await authClient.signIn.social({
        provider: "google",
      });

      if (res?.error) {
        toast("Google login failed ❌");
        return;
      }

      router.push("/");

    } catch (err) {
      console.error(err);
      toast("Google login error ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Login
        </h2>

        <fieldset className="border border-green-200 rounded-lg p-4 space-y-4">
          <legend className="px-2 text-green-600 font-semibold">
            User Login
          </legend>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full mt-1 px-4 py-2 text-black border rounded-lg focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 text-black border rounded-lg focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition mb-4"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </fieldset>

        {/* Register */}
        <p className="text-center text-sm text-black mt-4">
          Dont have account?{" "}
          <Link href="/register" className="text-green-600 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;



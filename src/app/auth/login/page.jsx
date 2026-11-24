
"use client";

import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setError(error.message || "Login failed!");
        return;
      }

      setSuccess("Login successfully!");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);

    } catch (err) {
      setError(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">

        {/* Heading */}
        <div className="text-center mb-7">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>

            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-50 text-green-600 p-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Submit */}
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isPending={loading}
            isDisabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

        </form>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>

        {/* Go Back */}
        <Button
          variant="outline"
          fullWidth
          className="mt-5"
          onPress={() => router.back()}
        >
          ← Go Back
        </Button>

      </div>
    </div>
  );
};

export default LoginPage;

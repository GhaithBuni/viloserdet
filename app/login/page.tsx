"use client"; // Client component

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_URL}/admin/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } } // Ensure JSON is sent
      );
      localStorage.setItem("adminToken", res.data.token);
      router.push("/admin");
    } catch (err: any) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-gray-100 rounded-lg shadow-md"
      >
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="block w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 border rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full md:w-[400px] text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D7E92] text-white hover:bg-[#096D7A]">
          Login
        </button>
      </form>
    </div>
  );
}

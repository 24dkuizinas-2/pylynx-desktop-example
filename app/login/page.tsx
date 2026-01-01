"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(128,0,255,0.3)]">

        {/* Fox Mascot + Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl mb-2">🦊</div>
          <h1 className="text-3xl font-bold tracking-wide">PyLynx Login</h1>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-zinc-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-zinc-300">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Login Button */}
        <button
          onClick={() => router.push("/dashboard")}
          className="
            w-full px-4 py-3 rounded-xl text-lg font-semibold
            bg-purple-600 hover:bg-purple-700
            shadow-[0_0_20px_rgba(128,0,255,0.4)]
            transition-all
          "
        >
          Log In
        </button>

        {/* Links */}
        <div className="flex justify-between mt-4 text-sm text-zinc-400">
          <button
            onClick={() => router.push("/signup")}
            className="hover:text-white transition"
          >
            Create account
          </button>

          <button
            onClick={() => router.push("/reset")}
            className="hover:text-white transition"
          >
            Forgot password
          </button>
        </div>

      </div>
    </div>
  );
}

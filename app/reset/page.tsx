"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(128,0,255,0.3)]">

        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl mb-2">🦊</div>
          <h1 className="text-3xl font-bold tracking-wide">Reset Password</h1>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1 text-zinc-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <button
          onClick={() => router.push("/login")}
          className="w-full px-4 py-3 rounded-xl text-lg font-semibold bg-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)] transition-all"
        >
          Send Reset Link
        </button>

      </div>
    </div>
  );
}

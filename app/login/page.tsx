"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase";
const supabase = getSupabase();

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async () => {
    setErrorMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    router.push("/dashboard");
  };

  const loginWithGitHub = () => {
    supabase.auth.signInWithOAuth({ provider: "github" });
  };

  const loginWithGitLab = () => {
    supabase.auth.signInWithOAuth({ provider: "gitlab" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(128,0,255,0.3)]">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl mb-2">🦊</div>
          <h1 className="text-3xl font-bold tracking-wide">Log In to PyLynx</h1>
        </div>

        {/* Error */}
        {errorMsg && (
          <p className="text-red-400 text-sm mb-4 text-center">{errorMsg}</p>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-zinc-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleLogin}
          className="w-full px-4 py-3 rounded-xl text-lg font-semibold bg-purple-600 hover:bg-purple-700 shadow-[0_0_20px_rgba(128,0,255,0.4)] transition-all"
        >
          Log In
        </button>

        {/* OAuth Divider */}
        <div className="text-center text-zinc-500 text-sm my-4">or</div>

        {/* GitHub OAuth */}
        <button
          onClick={loginWithGitHub}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 hover:bg-gray-900 transition mb-3"
        >
          Continue with GitHub
        </button>

        {/* GitLab OAuth */}
        <button
          onClick={loginWithGitLab}
          className="w-full px-4 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 transition"
        >
          Continue with GitLab
        </button>

        {/* Links */}
        <div className="flex justify-between mt-6 text-sm text-zinc-400">
          <button onClick={() => router.push("/signup")} className="hover:text-white transition">
            Create account
          </button>
          <button onClick={() => router.push("/reset")} className="hover:text-white transition">
            Forgot password
          </button>
        </div>

      </div>
    </div>
  );
}


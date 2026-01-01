"use client";

import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex flex-col">

      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🦊</div>
          <span className="text-xl font-semibold tracking-wide">Settings</span>
        </div>

        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition"
        >
          Back to Dashboard
        </button>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6 tracking-wide">System Settings</h1>

        <p className="text-zinc-400 max-w-xl text-center">
          Customize your PyLynx experience. Themes, fox‑core animations,
          account preferences, and more will live here.
        </p>
      </main>

    </div>
  );
}

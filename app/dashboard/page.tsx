"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex flex-col">

      {/* TOP BAR */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🦊</div>
          <span className="text-xl font-semibold tracking-wide">PyLynx Dashboard</span>
        </div>

        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-medium transition"
        >
          Log Out
        </button>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center justify-center flex-1 p-10">
        <h1 className="text-4xl font-bold mb-6 tracking-wide">Welcome to your Dashboard</h1>

        <p className="text-zinc-400 max-w-xl text-center mb-10">
          Manage your PyLynx settings, explore tools, and access your remixing resources.
        </p>

        <div className="flex gap-6">
          <button
            onClick={() => router.push("/demo")}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(128,0,255,0.4)] transition"
          >
            Launch OS Demo
          </button>

          <button
            onClick={() => router.push("/remix")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold shadow-[0_0_20px_rgba(0,128,255,0.4)] transition"
          >
            Remix Tools
          </button>
        </div>
      </main>

    </div>
  );
}

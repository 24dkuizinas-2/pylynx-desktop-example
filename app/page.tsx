"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0014] to-[#12002b] text-white flex flex-col">

      {/* SECTION 1 — Get Started */}
      <section className="flex flex-col items-center justify-center flex-1 p-10 border-b border-white/10">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          Get Started
        </h2>

        <p className="text-zinc-400 max-w-xl text-center mb-8">
          Boot into the PyLynx OS demo and experience the fox‑core boot chain,
          desktop environment, and app system.
        </p>

        <button
          onClick={() => router.push("/demo")}
          className="
            px-8 py-3 rounded-xl text-lg font-semibold
            bg-purple-600 hover:bg-purple-700
            shadow-[0_0_20px_rgba(128,0,255,0.4)]
            transition-all
          "
        >
          Launch Demo
        </button>
      </section>

      {/* SECTION 2 — For Youth Remixers */}
      <section className="flex flex-col items-center justify-center flex-1 p-10">
        <h2 className="text-4xl font-bold mb-4 tracking-wide">
          For Youth Remixers
        </h2>

        <p className="text-zinc-400 max-w-xl text-center">
          Dive into the PyLynx source code, remix the UI, customize the boot
          sequence, and build your own apps. Everything is designed to be
          teachable, hackable, and youth‑friendly.
        </p>
      </section>

    </div>
  );
}

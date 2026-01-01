"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">PyLynx OS</h1>
      <p className="text-zinc-400 max-w-xl text-center mb-8">
        A mythic, youth‑powered desktop environment built for creativity,
        exploration, and digital freedom. Designed by Denis. Powered by fox‑core.
      </p>

      <button
        onClick={() => router.push("/demo")}
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold transition"
      >
        Launch Demo
      </button>
    </div>
  );
}


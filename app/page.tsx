"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* SECTION 1 — Get Started */}
      <section className="flex flex-col items-center justify-center flex-1 p-10 border-b border-zinc-800">
        <h2 className="text-3xl font-bold mb-4">Get Started</h2>
        <p className="text-zinc-400 max-w-xl text-center mb-6">
          Explore the PyLynx OS demo and see how the system boots, loads, and runs apps.
        </p>

        <button
          onClick={() => router.push("/demo")}
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-lg font-semibold transition"
        >
          Launch Demo
        </button>
      </section>

      {/* SECTION 2 — For Youth Remixers */}
      <section className="flex flex-col items-center justify-center flex-1 p-10">
        <h2 className="text-3xl font-bold mb-4">For Youth Remixers</h2>
        <p className="text-zinc-400 max-w-xl text-center">
          Learn how PyLynx works under the hood. Remix the UI, customize the boot flow,
          and build your own apps using simple, teachable components.
        </p>
      </section>

    </div>
  );
}

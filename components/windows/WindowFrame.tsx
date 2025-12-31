"use client";

import { useWindowStore } from "@/store/useWindowStore";

export default function WindowFrame({ id, children }) {
  const closeWindow = useWindowStore((s) => s.closeWindow);

  return (
    <div
      className="
        absolute top-24 left-24
        bg-zinc-900 text-white
        border border-zinc-700 rounded-lg
        shadow-xl
        w-96
      "
    >
      {/* Title bar */}
      <div
        className="
          flex justify-between items-center
          px-3 py-2
          bg-zinc-800 border-b border-zinc-700
        "
      >
        <span className="text-sm">PyLynx App</span>
        <button
          onClick={() => closeWindow(id)}
          className="text-red-400 hover:text-red-300"
        >
          ✕
        </button>
      </div>

      {/* Window content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

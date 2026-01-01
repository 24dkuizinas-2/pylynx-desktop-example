"use client";

import { useEffect, useRef } from "react";

export default function Bootloader({
  onDone,
  onEnterBios,
}: {
  onDone: () => void;
  onEnterBios: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "b" || e.key === "B") {
        onEnterBios();
      }

      if (e.key === "Enter") {
        onDone();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onDone, onEnterBios]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className="fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm outline-none flex flex-col justify-center"
    >
      <div className="text-xl mb-2">PyLynx Bootloader</div>
      <div className="text-zinc-400 text-xs mb-1">
        Initializing fox‑core subsystems...
      </div>
      <div className="text-zinc-500 text-xs">
        Press <span className="text-green-300">B</span> for BIOS • Press{"B"}
        <span className="text-green-300">Enter</span> to continue
      </div>
    </div>
  );
}

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
    console.log("Bootloader mounted");

    // Force focus so key events always work
    containerRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      console.log("Key pressed:", e.key);

      if (e.key === "b" || e.key === "B") {
        console.log("Entering BIOS");
        onEnterBios();
      }

      if (e.key === "Enter") {
        console.log("Continuing boot");
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
      className="fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm outline-none"
    >
      <div className="mb-2">PyLynx Bootloader</div>
      <div className="text-zinc-500 text-xs">
        Press B for BIOS • Press Enter to continue
      </div>
    </div>
  );
}

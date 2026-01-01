"use client";

import { useEffect } from "react";

export default function Bootloader({
  onDone,
  onEnterBios,
}: {
  onDone: () => void;
  onEnterBios: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "b") {
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
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm">
      <div className="mb-2">PyLynx Bootloader</div>
      <div className="text-zinc-500 text-xs">
        Press B for BIOS • Press Enter to continue
      </div>
    </div>
  );
}

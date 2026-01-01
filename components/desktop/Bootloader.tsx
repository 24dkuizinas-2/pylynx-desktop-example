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
      if (e.key === "F2") {
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
      <div>PyLynx Bootloader</div>
      <div className="mt-2 text-zinc-500 text-xs">
        Press F2 for BIOS • Press Enter to continue
      </div>
    </div>
  );
}


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
      className="fixed inset-0 bg-red-600 text-white font-mono p-6 text-3xl z-[999999999]"
    >
      BOOTLOADER SHOULD BE VISIBLE  
      <div className="text-xl mt-4">
        Press B for BIOS • Press Enter to continue
      </div>
    </div>
  );
}

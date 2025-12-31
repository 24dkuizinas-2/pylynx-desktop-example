"use client";

import { useState, useEffect } from "react";

interface BootloaderProps {
  onDone: () => void;
  onEnterBios: () => void;
}

export default function Bootloader({ onDone, onEnterBios }: BootloaderProps) {
  const [visible, setVisible] = useState(true);
  const [selected, setSelected] = useState(0);

  // Auto-continue after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onDone]);

  // F2 → BIOS
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "F2") {
        setVisible(false);
        onEnterBios();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onEnterBios]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono text-sm p-8 z-[999999999]">
      <div className="mb-4">PyLynx Bootloader v1.0</div>

      <div className="border border-green-500 p-4 w-80">
        <div className={selected === 0 ? "bg-green-500 text-black px-2" : "px-2"}>
          PyLynx OS
        </div>
        <div className="px-2 opacity-50">Advanced Options</div>
      </div>

      <div className="mt-4 opacity-70">Press F2 for PyLynx BIOS</div>
    </div>
  );
}

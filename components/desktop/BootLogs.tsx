"use client";

import { useState, useEffect } from "react";

interface BootLogsProps {
  onDone: () => void;
}

const LOGS = [
  "pylynx-kernel: Booting PyLynx Kernel 1.0",
  "fox-init: Loading fox‑spirit modules",
  "lynx-gpu: Initializing graphics subsystem",
  "paws-driver: Attaching input devices",
  "spiritfs: Mounting root filesystem",
  "pylynx-init: Starting userland…",
];

export default function BootLogs({ onDone }: BootLogsProps) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setLines((prev) => [...prev, LOGS[i]]);
      i++;

      if (i >= LOGS.length) {
        clearInterval(interval);
        setTimeout(onDone, 600);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono text-sm p-4 z-[999999999]">
      {lines.map((line, idx) => (
        <div key={idx}>{line}</div>
      ))}
    </div>
  );
}

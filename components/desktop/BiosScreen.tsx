"use client";

import { useState, useEffect } from "react";

export default function BiosScreen({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-blue-900 text-white font-mono p-8 z-[999999999]">
      <div className="text-center text-6xl mb-6">🦊</div>

      <div className="text-center text-xl mb-4">PyLynx BIOS v1.0</div>

      <div className="text-center opacity-70">
        Initializing firmware modules…
      </div>
    </div>
  );
}

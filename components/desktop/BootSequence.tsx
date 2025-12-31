"use client";

import { useState, useEffect } from "react";

export default function BootSequence() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [typed, setTyped] = useState("");

  const fullText = "PyLynx OS";

  // Fade-in mount
  useEffect(() => {
    setTimeout(() => setMounted(true), 10);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!mounted) return;

    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, [mounted]);

  // Auto-hide after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999999999]
        flex flex-col items-center justify-center
        bg-black
        transition-opacity duration-700
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Fox Logo */}
      <div className="text-7xl mb-6 animate-bootFox">🦊</div>

      {/* Typing Title */}
      <div className="text-3xl font-bold text-zinc-100 mb-4">
        {typed}
        <span className="animate-blink">|</span>
      </div>

      {/* Subtext */}
      <div className="text-zinc-400 text-sm mb-6">
        Initializing modules…
      </div>

      {/* Loading Bar */}
      <div className="w-64 h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div className="h-full bg-zinc-500 animate-bootLoad"></div>
      </div>
    </div>
  );
}

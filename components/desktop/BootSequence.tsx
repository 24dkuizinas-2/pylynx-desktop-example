"use client";

import { useState, useEffect } from "react";

interface BootSequenceProps {
  onDone: () => void;
}

export default function BootSequence({ onDone }: BootSequenceProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
  const audio = new Audio("/pylynx-chime.mp3");
  audio.volume = 0.4;

  const playTimer = setTimeout(() => {
    audio.play().catch(err => console.log("Audio blocked:", err));
  }, 300); // small delay helps bypass autoplay rules

  return () => clearTimeout(playTimer);
}, []);



  // Fade-in mount
  useEffect(() => {
    setTimeout(() => setMounted(true), 10);
  }, []);

  // Auto-finish after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 10000); // matches your 10s chime

    return () => clearTimeout(timer);
  }, [onDone]);

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
        PyLynx OS<span className="animate-blink">|</span>
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

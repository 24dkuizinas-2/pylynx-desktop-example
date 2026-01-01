"use client";

import { useState, useEffect } from "react";

export default function FirstLaunchOverlay() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullText = "Do you want to check out the lynx before you bite the apple?";

interface FirstLaunchOverlayProps {
  onDone: () => void;
}

export default function FirstLaunchOverlay({ onDone }: FirstLaunchOverlayProps) {

  
  // Fade-in mount
  useEffect(() => {
    setTimeout(() => setMounted(true), 10);
  }, []);

  // Typing animation
  useEffect(() => {
    if (!mounted) return;

    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[999999]
        flex items-center justify-center
        bg-black/70 backdrop-blur-md
        transition-opacity duration-300
        ${mounted ? "opacity-100" : "opacity-0"}
      `}
    >
      <div
        className="
          bg-zinc-900 border border-zinc-700 rounded-xl
          p-8 max-w-md text-center shadow-2xl
          animate-fade
        "
      >
        {/* Bouncing Fox Mascot */}
        <div className="text-6xl mb-4 animate-foxBounce">🦊</div>

        {/* Typing Text */}
        <div className="text-xl font-bold text-zinc-100 mb-6 font-sans min-h-[3rem]">
          {typedText}
          <span className="animate-blink">|</span>
        </div>

        <button onClick={onDone} ...>
  Continue
</button>
      </div>
    </div>
  );
}

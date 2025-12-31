"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        absolute top-0 left-0 right-0 h-10
        flex items-center justify-between
        px-4 text-sm text-white
        backdrop-blur-md
        bg-white/5 border-b border-white/10
        select-none
        z-50
      "
    >
      {/* Left side: PyLynx logo or menu */}
      <div className="font-semibold tracking-wide">
        PyLynx
      </div>

      {/* Center: (optional) active app name */}
      <div className="opacity-70">
        Desktop
      </div>

      {/* Right side: clock */}
      <div className="font-mono opacity-90">
        {time}
      </div>
    </div>
  );
}

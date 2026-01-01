"use client";

import Dock from "./Dock";
import WindowManager from "@/components/windows/WindowManager";

export default function Desktop() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />

      {/* Desktop Icons (optional placeholder) */}
      <div className="absolute top-4 left-4 space-y-4 text-white">
        <div className="cursor-pointer hover:opacity-80">My Files</div>
        <div className="cursor-pointer hover:opacity-80">Browser</div>
      </div>

      {/* Window Manager (THIS makes apps open again) */}
      <WindowManager />

      {/* Dock */}
      <Dock />

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 text-white text-sm">
        PyLynx OS
      </div>
    </div>
  );
}

"use client";

import Dock from "./Dock";
import WindowManager from "@/components/windows/WindowManager";
import DesktopBackground from "@/components/desktop/DesktopBackground";
import TopBar from "@/components/desktop/TopBar";

export default function Desktop() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Desktop Background */}
      <DesktopBackground />

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4 text-white">
        <div className="cursor-pointer hover:opacity-80">My Files</div>
        <div className="cursor-pointer hover:opacity-80">Browser</div>
      </div>

      {/* Window Manager */}
      <WindowManager />

      {/* Dock */}
      <Dock />

      {/* Top Bar */}
      <TopBar />
    </div>
  );
}

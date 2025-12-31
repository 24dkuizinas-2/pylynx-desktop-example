"use client";
import FirstLaunchOverlay from "@/components/desktop/FirstLaunchOverlay";
import DesktopBackground from "@/components/desktop/DesktopBackground";
import TopBar from "@/components/desktop/TopBar";
import Dock from "@/components/desktop/Dock";
import WindowManager from "@/components/windows/WindowManager";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-black">
      <DesktopBackground />
      <TopBar />
      <WindowManager />
      <Dock />
    </main>
  );
}

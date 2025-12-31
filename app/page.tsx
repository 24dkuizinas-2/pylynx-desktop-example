// app/page.tsx
import DesktopBackground from "@/components/desktop/DesktopBackground";
import TopBar from "@/components/desktop/TopBar";
import Dock from "@/components/desktop/Dock";
import WindowManager from "@/components/windows/WindowManager";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <DesktopBackground />
      <TopBar />
      <Dock />
      <WindowManager />
    </main>
  );
}
         

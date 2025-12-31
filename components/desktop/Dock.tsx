"use client";

import { useWindowStore } from "@/store/useWindowStore";

const DOCK_APPS = [
  { id: "notes", name: "Notes", icon: "📝" },
  { id: "browser", name: "Browser", icon: "🌐" },
  { id: "appstore", name: "App Store", icon: "🛒" },
  { id: "files", name: "Files", icon: "📁" },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "about", name: "About", icon: "🦊" }
] as const;

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2 bg-black/40 backdrop-blur-md rounded-2xl border border-zinc-700">
      {DOCK_APPS.map((app) => (
        <button
          key={app.id}
          onClick={() => openWindow(app.id as any)}
          className="flex flex-col items-center text-xs text-zinc-200 hover:text-white"
        >
          <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-2xl hover:scale-110 transition-transform">
            {app.icon}
          </div>
          <span className="mt-1 text-[10px]">{app.name}</span>
        </button>
      ))}
    </div>
  );
}


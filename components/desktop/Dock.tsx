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
  <div className="flex gap-4 p-4 bg-zinc-900 rounded-2xl">
    {DOCK_APPS.map((app) => (
      <button
        key={app.id}
        onClick={() => openWindow(app.id)}
        className="
          w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center text-2xl
          transition-transform duration-150
          hover:scale-125 hover:-translate-y-1
        "
      >
        {app.icon}
      </button>
    ))}
  </div>

);
}


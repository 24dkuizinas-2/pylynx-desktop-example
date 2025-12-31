"use client";

import { useWindowStore } from "@/store/useWindowStore";

export default function Dock() {
  const openWindow = useWindowStore((s) => s.openWindow);

  const apps = [
    { name: "Notes", icon: "📝" },
    { name: "Browser", icon: "🌐" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <div
      className="
        absolute bottom-4 left-1/2 -translate-x-1/2
        flex items-end gap-4 px-4 py-2
        bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-2xl
        shadow-lg
        z-40
      "
    >
      {apps.map((app) => (
        <button
          key={app.name}
          onClick={() => openWindow(() => () => <div>{app.name} App</div>)}
          className="
            text-3xl
            transition-transform duration-150
            hover:scale-125 active:scale-95
            select-none
          "
        >
          {app.icon}
        </button>
      ))}
    </div>
  );
}

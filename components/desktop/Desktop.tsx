"use client";

export default function Desktop() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* Wallpaper */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900" />

      {/* Desktop Icons */}
      <div className="absolute top-4 left-4 space-y-4 text-white">
        <div className="cursor-pointer hover:opacity-80">
          <div className="text-sm">My Files</div>
        </div>
        <div className="cursor-pointer hover:opacity-80">
          <div className="text-sm">Browser</div>
        </div>
      </div>

      {/* Dock */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
        <div className="text-white cursor-pointer hover:scale-110 transition">🦊</div>
        <div className="text-white cursor-pointer hover:scale-110 transition">📁</div>
        <div className="text-white cursor-pointer hover:scale-110 transition">🌐</div>
        <div className="text-white cursor-pointer hover:scale-110 transition">⚙️</div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-10 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 text-white text-sm">
        PyLynx OS
      </div>
    </div>
  );
}

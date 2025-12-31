"use client";

export default function SettingsApp() {
  return (
    <div className="flex flex-col gap-3 text-sm text-zinc-100">
      <div>
        <div className="font-semibold text-zinc-200 mb-1">PyLynx Desktop</div>
        <div className="text-xs text-zinc-400">
          Mythic shell for youth explorers.
        </div>
      </div>
      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
        <div className="font-semibold text-xs mb-1 text-zinc-300">
          Theme (placeholder)
        </div>
        <div className="text-xs text-zinc-500">
          This is where theme, wallpaper, and lore toggles will live.
        </div>
      </div>
    </div>
  );
}

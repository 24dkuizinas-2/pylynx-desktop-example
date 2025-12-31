"use client";

import { showDemoMessage } from "@/lib/demoMessage";

export default function SettingsApp() {
  const onLinkAccount = () => {
    showDemoMessage();
  };

  return (
    <div className="flex flex-col gap-3 text-sm text-zinc-100 h-full">
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
        <div className="text-xs text-zinc-500 mb-2">
          This is where theme, wallpaper, and lore toggles will live.
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
        <div className="font-semibold text-xs mb-1 text-zinc-300">
          PyLynx Account
        </div>
        <div className="text-xs text-zinc-500 mb-2">
          Link your PyLynx account to sync settings, apps, and lore.
        </div>
        <button
          onClick={onLinkAccount}
          className="px-3 py-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 text-xs"
        >
          Link PyLynx Account
        </button>
      </div>
    </div>
  );
}


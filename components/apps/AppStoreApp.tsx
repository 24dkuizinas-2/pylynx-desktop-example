"use client";

import { showDemoMessage } from "@/lib/demoMessage";

export default function AppStoreApp() {
  const onOpenStore = () => {
    showDemoMessage();
  };

  return (
    <div className="flex flex-col gap-3 text-sm text-zinc-100 h-full">
      <div>
        <div className="font-semibold text-zinc-200 mb-1">PyLynx App Store</div>
        <div className="text-xs text-zinc-400">
          Browse apps, tools, and mythic extensions for PyLynx.
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900 flex-1 flex flex-col justify-between">
        <div className="text-xs text-zinc-400">
          This is a demo of the PyLynx desktop shell.  
          To install real apps, you’ll need a full PyLynx system.
        </div>
        <button
          onClick={onOpenStore}
          className="mt-3 self-start px-3 py-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 text-xs"
        >
          Open App Store
        </button>
      </div>
    </div>
  );
}

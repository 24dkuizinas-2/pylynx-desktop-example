"use client";

export default function AboutPyLynxApp() {
  return (
    <div className="flex flex-col gap-3 text-sm text-zinc-100 h-full overflow-auto">
      <div>
        <div className="font-semibold text-zinc-200 mb-1">
          Ready to switch from the apple to the lynx?
        </div>
        <div className="text-xs text-zinc-400">
          PyLynx is a mythic, youth‑first shell for reclaiming devices and
          turning them into story‑driven tools.
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
        <div className="font-semibold text-xs mb-2 text-zinc-300">
          Install on Ubuntu / Debian
        </div>
        <ol className="list-decimal list-inside text-xs text-zinc-300 space-y-1">
          <li>Open a terminal.</li>
          <li>Make sure you have curl installed.</li>
          <li>
            Run:
            <pre className="mt-1 bg-black/40 px-2 py-1 rounded text-[11px]">
              wget https://github.com/24dkuizinas-2/pylynx-os/releases/
            </pre>
          </li>
          <li>Follow the prompts to complete setup.</li>
        </ol>
      </div>

      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
        <div className="font-semibold text-xs mb-2 text-zinc-300">
          Install on macOS
        </div>
        <ol className="list-decimal list-inside text-xs text-zinc-300 space-y-1">
          <li>Open Terminal from Applications → Utilities.</li>
          <li>Ensure developer tools / Xcode CLT are installed.</li>
          <li>
            Run:
            <pre className="mt-1 bg-black/40 px-2 py-1 rounded text-[11px]">
              wget https://github.com/24dkuizinas-2/pylynx-os/releases/
            </pre>
          </li>
          <li>Follow the prompts to finish installation.</li>
        </ol>
      </div>

      <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
        <div className="font-semibold text-xs mb-1 text-zinc-300">
          What happens after install?
        </div>
        <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1">
          <li>PyLynx‑Desktop runs as a full shell, not just a demo.</li>
          <li>Notes, files, and apps can actually save.</li>
          <li>You can link a PyLynx account and sync lore.</li>
        </ul>
      </div>
    </div>
  );
}

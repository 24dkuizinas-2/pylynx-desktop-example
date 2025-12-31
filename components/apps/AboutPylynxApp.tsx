"use client";

import { useState } from "react";

export default function AboutPyLynxApp() {
  const [view, setView] = useState<
    "main" | "mac" | "linux" | "why" | "compat" | "vm"
  >("main");

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="flex flex-col gap-4 text-sm text-zinc-100 h-full overflow-auto p-2 font-sans">

      {/* BACK BUTTON */}
      {view !== "main" && (
        <button
          onClick={() => setView("main")}
          className="text-xs text-zinc-400 hover:text-zinc-200 underline self-start"
        >
          ← Back
        </button>
      )}

      {/* MAIN VIEW */}
      {view === "main" && (
        <>
          {/* PyLynx Logo Placeholder */}
          <div className="flex justify-center mt-4">
    <div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center text-3xl animate-fox">
  🦊
</div>
            <div className="sr-only">PyLynx Logo</div>
          </div>

          {/* Big Hero Tagline */}
          <div className="text-center mt-4">
            <div className="font-bold text-4xl text-zinc-100 tracking-tight mb-3">
              Ready to switch from the apple to the lynx?
            </div>

            <div className="text-xs text-zinc-400 max-w-md mx-auto">
              PyLynx is a mythic, youth‑first shell for reclaiming devices and
              turning them into story‑driven tools.  
              This demo shows the desktop environment — but the real magic
              happens when you install PyLynx on a full system.
            </div>
          </div>

          {/* OS Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setView("mac")}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-semibold"
            >
              macOS
            </button>

            <button
              onClick={() => setView("linux")}
              className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm font-semibold"
            >
              Ubuntu / Debian
            </button>
          </div>

          {/* Extra Sections */}
          <div className="flex flex-col gap-3 mt-8 text-center">
            <button
              onClick={() => setView("why")}
              className="text-xs text-zinc-300 hover:text-white underline"
            >
              Why switch to PyLynx?
            </button>


            <button
              onClick={() => setView("vm")}
              className="text-xs text-zinc-300 hover:text-white underline"
            >
              Try PyLynx in a virtual machine
            </button>
          </div>
        </>
      )}

      {/* MACOS INSTALLATION */}
      {view === "mac" && (
        <div className="flex flex-col gap-3">
          <div className="font-bold text-xl text-zinc-100">
            Install PyLynx on macOS
          </div>

          <ol className="list-decimal list-inside text-xs text-zinc-300 space-y-2">
            <li>Open Terminal (Applications → Utilities → Terminal).</li>
            <li>Install Xcode Command Line Tools:</li>
            <pre className="bg-black/40 px-2 py-1 rounded text-[11px]">
              xcode-select --install
            </pre>
            <button
              onClick={() => copy("xcode-select --install")}
              className="text-[10px] underline text-zinc-400 hover:text-zinc-200"
            >
              Copy command
            </button>

            <li>Run the PyLynx Compadibility Checker:</li>
            <pre className="bg-black/40 px-2 py-1 rounded text-[11px]">
              wget https://github.com/24dkuizinas/Pylynx-Syscheck/raw/main/pylynx-compat.sh, sh pylynx-compat.sh
            </pre>
            <button
              onClick={() => copy("wget https://github.com/24dkuizinas/Pylynx-Syscheck/raw/main/pylynx-compat.sh, sh pylynx-compat.sh")}
              className="text-[10px] underline text-zinc-400 hover:text-zinc-200"
            >
              Copy command
            </button>

            <li>Follow the on‑screen instructions.</li>
          </ol>
        </div>
      )}

      {/* UBUNTU / DEBIAN INSTALLATION */}
      {view === "linux" && (
        <div className="flex flex-col gap-3">
          <div className="font-bold text-xl text-zinc-100">
            Install PyLynx on Ubuntu / Debian
          </div>

          <ol className="list-decimal list-inside text-xs text-zinc-300 space-y-2">
            <li>Open a terminal.</li>
            <li>Install curl:</li>
            <pre className="bg-black/40 px-2 py-1 rounded text-[11px]">
              sudo apt install curl
            </pre>
            <button
              onClick={() => copy("sudo apt install curl")}
              className="text-[10px] underline text-zinc-400 hover:text-zinc-200"
            >
              Copy command
            </button>

            <li>Run the PyLynx installer:</li>
            <pre className="bg-black/40 px-2 py-1 rounded text-[11px]">
              pl -i pylynx-desktop
            </pre>
            <button
              onClick={() => copy("pl -i pylynx-desktop")}
              className="text-[10px] underline text-zinc-400 hover:text-zinc-200"
            >
              Copy command
            </button>

            <li>Follow the prompts to complete setup.</li>
          </ol>
        </div>
      )}

      {/* WHY SWITCH */}
      {view === "why" && (
        <div className="flex flex-col gap-3 text-xs text-zinc-300">
          <div className="font-bold text-xl text-zinc-100">
            Why switch to PyLynx?
          </div>

          <ul className="list-disc list-inside space-y-2">
            <li>Reclaim your device from corporate defaults.</li>
            <li>Turn your OS into a story‑driven, youth‑powered shell.</li>
            <li>Everything is remixable — apps, UI, lore, workflows.</li>
            <li>No ads, no tracking, no bloat.</li>
            <li>Built for exploration, creativity, and myth‑making.</li>
          </ul>
        </div>
      )}

      {/* COMPATIBILITY CHECKER */}
      {view === "compat" && (
        <div className="flex flex-col gap-3 text-xs text-zinc-300">
          <div className="font-bold text-xl text-zinc-100">
            System Compatibility Checker
          </div>

          <div className="border border-zinc-700 rounded-md p-3 bg-zinc-900">
            <div className="text-zinc-400 mb-2">
              Scanning your system…
            </div>

            <ul className="list-disc list-inside space-y-1">
              <li>CPU: ✔ compatible</li>
              <li>RAM: ✔ enough memory</li>
              <li>Graphics: ✔ supported</li>
              <li>Filesystem: ✔ ready</li>
              <li>Bootloader: ✔ no issues detected</li>
            </ul>

            <div className="mt-3 text-zinc-400">
              Your system is ready for PyLynx.
            </div>
          </div>
        </div>
      )}

      {/* VM GUIDE */}
      {view === "vm" && (
        <div className="flex flex-col gap-3 text-xs text-zinc-300">
          <div className="font-bold text-xl text-zinc-100">
            Try PyLynx in a Virtual Machine
          </div>

          <ol className="list-decimal list-inside space-y-2">
            <li>Download VirtualBox or UTM.</li>
            <li>Create a new VM with at least 2GB RAM.</li>
            <li>Install Ubuntu or Debian inside the VM.</li>
            <li>Open a terminal and run:</li>
            <pre className="bg-black/40 px-2 py-1 rounded text-[11px]">
              pl -i pylynx-desktop
            </pre>
            <button
              onClick={() => copy("pl -i pylynx-desktop")}
              className="text-[10px] underline text-zinc-400 hover:text-zinc-200"
            >
              Copy command
            </button>
            <li>Enjoy the full PyLynx experience safely.</li>
          </ol>
        </div>
      )}
    </div>
  );
}


"use client";

import { useEffect, useState } from "react";

export default function BiosDiagnostics({ onExit }: { onExit: () => void }) {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const diagnostics = [
      "[fox-core] integrity............... OK",
      "[tail-bus] latency................ 2.1ms",
      "[whisker-sensor] calibration...... OK",
      "[pounce-engine] charge............ 87%",
      "[ear-array] signal gain........... +14dB",
      "[subsystem] mythic-index.......... STABLE",
      "[thermal] paw-temperature......... NOMINAL",
      "[memory] den-cache................ SYNCED",
      "[spirit] fox-soul-link............ ONLINE",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLines(prev => [...prev, diagnostics[i]]);
      i++;
      if (i >= diagnostics.length) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm">
      <div className="mb-4">PyLynx BIOS — Diagnostics Utility</div>

      {lines.map((line, idx) => (
        <div key={idx} className="animate-fade">
          {line}
        </div>
      ))}

      <div className="mt-6 text-zinc-500 text-xs">
        Press ESC to return
      </div>
    </div>
  );
}

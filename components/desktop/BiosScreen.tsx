"use client";

import { useEffect, useState } from "react";
import BiosDiagnostics from "./BiosDiagnostics";

export default function BiosScreen({ onDone }: { onDone: () => void }) {
  const [showDiag, setShowDiag] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "d" || e.key === "D") {
        setShowDiag(true);
      }

      if (e.key === "Escape") {
        if (showDiag) {
          setShowDiag(false); // close diagnostics
        } else {
          onDone(); // exit BIOS
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showDiag, onDone]);

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono p-6 text-sm">
      <div className="mb-4">PyLynx BIOS v1.0</div>
      <div>Press D for Diagnostics</div>
      <div>Press ESC to Exit BIOS</div>

      {showDiag && (
        <BiosDiagnostics onExit={() => setShowDiag(false)} />
      )}
    </div>
  );
}


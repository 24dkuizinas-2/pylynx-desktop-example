"use client";

import { useState, useEffect } from "react";
import BiosDiagnostics from "./BiosDiagnostics";
interface BiosScreenProps {
  onDone: () => void;
}

export default function BiosScreen({ onDone }: BiosScreenProps) {
  const [visible, setVisible] = useState(true);
const [showDiag, setShowDiag] = useState(false);

useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "d" || e.key === "D") setShowDiag(true);
    if (e.key === "Escape") setShowDiag(false);
  };

  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-blue-900 text-white font-mono p-8 z-[999999999]">
      <div className="text-center text-6xl mb-6">🦊</div>
      <div className="text-center text-xl mb-4">PyLynx BIOS v1.0</div>
      <div className="text-center opacity-70">Initializing firmware modules…</div>
    </div>
  );
}

// components/windows/WindowManager.tsx
"use client";

import { useWindowStore } from "@/store/useWindowStore";
import WindowFrame from "./WindowFrame";

export default function WindowManager() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <>
      {windows.map((w) => (
        <WindowFrame key={w.id} id={w.id}>
          <w.app />
        </WindowFrame>
      ))}
    </>
  );
}

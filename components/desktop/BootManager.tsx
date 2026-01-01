"use client";

import { useState } from "react";
import Bootloader from "./Bootloader";
import BiosScreen from "./BiosScreen";
import BootLogs from "./BootLogs";
import BootSequence from "./BootSequence";
import FirstLaunchOverlay from "./FirstLaunchOverlay";

export default function BootManager() {
  const [stage, setStage] = useState<
    "bootloader" | "bios" | "logs" | "sequence" | "overlay" | "done"
  >("bootloader");

  return (
    <>
      {stage === "bootloader" && (
        <Bootloader
          onDone={() => setStage("logs")}
          onEnterBios={() => setStage("bios")}
        />
      )}

      {stage === "bios" && (
        <BiosScreen onDone={() => setStage("logs")} />
      )}

      {stage === "logs" && (
        <BootLogs onDone={() => setStage("sequence")} />
      )}

      {stage === "sequence" && (
        <BootSequence onDone={() => setStage("overlay")} />
      )}

      {stage === "overlay" && (
        <FirstLaunchOverlay onDone={() => setStage("done")} />
      )}
    </>
  );
}

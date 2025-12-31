"use client";

import { useWindowStore } from "@/store/useWindowStore";
import WindowFrame from "./WindowFrame";
import NotesApp from "../apps/NotesApp";
import BrowserApp from "../apps/BrowserApp";
import SettingsApp from "../apps/SettingsApp";
import AppStoreApp from "../apps/AppStoreApp";
import FileBrowserApp from "../apps/FileBrowserApp";

const APP_COMPONENTS = {
  notes: NotesApp,
  browser: BrowserApp,
  settings: SettingsApp,
  appstore: AppStoreApp,
  files: FileBrowserApp
} as const;

export default function WindowManager() {
  const windows = useWindowStore((s) => s.windows);

  return (
    <>
      {windows
        .slice()
        .sort((a, b) => a.zIndex - b.zIndex)
        .map((w) => {
          const AppComponent = APP_COMPONENTS[w.appId];
          return (
            <WindowFrame
              key={w.id}
              id={w.id}
              title={w.title}
              x={w.x}
              y={w.y}
              width={w.width}
              height={w.height}
              zIndex={w.zIndex}
            >
              <AppComponent />
            </WindowFrame>
          );
        })}
    </>
  );
}


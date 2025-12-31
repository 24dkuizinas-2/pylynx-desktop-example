"use client";

import { create } from "zustand";

export type AppId = "notes" | "browser" | "settings";

export type WindowEntry = {
  id: number;
  appId: AppId;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
};

type WindowStore = {
  windows: WindowEntry[];
  nextZ: number;
  openWindow: (appId: AppId) => void;
  closeWindow: (id: number) => void;
  focusWindow: (id: number) => void;
  moveWindow: (id: number, x: number, y: number) => void;
  resizeWindow: (id: number, width: number, height: number) => void;
};

const APP_TITLES: Record<AppId, string> = {
  notes: "Notes",
  browser: "Browser",
  settings: "Settings"
};

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  nextZ: 1,

  openWindow: (appId) =>
    set((state) => {
      const id = Date.now();
      const zIndex = state.nextZ;
      return {
        windows: [
          ...state.windows,
          {
            id,
            appId,
            title: APP_TITLES[appId],
            x: 200,
            y: 120,
            width: 480,
            height: 320,
            zIndex
          }
        ],
        nextZ: zIndex + 1
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id)
    })),

  focusWindow: (id) =>
    set((state) => {
      const zIndex = state.nextZ;
      return {
        windows: state.windows.map((w) =>
          w.id === id ? { ...w, zIndex } : w
        ),
        nextZ: zIndex + 1
      };
    }),

  moveWindow: (id, x, y) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, x, y } : w
      )
    })),

  resizeWindow: (id, width, height) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id
          ? {
              ...w,
              width: Math.max(260, width),
              height: Math.max(160, height)
            }
          : w
      )
    }))
}));


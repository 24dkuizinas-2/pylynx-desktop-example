"use client";

import { create } from "zustand";

type WindowEntry = {
  id: number;
  app: any;
};

type WindowStore = {
  windows: WindowEntry[];
  openWindow: (app: any) => void;
  closeWindow: (id: number) => void;
};

export const useWindowStore = create<WindowStore>((set) => ({
  windows: [],

  openWindow: (app) =>
    set((state) => ({
      windows: [...state.windows, { id: Date.now(), app }]
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id)
    }))
}));

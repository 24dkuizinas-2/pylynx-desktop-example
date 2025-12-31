"use client";

import { create } from "zustand";

export const useWindowStore = create((set) => ({
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

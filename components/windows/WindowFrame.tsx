"use client";

import { ReactNode, useRef, useState } from "react";
import { useWindowStore } from "@/store/useWindowStore";

type WindowFrameProps = {
  id: number;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  children: ReactNode;
};

export default function WindowFrame({
  id,
  title,
  x,
  y,
  width,
  height,
  zIndex,
  children
}: WindowFrameProps) {
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const moveWindow = useWindowStore((s) => s.moveWindow);
  const resizeWindow = useWindowStore((s) => s.resizeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);

  // Dragging state
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Resizing state
  const resizing = useRef(false);
  const resizeStart = useRef({
    width,
    height,
    mouseX: 0,
    mouseY: 0
  });

  // Open/close animations
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);

  if (!mounted) {
    setTimeout(() => setMounted(true), 0);
  }

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => closeWindow(id), 150);
  };

  // Drag start
  const onMouseDownTitle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dragging.current = true;
    dragOffset.current = {
      x: e.clientX - x,
      y: e.clientY - y
    };
    focusWindow(id);
  };

  // Resize start
  const onResizeHandleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    resizing.current = true;
    resizeStart.current = {
      width,
      height,
      mouseX: e.clientX,
      mouseY: e.clientY
    };
    focusWindow(id);
  };

  // Movement
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) {
      moveWindow(id, e.clientX - dragOffset.current.x, e.clientY - dragOffset.current.y);
    }

    if (resizing.current) {
      const dx = e.clientX - resizeStart.current.mouseX;
      const dy = e.clientY - resizeStart.current.mouseY;
      resizeWindow(id, resizeStart.current.width + dx, resizeStart.current.height + dy);
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    resizing.current = false;
  };

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        zIndex,

        // Animation states
        transition: dragging.current || resizing.current
          ? "none"
          : "transform 160ms ease, opacity 160ms ease",

        transform: closing
          ? "scale(0.9)"
          : dragging.current
          ? "scale(1.02)"
          : mounted
          ? "scale(1)"
          : "scale(0.9)",

        opacity: closing ? 0 : mounted ? 1 : 0,

        boxShadow: dragging.current
          ? "0 12px 32px rgba(0,0,0,0.4)"
          : "0 4px 16px rgba(0,0,0,0.25)"
      }}
      className="bg-zinc-900 text-white border border-zinc-700 rounded-lg overflow-hidden select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseDown={() => focusWindow(id)}
    >
      {/* Title Bar */}
      <div
        className="
          flex justify-between items-center
          px-3 py-1.5
          bg-zinc-800 border-b border-zinc-700
          cursor-move
          text-xs
        "
        onMouseDown={onMouseDownTitle}
      >
        <span className="text-zinc-200">{title}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="text-red-400 hover:text-red-300 text-xs"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="p-3 text-xs h-[calc(100%-32px)] overflow-auto">
        {children}
      </div>

      {/* Resize Handle */}
      <div
        className="
          absolute bottom-1 right-1
          w-3 h-3
          border-r-2 border-b-2 border-zinc-500
          cursor-se-resize
        "
        onMouseDown={onResizeHandleMouseDown}
      />
    </div>
  );
}

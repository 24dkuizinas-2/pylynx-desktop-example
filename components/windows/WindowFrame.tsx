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

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const resizing = useRef(false);
  const resizeStart = useRef({
    width,
    height,
    mouseX: 0,
    mouseY: 0
  });

  const [isMounted, setIsMounted] = useState(false);

  // simple mount animation flag
  if (!isMounted) {
    setTimeout(() => setIsMounted(true), 0);
  }

  const onMouseDownTitle = (e: React.MouseEvent) => {
    e.stopPropagation();
    dragging.current = true;
    dragOffset.current = {
      x: e.clientX - x,
      y: e.clientY - y
    };
    focusWindow(id);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) {
      const newX = e.clientX - dragOffset.current.x;
      const newY = e.clientY - dragOffset.current.y;
      moveWindow(id, newX, newY);
    }
    if (resizing.current) {
      const dx = e.clientX - resizeStart.current.mouseX;
      const dy = e.clientY - resizeStart.current.mouseY;
      resizeWindow(
        id,
        resizeStart.current.width + dx,
        resizeStart.current.height + dy
      );
    }
  };

  const onMouseUp = () => {
    dragging.current = false;
    resizing.current = false;
  };

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

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        zIndex,
        transform: isMounted ? "scale(1)" : "scale(0.9)",
        opacity: isMounted ? 1 : 0,
        transition: "transform 120ms ease-out, opacity 120ms ease-out"
      }}
      className="bg-zinc-900 text-white border border-zinc-700 rounded-lg shadow-xl overflow-hidden select-none"
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseDown={() => focusWindow(id)}
    >
      {/* Title bar */}
      <div
        className="flex justify-between items-center px-3 py-1.5 bg-zinc-800 border-b border-zinc-700 cursor-move"
        onMouseDown={onMouseDownTitle}
      >
        <span className="text-xs text-zinc-200">{title}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            closeWindow(id);
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

      {/* Resize handle (bottom-right) */}
      <div
        className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-zinc-500 cursor-se-resize"
        onMouseDown={onResizeHandleMouseDown}
      />
    </div>
  );
}


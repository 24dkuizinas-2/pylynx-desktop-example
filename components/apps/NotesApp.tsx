"use client";

import { useState } from "react";
import { showDemoMessage } from "@/lib/demoMessage";

export default function NotesApp() {
  const [text, setText] = useState("");

  const onSave = () => {
    showDemoMessage();
  };

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex justify-between items-center text-xs text-zinc-300">
        <span>Notes</span>
        <button
          onClick={onSave}
          className="px-2 py-1 rounded-md bg-zinc-700 hover:bg-zinc-600"
        >
          Save
        </button>
      </div>
      <textarea
        className="w-full h-full bg-zinc-900 text-zinc-100 border border-zinc-700 rounded-md p-2 text-sm resize-none outline-none"
        placeholder="Write your notes here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}


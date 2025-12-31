"use client";

import { useState } from "react";

export default function NotesApp() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col gap-2 h-full">
      <textarea
        className="w-full h-full bg-zinc-900 text-zinc-100 border border-zinc-700 rounded-md p-2 text-sm resize-none outline-none"
        placeholder="Write your notes here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

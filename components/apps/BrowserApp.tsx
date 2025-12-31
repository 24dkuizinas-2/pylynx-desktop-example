"use client";

import { useState } from "react";

export default function BrowserApp() {
  const [url, setUrl] = useState("https://example.com");
  const [currentUrl, setCurrentUrl] = useState("https://example.com");

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex gap-2">
        <input
          className="flex-1 bg-zinc-900 text-zinc-100 border border-zinc-700 rounded-md px-2 py-1 text-xs outline-none"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="bg-zinc-700 hover:bg-zinc-600 text-xs px-3 py-1 rounded-md"
          onClick={() => setCurrentUrl(url)}
        >
          Go
        </button>
      </div>
      <div className="flex-1 border border-zinc-700 rounded-md overflow-hidden bg-zinc-900">
        <iframe
          src={currentUrl}
          className="w-full h-full border-none"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  );
}

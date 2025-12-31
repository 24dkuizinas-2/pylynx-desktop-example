"use client";

import { showDemoMessage } from "@/lib/demoMessage";

const DEMO_FILES = [
  { name: "readme.txt", size: "1 KB" },
  { name: "pylynx-manifest.yml", size: "2 KB" },
  { name: "bytewatch-lore.md", size: "4 KB" }
];

export default function FileBrowserApp() {
  const onOpenFile = () => {
    showDemoMessage();
  };

  return (
    <div className="flex flex-col gap-3 text-sm text-zinc-100 h-full">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-zinc-200">Files</div>
        <div className="text-[10px] text-zinc-500">
          Demo filesystem (read-only)
        </div>
      </div>

      <div className="border border-zinc-700 rounded-md bg-zinc-900 flex-1 overflow-auto">
        <table className="w-full text-xs">
          <thead className="bg-zinc-800 text-zinc-300">
            <tr>
              <th className="text-left px-3 py-1">Name</th>
              <th className="text-left px-3 py-1">Size</th>
            </tr>
          </thead>
          <tbody>
            {DEMO_FILES.map((f) => (
              <tr
                key={f.name}
                className="hover:bg-zinc-800 cursor-pointer"
                onClick={onOpenFile}
              >
                <td className="px-3 py-1">{f.name}</td>
                <td className="px-3 py-1 text-zinc-500">{f.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

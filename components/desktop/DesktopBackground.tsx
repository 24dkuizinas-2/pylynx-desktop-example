// components/desktop/DesktopBackground.tsx

export default function DesktopBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base color */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid texture (optional) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/grid.svg')",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

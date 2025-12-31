// components/desktop/DesktopBackground.tsx

export default function DesktopBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 40%, #2b1f55, #0a0a0f 70%)",
        }}
      />

      {/* Nebula glow */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 70% 60%, rgba(120,60,255,0.4), transparent 60%)",
        }}
      />

      {/* Starfield */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(white 1px, transparent 1px), radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "3px 3px, 2px 2px",
          backgroundPosition: "0 0, 1px 1px",
          opacity: 0.25,
        }}
      />
    </div>
  );
}

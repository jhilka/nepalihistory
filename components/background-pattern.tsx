export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: "25px 25px",
          mask: "radial-gradient(ellipse at center, black 40%, transparent 95%)",
          WebkitMask:
            "radial-gradient(ellipse at center, black 40%, transparent 95%)",
        }}
      />
      {/* Gradient orbs */}
      <div
        className="absolute -top-[40%] -left-[20%] size-[70%] rounded-full opacity-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--national-blue) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
          animation: "gradientMove 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-[10%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--national-maroon) 0%, rgba(249, 115, 22, 0.1) 50%, transparent 100%)",
          animation: "gradientMove2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] left-[50%] size-[50%] rounded-full opacity-0 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)",
          animation: "gradientMove3 30s ease-in-out infinite",
        }}
      />
      {/* <div
        className="absolute bottom-[10%] right-[20%] w-[55%] h-[55%] rounded-full opacity-25 dark:opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 70%)",
          animation: "gradientMove 22s ease-in-out infinite reverse",
        }}
      /> */}
    </div>
  );
}

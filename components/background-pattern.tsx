"use client";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full opacity-30 dark:opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)",
          animation: "gradientMove 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -top-[20%] -right-[20%] w-[60%] h-[60%] rounded-full opacity-25 dark:opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(249, 115, 22, 0.2) 50%, transparent 70%)",
          animation: "gradientMove2 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[40%] left-[50%] w-[50%] h-[50%] rounded-full opacity-20 dark:opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 70%)",
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

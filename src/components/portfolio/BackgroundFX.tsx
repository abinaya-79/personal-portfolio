export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--violet)] opacity-20 blur-[120px] animate-pulse" />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[var(--cyan)] opacity-15 blur-[140px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-[var(--violet)] opacity-10 blur-[120px] animate-pulse"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function AccentGrid({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-40 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
        backgroundSize: "40px 40px, 40px 40px",
        backgroundPosition: "-1px -1px, -1px -1px",
      }}
    />
  );
}

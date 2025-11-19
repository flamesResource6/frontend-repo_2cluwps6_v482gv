import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function DotsNetwork() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    let width = 0;
    let height = 0;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // softer rendering
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    // Generate nodes
    const nodes = [];
    const makeNodes = () => {
      nodes.length = 0;
      const area = Math.max(1, width * height);
      // Density tuned for premium subtlety and perf
      const baseCount = Math.round(Math.min(170, area / 10000));
      for (let i = 0; i < baseCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height; // full coverage
        const speed = 0.06 + Math.random() * 0.16;
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 0.8 + Math.random() * 1.1,
        });
      }
    };

    const gradient = () => {
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "#22D3EE");
      g.addColorStop(1, "#A78BFA");
      return g;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.save();
      ctx.globalAlpha = 0.08; // very subtle lines
      ctx.strokeStyle = gradient();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist2 = dx * dx + dy * dy;
          const max = 130; // connection radius
          if (dist2 < max * max) {
            const t = 1 - Math.sqrt(dist2) / max;
            ctx.globalAlpha = 0.05 + t * 0.12; // fade by distance
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw dots
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.25)"; // soft white
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // soft glow accents sparsely
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < Math.min(10, nodes.length); i++) {
        const n = nodes[(i * 13) % nodes.length];
        const rad = n.r * 3.2;
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, rad);
        g.addColorStop(0, "rgba(34,211,238,0.15)");
        g.addColorStop(1, "rgba(124,58,237,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // gentle wrap with damping to avoid edges feeling hard
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }
      draw();
      rafRef.current = requestAnimationFrame(step);
    };

    const init = () => {
      resize();
      makeNodes();
      draw();
      if (!prefersReduced) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(step);
      }
    };

    const onResize = () => {
      resize();
      makeNodes();
      draw();
    };

    window.addEventListener("resize", onResize);
    init();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-15 pointer-events-none opacity-70"
      style={{ mixBlendMode: "screen" }}
      aria-hidden
    />
  );
}

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden min-h-[96vh] md:min-h-screen">
      {/* Background: layered dark with aurora glows and grid */}
      <div className="absolute inset-0 -z-30 bg-[#0B0D10]" />
      <div
        className="absolute inset-0 -z-20 opacity-30"
        style={{
          background:
            "radial-gradient(60%_40%_at_50%_-10%,#a78bfa33,transparent),radial-gradient(40%_30%_at_90%_10%,#22d3ee22,transparent),radial-gradient(50%_30%_at_10%_10%,#22e9d222,transparent)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "-1px -1px, -1px -1px",
        }}
      />

      {/* Premium dots + connections layer */}
      <DotsNetwork />

      {/* Soft bottom fade to visually merge with next section (no dividers) */}
      <div className="absolute inset-x-0 bottom-0 h-72 -z-10 bg-gradient-to-t from-[#0B0D10] to-transparent" />

      {/* Animated aurora sweeps with cyan+violet – full coverage */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, rgba(34,211,238,0.14), rgba(167,139,250,0.14), rgba(124,58,237,0.12), transparent)",
          filter: "blur(100px)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        style={{
          background:
            "radial-gradient(60%_60%_at_20%_30%, rgba(34,211,238,0.10), transparent), radial-gradient(50%_50%_at_80%_40%, rgba(167,139,250,0.10), transparent)",
          filter: "blur(80px)",
        }}
      />

      {/* Floating bokeh orbs */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <motion.span
          className="absolute left-[10%] top-[35%] h-40 w-40 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(34,211,238,0.18), rgba(34,211,238,0) 70%)",
            filter: "blur(8px)",
          }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute right-[15%] top-[20%] h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(167,139,250,0.18), rgba(167,139,250,0) 70%)",
            filter: "blur(10px)",
          }}
          animate={{ y: [0, 15, 0], x: [0, -12, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute left-1/2 top-[55%] h-28 w-28 -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.14), rgba(255,255,255,0) 70%)",
            filter: "blur(6px)",
          }}
          animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Light sweep beam */}
      <motion.div
        aria-hidden
        className="absolute -left-1/3 top-1/3 -z-10 h-40 w-[160%] rotate-[-6deg]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), rgba(34,211,238,0.08), transparent)",
          filter: "blur(12px)",
        }}
        initial={{ x: "-10%", opacity: 0.25 }}
        animate={{ x: ["-10%", "10%", "-10%"], opacity: [0.2, 0.32, 0.2] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Integrated Navbar */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl px-4 py-2.5 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_30px_80px_-30px_rgba(0,0,0,0.7)]">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-purple-500/50 to-cyan-300/50 blur-md opacity-35 group-hover:opacity-60 transition" />
              <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-[#0B0D10] ring-1 ring-white/10 shadow-inner shadow-black/40">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <span className="text-white font-semibold tracking-tight">FlowForge AI</span>
              <div className="text-[11px] text-white/60">Automation Studio</div>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-1.5 text-[14px]">
            {[
              { href: "#features", label: "Features" },
              { href: "#usecases", label: "Use cases" },
              { href: "#pricing", label: "Pricing" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <motion.a
              href="#demo"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-white to-white/90 text-slate-900 px-4 py-2 text-[13px] font-medium shadow-lg shadow-cyan-500/10 ring-1 ring-white/70 hover:shadow-cyan-500/20"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Get a demo
            </motion.a>
            <button className="md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero content – same content size, more vertical real estate */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Trust/credibility chip */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/15 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Trusted. Secure by design. Less cognitive load.
          </div>

          {/* Headline with smooth gradient, integrated underline glow */}
          <div className="relative mt-5">
            <h1 className="text-[40px] md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/85">
              Experience effortless control
            </h1>
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <p className="mt-4 text-white/85 md:text-lg max-w-2xl mx-auto">
            De‑risk your operations and unlock compounding leverage with AI automations that create certainty and reduce decision fatigue.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <motion.a
              href="#pricing"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/30 ring-1 ring-white/70"
            >
              See pricing
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl bg-white/10 text-white ring-1 ring-white/15 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/15"
            >
              Book a demo
            </motion.a>
            <div className="basis-full" />
            <div className="mt-3 flex items-center justify-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 ring-1 ring-emerald-400/20 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                SOC 2‑ready
              </span>
              <span>Reduced risk • Higher certainty • Faster time‑to‑impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

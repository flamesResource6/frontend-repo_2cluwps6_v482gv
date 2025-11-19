import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Background: layered dark with aurora glows and grid */}
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          background:
            "radial-gradient(60%_40%_at_50%_-10%,#8b5cf633,transparent),radial-gradient(40%_30%_at_90%_10%,#22d3ee22,transparent),radial-gradient(50%_30%_at_10%_10%,#60a5fa22,transparent)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px, 40px 40px",
          backgroundPosition: "-1px -1px, -1px -1px",
        }}
      />
      {/* Soft bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Integrated Navbar */}
      <div className="mx-auto max-w-7xl px-6 pt-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500/70 to-cyan-400/70 blur-md opacity-35 group-hover:opacity-60 transition" />
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-slate-950 ring-1 ring-white/10 shadow-inner shadow-black/40">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <span className="text-white font-semibold tracking-tight">FlowForge AI</span>
              <div className="text-[11px] text-white/60">Automation Studio</div>
            </div>
          </a>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {[
              { href: "#features", label: "Features" },
              { href: "#usecases", label: "Use cases" },
              { href: "#pricing", label: "Pricing" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition"
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
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-white to-white/90 text-slate-900 px-4 py-2 text-sm font-medium shadow-lg shadow-cyan-500/10 ring-1 ring-white/70 hover:shadow-cyan-500/20"
            >
              <Sparkles className="h-4 w-4" />
              Get a demo
            </motion.a>
            <button className="md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero content centered */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Trust/credibility chip */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-[11px] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted. Secure by design. Less cognitive load.
          </div>

          {/* Headline with psychological framing */}
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Experience effortless control
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            De‑risk your operations and unlock compounding leverage with AI automations
            that create certainty, reduce decision fatigue, and deliver peace of mind—
            across GTM, support, and ops.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-3">
            <motion.a
              href="#pricing"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/30 ring-1 ring-white/70"
            >
              See pricing
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-xl bg-white/10 text-white ring-1 ring-white/15 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/15"
            >
              Book a demo
            </motion.a>
            <div className="basis-full" />
            <div className="mt-2 flex items-center justify-center gap-3 text-xs text-white/60">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 ring-1 ring-emerald-400/20 text-emerald-300">
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

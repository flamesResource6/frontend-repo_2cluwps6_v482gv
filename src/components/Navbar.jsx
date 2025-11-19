import { Menu, Sparkles, ShieldCheck, ChevronDown, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Premium glass bar with dark gradient + hairline border */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="absolute inset-0 -top-6 h-[84px] bg-gradient-to-b from-black/40 to-black/0 pointer-events-none" />
        <div className="relative mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-3 pl-4 pr-3 py-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500/70 to-sky-400/70 blur-md opacity-40 group-hover:opacity-70 transition" />
              <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-slate-950 ring-1 ring-white/10 shadow-inner shadow-black/40">
                <Rocket className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="text-white font-semibold tracking-tight">FlowForge AI</div>
              <div className="text-[11px] text-white/50">Enterprise Automations</div>
            </div>
          </a>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {[
              { href: "#features", label: "Features" },
              { href: "#usecases", label: "Use cases" },
              { href: "#process", label: "Process" },
              { href: "#pricing", label: "Pricing" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition inline-flex items-center gap-1"
              >
                {link.label}
                {link.label === "Features" && (
                  <ChevronDown className="h-3.5 w-3.5 text-white/40" />
                )}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 pr-3">
            <div className="hidden md:flex items-center gap-2">
              <div className="hidden lg:flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-300/90">
                <ShieldCheck className="h-3.5 w-3.5" /> SOC2-ready
              </div>
              <motion.a
                href="#demo"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-white to-white/90 text-slate-900 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-500/10 ring-1 ring-white/70 hover:shadow-sky-500/20"
              >
                <Sparkles className="h-4 w-4" />
                Get a demo
              </motion.a>
            </div>
            <button className="md:hidden grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

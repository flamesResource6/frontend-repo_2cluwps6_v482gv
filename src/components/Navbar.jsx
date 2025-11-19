import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-sky-400 blur-md opacity-50 group-hover:opacity-80 transition" />
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-slate-900 ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
          <div>
            <div className="text-white font-semibold leading-tight">FlowForge AI</div>
            <div className="text-xs text-white/60 -mt-0.5">Automation Studio</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#usecases" className="text-white/70 hover:text-white transition">Use cases</a>
          <a href="#process" className="text-white/70 hover:text-white transition">Process</a>
          <a href="#pricing" className="text-white/70 hover:text-white transition">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="#demo"
            whileHover={{ y: -2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-medium shadow/50 shadow-sky-500/20 ring-1 ring-white/10 hover:shadow-lg"
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
  );
}

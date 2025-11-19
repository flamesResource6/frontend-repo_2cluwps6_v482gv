import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[86vh] md:h-[92vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark premium overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0)_0%,rgba(2,6,23,0.6)_45%,rgba(2,6,23,0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-[0.08]" style={{background:"radial-gradient(1200px_400px_at_50%_-10%,#60a5fa33,transparent),radial-gradient(900px_300px_at_20%_10%,#a78bfa33,transparent)"}} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-end pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-[11px] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Enterprise-grade AI automations
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            Operate at a higher frequency
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            Design, deploy, and scale end‑to‑end workflows that remove repetitive work across GTM, support, and ops. Built with robust integrations, observability, and guardrails.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <motion.a href="#pricing" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/30 ring-1 ring-white/70">
              See pricing
            </motion.a>
            <motion.a href="#demo" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="rounded-xl bg-white/10 text-white ring-1 ring-white/15 px-5 py-3 text-sm font-semibold backdrop-blur hover:bg-white/15">
              Book a demo
            </motion.a>
            <div className="ml-2 hidden md:flex items-center gap-2 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live in production at modern teams
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

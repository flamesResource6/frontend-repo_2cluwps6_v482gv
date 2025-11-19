import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-end pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI automations that actually ship
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Build, deploy, and scale AI automations for your business
          </h1>
          <p className="mt-4 text-white/80 md:text-lg">
            We design and implement end‑to‑end workflows that eliminate repetitive work — from lead routing to back‑office ops — with modern design, robust integrations, and delightful UX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a href="#pricing" whileHover={{ y: -2 }} className="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg">
              See pricing
            </motion.a>
            <motion.a href="#demo" whileHover={{ y: -2 }} className="rounded-full bg-white/10 text-white ring-1 ring-white/20 px-5 py-3 text-sm font-semibold backdrop-blur">
              Book a demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

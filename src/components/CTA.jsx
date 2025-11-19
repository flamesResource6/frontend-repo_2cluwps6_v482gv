import { motion } from 'framer-motion';
import AccentGrid from './AccentGrid';

export default function CTA() {
  return (
    <section id="demo" className="relative bg-[#0B0D10] py-20 overflow-hidden">
      {/* Base + grid + aurora */}
      <div className="absolute inset-0 -z-30 bg-[#0B0D10]" />
      <AccentGrid />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.08, 0.16, 0.08] }}
        viewport={{ once: true }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(50%_40%_at_20%_80%, rgba(34,211,238,0.10), transparent), radial-gradient(45%_35%_at_80%_20%, rgba(167,139,250,0.10), transparent)'
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 -left-1/2 top-1/3 h-36 w-[200%] rotate-[35deg]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), rgba(34,211,238,0.10), rgba(167,139,250,0.10), transparent)',
          filter: 'blur(12px)'
        }}
        initial={{ x: '-12%', opacity: 0.22 }}
        whileInView={{ x: ['-12%', '8%', '-12%'], opacity: [0.18, 0.3, 0.18] }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 -z-10 bg-gradient-to-t from-[#0B0D10] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1.5 text-xs md:text-sm text-white/80 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
          Limited availability — book a session
        </div>
        <h3 className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight text-white">Let’s design your automation roadmap</h3>
        <p className="mt-3 text-white/70 text-base md:text-lg">Tell us your goals and systems. We’ll propose high‑leverage automations, a cost–benefit model, and a rollout plan.</p>
        <motion.a href="mailto:hello@example.com?subject=FlowForge%20AI%20Demo" whileHover={{ y: -2 }} className="mt-7 inline-flex justify-center rounded-2xl bg-white text-slate-900 px-6 py-3 text-sm font-semibold">
          Book a demo via email
        </motion.a>
      </div>
    </section>
  );
}

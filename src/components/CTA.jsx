import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="demo" className="relative bg-[#0B0D10] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
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

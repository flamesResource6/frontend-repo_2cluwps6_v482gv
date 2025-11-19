import { motion } from 'framer-motion';
import AccentGrid from './AccentGrid';

const tiers = [
  {
    name: 'Starter',
    price: '$2,500',
    period: 'per engagement',
    features: ['Workflow audit', '1 core automation', '2 integrations', 'Email support']
  },
  {
    name: 'Growth',
    price: '$6,500',
    period: 'per month',
    features: ['Automation roadmap', '3-5 workflows', 'Prioritized support', 'Analytics & reporting']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    features: ['SLA & compliance', 'On-prem options', 'SSO & RBAC', 'Dedicated engineer']
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0B0D10] py-20 overflow-hidden">
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
            'radial-gradient(50%_40%_at_15%_80%, rgba(34,211,238,0.10), transparent), radial-gradient(45%_35%_at_85%_20%, rgba(167,139,250,0.10), transparent)'
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -z-10 -left-1/2 top-1/3 h-40 w-[200%] rotate-[35deg]"
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
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#0B0D10] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/15 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Simple & transparent
          </div>
          <h2 className="mt-5 text-white text-3xl md:text-5xl font-extrabold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70 text-base md:text-lg">Start small or go big — we meet you where you are.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/12 p-6 flex flex-col hover:bg-white/10 transition"
            >
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(400px_circle_at_var(--x,70%)_20%, rgba(167,139,250,0.08), transparent 40%)' }} />
              <div className="text-white font-semibold text-base md:text-lg">{t.name}</div>
              <div className="mt-4 text-4xl md:text-5xl font-extrabold text-white">{t.price}</div>
              <div className="text-white/60 text-sm md:text-base">{t.period}</div>
              <ul className="mt-5 space-y-2 text-white/80 text-sm md:text-base">
                {t.features.map(f => (
                  <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400" />{f}</li>
                ))}
              </ul>
              <motion.a href="#demo" whileHover={{ y: -2 }} className="mt-6 inline-flex justify-center rounded-2xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold">
                Get started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

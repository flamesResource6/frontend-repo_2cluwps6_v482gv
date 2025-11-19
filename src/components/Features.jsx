import { motion } from 'framer-motion';
import { Workflow, Zap, Bot, ShieldCheck, Cable, Database } from 'lucide-react';
import AccentGrid from './AccentGrid';

const items = [
  { icon: Workflow, title: 'Workflow Orchestration', desc: 'Multi-step, human-in-the-loop processes with SLAs and fallbacks.' },
  { icon: Zap, title: 'Real-time Triggers', desc: 'Listen to events from CRMs, forms, chats, email, and webhooks.' },
  { icon: Bot, title: 'AI Agents', desc: 'Task-specific agents powered by GPT-4o, function calling, and memory.' },
  { icon: ShieldCheck, title: 'Security & Audit', desc: 'Role-based access, PII redaction, and full run histories.' },
  { icon: Cable, title: '100+ Integrations', desc: 'HubSpot, Notion, Slack, Airtable, Google, Zapier, Make, and more.' },
  { icon: Database, title: 'Data Pipelines', desc: 'ETL from spreadsheets and APIs into clean, queryable stores.' },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0B0D10] py-20 overflow-hidden">
      {/* Base + grid */}
      <div className="absolute inset-0 -z-30 bg-[#0B0D10]" />
      <AccentGrid />

      {/* Aurora sweeps */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.08, 0.16, 0.08] }}
        viewport={{ once: true }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(50%_40%_at_10%_10%, rgba(34,211,238,0.12), transparent), radial-gradient(45%_35%_at_90%_10%, rgba(167,139,250,0.12), transparent)'
        }}
      />

      {/* Light beam */}
      <motion.div
        aria-hidden
        className="absolute -z-10 -left-1/2 top-1/4 h-40 w-[200%] rotate-[35deg]"
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
            Built-in building blocks
          </div>
          <h2 className="mt-5 text-white text-3xl md:text-5xl font-extrabold tracking-tight">Everything you need to automate work</h2>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto text-base md:text-lg">Design systems that are beautiful to use and ruthless on busywork.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              className="group relative overflow-hidden rounded-2xl bg-white/8 ring-1 ring-white/12 p-6 hover:bg-white/10 transition"
            >
              {/* subtle gradient glow */}
              <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition" style={{ background: 'radial-gradient(400px_circle_at_var(--x,70%)_20%, rgba(34,211,238,0.08), transparent 40%)' }} />
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 4 }}
                transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 ring-1 ring-white/10"
              >
                <Icon className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-white/70 text-sm md:text-base">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

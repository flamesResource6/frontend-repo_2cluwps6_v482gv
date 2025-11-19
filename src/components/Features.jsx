import { motion } from 'framer-motion';
import { Workflow, Zap, Bot, ShieldCheck, Cable, Database } from 'lucide-react';

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
    <section id="features" className="relative bg-[#0B0D10]">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_10%_10%,rgba(34,211,238,.14),transparent_40%),radial-gradient(700px_circle_at_90%_10%,rgba(167,139,250,.14),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Everything you need to automate work</h2>
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
              className="group rounded-2xl bg-white/8 ring-1 ring-white/12 p-6 hover:bg-white/10 transition"
            >
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

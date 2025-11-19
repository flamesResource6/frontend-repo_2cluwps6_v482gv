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
    <section id="features" className="relative bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(56,189,248,.15),transparent_40%),radial-gradient(600px_circle_at_90%_10%,rgba(168,85,247,.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Everything you need to automate work</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Design systems that are beautiful to use and ruthless on busywork.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition"
            >
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gradient-to-br from-sky-400/20 to-fuchsia-500/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-1 text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

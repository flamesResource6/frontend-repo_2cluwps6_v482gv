import { motion } from 'framer-motion';

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
    <section id="pricing" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start small or go big — we meet you where you are.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 flex flex-col"
            >
              <div className="text-white font-semibold">{t.name}</div>
              <div className="mt-4 text-4xl font-extrabold text-white">{t.price}</div>
              <div className="text-white/60 text-sm">{t.period}</div>
              <ul className="mt-6 space-y-2 text-white/80 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />{f}</li>
                ))}
              </ul>
              <motion.a href="#demo" whileHover={{ y: -2 }} className="mt-6 inline-flex justify-center rounded-full bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold">
                Get started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

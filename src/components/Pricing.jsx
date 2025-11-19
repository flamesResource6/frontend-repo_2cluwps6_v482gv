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
    <section id="pricing" className="relative bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold">Simple, transparent pricing</h2>
          <p className="mt-4 text-white/70 text-lg">Start small or go big — we meet you where you are.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-7 flex flex-col hover:bg-white/10 transition"
            >
              <div className="text-white font-semibold text-lg">{t.name}</div>
              <div className="mt-5 text-5xl font-extrabold text-white">{t.price}</div>
              <div className="text-white/60 text-base">{t.period}</div>
              <ul className="mt-7 space-y-2.5 text-white/80 text-base">
                {t.features.map(f => (
                  <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />{f}</li>
                ))}
              </ul>
              <motion.a href="#demo" whileHover={{ y: -2 }} className="mt-7 inline-flex justify-center rounded-2xl bg-white text-slate-900 px-6 py-3.5 text-base font-semibold">
                Get started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

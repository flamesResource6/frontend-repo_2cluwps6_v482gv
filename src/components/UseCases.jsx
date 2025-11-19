import { motion } from 'framer-motion';

const cases = [
  {
    name: 'Sales & RevOps',
    items: ['Inbound lead qualification', 'Lead-to-account routing', 'Meeting scheduling', 'CRM hygiene']
  },
  {
    name: 'Support & Success',
    items: ['Tier-0 AI deflection', 'Agent assist', 'RMA automation', 'CSAT analysis']
  },
  {
    name: 'Back Office',
    items: ['Invoice processing', 'Data entry', 'Contract review', 'Policy enforcement']
  },
  {
    name: 'Marketing',
    items: ['Content ops', 'Campaign QA', 'Asset tagging', 'Localization workflows']
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Automation that fits your team</h2>
            <p className="mt-3 text-white/70">We design around your stack and processes, not the other way around.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cases.map((block, i) => (
                <motion.div
                  key={block.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
                >
                  <div className="text-white font-semibold">{block.name}</div>
                  <ul className="mt-2 space-y-1.5 text-white/70 text-sm">
                    {block.items.map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-fuchsia-500/10 to-sky-400/10 blur-2xl" />
            <div className="relative aspect-[4/3] rounded-3xl bg-slate-900 ring-1 ring-white/10 p-6">
              <div className="grid grid-cols-2 gap-3 h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-xl bg-white/5 ring-1 ring-white/10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

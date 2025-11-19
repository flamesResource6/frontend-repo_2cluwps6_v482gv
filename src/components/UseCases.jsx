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
    <section id="usecases" className="relative bg-[#0B0D10] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Automation that fits your team</h2>
            <p className="mt-3 text-white/70 text-base md:text-lg">We design around your stack and processes, not the other way around.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {cases.map((block, i) => (
                <motion.div
                  key={block.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="rounded-2xl bg-white/8 ring-1 ring-white/12 p-5 hover:bg-white/10 transition"
                >
                  <div className="text-white font-semibold text-base md:text-lg">{block.name}</div>
                  <ul className="mt-2.5 space-y-2 text-white/70 text-sm md:text-base">
                    {block.items.map(item => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 blur-3xl" />
            <motion.div
              initial={{ opacity: 0.6 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/3] rounded-3xl bg-[#0E1217] ring-1 ring-white/10 p-6"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 6, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.45 }}
                    className="rounded-xl bg-white/6 ring-1 ring-white/10"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

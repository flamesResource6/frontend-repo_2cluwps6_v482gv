import { motion } from 'framer-motion';
import AccentGrid from './AccentGrid';

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
    <section id="usecases" className="relative bg-[#0B0D10] py-20 overflow-hidden">
      {/* Base background + subtle grid mask */}
      <div className="absolute inset-0 -z-30 bg-[#0B0D10]" />
      <AccentGrid />

      {/* Aurora sweeps (top-left to bottom-right bias) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0.08, 0.18, 0.08] }}
        viewport={{ once: true }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(50%_40%_at_10%_10%, rgba(34,211,238,0.12), transparent), radial-gradient(45%_35%_at_90%_90%, rgba(167,139,250,0.12), transparent)'
        }}
      />

      {/* Diagonal light beam moving from top-left to bottom-right (mirrors Hero) */}
      <motion.div
        aria-hidden
        className="absolute -z-10 -left-1/2 -top-1/3 h-44 w-[200%] rotate-[35deg]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), rgba(34,211,238,0.10), rgba(167,139,250,0.10), transparent)',
          filter: 'blur(12px)'
        }}
        initial={{ x: '-10%', y: '-10%', opacity: 0.22 }}
        whileInView={{ x: ['-10%', '10%', '-10%'], y: ['-10%', '10%', '-10%'], opacity: [0.18, 0.3, 0.18] }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft bottom fade to blend to next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#0B0D10] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Restructured narrative */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/15 px-3 py-1.5 text-[11px] text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Built around your stack and roles
            </div>
            <div className="relative mt-5">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                Automation that fits your team
              </h2>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <p className="mt-4 text-white/80 text-base md:text-lg max-w-xl">
              We adapt orchestration, guardrails, and review steps to how your teams already work—so adoption is smooth and the impact is immediate.
            </p>

            {/* Three proof points */}
            <ul className="mt-6 space-y-3 text-white/80 text-sm md:text-base">
              {[
                'Role-aware workflows with approvals and SLAs',
                'Safe-by-default data handling with audit trails',
                'Integrates with your tools: HubSpot, Slack, Sheets, and more'
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Category cards */}
          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 blur-3xl" />
            <motion.div
              initial={{ opacity: 0.6, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative rounded-3xl bg-[#0E1217] ring-1 ring-white/10 p-6"
           >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {cases.map((block, i) => (
                  <motion.div
                    key={block.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.06, duration: 0.45 }}
                    className="rounded-2xl bg-white/6 ring-1 ring-white/10 p-5 hover:bg-white/9 transition"
                  >
                    <div className="text-white font-semibold text-base md:text-lg">{block.name}</div>
                    <ul className="mt-2.5 space-y-2 text-white/70 text-sm">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

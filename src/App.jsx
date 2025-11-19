import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      {/* Integrated nav lives inside Hero */}
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <CTA />
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex items-center justify-between text-sm text-white/60">
          <div>© {new Date().getFullYear()} FlowForge AI. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
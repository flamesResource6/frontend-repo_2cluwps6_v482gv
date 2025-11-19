import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import ScrollProgress from './components/ScrollProgress';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-white">
      <ScrollProgress />
      {/* Integrated nav lives inside Hero */}
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
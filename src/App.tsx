

import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturePillars } from './components/sections/FeaturePillars';
import { TrustSection } from './components/sections/TrustSection';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased selection:bg-neutral-200">
      <Header />
      <main>
        <HeroSection />
        <FeaturePillars />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

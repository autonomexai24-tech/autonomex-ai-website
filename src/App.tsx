import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { SocialProof } from './components/sections/SocialProof';
import { FeaturePillars } from './components/sections/FeaturePillars';
import { TrustSection } from './components/sections/TrustSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased selection:bg-neutral-200">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturePillars />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

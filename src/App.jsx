import React from 'react';
import Hero from './components/Hero';
import Why from './components/Why';
import Features from './components/Features';
import ProductList from './components/ProductList';
import HowToUse from './components/HowToUse';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Why />
      <Features />
      <ProductList />
      <HowToUse />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

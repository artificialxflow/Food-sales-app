import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RegistrationProcess from './components/RegistrationProcess';
import ProductsShowcase from './components/ProductsShowcase';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <RegistrationProcess />
      <ProductsShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
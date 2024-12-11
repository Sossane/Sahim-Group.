import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Team />
      
      <Footer />
    </div>
  );
}

export default App;
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import AppMobile from './components/AppMobile';
import AppMobileSection from './components/AppMobileSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Solutions from './components/Solutions';
import Team from './components/Team';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Solutions />
            <AppMobileSection />
            <Team />
            <Footer />
          </div>
        } />
        <Route path="/app-mobile" element={<AppMobile />} />
      </Routes>
    </Router>
  );
}

export default App;

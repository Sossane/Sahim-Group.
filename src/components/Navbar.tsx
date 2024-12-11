import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false); // Ferme le menu mobile si ouvert
    
    // Si on est sur la page d'accueil
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si on est sur une autre page, retourner à l'accueil puis scroller
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="h-8 w-8 text-blue-600">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            </Link>
            <span className="ml-2 text-xl font-bold text-gray-800">SahimGroup</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavigation('about')} className="text-gray-600 hover:text-blue-600">
              À Propos
            </button>
            <button onClick={() => handleNavigation('solutions')} className="text-gray-600 hover:text-blue-600">
              Solutions
            </button>
            <button onClick={() => handleNavigation('team')} className="text-gray-600 hover:text-blue-600">
              Équipe
            </button>
            <button onClick={() => handleNavigation('contact')} className="text-gray-600 hover:text-blue-600">
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavigation('about')} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              À Propos
            </button>
            <button 
              onClick={() => handleNavigation('solutions')} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Solutions
            </button>
            <button 
              onClick={() => handleNavigation('team')} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Équipe
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
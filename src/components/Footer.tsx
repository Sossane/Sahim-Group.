import React from 'react';
import { Brain } from 'lucide-react';
import Solutions from './footer/Solutions';
import ContactInfo from './footer/ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        {/* Solutions Section */}
        <Solutions />

        {/* Contact Section */}
        <ContactInfo />

        {/* Footer Bottom */}
        <div className="py-8 border-t border-gray-800 mt-16">
          <div className="flex justify-center space-x-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div className="mt-8 text-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} SahimGroup. Tous droits réservés.
            </p>
          </div>
          <div className="mt-8">
            <nav className="flex flex-wrap justify-center gap-8">
              <a href="#about" className="text-gray-400 hover:text-gray-300">À Propos</a>
              <a href="#team" className="text-gray-400 hover:text-gray-300">Équipe</a>
              <a href="#solutions" className="text-gray-400 hover:text-gray-300">Solutions</a>
              <a href="#contact" className="text-gray-400 hover:text-gray-300">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
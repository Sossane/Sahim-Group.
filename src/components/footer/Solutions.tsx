import React from 'react';
import { Car, MapPin } from 'lucide-react';

const Solutions = () => {
  return (
    <div id="solutions" className="pb-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Nos Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Car className="h-6 w-6 text-blue-400" />
            <h3 className="ml-3 text-xl font-bold text-white">Teggunou Yoon</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Solution innovante pour la sécurité routière et l'apprentissage du code de la route.
            Formez-vous efficacement grâce à notre plateforme interactive intégrant l'IA.
          </p>
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            En savoir plus →
          </a>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-blue-400" />
            <h3 className="ml-3 text-xl font-bold text-white">Cartographie Auto-Écoles</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Localisez facilement toutes les auto-écoles au Sénégal. Notre plateforme
            cartographique vous aide à trouver l'établissement idéal près de chez vous.
          </p>
          <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
            Explorer la carte →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
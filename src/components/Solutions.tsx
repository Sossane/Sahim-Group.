import React from 'react';
import { Car, MapPin } from 'lucide-react';

const Solutions = () => {
  return (
    <div id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions innovantes pour améliorer la sécurité routière et l'accès à l'apprentissage
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <Car className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-2xl font-bold text-gray-900">Teggunou Yoon</h3>
                </div>
                <p className="mt-6 text-gray-500">
                  Une solution innovante pour la sécurité routière et l'apprentissage du code de la route.
                  Formez-vous efficacement grâce à notre plateforme interactive intégrant l'IA.
                </p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}></div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600" />
                  <h3 className="ml-3 text-2xl font-bold text-gray-900">Cartographie Auto-Écoles</h3>
                </div>
                <p className="mt-6 text-gray-500">
                  Localisez facilement toutes les auto-écoles au Sénégal. Notre plateforme
                  cartographique vous aide à trouver l'établissement idéal près de chez vous.
                </p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                    Explorer la carte
                  </a>
                </div>
              </div>
              <div className="h-64 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
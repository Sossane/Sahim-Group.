import React from 'react';
import { MapPin, Phone, Mail, Car } from 'lucide-react';

const AutoEcoles = () => {
  // Exemple de données d'auto-écoles
  const autoEcoles = [
    {
      id: 1,
      nom: "Auto-École Excellence",
      adresse: "Dakar, Plateau",
      telephone: "+221 XX XXX XX XX",
      email: "contact@excellence.sn",
      tarifs: {
        code: "50 000 FCFA",
        conduite: "250 000 FCFA",
        forfaitComplet: "280 000 FCFA"
      }
    },
    // Ajoutez d'autres auto-écoles ici
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
          Cartographie des Auto-Écoles
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {autoEcoles.map((ecole) => (
            <div key={ecole.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="h-6 w-6 text-blue-600" />
                  <h2 className="ml-2 text-xl font-semibold text-gray-900">{ecole.nom}</h2>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-gray-600">{ecole.adresse}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-gray-600">{ecole.telephone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-gray-600">{ecole.email}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tarifs</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">Code: {ecole.tarifs.code}</p>
                    <p className="text-gray-600">Conduite: {ecole.tarifs.conduite}</p>
                    <p className="text-gray-600">Forfait Complet: {ecole.tarifs.forfaitComplet}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoEcoles;
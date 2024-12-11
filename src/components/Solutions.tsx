import { motion } from 'framer-motion';
import { Car, MapPin, Smartphone } from 'lucide-react';
import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Car className="h-8 w-8 text-white" />,
      title: "Teggunou Yoon",
      description: "Une solution innovante pour la sécurité routière et l'apprentissage du code de la route. Formez-vous efficacement grâce à notre plateforme interactive intégrant l'IA.",
      gradient: "from-blue-600 to-cyan-500",
      buttonText: "En savoir plus",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Cartographie Auto-Écoles",
      description: "Localisez facilement toutes les auto-écoles au Sénégal. Notre plateforme cartographique vous aide à trouver l'établissement idéal près de chez vous.",
      gradient: "from-indigo-600 to-purple-600",
      buttonText: "Explorer la carte",
      image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Nos Solutions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions innovantes pour améliorer la sécurité routière et l'accès à l'apprentissage
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${solution.gradient} rounded-xl shadow-lg`}>
                    {solution.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="mt-6 text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r ${solution.gradient} hover:shadow-lg transition-all duration-200`}
                    >
                      {solution.buttonText}
                    </motion.button>
                  </div>
                </div>
                <div 
                  className="h-64 bg-cover bg-center transform hover:scale-105 transition-transform duration-500" 
                  style={{backgroundImage: `url('${solution.image}')`}}
                />
              </motion.div>
            ))}
          </div>

          {/* Section Application Mobile */}
          <div className="mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Application Mobile Teggunou Yoon
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Accédez à toutes nos fonctionnalités directement depuis votre smartphone. Apprenez le code de la route, trouvez une auto-école et suivez votre progression où que vous soyez.
                </p>
                <ul className="space-y-4">
                  {[
                    "Apprentissage interactif du code de la route",
                    "Suivi de progression personnalisé",
                    "Localisation des auto-écoles en temps réel",
                    "Tests et examens blancs"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg transition-all duration-200"
                  >
                    Télécharger l'app
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl transform rotate-6"></div>
                <img
                  src=""
                  alt="Interface mobile Teggunou Yoon"
                  className="relative z-10 rounded-3xl shadow-xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500 object-cover h-[500px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
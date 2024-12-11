import { motion } from 'framer-motion';
import { Building2, Smartphone } from 'lucide-react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AppMobile = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Section Plateforme de Gestion */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[#641f45] to-[#8a2b5f] bg-clip-text text-transparent">
              Plateforme de Gestion des Auto-Écoles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Une solution complète pour moderniser et optimiser la gestion de votre auto-école
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#641f45] to-[#8a2b5f] rounded-xl shadow-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Gérez votre auto-école efficacement
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  Notre plateforme vous offre tous les outils nécessaires pour digitaliser et optimiser la gestion de votre auto-école, du suivi des élèves à la planification des cours.
                </p>
                <ul className="space-y-4">
                  {[
                    "Gestion complète des apprenants et des inscriptions",
                    "Planning des cours",
                    "Suivi des paiements et facturation",
                    "Tableau de bord analytique",
                    "Interface intuitive et moderne"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#641f45] to-[#8a2b5f]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-[#641f45] to-[#8a2b5f] hover:shadow-lg transition-all duration-200"
                  >
                    Demander une démo
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#641f45] to-[#8a2b5f] rounded-3xl transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Interface de la plateforme de gestion"
                  className="relative z-10 rounded-3xl shadow-xl w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500 object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Application Mobile */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[#641f45] to-[#8a2b5f] bg-clip-text text-transparent">
              Application Mobile Teggunou Yoon
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Votre compagnon d'apprentissage du code de la route
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-[#641f45] to-[#8a2b5f] rounded-xl shadow-lg">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Fonctionnalités Principales
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
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#641f45] to-[#8a2b5f]" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-[#641f45] to-[#8a2b5f] hover:shadow-lg transition-all duration-200"
                  >
                    Télécharger l'app
                  </motion.button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#641f45] to-[#8a2b5f] rounded-3xl transform rotate-6"></div>
                <img
                  src=""
                  alt="Interface mobile Teggunou Yoon"
                  className="relative z-10 rounded-3xl shadow-xl w-full max-w-sm mx-auto transform hover:scale-105 transition-transform duration-500 object-cover h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppMobile;

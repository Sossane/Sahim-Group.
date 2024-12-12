import { motion } from 'framer-motion';
import { Building2, Check } from 'lucide-react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const AppMobile = () => {
  const appFeatures = [
    "Apprentissage en wolof et en français",
    "Cours disponibles en audio et texte",
    "Suivi des progrès personnalisé",
    "Exercices pratiques interactifs"
  ];

  const platformFeatures = [
    "Gestion complète des apprenants",
    "Planning des cours interactif",
    "Suivi des paiements en temps réel",
    "Tableau de bord analytique"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Section Plateforme de Gestion */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte et Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Plateforme de Gestion{' '}
                  <span className="bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent">
                    Auto-Écoles
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Notre plateforme offre une solution complète pour moderniser et optimiser la gestion de votre auto-école, avec des outils adaptés à vos besoins.
                </p>
              </div>

              <div className="space-y-4">
                {platformFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-6 w-6 text-[#82368C]" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#82368C] to-[#82368C] text-white rounded-lg hover:opacity-90 transition-all duration-300 mt-8"
              >
                Demander une démo
              </motion.button>
            </motion.div>

            {/* Image de la Plateforme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-3xl transform rotate-12 opacity-10"></div>
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Interface de la plateforme"
                    className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Application Mobile */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texte et Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Application Mobile{' '}
                  <span className="bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent">
                    Accessible à Tous
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Notre application propose un apprentissage innovant du code de la route en langues locales. Écoutez et lisez les cours en wolof ou en français, pour une compréhension optimale adaptée à tous.
                </p>
              </div>

              <div className="space-y-4">
                {appFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <Check className="h-6 w-6 text-[#82368C]" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#82368C] to-[#82368C] text-white rounded-lg hover:opacity-90 transition-all duration-300 mt-8"
              >
                Télécharger l'application
              </motion.button>
            </motion.div>

            {/* Image de l'App avec Vidéo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-3xl transform rotate-12 opacity-10"></div>
                <div className="relative z-10 mx-auto max-w-[300px]">
                  <div className="relative">
                    <img
                      src="https://www.pngall.com/wp-content/uploads/5/iPhone-12-PNG-Image-File.png"
                      alt="Cadre du téléphone"
                      className="w-full"
                    />
                    <div className="absolute top-[6%] left-[5%] right-[5%] bottom-[6%] rounded-[28px] overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src="https://cdn.dribbble.com/users/1299339/screenshots/14693431/media/0acf60804e4c4a6917baa28c809d099c.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos.
                      </video>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent z-20"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AppMobile;

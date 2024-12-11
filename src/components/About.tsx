import { Globe, Heart, Lightbulb, Target, Users, Rocket, Star } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Notre Mission",
      content: [
        "Transformer le paysage numérique africain",
        "Innover pour un impact social positif",
        "Développer des solutions adaptées localement",
        "Faciliter l'accès à la technologie"
      ],
      color: "from-[#82368C] to-[#82368C]",
      delay: 0.2
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Nos Valeurs",
      content: [
        "Innovation technologique responsable",
        "Excellence et qualité de service",
        "Engagement communautaire",
        "Intégrité et transparence"
      ],
      color: "from-[#82368C] to-[#82368C]",
      delay: 0.4
    },
    {
      icon: <Rocket className="h-8 w-8 text-white" />,
      title: "Notre Vision",
      content: [
        "Leader de la transformation digitale",
        "Catalyseur d'innovation en Afrique",
        "Créateur de solutions durables",
        "Partenaire de croissance"
      ],
      color: "from-[#82368C] to-[#82368C]",
      delay: 0.6
    }
  ];

  return (
    <div id="about" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]"></div>
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#82368C]/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#82368C]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent mb-6"
          >
            L'Innovation Technologique au Service du Changement Social
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed"
          >
            Sahim Group est une startup innovante spécialisée dans la transformation numérique 
            et l'intelligence artificielle, avec pour mission de transformer la société par le digital.
          </motion.p>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: card.delay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#82368C]/20 to-[#82368C]/20 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${card.color} rounded-xl shadow-lg`}>
                  {card.icon}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <div className="mt-8 space-y-6">
                  {card.content.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + card.delay }}
                    >
                      <Star className="h-4 w-4 text-[#82368C] mt-1 flex-shrink-0" />
                      <p className="text-gray-600">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
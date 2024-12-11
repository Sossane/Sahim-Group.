import { Globe, Heart, Lightbulb } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            L'Innovation Technologique au Service du Changement Social
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Sahim Group est une entreprise innovante spécialisée dans la transformation numérique et l'intelligence artificielle, avec pour mission de transformer la société par le digital.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Lightbulb className="h-6 w-6 text-white" />,
                title: "Nos Valeurs",
                content: [
                  "Innovation : Déployer des technologies adaptées aux réalités locales",
                  "Impact Social : Transformer les défis en opportunités",
                  "Accompagnement : Renforcer la visibilité de nos partenaires",
                  "Excellence : Garantir la qualité de nos services"
                ],
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Notre Vision",
                content: [
                  "Devenir un leader du numérique en Afrique",
                  "Bâtir un avenir inclusif et durable",
                  "Créer des solutions innovantes",
                  "Valoriser l'expertise locale"
                ],
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <Heart className="h-6 w-6 text-white" />,
                title: "Engagement pour la Sensibilisation Civique",
                content: [
                  "Promotion active du civisme",
                  "Sensibilisation sur la sécurité routière",
                  "Accompagnement des communautés",
                  "Respect des normes sociales"
                ],
                color: "from-blue-500 to-indigo-600"
              }
            ].map((card, index) => (
              <div key={index} className="pt-6 h-full">
                <div className="flow-root bg-white rounded-xl px-6 pb-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                  <div className="-mt-6 h-full">
                    <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${card.color} rounded-xl shadow-lg transform -translate-y-1/2`}>
                      {card.icon}
                    </div>
                    <h3 className="mt-8 text-xl font-bold text-gray-900 tracking-tight">
                      {card.title}
                    </h3>
                    <div className="mt-5 space-y-4">
                      {card.content.map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 bg-gradient-to-r ${card.color} flex-shrink-0`}></span>
                          <p className="text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
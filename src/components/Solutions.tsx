import { motion } from 'framer-motion';
import { Car, MapPin } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Car className="h-8 w-8 text-white" />,
      title: "Tegginu Yoon",
      description: "Une solution innovante pour la sécurité routière et l'apprentissage du code de la route.",
      gradient: "from-[#82368C] to-[#82368C]",
      buttonText: "En savoir plus",
      link: "",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: "Cartographie Auto-Écoles",
      description: "Localisez facilement toutes les auto-écoles au Sénégal.",
      gradient: "from-[#82368C] to-[#82368C]",
      buttonText: "Explorer la carte",
      link: "https://trouver-auto-ecole.vercel.app/",
      image: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div id="solutions" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl bg-white transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${solution.gradient} rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="mt-6 text-gray-500 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-8">
                    <a 
                      href="" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-gradient-to-r ${solution.gradient} hover:shadow-lg transition-all duration-200`}
                      >
                        {solution.buttonText}
                      </motion.button>
                    </a>
                  </div>
                </div>
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#82368C]/20 to-[#82368C]/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div 
                    className="h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500" 
                    style={{ backgroundImage: `url('${solution.image}')` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;

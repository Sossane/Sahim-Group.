import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fond avec clip-path */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div 
          className="absolute inset-0 bg-[#82368C]/5"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)"
          }}
        ></div>
      </div>

      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.1]"></div>
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#82368C]/10 rounded-full filter blur-3xl"
          style={{
            animation: "pulse 8s infinite"
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#82368C]/10 rounded-full filter blur-3xl"
          style={{
            animation: "pulse 8s infinite reverse"
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent">
              Sahim Group
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto text-gray-600 leading-relaxed"
          >
            Innovons ensemble pour un avenir numérique plus inclusif en Afrique
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-sm text-white bg-gradient-to-r from-[#82368C] to-[#82368C] hover:shadow-lg transition-all duration-200"
            >
              Découvrir nos solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-[#82368C] text-lg font-medium rounded-xl text-[#82368C] hover:bg-[#82368C]/5 transition-colors duration-200"
            >
              En savoir plus
            </motion.button>
          </motion.div>
        </div>

        {/* Image avec nouveau style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-3xl transform rotate-2"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
              }}
            ></div>
            <img
              src="/hero-image.jpg"
              alt="Innovation numérique"
              className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Style pour l'animation pulse */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
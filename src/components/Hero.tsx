import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="accueil" className="relative bg-gradient-to-r from-[#e78bd3] to-[#82368C] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Solutions Innovantes pour</span>
            <span className="block text-[#adc5d1]">l'Afrique de Demain</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Nous créons des solutions technologiques innovantes adaptées aux réalités africaines,
            en intégrant l'IA pour un impact social positif.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#solutions" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#1a5f7a] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Découvrir nos solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </div>
  );
};

export default Hero;
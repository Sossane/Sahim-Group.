import React from 'react';
import { Target, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            À Propos de SahimGroup
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Une entreprise sénégalaise engagée dans l'innovation technologique et sociale
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Notre Mission</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Développer des solutions innovantes adaptées aux réalités africaines pour résoudre
                    les défis locaux et améliorer la vie quotidienne.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Notre Approche</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Intégration de l'IA et des technologies avancées pour créer des solutions
                    durables et accessibles à tous.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900">Notre Vision</h3>
                  <p className="mt-5 text-base text-gray-500">
                    Étendre notre impact à travers l'Afrique en proposant des solutions
                    innovantes qui répondent aux besoins locaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#82368C]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#82368C]/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent sm:text-4xl"
          >
            Contactez-nous
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Nous sommes là pour répondre à vos questions et vous accompagner dans vos projets
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-[#82368C] focus:ring-[#82368C]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-[#82368C] focus:ring-[#82368C]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-[#82368C] focus:ring-[#82368C]"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-[#82368C] to-[#82368C] hover:shadow-lg transition-all duration-200"
              >
                Envoyer
                <Send className="ml-2 h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-xl">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-500">contact@sahimgroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-xl">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="mt-1 text-gray-500">+221 77 777 77 77</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-r from-[#82368C] to-[#82368C] rounded-xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                <p className="mt-1 text-gray-500">Dakar, Sénégal</p>
              </div>
            </div>

            {/* Carte ou image */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1577417345463-c26559c15938?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Localisation"
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
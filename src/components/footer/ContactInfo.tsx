import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div id="contact" className="mt-16">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Contactez-nous</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <Mail className="h-6 w-6 text-blue-400" />
          <h3 className="mt-4 text-lg font-medium text-white">Email</h3>
          <p className="mt-2 text-gray-300">contact@sahimgroup.com</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <Phone className="h-6 w-6 text-blue-400" />
          <h3 className="mt-4 text-lg font-medium text-white">Téléphone</h3>
          <p className="mt-2 text-gray-300">+221 XX XXX XX XX</p>
        </div>

        <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg">
          <MapPin className="h-6 w-6 text-blue-400" />
          <h3 className="mt-4 text-lg font-medium text-white">Adresse</h3>
          <p className="mt-2 text-gray-300 text-center">Dakar, Sénégal</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
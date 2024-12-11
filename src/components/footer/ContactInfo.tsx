import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      content: "contact@sahimgroup.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Téléphone",
      content: "+221 77 777 77 77"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Adresse",
      content: "Dakar, Sénégal"
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
      <div className="space-y-4">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="p-2 bg-[#641f45] rounded-lg">
              {React.cloneElement(info.icon, { className: "h-5 w-5 text-white" })}
            </div>
            <div>
              <p className="text-gray-300">{info.title}</p>
              <p className="text-white">{info.content}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-white mb-4">Suivez-nous</h3>
        <div className="flex space-x-4">
          {['LinkedIn', 'Twitter', 'Instagram'].map((social, index) => (
            <a
              key={index}
              href="#"
              className="p-2 bg-[#641f45] rounded-lg text-white hover:opacity-80 transition-colors duration-200"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
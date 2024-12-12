import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react';
import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      content: "tegguinuyoon@gmail.com",
      href: "mailto:tegguinuyoon@gmail.com"
    },
    {
      icon: <Phone />,
      title: "Téléphone",
      content: "+221 78 520 40 78",
      href: "tel:+221785204078"
    },
    {
      icon: <MapPin />,
      title: "Adresse",
      content: "Dakar, Sénégal",
      href: "https://goo.gl/maps/votreLien"
    }
  ];

  const socialMedia = [
    {
      icon: <Linkedin />,
      name: 'LinkedIn',
      href: '#'
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      href: '#'
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      href: '#'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* À propos */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#82368C] to-[#82368C] bg-clip-text text-transparent mb-6">
              Sahim Group
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Nous innovons pour améliorer la sécurité routière et l'accès à l'apprentissage au Sénégal, en proposant des solutions adaptées aux besoins locaux.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <div
                  key={index}
                  className="p-2.5 bg-[#82368C]/10 rounded-lg hover:bg-[#82368C] group transition-all duration-300"
                >
                  {React.cloneElement(social.icon, { 
                    className: "h-5 w-5 text-[#82368C] group-hover:text-white transition-colors" 
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-[#82368C] mb-6">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  className="flex items-center space-x-3 hover:text-[#82368C] transition-all duration-300 text-gray-600 group"
                >
                  <div className="p-2 bg-[#82368C]/10 rounded-lg group-hover:bg-[#82368C]/20">
                    {React.cloneElement(info.icon, { 
                      className: "h-5 w-5 text-[#82368C]" 
                    })}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#82368C]">{info.title}</p>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-[#82368C] mb-6">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Restez informé de nos actualités et des nouvelles fonctionnalités de nos solutions.
              </p>
              {isSubscribed ? (
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-green-600 flex items-center">
                    <span className="mr-2">✓</span>
                    Merci pour votre inscription !
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#82368C] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-gradient-to-r from-[#82368C] to-[#82368C] text-white rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>S'abonner</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-200"></div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sahim Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
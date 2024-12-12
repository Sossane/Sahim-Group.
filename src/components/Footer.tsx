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
      content: "contact@sahimgroup.com",
      href: "mailto:contact@sahimgroup.com"
    },
    {
      icon: <Phone />,
      title: "Téléphone",
      content: "+221 77 777 77 77",
      href: "tel:+221777777777"
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
      href: 'https://linkedin.com/company/sahimgroup'
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      href: 'https://twitter.com/sahimgroup'
    },
    {
      icon: <Instagram />,
      name: 'Instagram',
      href: 'https://instagram.com/sahimgroup'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* À propos */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-[#641f45] mb-4">Sahim Group</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Nous innovons pour améliorer la sécurité routière et l'accès à l'apprentissage au Sénégal.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#641f45]/10 rounded-lg hover:bg-[#641f45] group transition-all duration-300"
                  aria-label={social.name}
                >
                  {React.cloneElement(social.icon, { 
                    className: "h-5 w-5 text-[#641f45] group-hover:text-white transition-colors" 
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-[#641f45] mb-6">Contact</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  className="flex items-center space-x-3 hover:text-[#641f45] transition-all duration-300 text-gray-600 group"
                >
                  <div className="p-2 bg-[#641f45]/10 rounded-lg group-hover:bg-[#641f45]/20">
                    {React.cloneElement(info.icon, { 
                      className: "h-5 w-5 text-[#641f45]" 
                    })}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#641f45]">{info.title}</p>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold text-[#641f45] mb-6">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Inscrivez-vous pour recevoir nos dernières actualités et mises à jour.
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#641f45] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-[#641f45] text-white rounded-lg hover:bg-[#7a2654] transition-all duration-300 flex items-center justify-center space-x-2"
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
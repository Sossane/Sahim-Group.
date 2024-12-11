import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Ibrahima Ly",
      role: "CEO",
      image: new URL('../assets/images/ILY.jpeg', import.meta.url).href,
      skills: [
        "Data Engineer",
        "Apprenant IA Générative",
        "Développeur fullstack"
      ]
    },
    {
      name: "Awa Ngom",
      role: "COO", 
      image: new URL('../assets/images/awa.jpeg', import.meta.url).href,
      skills: [
        "UI/UX Designer",
        "Community Manager",
        "Chef de projet"
      ]
    },
    {
      name: "Imam Elhadji Mame Seynou Kébé",
      role: "CTO",
      image: new URL('../assets/images/imam.jpeg', import.meta.url).href,
      skills: [
        "Développeur IA",
        "Ingénieur en S.I Répartis"
      ]
    },
    {
      name: "Sokhna Alassane Kébé",
      role: "CDO",
      image: new URL('../assets/images/new.jpeg', import.meta.url).href,
      skills: [
        "Développeuse Data et Web",
        "Data Analyst",
        "Data Engineer"
      ]
    },
    {
      name: "Mouhamed Samb",
      role: "CMO",
      image: new URL('../assets/images/MS.jpeg', import.meta.url).href,
      skills: [
        "Designer",
        "Social Media Manager",
        "Monteur vidéo"
      ]
    },
  ];

  return (
    <div id="team" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#641f45] to-[#8a2b5f] bg-clip-text text-transparent">
            Notre Équipe
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Une équipe passionnée par l'innovation et le développement de l'Afrique
          </p>
        </div>

        <div className="mt-20">
          {/* Premier rang : 3 personnes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-[#641f45]/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Popup des compétences */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-xl shadow-lg p-4 mx-4 ring-1 ring-[#641f45]/10">
                      <div className="text-sm font-medium text-[#641f45] mb-2">Compétences</div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#641f45]/10 to-[#8a2b5f]/10 text-[#641f45]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-[#641f45]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deuxième rang : 2 personnes centrées */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {teamMembers.slice(3).map((member, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-[#641f45]/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Popup des compétences */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-xl shadow-lg p-4 mx-4 ring-1 ring-[#641f45]/10">
                      <div className="text-sm font-medium text-[#641f45] mb-2">Compétences</div>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#641f45]/10 to-[#8a2b5f]/10 text-[#641f45]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-[#641f45]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
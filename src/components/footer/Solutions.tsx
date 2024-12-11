import React from 'react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      title: "Teggunou Yoon",
      items: [
        { name: "Application Mobile", href: "/app-mobile" },
        { name: "Code de la route", href: "#" },
        { name: "Tests en ligne", href: "#" },
        { name: "Apprentissage", href: "#" }
      ]
    },
    {
      title: "Auto-Écoles",
      items: [
        { name: "Cartographie", href: "#" },
        { name: "Gestion", href: "#" },
        { name: "Partenariats", href: "#" },
        { name: "Inscription", href: "#" }
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {solutions.map((solution, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-white mb-4">
            {solution.title}
          </h3>
          <ul className="space-y-3">
            {solution.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white hover:bg-[#641f45] px-2 py-1 rounded transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
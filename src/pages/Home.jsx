import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <TypeAnimation
            sequence={[
              'Front-end Developer',
              1000,
              'React Specialist',
              1000,
              'JavaScript Expert',
              1000,
              'Front-end Developer',
            ]}
            wrapper="span"
            speed={50}
            className="block"
            repeat={Infinity}
          />
          <span className="block text-blue-600 mt-4">met passie voor web development</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Welkom op mijn portfolio! Ik ben een front-end developer met expertise in React, JavaScript, HTML en CSS.
          Ik creëer moderne en gebruiksvriendelijke web applicaties.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900">Vaardigheden</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'React', description: 'Modern front-end development met React en zijn ecosysteem.' },
            { name: 'JavaScript', description: 'Expert in moderne JavaScript (ES6+) ontwikkeling.' },
            { name: 'HTML & CSS', description: 'Creëren van toegankelijke en responsive websites.' },
            { name: 'UI/UX', description: 'Focus op gebruiksvriendelijk en modern design.' },
            { name: 'Version Control', description: 'Ervaring met Git en GitHub voor versiebeheer.' },
            
      { name: 'Adobe creative cloud', description: 'Adobe Photoshop, Illustrator, Indisign en Premiere pro.' },
          ].map((skill) => (
            <div
              key={skill.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{skill.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
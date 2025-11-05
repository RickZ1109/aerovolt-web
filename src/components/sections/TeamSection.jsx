
import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    'Diego Luiz Carnielli Gonçalves',
    'Ricardo Oliveira Silva',
    'Pedro Henrique Salles Parras',
    'Carlos Eduardo Carvalho de Moura'
  ];

  return (
    <section id="equipe" className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Users className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              5. Integrantes do Projeto
            </h2>
          </div>

          <p className="text-lg text-slate-700 mb-8">
            Este projeto foi idealizado e construído por:
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-100"
          >
            <ul className="space-y-3 text-lg text-slate-700">
              {teamMembers.map((member, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600 italic">
              "Transformando vento em conhecimento, uma hélice de cada vez."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

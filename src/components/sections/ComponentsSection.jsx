import React from 'react';
import { motion } from 'framer-motion';
import { Package, CheckCircle2 } from 'lucide-react';
const ComponentsSection = () => {
  const components = ['1x Motor DC 5,5V (usado como gerador)', '1x Hélice/Ventoinha', '1x Capacitor de 100uf 16V (para estabilizar a tensão gerada)', '4x LEDs 5mm de 2V em média (qualquer cor)', '4x Resistores de 200 Ohms', '1x Protoboard (Placa de Ensaio) e Fios Jumper', 'Base para montagem (madeira, acrílico, etc.)'];
  return <section id="componentes" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <div className="flex items-center space-x-3 mb-8">
            <Package className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              2. Lista de Materiais Necessários
            </h2>
          </div>

          <p className="text-lg text-slate-700 mb-8">
            Para montar o circuito AeroVolt, você precisará dos seguintes componentes eletrônicos e estruturais:
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <ul className="space-y-4">
                {components.map((component, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.1
              }} className="flex items-start space-x-3 group">
                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-slate-700 text-lg">{component}</span>
                  </motion.li>)}
              </ul>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 sticky top-24">
              <img className="w-full h-full object-cover aspect-[3/4]" alt="Componentes do projeto AeroVolt organizados" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/materiais-B8mlP.jpeg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default ComponentsSection;
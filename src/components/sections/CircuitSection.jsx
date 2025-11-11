import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wrench } from 'lucide-react';
const CircuitSection = () => {
  const steps = ['Fixe firmemente o motor DC na sua base.', 'Encaixe as hélices no eixo do motor.', 'Monte o circuito na protoboard seguindo o diagrama técnico.', 'Conecte os fios de saída do motor à entrada do circuito na protoboard.', 'Teste o sistema com um ventilador para verificar se os LEDs acendem.'];
  return <section id="circuito" className="section-padding bg-white">
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
          <div className="flex items-center space-x-3 mb-12">
            <Cpu className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              3. O Circuito e o Passo a Passo
            </h2>
          </div>

          {/* Subsection 3.1 */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              3.1 O Diagrama Técnico
            </h3>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              O coração do projeto é este circuito. O motor DC gera a tensão que alimenta o capacitor. Os quatro conjuntos de LED + Resistor de 200Ω são ligados em paralelo ao capacitor. O resistor de 200 ohms é crucial para limitar a corrente e proteger cada LED contra sobrecarga.
            </p>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8">
              <img className="w-full h-auto object-contain" alt="Diagrama técnico do circuito AeroVolt" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/circuito-uqbqF.jpeg" />
            </motion.div>
          </div>

          {/* Subsection 3.2 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Wrench className="text-blue-600" size={28} />
              <h3 className="text-3xl font-bold text-slate-800">
                3.2 Montagem Passo a Passo
              </h3>
            </div>
            
            <p className="text-lg text-slate-700 mb-8">
              Siga estes passos para a montagem:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-12 border border-blue-100">
              <ol className="space-y-4">
                {steps.map((step, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} className="flex items-start space-x-4 group">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    <span className="text-slate-700 text-lg pt-1">{step}</span>
                  </motion.li>)}
              </ol>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-slate-800 mb-6">
                Galeria de Montagem
              </h4>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img className="w-full h-64 object-cover" alt="Passo 1 da montagem" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/mont1-yFZ1N.jpeg" />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img className="w-full h-64 object-cover" alt="Passo 2 da montagem" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/mont2-WH9mX.jpeg" />
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img className="w-full h-64 object-cover" alt="Passo 3 da montagem" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/mont-3-GPtk0.jpeg" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default CircuitSection;
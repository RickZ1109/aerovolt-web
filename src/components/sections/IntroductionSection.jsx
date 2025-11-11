import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
const IntroductionSection = () => {
  return <section id="introducao" className="section-padding bg-white">
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
            <BookOpen className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              1. Introdução ao AeroVolt
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">O AeroVolt é um projeto prático de eletrônica e energias renováveis que utiliza como base a ODS 7. O objetivo é demonstrar visualmente como a energia cinética do vento é convertida em energia elétrica. O circuito utiliza um motor DC como gerador, que, ao ter suas hélices giradas pelo vento, produz uma tensão.</p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Essa energia é estabilizada por um capacitor e usada para acender progressivamente quatro LEDs, mostrando de forma clara a relação entre a velocidade do vento e a energia gerada. Este relatório serve como um guia completo para sua replicação.
              </p>
            </div>

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
          }} className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-slate-100 to-blue-50">
              <img className="w-full h-full object-cover aspect-video" alt="Detalhe do projeto AeroVolt" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/whatsapp-image-2025-11-06-at-18.29.47-qlwTM.jpeg" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default IntroductionSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Wind className="text-blue-600" size={40} />
              <Zap className="text-cyan-500" size={40} />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Projeto <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">AeroVolt</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Como Construir um Gerador Eólico Didático que Acende LEDs com a Força do Vento
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#introducao"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Começar
              </a>
              <a
                href="#demonstracao"
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver Demonstração
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
              <img 
                className="w-full h-full object-cover" 
                alt="Projeto AeroVolt montado e finalizado"
               src="https://images.unsplash.com/photo-1498559600233-3aba1693216a" />
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

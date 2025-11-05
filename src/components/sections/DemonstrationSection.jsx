
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const DemonstrationSection = () => {
  const { toast } = useToast();

  const handleVideoClick = () => {
    toast({
      title: "🎥 Slot de Vídeo",
      description: "Insira aqui o link do YouTube da demonstração do projeto!",
    });
  };

  return (
    <section id="demonstracao" className="section-padding bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <Play className="text-blue-600" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              4. Projeto em Funcionamento
            </h2>
          </div>

          <p className="text-lg text-slate-700 mb-12 leading-relaxed">
            Veja o AeroVolt em ação. Demonstramos como os LEDs acendem progressivamente conforme a intensidade do vento aumenta. Isso ocorre porque o motor gera mais tensão quanto mais rápido ele gira.
          </p>

          {/* Video Slot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div 
              onClick={handleVideoClick}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-700 cursor-pointer group"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                <Youtube size={80} className="mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-xl font-semibold">Clique para adicionar vídeo do YouTube</p>
                <p className="text-slate-300 mt-2">Demonstração do AeroVolt em funcionamento</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Full-width Image Slot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              className="w-full h-auto object-cover" 
              alt="LEDs do AeroVolt acesos no escuro"
             src="https://images.unsplash.com/photo-1438789782736-925a17ca5ac6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemonstrationSection;

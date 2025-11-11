
import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const DemonstrationSection = () => {
  const youtubeVideoId = 'arBppAyVq0s';

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

          {/* YouTube Video Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 to-slate-700">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
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
            <img className="w-full h-auto object-cover" alt="LEDs do AeroVolt acesos no escuro" src="https://horizons-cdn.hostinger.com/175eb958-ff92-4b2f-b873-ce3ec5c8222b/projeto-ativo-AdKXH.jpeg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemonstrationSection;


import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import ComponentsSection from '@/components/sections/ComponentsSection';
import CircuitSection from '@/components/sections/CircuitSection';
import DemonstrationSection from '@/components/sections/DemonstrationSection';
import TeamSection from '@/components/sections/TeamSection';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>AeroVolt - Gerador Eólico Didático | Projeto DIY</title>
        <meta name="description" content="Aprenda a construir um gerador eólico didático que acende LEDs com a força do vento. Guia completo passo a passo do projeto AeroVolt." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden"> {/* Adicionado overflow-hidden aqui também */}
        <Navigation />
        
        <main>
          <HeroSection />
          <IntroductionSection />
          <ComponentsSection />
          <CircuitSection />
          <DemonstrationSection />
          <TeamSection />
        </main>
        
        <footer className="bg-slate-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-slate-400">© 2025 Projeto AeroVolt. Todos os direitos reservados.</p>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;

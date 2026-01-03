import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].hero;

  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?random=1&grayscale" 
          alt="Painting Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight drop-shadow-lg">
          {t.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
          {t.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-blue-900 bg-yellow-500 hover:bg-yellow-400 transition-all shadow-lg transform hover:scale-105"
          >
            {t.cta}
            <ArrowRight className="ml-2 -mr-1" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
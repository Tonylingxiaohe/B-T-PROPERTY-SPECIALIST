import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { ShieldCheck, HardHat } from 'lucide-react';

const About = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].about;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?random=20" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl mb-6">{t.title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.desc}
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <ShieldCheck className="text-blue-600 mr-4" size={32} />
                <span className="font-semibold text-blue-900 text-lg">{t.cert1}</span>
              </div>
              <div className="flex items-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                <HardHat className="text-yellow-600 mr-4" size={32} />
                <span className="font-semibold text-gray-800 text-lg">{t.cert2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
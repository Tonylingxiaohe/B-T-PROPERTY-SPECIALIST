import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT, FEATURES_ICONS } from '../constants';

const Features = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].features;

  const QualityIcon = FEATURES_ICONS[0].icon;
  const SpeedIcon = FEATURES_ICONS[1].icon;
  const PriceIcon = FEATURES_ICONS[2].icon;

  return (
    <section className="py-16 bg-white -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-900">
               <QualityIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.qualityTitle}</h3>
            <p className="text-gray-600 leading-relaxed">{t.qualityDesc}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-600 hover:shadow-2xl transition-shadow">
             <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-900">
               <SpeedIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.speedTitle}</h3>
            <p className="text-gray-600 leading-relaxed">{t.speedDesc}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-yellow-500 hover:shadow-2xl transition-shadow">
             <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-900">
               <PriceIcon size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.priceTitle}</h3>
            <p className="text-gray-600 leading-relaxed">{t.priceDesc}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
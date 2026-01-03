import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT, SERVICES_ICONS } from '../constants';

const Services = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].services;

  const serviceList = [
    { key: 'interior', title: t.interior, desc: language === 'en' ? 'Immaculate finishes for your living spaces.' : '为您的生活空间提供完美的表面处理。' },
    { key: 'exterior', title: t.exterior, desc: language === 'en' ? 'Weather-proof protection with curb appeal.' : '防风雨保护，同时提升房屋外观吸引力。' },
    { key: 'plastering', title: t.plastering, desc: language === 'en' ? 'Smooth surfaces ready for painting.' : '光滑的表面处理，为油漆做好准备。' },
    { key: 'commercial', title: t.commercial, desc: language === 'en' ? 'Minimal disruption to your business.' : '尽量减少对您业务的干扰。' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">{t.title}</h2>
          <div className="mt-4 w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((item, idx) => {
             const Icon = SERVICES_ICONS[idx].icon;
             return (
              <div key={item.key} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all group cursor-pointer border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
             )
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { Camera } from 'lucide-react';

const Portfolio = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].portfolio;

  const projects = [
    { title: t.project1, imgBefore: "https://picsum.photos/600/400?random=10", imgAfter: "https://picsum.photos/600/400?random=11", tag: language === 'en' ? 'Interior' : '室内' },
    { title: t.project2, imgBefore: "https://picsum.photos/600/400?random=12", imgAfter: "https://picsum.photos/600/400?random=13", tag: language === 'en' ? 'Exterior' : '室外' },
    { title: t.project3, imgBefore: "https://picsum.photos/600/400?random=14", imgAfter: "https://picsum.photos/600/400?random=15", tag: language === 'en' ? 'Commercial' : '商业' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 sm:text-4xl">{t.title}</h2>
            <div className="mt-4 w-24 h-1 bg-yellow-500 rounded-full"></div>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right hidden md:block">
            {language === 'en' 
              ? "Swipe or hover over images to see the transformation." 
              : "滑动或悬停图片查看改造效果。"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg h-64 w-full">
                {/* Simulated Before/After: In a real app we'd use a slider library. Here we utilize CSS Group Hover to show 'Before' */}
                <img 
                  src={project.imgAfter} 
                  alt="After" 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                 <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow z-20 group-hover:opacity-0 transition-opacity">
                  AFTER
                </div>

                <img 
                  src={project.imgBefore} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded shadow z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  BEFORE
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-yellow-400 text-xs font-bold tracking-wider uppercase mb-1 block">{project.tag}</span>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                <Camera className="mr-2" size={20}/>
                {language === 'en' ? "View Full Gallery" : "查看完整相册"}
             </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
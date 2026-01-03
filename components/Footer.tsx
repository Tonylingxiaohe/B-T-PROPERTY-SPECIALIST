import React from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { Facebook, Instagram, MapPin, QrCode } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].footer;
  const navT = CONTENT[language].nav;

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
             <span className="font-bold text-2xl text-white tracking-tighter block mb-4">
              B&T <span className="text-yellow-500">PROPERTY SPECIALIST</span>
            </span>
            <p className="text-sm text-gray-400 mb-4">
              {language === 'en' 
               ? "Professional residential and commercial painting services across Auckland." 
               : "奥克兰地区专业的住宅和商业油漆服务。"}
            </p>
            <div className="flex space-x-4 items-center">
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
               <div className="group relative">
                  <button className="text-gray-400 hover:text-green-500 transition-colors flex items-center">
                    <QrCode size={20} />
                  </button>
                  {/* Tooltip for Wechat */}
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-white p-2 rounded shadow-lg">
                    <div className="text-xs text-gray-900 text-center mb-1">WeChat</div>
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
                      QR Code
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links</h4>
            <ul className="space-y-2 text-sm">
               <li><a href="#home" className="hover:text-yellow-500 transition-colors">{navT.home}</a></li>
               <li><a href="#services" className="hover:text-yellow-500 transition-colors">{navT.services}</a></li>
               <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">{navT.portfolio}</a></li>
               <li><a href="#about" className="hover:text-yellow-500 transition-colors">{navT.about}</a></li>
               <li><a href="#contact" className="hover:text-yellow-500 transition-colors">{navT.contact}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
             <ul className="space-y-2 text-sm">
                <li><span className="text-gray-500 mr-2">Phone:</span> +64 21 889 512</li>
                <li><span className="text-gray-500 mr-2">Email:</span> propertyspecialistnz@gmail.com</li>
                <li><span className="text-gray-500 mr-2">Add:</span> {t.address}</li>
             </ul>
          </div>

          {/* Areas */}
           <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Service Areas</h4>
             <p className="text-sm leading-relaxed flex items-start">
               <MapPin size={16} className="mt-1 mr-2 flex-shrink-0 text-yellow-500" />
               {t.areas}
             </p>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
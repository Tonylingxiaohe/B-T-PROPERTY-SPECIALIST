import React, { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = CONTENT[language].nav;

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.services, href: "#services" },
    { name: t.portfolio, href: "#portfolio" },
    { name: t.about, href: "#about" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-bold text-xl md:text-2xl text-blue-900 tracking-tighter">
              B&T <span className="text-yellow-500">PROPERTY SPECIALIST</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4 border-l pl-4 border-gray-200">
              <div className="flex items-center text-blue-900 font-semibold">
                <Phone size={18} className="mr-2" />
                <span className="hidden lg:inline">{t.callUs}</span>
              </div>
              
              <button 
                onClick={toggleLang}
                className="flex items-center text-gray-600 hover:text-blue-600 font-medium"
              >
                <Globe size={18} className="mr-1" />
                {language === 'en' ? 'CN' : 'EN'}
              </button>

              <a 
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-white px-5 py-2.5 rounded-md font-bold transition-all shadow-md transform hover:-translate-y-0.5"
              >
                {t.getQuote}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
                onClick={toggleLang}
                className="mr-4 flex items-center text-gray-600 font-medium"
              >
                <Globe size={20} className="mr-1" />
                {language === 'en' ? 'CN' : 'EN'}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center mt-4 bg-yellow-500 text-white px-3 py-3 rounded-md font-bold"
              onClick={() => setIsOpen(false)}
            >
              {t.getQuote}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
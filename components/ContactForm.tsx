import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { CheckCircle, Send } from 'lucide-react';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-blue-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-950 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.title}</h2>
          <p className="mt-4 text-blue-200">
            {language === 'en' 
              ? "Fill out the form below and we will get back to you within 24 hours." 
              : "填写下方表格，我们将在24小时内回复您。"}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 md:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
              <CheckCircle size={64} className="text-green-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.success}</h3>
              <p className="text-gray-500">We will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.name}</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900" placeholder={t.name} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.phone}</label>
                  <input required type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900" placeholder={t.phone} />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900" placeholder={t.email} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
                <textarea required id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900" placeholder={t.message}></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center">
                  {t.submit}
                  <Send size={20} className="ml-2" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
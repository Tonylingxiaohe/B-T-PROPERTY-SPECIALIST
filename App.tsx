import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 scroll-smooth">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Services />
          <Portfolio />
          <About />
          <ContactForm />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  );
}

export default App;
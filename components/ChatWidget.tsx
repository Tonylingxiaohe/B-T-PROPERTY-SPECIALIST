import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { CONTENT } from '../constants';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].chat;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
      { text: t.welcome, isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if(!inputValue.trim()) return;
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue("");
    // Simulate auto-reply
    setTimeout(() => {
        setMessages(prev => [...prev, { 
            text: language === 'en' 
                ? "Thanks for your message! An agent will join shortly. In the meantime, please leave your phone number." 
                : "谢谢您的留言！客服人员稍后会接入。同时，请留下您的电话号码。", 
            isUser: false 
        }]);
    }, 1000);
  };

  const handleFAQ = (question: string) => {
      setMessages(prev => [...prev, { text: question, isUser: true }]);
      setTimeout(() => {
        let answer = "";
        if(question === t.faq1) answer = language === 'en' ? "We serve North Shore, Central, East, and West Auckland." : "我们服务北岸、中区、东区和西区。";
        if(question === t.faq2) answer = language === 'en' ? "Yes! We offer 100% free, no-obligation quotes." : "是的！我们提供100%免费且无义务的报价。";
        
        setMessages(prev => [...prev, { text: answer, isUser: false }]);
      }, 800);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up flex flex-col h-[450px]">
          {/* Header */}
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-bold">B&T Property Bot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 rounded p-1">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
             {messages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                     <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.isUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                         {msg.text}
                     </div>
                 </div>
             ))}
          </div>

          {/* Quick Actions (FAQ) */}
          <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
             <button onClick={() => handleFAQ(t.faq1)} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100 whitespace-nowrap hover:bg-blue-100 transition-colors">
                 {t.faq1}
             </button>
             <button onClick={() => handleFAQ(t.faq2)} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full border border-blue-100 whitespace-nowrap hover:bg-blue-100 transition-colors">
                 {t.faq2}
             </button>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.placeholder}
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button onClick={handleSend} className="text-blue-600 hover:text-blue-700 p-2">
                  <Send size={20} />
              </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-gray-600 rotate-90 scale-90' : 'bg-blue-600 hover:bg-blue-700'} text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

    </div>
  );
};

export default ChatWidget;

import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/gemini';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Systems online. I am Hammad's digital entity. How can I assist your strategy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const response = await askAssistant(userMessage);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] h-[550px] flex flex-col glass-card rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(255,0,127,0.3)] overflow-hidden border border-[#FF007F]/20">
          <div className="p-6 bg-black text-white flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-[#FF007F] rounded-full animate-pulse shadow-[0_0_10px_#FF007F]"></div>
              <span className="font-black text-[10px] uppercase tracking-widest">Hammad Digital Agent</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-black/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#FF007F] text-white font-bold rounded-br-none' 
                    : 'bg-white/5 text-slate-200 rounded-bl-none border border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-full flex gap-1.5 border border-white/10">
                  <div className="w-1.5 h-1.5 bg-[#FF007F] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#FF007F] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#FF007F] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/5 bg-black">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inquire..."
                className="flex-1 text-sm bg-white/5 border border-white/10 text-white rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#FF007F] transition-all"
              />
              <button 
                onClick={handleSend}
                className="bg-[#FF007F] text-white p-3.5 rounded-2xl hover:bg-white hover:text-black transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#FF007F] hover:bg-white text-white hover:text-black p-5 rounded-full shadow-[0_15px_30px_rgba(255,0,127,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute right-full mr-6 bg-[#FF007F] text-white text-[9px] font-black px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap uppercase tracking-widest pointer-events-none">
            Digital Agent
          </span>
        </button>
      )}
    </div>
  );
};

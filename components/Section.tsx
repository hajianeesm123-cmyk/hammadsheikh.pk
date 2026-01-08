
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${dark ? 'bg-[#080808] text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-0.5 bg-gradient-to-r from-[#FF007F] to-transparent"></div>
               {title && <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#FF007F]">{title}</h2>}
            </div>
            {subtitle && <p className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

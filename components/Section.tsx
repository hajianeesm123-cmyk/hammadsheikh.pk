
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
      className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 ${dark ? 'bg-[#05050a] text-white' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-px bg-amber-500/50"></div>
               {title && <h2 className="text-sm md:text-md font-black uppercase tracking-[0.4em] text-amber-500">{title}</h2>}
            </div>
            {subtitle && <p className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

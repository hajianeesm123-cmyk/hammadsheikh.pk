
import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { AIAssistant } from './components/AIAssistant';
import { USER_DATA, PROJECTS, EXPERIENCES, SKILLS, TESTIMONIALS, GALLERY_IMAGES } from './constants';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF007F] to-[#00D4FF] rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10">
        <span className="text-xl font-black text-[#FF007F]">H</span>
      </div>
    </div>
    <div className="flex flex-col text-left">
      <span className="text-lg font-extrabold tracking-tight leading-none text-white uppercase">Hammad<span className="text-[#00D4FF]">.</span></span>
      <span className="text-[7px] font-bold text-slate-500 tracking-[0.4em] uppercase leading-none mt-1">Digital Architect</span>
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProject = PROJECTS.find(p => p.featured);
  const otherProjects = PROJECTS.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl shadow-[#FF007F]/5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            {['About', 'Projects', 'Gallery', 'Experience', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#FF007F] transition-all">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-6 py-2.5 bg-[#FF007F] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:shadow-[0_0_20px_#FF007F] transition-all">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#FF007F]/10 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00D4FF]/10 rounded-full blur-[140px]"></div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5C3D2E]/10 rounded-full blur-[160px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Centered Profile Picture Space */}
          <div className="relative mb-14 group">
             {/* Spinning Aesthetic Ring */}
            <div className="absolute inset-[-15px] border-2 border-dashed border-[#FF007F]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 p-1.5 bg-gradient-to-tr from-[#FF007F] via-[#00D4FF] to-[#5C3D2E] rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-all duration-700 animate-float">
              <div className="w-full h-full rounded-[3.2rem] overflow-hidden border-4 border-[#050505] bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=95" 
                  alt="Hammad Sheikh" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Status Pin */}
            <div className="absolute -bottom-4 right-4 bg-black border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl">
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse shadow-[0_0_8px_#00D4FF]"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-white">Always Innovating</span>
            </div>
          </div>

          <div className="px-5 py-1.5 rounded-full border border-[#FF007F]/20 bg-[#FF007F]/5 text-[#FF007F] text-[9px] font-black uppercase tracking-[0.5em] mb-8">
            Software Developer & Tech Entrepreneur
          </div>

          <h1 className="text-6xl md:text-[9.5rem] font-black mb-10 leading-[0.75] tracking-tighter text-white">
            HAMMAD <br/>
            <span className="text-gradient">SHEIKH</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
            Building the next generation of digital talent at <span className="text-white font-bold decoration-[#00D4FF] underline underline-offset-8 decoration-2">Internee.pk</span>. 
            Blending high-performance code with visionary strategy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md mx-auto">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView()} className="w-full sm:flex-1 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-[#FF007F] hover:text-white transition-all active:scale-95">
              Work
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView()} className="w-full sm:flex-1 py-5 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-[#00D4FF] transition-all">
              Connect
            </button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <Section id="projects" title="Featured Ventures" subtitle="Platforms that scale impact.">
        {featuredProject && (
          <div className="mb-20 group">
            <div className="relative rounded-[4rem] overflow-hidden glass-card p-10 md:p-20 border border-white/5 hover:border-[#FF007F]/20 transition-all duration-1000">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-0.5 bg-[#FF007F]"></span>
                    <span className="text-[#FF007F] text-[10px] font-black uppercase tracking-widest">Global Reach</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter leading-none">{featuredProject.title}</h3>
                  <p className="text-slate-400 text-xl font-light mb-10 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {featuredProject.tools.map(tool => (
                      <span key={tool} className="px-5 py-2 bg-white/5 text-slate-300 text-[9px] font-black uppercase tracking-widest rounded-xl border border-white/5">{tool}</span>
                    ))}
                  </div>
                  <a href={featuredProject.link} className="inline-flex items-center gap-4 text-[#00D4FF] font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                    Explore Platform <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </a>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(255,0,127,0.1)]">
                    <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-10">
          {otherProjects.map(project => (
            <div key={project.id} className="group glass-card rounded-[3rem] p-10 border border-white/5 hover:border-[#00D4FF]/20 transition-all duration-700">
              <div className="mb-10 overflow-hidden rounded-[2rem] aspect-[16/10] bg-neutral-900 border border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
              </div>
              <h4 className="text-3xl font-black mb-4 text-white">{project.title}</h4>
              <p className="text-slate-400 text-lg font-light mb-8 flex-1 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tools.map(t => (
                  <span key={t} className="text-[8px] px-3 py-1.5 bg-white/5 text-slate-500 rounded-lg font-black uppercase tracking-widest">{t}</span>
                ))}
              </div>
              <a href={project.link} className="text-[#FF007F] text-[10px] font-black uppercase tracking-[0.3em]">View Case Study</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Journey */}
      <Section id="gallery" title="Digital Footprint" subtitle="Moments from the journey.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[3.5rem] aspect-[3/4] bg-neutral-950 border border-white/5">
              <img src={img.url} alt={img.caption} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-12">
                <div>
                  <div className="text-[#FF007F] text-[9px] font-black uppercase tracking-[0.5em] mb-4">Chapter {idx + 1}</div>
                  <div className="text-white font-black text-2xl tracking-tight leading-none">{img.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="experience" title="Evolution" subtitle="The trajectory of growth." dark className="bg-[#080808]">
        <div className="max-w-4xl mx-auto space-y-32 py-10">
          {EXPERIENCES.map(exp => (
            <div key={exp.id} className="relative pl-16 md:pl-24 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-[#FF007F] to-transparent">
              <div className="absolute left-[-10px] top-4 w-5 h-5 rounded-full bg-[#FF007F] shadow-[0_0_15px_#FF007F]"></div>
              <div className="mb-6">
                <span className="px-5 py-2 bg-[#FF007F]/10 text-[#FF007F] text-[9px] font-black tracking-[0.4em] uppercase rounded-full border border-[#FF007F]/20">{exp.period}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{exp.title}</h3>
              <p className="text-[#00D4FF] font-bold text-xl mb-10 tracking-widest uppercase">{exp.company}</p>
              <ul className="space-y-8">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-slate-400 text-lg font-light flex gap-6 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5C3D2E] mt-3.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Reach Out" subtitle="Let's build the future together.">
        <div className="max-w-6xl mx-auto glass-card rounded-[4rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF007F]/5 rounded-full blur-[150px]"></div>
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h3 className="text-5xl md:text-7xl font-black mb-10 text-white leading-[0.85] tracking-tighter">Initiate <br/><span className="text-[#FF007F]">Discovery.</span></h3>
              <p className="text-slate-400 mb-14 text-xl font-light leading-relaxed">
                Available for advisory roles, tech speaking, and high-impact partnerships.
              </p>
              <div className="space-y-8 mb-16">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#FF007F] group-hover:bg-[#FF007F] group-hover:text-white transition-all">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Direct Mail</div>
                    <div className="text-white text-xl font-bold">{USER_DATA.email}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {Object.entries(USER_DATA.socials).map(([key, url]) => (
                  <a key={key} href={url} className="px-6 py-3 bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#00D4FF] transition-all border border-white/5">
                    {key}
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" placeholder="Identity" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:ring-2 focus:ring-[#FF007F] transition-all outline-none text-white font-medium" />
                  <input type="email" placeholder="Mail Hub" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:ring-2 focus:ring-[#FF007F] transition-all outline-none text-white font-medium" />
                </div>
                <textarea rows={5} placeholder="Project Inquiry Detail" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-6 text-sm focus:ring-2 focus:ring-[#FF007F] transition-all outline-none text-white font-medium resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-[#FF007F] text-white font-black uppercase tracking-[0.4em] rounded-2xl hover:shadow-[0_20px_40px_-10px_rgba(255,0,127,0.4)] transition-all text-[11px]">
                Establish Link
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-24 border-t border-white/5 mt-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Logo className="mb-12 scale-125" />
          <p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.6em] mb-6">
            © {new Date().getFullYear()} Hammad Sheikh bin Nadeem • Built with Passion & Precision
          </p>
          <div className="flex gap-10 opacity-10 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {['HS', 'IP', 'SB', 'DN'].map(initials => (
               <div key={initials} className="w-12 h-12 border border-slate-700 rounded-xl flex items-center justify-center text-[10px] font-black text-white">{initials}</div>
             ))}
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { AIAssistant } from './components/AIAssistant';
import { USER_DATA, PROJECTS, EXPERIENCES, SKILLS, TESTIMONIALS, GALLERY_IMAGES } from './constants';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-[#ff007f] via-[#00d4ff] to-[#5c3d2e] rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative w-11 h-11 bg-black rounded-xl flex items-center justify-center border border-white/10">
        <span className="text-2xl font-black text-[#ff007f] tracking-tighter">H</span>
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-xl font-extrabold tracking-tight leading-none text-white">HAMMAD<span className="text-[#00d4ff]">.</span></span>
      <span className="text-[9px] font-bold text-slate-500 tracking-[0.4em] uppercase leading-none mt-1">Sheikh bin Nadeem</span>
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
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl py-4 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Logo />
          <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
            {['About', 'Projects', 'Gallery', 'Skills', 'Experience', 'Impact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#ff007f] transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#00d4ff] group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="hidden sm:inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[#ff007f] to-[#00d4ff] text-white text-xs font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#ff007f]/20">
            Hire Hammad
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-[#ff007f]/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[#00d4ff]/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-[#5c3d2e]/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Refined Picture Space */}
          <div className="relative inline-block mb-16 group">
            <div className="absolute inset-[-20px] bg-gradient-to-tr from-[#ff007f] via-[#00d4ff] to-[#5c3d2e] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
            <div className="relative w-44 h-44 md:w-60 md:h-60 p-1.5 bg-gradient-to-tr from-[#ff007f] to-[#00d4ff] rounded-[3.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-700 glow-pink animate-float">
              <div className="w-full h-full rounded-[3.2rem] overflow-hidden border-4 border-black bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=95" 
                  alt="Hammad Sheikh" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            {/* Overlay Status */}
            <div className="absolute -bottom-4 -right-4 bg-black border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-2xl">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Available for Scale</span>
            </div>
          </div>

          <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 text-[#00d4ff] text-[10px] font-black uppercase tracking-[0.4em] mb-10">
            Software Architect & Founder
          </div>
          <h1 className="text-6xl md:text-[10rem] font-black mb-10 leading-[0.8] tracking-tight">
            Hammad <br/>
            <span className="text-gradient">Sheikh</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Architecting the future of internships at <span className="text-white font-bold border-b-2 border-[#ff007f]">Internee.pk</span>. 
            Blending high-performance code with visionary entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="#projects" className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-2xl font-black shadow-2xl hover:bg-[#ff007f] hover:text-white transition-all active:scale-95 text-xs uppercase tracking-[0.2em]">
              Explore Impact
            </a>
            <a href="#contact" className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/10 text-white rounded-2xl font-black hover:border-[#00d4ff] transition-all text-xs uppercase tracking-[0.2em]">
              Get Connected
            </a>
          </div>
        </div>
      </section>

      {/* Partners / Ecosystem */}
      <div className="py-20 border-y border-white/5 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-600 mb-16">Collaboration Ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28 opacity-30 hover:opacity-100 transition-all duration-1000">
             {['MICROSOFT', 'GOOGLE', 'AMAZON', 'INTERNEE.PK', 'FOUNDER-INSTITUTE'].map(name => (
               <div key={name} className="text-xs font-black tracking-[0.5em] text-white hover:text-[#ff007f] transition-colors cursor-default">{name}</div>
             ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" title="The Founder" subtitle="Building tools for the next billion.">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#5c3d2e] to-[#ff007f] rounded-[4rem] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" 
                alt="Leadership" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
          <div className="space-y-10">
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tight">Tech for <br/><span className="text-[#ff007f]">Human Progress.</span></h3>
            <p className="text-slate-400 text-xl font-light leading-relaxed">
              {USER_DATA.bio}
            </p>
            <div className="grid grid-cols-2 gap-12 py-12 border-y border-white/10">
              <div>
                <div className="text-[#00d4ff] font-black text-5xl mb-3 tracking-tighter">50K+</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Careers Launched</div>
              </div>
              <div>
                <div className="text-[#5c3d2e] font-black text-5xl mb-3 tracking-tighter">100%</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Open Platform</div>
              </div>
            </div>
            <div className="flex gap-10">
              <a href="#" className="flex items-center gap-4 text-[#ff007f] hover:text-white transition-all text-xs font-black uppercase tracking-[0.3em] group">
                Download Profile
                <div className="w-12 h-0.5 bg-[#ff007f] group-hover:w-20 transition-all"></div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Ventures */}
      <Section id="projects" title="Core Ventures" subtitle="Platforms built with precision.">
        {featuredProject && (
          <div className="mb-24 group">
            <div className="relative rounded-[4rem] overflow-hidden glass-card p-12 md:p-24 border border-white/10 hover:border-[#ff007f]/30 transition-all duration-1000">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-6 mb-10">
                    <span className="w-16 h-0.5 bg-[#ff007f]"></span>
                    <span className="text-[#ff007f] text-[10px] font-black uppercase tracking-[0.4em]">Flagship Ecosystem</span>
                  </div>
                  <h3 className="text-6xl md:text-8xl font-black mb-10 text-white tracking-tighter leading-none">{featuredProject.title}</h3>
                  <p className="text-slate-400 text-2xl font-light mb-12 leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-14">
                    {featuredProject.tools.map(tool => (
                      <span key={tool} className="px-6 py-3 bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-2xl border border-white/5">{tool}</span>
                    ))}
                  </div>
                  <a href={featuredProject.link} target="_blank" className="inline-flex items-center gap-5 text-[#00d4ff] font-black group-hover:gap-8 transition-all text-xs uppercase tracking-[0.3em] hover:text-[#ff007f]">
                    Launch Experience <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative rounded-[3rem] overflow-hidden glow-blue">
                    <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {otherProjects.map(project => (
            <div key={project.id} className="group glass-card rounded-[3.5rem] p-12 border border-white/5 hover:border-[#5c3d2e]/30 transition-all duration-700 flex flex-col">
              <div className="mb-12 overflow-hidden rounded-[2.5rem] aspect-[16/10] bg-neutral-900 border border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
              </div>
              <h4 className="text-4xl font-black mb-6 text-white tracking-tight">{project.title}</h4>
              <p className="text-slate-400 text-xl font-light mb-10 flex-1 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-12">
                {project.tools.map(t => (
                  <span key={t} className="text-[9px] px-4 py-2 bg-white/5 text-slate-500 rounded-xl font-black uppercase tracking-widest">{t}</span>
                ))}
              </div>
              <a href={project.link} className="text-[#ff007f] text-xs font-black uppercase tracking-[0.4em] hover:text-white transition-all">Deep Dive</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Visual Journey */}
      <Section id="gallery" title="Gallery" subtitle="Moments that define our path.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_IMAGES.map((img, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[3.5rem] aspect-[3/4] bg-neutral-950 border border-white/5">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-12">
                <div>
                  <div className="text-[#ff007f] text-[10px] font-black uppercase tracking-[0.5em] mb-4">Event {idx + 1}</div>
                  <div className="text-white font-black text-3xl tracking-tight leading-none">{img.caption}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section id="experience" title="Timeline" subtitle="Evolution through creation." dark className="bg-[#080808]">
        <div className="max-w-4xl mx-auto space-y-32 pt-16">
          {EXPERIENCES.map(exp => (
            <div key={exp.id} className="relative pl-20 md:pl-32 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-1 before:bg-gradient-to-b from-[#ff007f] to-transparent">
              <div className="absolute left-[-10px] top-4 w-6 h-6 rounded-full bg-[#ff007f] glow-pink"></div>
              <div className="mb-6">
                <span className="px-6 py-2 bg-[#ff007f]/10 text-[#ff007f] text-[10px] font-black tracking-[0.4em] uppercase rounded-full border border-[#ff007f]/20">{exp.period}</span>
              </div>
              <h3 className="text-5xl font-black text-white mb-3 tracking-tight">{exp.title}</h3>
              <p className="text-[#00d4ff] font-bold text-2xl mb-12 tracking-wide uppercase">{exp.company}</p>
              <ul className="space-y-8">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="text-slate-400 text-xl font-light flex gap-8 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-[#5c3d2e] mt-4 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Arsenal" subtitle="Mastery in the digital craft.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="p-12 glass-card rounded-[3rem] hover:bg-[#ff007f]/5 hover:border-[#ff007f]/30 transition-all duration-500 group">
              <div className="text-[10px] text-[#00d4ff] font-black uppercase tracking-[0.5em] mb-6 group-hover:text-[#ff007f] transition-colors">{skill.category}</div>
              <div className="text-3xl font-black text-white tracking-tight">{skill.name}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact */}
      <Section id="impact" title="Voices" subtitle="Testimonials of growth." dark className="bg-black">
        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-14 glass-card rounded-[4rem] border-white/5 group hover:bg-white/[0.02] transition-colors duration-700">
              <div className="mb-12 text-[#ff007f]">
                <svg className="w-14 h-14 opacity-20" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.03 0 2.01-.2 2.91-.56C11.64 25.17 9.91 26 8 26c-.55 0-1 .45-1 1s.45 1 1 1c3.31 0 6-2.69 6-6V14c0-3.31-2.69-6-6-6zm14 0c-4.41 0-8 3.59-8 8s3.59 8 8 8c1.03 0 2.01-.2 2.91-.56-1.27 1.73-3 2.56-4.91 2.56-.55 0-1 .45-1 1s.45 1 1 1c3.31 0 6-2.69 6-6V14c0-3.31-2.69-6-6-6z"/></svg>
              </div>
              <p className="text-2xl italic text-slate-300 mb-14 leading-relaxed font-light group-hover:text-white transition-colors">"{t.content}"</p>
              <div className="flex items-center gap-6">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-3xl border-2 border-white/10 grayscale group-hover:grayscale-0 transition-all" />
                <div>
                  <div className="font-black text-xl text-white tracking-tight">{t.name}</div>
                  <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Reach Out" subtitle="Let's build impact together.">
        <div className="max-w-6xl mx-auto glass-card rounded-[4.5rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ff007f]/10 rounded-full blur-[150px]"></div>
          
          <div className="grid lg:grid-cols-2 gap-24 relative z-10">
            <div>
              <h3 className="text-6xl md:text-8xl font-black mb-12 text-white leading-[0.8] tracking-tight">Connect with <br/><span className="text-[#ff007f]">the Vision.</span></h3>
              <p className="text-slate-400 mb-16 text-2xl font-light leading-relaxed">
                Available for strategic partnerships, high-scale development, and board memberships.
              </p>
              <div className="space-y-10 mb-20">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-[#ff007f] group-hover:bg-[#ff007f] group-hover:text-white transition-all shadow-xl">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em] mb-2">Direct Channel</div>
                    <div className="text-white text-2xl font-black tracking-tight">{USER_DATA.email}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-6">
                {Object.entries(USER_DATA.socials).map(([key, url]) => (
                  <a key={key} href={url} className="px-8 py-4 bg-white/5 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-[#00d4ff] hover:bg-white/10 transition-all border border-white/5 shadow-sm">
                    {key}
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-10">
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-4">Full Identity</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-base focus:ring-4 focus:ring-[#ff007f]/20 transition-all outline-none text-white font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-4">Digital Mail</label>
                    <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-3xl px-10 py-6 text-base focus:ring-4 focus:ring-[#ff007f]/20 transition-all outline-none text-white font-medium" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-4">The Inquiry</label>
                  <textarea rows={6} placeholder="Describe the collaboration..." className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-10 py-8 text-base focus:ring-4 focus:ring-[#ff007f]/20 transition-all outline-none text-white font-medium resize-none"></textarea>
                </div>
              </div>
              <button className="w-full py-7 bg-gradient-to-r from-[#ff007f] to-[#00d4ff] text-white font-black uppercase tracking-[0.4em] rounded-3xl hover:scale-[1.02] transition-all shadow-2xl shadow-[#ff007f]/30 text-sm">
                Initiate Contact
              </button>
            </form>
          </div>
        </div>
      </Section>

      <footer className="py-32 border-t border-white/5 mt-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <Logo className="mb-16 scale-125" />
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.6em] mb-10">
            © {new Date().getFullYear()} Hammad Sheikh bin Nadeem • Powered by React & Deep AI
          </p>
          <p className="text-slate-500 text-lg font-light mb-16 max-w-2xl text-center leading-relaxed">Pioneering digital equality through scalable architecture and community-focused ventures.</p>
          <div className="flex gap-16 opacity-10 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {['IP', 'SB', 'HS', 'DN'].map(initials => (
               <div key={initials} className="w-16 h-16 border border-slate-700 rounded-2xl flex items-center justify-center text-xs font-black tracking-widest text-white">{initials}</div>
             ))}
          </div>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;

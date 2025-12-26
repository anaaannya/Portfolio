import React, { useState, useEffect } from 'react';
import { PROJECTS, SKILLS, CERTIFICATIONS, EXPERIENCES, EXTERNAL_LINKS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { CertificationCard } from './components/CertificationCard';
import { CyberSecurityPath } from './components/CyberSecurityPath';
import { InteractiveTerminal } from './components/InteractiveTerminal';

type View = 'Home' | 'Work' | 'Security' | 'Experience' | 'About' | 'Blogs' | 'Contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<'All' | 'Frontend' | 'UI/UX' | 'WordPress' | 'Graphic'>('All');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const filteredProjects = activeProjectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeProjectFilter);

  const menuItems = [
    { label: 'Home', view: 'Home' as View },
    { label: 'Experience', view: 'Experience' as View },
    { label: 'Work', view: 'Work' as View },
    { label: 'Security', view: 'Security' as View },
    { label: 'Blogs', view: 'Blogs' as View },
    { label: 'About', view: 'About' as View },
    { label: 'Contact', view: 'Contact' as View },
  ];

  const renderView = () => {
    const containerClass = "container mx-auto px-6 pt-32 pb-24 animate-in fade-in duration-700 mono text-green-500";

    switch (currentView) {
      case 'Experience':
        return (
          <div className={containerClass}>
            <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">[!] SYSTEM_LOG_EXPERIENCE</h1>
            <div className="grid grid-cols-1 gap-12 max-w-4xl">
              <section>
                <h2 className="text-xl font-bold text-green-900 mb-8 border-b border-green-900 pb-2 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Active_Assignment
                </h2>
                {EXPERIENCES.filter(e => e.isCurrent).map(exp => (
                  <div key={exp.id} className="p-8 border-2 border-green-500 bg-green-500/5 rounded-2xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                      <h3 className="text-2xl font-black text-green-100 uppercase">{exp.role}</h3>
                      <span className="text-green-900 font-bold bg-green-900/30 px-3 py-1 rounded-lg text-xs self-start">{exp.period}</span>
                    </div>
                    <div className="text-lg font-bold text-green-500 mb-4">{exp.company}</div>
                    <p className="text-green-800 leading-relaxed text-sm md:text-base font-bold">{exp.description}</p>
                  </div>
                ))}
              </section>
              <section>
                <h2 className="text-xl font-bold text-green-900 mb-8 border-b border-green-900 pb-2 uppercase tracking-widest">Archived_Records</h2>
                <div className="space-y-6">
                  {EXPERIENCES.filter(e => !e.isCurrent).map(exp => (
                    <div key={exp.id} className="p-6 border border-green-900/50 bg-black rounded-xl hover:border-green-500 transition-all">
                      <div className="flex flex-col md:flex-row justify-between mb-2 gap-2">
                        <h3 className="text-xl font-bold text-green-300 uppercase">{exp.role}</h3>
                        <span className="text-green-900 text-xs font-bold">{exp.period}</span>
                      </div>
                      <div className="text-green-700 font-bold text-sm mb-3">{exp.company}</div>
                      <p className="text-green-900 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        );

      case 'Work':
        return (
          <div className={containerClass}>
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">&gt; LIST_ASSETS</h1>
              <div className="flex flex-wrap gap-2 mt-10">
                {['All', 'Frontend', 'UI/UX', 'WordPress', 'Graphic'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveProjectFilter(tab as any)}
                    className={`px-5 py-2 rounded-lg text-[10px] font-bold uppercase transition-all duration-300 border ${
                      activeProjectFilter === tab 
                        ? 'bg-green-500 text-black border-green-500' 
                        : 'bg-black border-green-900 text-green-700 hover:border-green-500'
                    }`}
                  >
                    cat ./{tab.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-16 items-start auto-rows-fr">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );

      case 'Security':
        return (
          <div className={containerClass}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-10">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">[#] SHELL_ACCESS</h1>
                <p className="text-green-900 text-lg font-bold leading-relaxed border-l-4 border-green-900 pl-6">
                  Leveraging 4+ years of Frontend architecture to exploit and secure modern web ecosystems. Bridge between UI/UX aesthetics and binary hardening.
                </p>
                <InteractiveTerminal />
              </div>
              <div className="lg:sticky lg:top-32 space-y-12">
                <CyberSecurityPath />
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-green-950 mb-6">Validation_Vault</h3>
                  <div className="grid gap-3">
                    {CERTIFICATIONS.map(cert => (
                      <CertificationCard key={cert.id} cert={cert} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Blogs':
        return (
          <div className={containerClass}>
            <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter">&gt; KNOWLEDGE_NODES</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <a href={EXTERNAL_LINKS.securityNotes} target="_blank" rel="noopener noreferrer" className="group p-8 border-2 border-green-900 bg-black hover:border-green-500 transition-all rounded-3xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-green-900 uppercase tracking-[0.4em] mb-4">Node_01 // Cyber_Security</div>
                    <h2 className="text-3xl font-black text-green-500 uppercase mb-4 tracking-tighter">Cyber Security Notes</h2>
                    <p className="text-green-800 font-bold text-sm leading-relaxed max-w-md">
                       A comprehensive collection of my penetration testing logs, TryHackMe room write-ups, and security research documents.
                    </p>
                  </div>
                  <div className="mt-12 flex items-center gap-2 text-green-500 font-black uppercase text-xs">
                     <span>Access Database</span>
                     <span className="group-hover:translate-x-2 transition-transform">&gt;&gt;&gt;</span>
                  </div>
               </a>

               <a href={EXTERNAL_LINKS.reviews} target="_blank" rel="noopener noreferrer" className="group p-8 border-2 border-green-900 bg-black hover:border-green-500 transition-all rounded-3xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                     <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-green-900 uppercase tracking-[0.4em] mb-4">Node_02 // Hobbies</div>
                    <h2 className="text-3xl font-black text-green-500 uppercase mb-4 tracking-tighter">Hobby Review Hub</h2>
                    <p className="text-green-800 font-bold text-sm leading-relaxed max-w-md">
                       Deep dives into cinema and literature. My personal reviews and thoughts on the books and movies that shape my perspective.
                    </p>
                  </div>
                  <div className="mt-12 flex items-center gap-2 text-green-500 font-black uppercase text-xs">
                     <span>Read Reviews</span>
                     <span className="group-hover:translate-x-2 transition-transform">&gt;&gt;&gt;</span>
                  </div>
               </a>
            </div>
          </div>
        );

      case 'About':
        return (
          <div className={containerClass}>
            <div className="max-w-5xl mx-auto border-2 border-green-900 p-8 md:p-12 bg-black/50 scanline relative rounded-2xl">
              <div className="mb-10 font-mono text-green-950 flex justify-between text-[10px] uppercase font-black">
                <span>[ SUBJECT_REPORT: ANANYA_SARKAR ]</span>
                <span className="animate-pulse">SYSTEM_STABLE</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="border-2 border-green-900 p-2 bg-black overflow-hidden">
                  <img src="https://picsum.photos/seed/ananya/600/600" alt="Ananya" className="grayscale contrast-150 opacity-40 w-full" />
                </div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-5xl font-black text-green-500 uppercase tracking-tighter leading-none">Ananya Sarkar</h2>
                    <p className="text-green-800 mt-3 font-bold tracking-widest text-sm uppercase">Hybrid Frontend-Security Specialist</p>
                  </div>
                  <div className="p-6 border border-green-950 bg-green-500/5 text-xs md:text-sm font-bold text-green-700">
                    Mid-level executive with expertise in HTML, CSS, Bootstrap 4, Figma UI/UX, WordPress No-Code, Responsive Web Design, and Canva.
                    <br/><br/>
                    Transitioning to Cyber Security. Mastering the offensive mindset to build superior defensive infrastructures.
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {SKILLS.map(skill => (
                      <div key={skill.name} className="p-3 border border-green-950 bg-black">
                        <span className="text-[9px] text-green-950 font-black uppercase mb-1 block">{skill.name}</span>
                        <div className="h-1 bg-green-950 w-full"><div className="h-full bg-green-500" style={{ width: `${skill.level}%` }}></div></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'Contact':
        return (
          <div className={containerClass}>
             <div className="max-w-3xl mx-auto p-12 bg-black border-2 border-green-500 rounded-2xl relative shadow-[0_0_50px_rgba(34,197,94,0.1)]">
                <h1 className="text-4xl font-black mb-10 uppercase text-green-500 tracking-tighter">&gt;&gt; PING_NODE</h1>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-green-900 uppercase tracking-widest">Source_Name</label>
                       <input type="text" placeholder="UID_HANDLE" className="w-full bg-black border-2 border-green-950 rounded-xl px-4 py-3 focus:border-green-500 outline-none text-green-400 font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-green-900 uppercase tracking-widest">Return_Address</label>
                       <input type="email" placeholder="ADDR_V4" className="w-full bg-black border-2 border-green-950 rounded-xl px-4 py-3 focus:border-green-500 outline-none text-green-400 font-bold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-green-900 uppercase tracking-widest">Encrypted_Payload</label>
                    <textarea rows={5} placeholder="TRANSMIT_MSG..." className="w-full bg-black border-2 border-green-950 rounded-xl px-4 py-3 focus:border-green-500 outline-none text-green-400 font-bold"></textarea>
                  </div>
                  <button className="w-full py-5 font-black rounded-xl bg-green-500 text-black hover:bg-green-400 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.3)]">Send_Packet</button>
                </form>
             </div>
          </div>
        );

      default:
        return (
<div className="container mx-auto px-6">
            <div className="relative inline-block mb-12 text-left md:text-center w-full">
<div
  style={{
    position: "relative",
    display: "inline-block",
    marginBottom: "3rem",
    textAlign: "left",
    width: "100%",
  }}
>
  {/* BACKGROUND GLOW */}
  <div
    style={{
      position: "absolute",
      top: "-40px",
      left: "-40px",
      right: "-40px",
      bottom: "-40px",
      backgroundColor: "rgba(34,197,94,0.1)", // green-500/10
      filter: "blur(100px)",
      opacity: 0.3,
      borderRadius: "9999px",
      animation: "pulseGlow 3s ease-in-out infinite",
      pointerEvents: "none",
    }}
  ></div>

  {/* MAIN TITLE BOX */}
  <h1
    style={{
      position: "relative",
      fontSize: "7rem",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      fontWeight: 900,
      lineHeight: 0.8,
      textTransform: "uppercase",
      padding: "3rem",
      background: "black",
      border: "4px solid rgb(20,83,45)", // green-900
      borderRadius: "3rem",
      boxShadow: "0 0 80px rgba(34,197,94,0.15)",
      overflow: "hidden",
    }}
  >
    {/* SCANLINE EFFECT */}
    <div
      style={{
        content: '""',
        position: "absolute",
        inset: 0,
        background:
          "repeating-linear-gradient(to bottom, rgba(0,255,0,0.05) 0, rgba(0,255,0,0.05) 1px, transparent 2px, transparent 3px)",
        pointerEvents: "none",
      }}
    />

    {/* FIRST NAME */}
    <span
      style={{
        color: "rgb(240,255,240)", // green-100
        textShadow: "0 0 25px rgba(34,197,94,0.8)",
      }}
    >
      Ananya
    </span>
    <br />

    {/* LAST NAME */}
    <span
      style={{
        color: "rgba(34,197,94,0.6)", // green-600/60
      }}
    >
      Sarkar.
    </span>
  </h1>

  {/* KEYFRAMES injected */}
  <style>
    {`
      @keyframes pulseGlow {
        0% { opacity: 0.2; }
        50% { opacity: 0.35; }
        100% { opacity: 0.2; }
      }
    `}
  </style>
</div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mt-20">
                 <div className="space-y-10">
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-[0.4em] text-green-950 mb-4">// MISSION_BRIEF</div>
                       <p className="text-xl md:text-3xl font-black uppercase text-green-400 leading-tight">
                          Mid-Level Executive bridging <span className="text-white">Frontend Architecture</span> with <span className="text-green-600">Offensive Security</span>.
                       </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 border border-green-900 bg-green-500/5 rounded-xl">
                          <div className="text-[9px] font-black text-green-950 mb-2 uppercase tracking-tighter">Stack_Overview</div>
                          <div className="text-xs font-bold text-green-700 leading-relaxed uppercase">
                             HTML5, CSS3, Bootstrap 4, Figma, WordPress, Responsive Design, Canva.
                          </div>
                       </div>
                       <div className="p-4 border border-green-900 bg-green-500/5 rounded-xl">
                          <div className="text-[9px] font-black text-green-950 mb-2 uppercase tracking-tighter">Security_Ops</div>
                          <div className="text-xs font-bold text-green-700 leading-relaxed uppercase">
                             Active on TryHackMe. Junior Pentester path. 70+ rooms cleared.
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                       <button onClick={() => setCurrentView('Work')} className="px-10 py-5 rounded-xl font-black bg-green-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 transition-transform uppercase tracking-widest text-xs">Explore_Work</button>
                       <button onClick={() => setCurrentView('Security')} className="px-10 py-5 rounded-xl font-black border-2 border-green-500 text-green-500 bg-black hover:bg-green-500/10 transition-all uppercase tracking-widest text-xs">Access_Lab</button>
                    </div>
                 </div>

                 <div className="space-y-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-green-950 mb-4">// KNOWLEDGE_NODES</div>
                    <div className="grid grid-cols-1 gap-4">
                       <button onClick={() => setCurrentView('Blogs')} className="group p-6 border border-green-950 bg-black hover:border-green-500 transition-all rounded-2xl flex justify-between items-center text-left">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                             </div>
                             <div>
                                <div className="text-xs font-black text-green-500 uppercase mb-1">Hobby Review Hub</div>
                                <div className="text-[10px] font-bold text-green-900 uppercase">Books & Movies Reviewing Page</div>
                             </div>
                          </div>
                          <div className="text-green-500 group-hover:translate-x-1 transition-transform font-black">&gt;&gt;</div>
                       </button>
                       <button onClick={() => setCurrentView('Blogs')} className="group p-6 border border-green-950 bg-black hover:border-green-500 transition-all rounded-2xl flex justify-between items-center text-left">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-900">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                             </div>
                             <div>
                                <div className="text-xs font-black text-green-500 uppercase mb-1">Cyber Notes</div>
                                <div className="text-[10px] font-bold text-green-900 uppercase">Pentest Logs & Security Research</div>
                             </div>
                          </div>
                          <div className="text-green-500 group-hover:translate-x-1 transition-transform font-black">&gt;&gt;</div>
                       </button>
                    </div>
                    <div className="p-6 border border-green-900 rounded-2xl bg-green-950/10">
                       <div className="text-[10px] font-black text-green-950 mb-4 uppercase">Latest_Activity_Log</div>
                       <div className="space-y-3 text-[10px] font-mono text-green-800">
                          <div className="flex justify-between border-b border-green-900/20 pb-1"><span>[!] UI_ARCHITECTURE_SYNC</span><span className="text-green-600">COMPLETE</span></div>
                          <div className="flex justify-between border-b border-green-900/20 pb-1"><span>[!] FIGMA_ASSETS_HARDENED</span><span className="text-green-600">VER_4.5</span></div>
                          <div className="flex justify-between"><span>[!] THM_PENTEST_SESSION</span><span className="text-green-400">72_ROOMS</span></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-1000 overflow-x-hidden bg-black text-green-500 selection:bg-green-500 selection:text-black mono">
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 border-green-900 backdrop-blur-xl border-b py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={() => setCurrentView('Home')} className="text-2xl font-black tracking-tighter flex items-center gap-3 group uppercase">
            <span className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)]">A</span>
            <span className="hidden sm:inline">Ananya_S.</span>
            <span className="sm:hidden">A.S.</span>
          </button>
          
          <nav className="hidden lg:flex items-center gap-1 bg-green-950/20 border border-green-900 px-3 py-1.5 rounded-xl">
            {menuItems.filter(item => item.view !== 'Contact').map((item) => (
              <button key={item.label} onClick={() => setCurrentView(item.view)} className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${currentView === item.view ? 'bg-green-500 text-black' : 'text-green-900 hover:text-green-900'}`}>
                [{item.label}]
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentView('Contact')} 
              className={`px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest bg-green-500 text-black shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-105 transition-transform ${currentView === 'Contact' ? 'ring-2 ring-white' : ''}`}
            >
              Contact_Me
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-2 rounded-lg border-2 border-green-900 bg-black text-green-500 hover:border-green-500 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] backdrop-blur-3xl bg-black/98 animate-in fade-in duration-300">
           <div className="flex flex-col items-center justify-center h-full gap-8">
              <div className="text-[10px] font-black text-green-900 uppercase tracking-[0.5em] mb-4">Navigation_Menu</div>
              {menuItems.map(item => (
                <button 
                  key={item.label} 
                  onClick={() => { setCurrentView(item.view); setMobileMenuOpen(false); }} 
                  className={`text-4xl font-black tracking-tighter uppercase transition-colors flex items-center gap-4 ${currentView === item.view ? 'text-green-500' : 'text-green-950 hover:text-green-800'}`}
                >
                  <span className="text-xl">{currentView === item.view ? '>' : '#'}</span>
                  {item.label}
                </button>
              ))}
              <div className="w-16 h-1 bg-green-900 rounded-full mt-4"></div>
              <button onClick={() => setMobileMenuOpen(false)} className="text-green-500 p-4 border-2 border-green-900 rounded-full hover:border-green-500 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
           </div>
        </div>
      )}

      <main className="relative z-10 min-h-[calc(100vh-200px)]">{renderView()}</main>

      <footer className="py-16 border-t border-green-900 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black tracking-[0.4em] uppercase text-green-950">&copy; {new Date().getFullYear()} ANANYA SARKAR. MID-LEVEL_EXEC. HUB_VER_3.3</div>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-green-950">
            <a href="#" className="hover:text-green-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-green-500 transition-colors">GitHub</a>
            <a href="#" className="hover:text-green-500 transition-colors">TryHackMe</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;


import React from 'react';

export const CyberSecurityPath: React.FC = () => {
  return (
    <div className="p-8 rounded-3xl bg-black border-2 border-green-900 shadow-[0_0_30px_rgba(34,197,94,0.05)] overflow-hidden relative group hover:border-green-500 transition-all">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none text-green-500">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 2.18l7 3.89v4.93c0 4.14-2.89 8.02-7 9.1-4.11-1.08-7-4.96-7-9.1V8.07l7-3.89zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-bold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          SEC_PROTOCOL: ACTIVE_LEARNING
        </div>
        
        <h2 className="text-3xl font-black mb-4 text-green-500 uppercase tracking-tighter">Hardening the Stack</h2>
        <p className="text-green-800 mb-8 max-w-2xl leading-relaxed font-bold text-sm">
          While my roots are deep in Frontend development and design, I am currently scaling the walls of Cyber Security. 
          Focusing on the <strong>offensive security</strong> mindset to build <strong>defensive excellence</strong>. 
          Practicing daily on <strong>TryHackMe</strong>, understanding vulnerabilities before they occur in the code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-green-950/10 border border-green-900/50">
            <div className="text-green-500 font-mono text-xs mb-2">$ cat status.txt</div>
            <div className="text-green-700 text-[11px] font-bold">Actively completing the Junior Penetration Tester path. 70+ rooms cleared on TryHackMe.</div>
          </div>
          <div className="p-4 rounded-xl bg-green-950/10 border border-green-900/50">
            <div className="text-green-500 font-mono text-xs mb-2">$ ls tools/</div>
            <div className="text-green-700 text-[11px] font-bold">Nmap, Burp Suite, Metasploit, SQLmap, Wireshark, Gobuster.</div>
          </div>
          <div className="p-4 rounded-xl bg-green-950/10 border border-green-900/50">
            <div className="text-green-500 font-mono text-xs mb-2">$ ./mission.sh</div>
            <div className="text-green-700 text-[11px] font-bold">Merging high-end UI aesthetics with military-grade application security.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
